package kadet.dnd.api.controller

import kadet.dnd.api.model.Hero
import kadet.dnd.api.service.HeroService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/heroes")
class HeroController(val heroService: HeroService) {

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    fun create(@RequestBody hero: Hero): Hero {
        return heroService.save(hero)
    }

    @GetMapping
    fun findAll(): List<Hero> {
        return heroService.findAll()
    }

    @GetMapping("/{heroId}")
    fun findOne(@PathVariable heroId: String): Hero {
        return heroService.findOne(heroId)
    }

    @PutMapping("/{heroId}")
    fun update(@RequestBody hero: Hero): Hero {
        return heroService.save(hero)
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{heroId}")
    fun delete(@PathVariable heroId: String) {
        heroService.delete(heroId)
    }
}
