package kadet.dnd.api

import org.springframework.data.rest.webmvc.ResourceNotFoundException
import org.springframework.stereotype.Service

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

    fun makeMove(sceneId: String, heroId: String?, talentId: String?): Turn {
        val scene = sceneRepository.findOne(sceneId) ?: throw ResourceNotFoundException("Scene not found [id: $sceneId]")
        val hero = heroRepository.findOne(heroId) ?: throw ResourceNotFoundException("Hero not found [id: $heroId]")
        val talent = talentRepository.findOne(talentId) ?: throw ResourceNotFoundException("Talent not found [id: $talentId]")
        var turn = Turn()
        turn.action = talent
        turn.owner = hero
        turn = turnRepository.save(turn)
        scene.turns.add(turn)
        sceneRepository.save(scene)
        return turn
    }

    fun findAvailableTalents(sceneId: String, heroId: String): Set<Talent> {
        val scene = sceneRepository.findOne(sceneId) ?: throw ResourceNotFoundException("Scene not found [id: $sceneId]")
        val hero = heroRepository.findOne(heroId) ?: throw ResourceNotFoundException("Hero not found [id: $heroId]")

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
                .filter { it.scenes.map { it.id }.contains(scene.id) }
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
