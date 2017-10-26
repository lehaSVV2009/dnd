package kadet.dnd.api

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

import java.util.HashSet

@RestController
@RequestMapping("/heroes")
class HeroController(
        val heroRepository: HeroRepository,
        val talentRepository: TalentRepository) {

    /**
     * Override spring-rest POST method to support creating hero with talents
     */
    @CrossOrigin
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    fun create(@RequestBody hero: Hero): Hero {
        if (hero.talents.isNotEmpty()) {
            hero.talents = HashSet(talentRepository.save(hero.talents))
        }
        return heroRepository.save(hero)
    }
}
