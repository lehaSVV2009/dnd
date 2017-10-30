package kadet.dnd.api.service

import kadet.dnd.api.model.Hero
import kadet.dnd.api.repository.HeroRepository
import kadet.dnd.api.repository.TalentRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class HeroService(val heroRepository: HeroRepository, val talentRepository: TalentRepository) {

    /**
     * Create new hero with all the characteristics and talents.
     * Id can be passed as a parameter.
     */
    @Transactional
    fun create(hero: Hero): Hero {
        if (hero.talents.isNotEmpty()) {
            hero.talents = HashSet(talentRepository.save(hero.talents))
        }
        return heroRepository.save(hero)
    }

    /**
     * Fetch single hero info with its talents.
     */
    fun findOne(heroId: String): Hero {
        return heroRepository.findOne(heroId)
    }

    /**
     * Partially update hero entity
     */
    fun patch(hero: Hero): Hero {
        throw NotImplementedError()
    }

    /**
     * Delete hero from db.
     */
    @Transactional
    fun delete(heroId: String) {
        heroRepository.delete(heroId)
    }
}