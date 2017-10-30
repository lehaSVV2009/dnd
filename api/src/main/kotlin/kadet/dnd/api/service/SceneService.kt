package kadet.dnd.api.service

import kadet.dnd.api.model.Hero
import kadet.dnd.api.model.Scene
import kadet.dnd.api.model.Talent
import kadet.dnd.api.model.Turn
import kadet.dnd.api.repository.DayRepository
import kadet.dnd.api.repository.HeroRepository
import kadet.dnd.api.repository.SceneRepository
import kadet.dnd.api.repository.TalentRepository
import kadet.dnd.api.repository.TurnRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

fun isAvailableTalent(talent: Talent?, usedInScene: Set<String?>, usedInDay: Set<String?>): Boolean {
    return talent?.limitType == "Неограниченный"
            || (talent?.limitType == "На сцену" && !usedInScene.contains(talent.id))
            || (talent?.limitType == "На день" && !usedInDay.contains(talent.id))
}

@Service
class SceneService(val sceneRepository: SceneRepository,
                   val turnRepository: TurnRepository,
                   val talentRepository: TalentRepository,
                   val heroRepository: HeroRepository,
                   val dayRepository: DayRepository) {

    /**
     * Start scene within a day.
     */
    @Transactional
    fun startScene(dayId: String): Scene {
        val day = dayRepository.findOne(dayId)
        val scene = sceneRepository.save(Scene())
        day.scenes.add(scene)
        dayRepository.save(day)
        return scene
    }

    /**
     * Stop scene within a day.
     */
    @Transactional
    fun stopScene(sceneId: String): Scene {
        val scene = sceneRepository.findOne(sceneId)
        scene.finished = true
        return sceneRepository.save(scene)
    }

    /**
     * Add new turn to scene. (Turn is an action of hero).
     */
    @Transactional
    fun makeMove(sceneId: String, turn: Turn?): Turn {
        val scene = sceneRepository.findOne(sceneId)
        val hero = heroRepository.findOne(turn?.owner?.id)
        val talent = talentRepository.findOne(turn?.action?.id)
        var newTurn = Turn()
        newTurn.action = talent
        newTurn.owner = hero
        newTurn = turnRepository.save(newTurn)
        scene.turns.add(newTurn)
        sceneRepository.save(scene)
        return newTurn
    }

    /**
     * Delete scene from db.
     */
    @Transactional
    fun delete(sceneId: String) {
        sceneRepository.delete(sceneId)
    }

    /**
     * Fetch all talents that are still available in scene.
     * All day and scene talents that already used by hero can not be in list.
     */
    fun findAvailableTalents(sceneId: String, heroId: String): Set<Talent> {
        val scene = sceneRepository.findOne(sceneId)
        val hero = heroRepository.findOne(heroId)

        return filterAvailableTalents(hero.talents, hero, scene)
    }

    fun filterAvailableTalents(talents: Set<Talent>, hero: Hero, scene: Scene): Set<Talent> {
        // TODO add custom query
        val usedInScene = scene.turns
                .filter { it.owner?.id == hero.id }
                .map { it.action }
                .filter { it?.limitType == "На сцену" }
                .map { it?.id }
                .toSet()
        // TODO add custom query
        val usedInDay = dayRepository.findAll()
                .filter {
                    it.scenes.map {
                        it.id
                    }.contains(scene.id)
                }
                .flatMap { it.scenes }
                .flatMap { it.turns }
                .filter { it.owner?.id == hero.id }
                .map { it.action }
                .filter { it?.limitType == "На день" }
                .map { it?.id }
                .toSet()

        return talents
                .filter { isAvailableTalent(it, usedInScene, usedInDay) }
                .toSet()
    }
}
