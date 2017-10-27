package kadet.dnd.api

import org.springframework.data.rest.webmvc.ResourceNotFoundException
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/days")
class DayController(
        val dayRepository: DayRepository,
        val sceneRepository: SceneRepository) {

    /**
     * Fetch last day, e.g. Day 25
     */
    @CrossOrigin
    @GetMapping("/last")
    fun fetchLast(): Day {
        return dayRepository.findAll().last()
    }

    /**
     * Override spring-rest POST method to support creating hero with talents
     */
    @CrossOrigin
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    fun create(): Day {
        val days = dayRepository.findAll()
        val day = Day(if (days.isEmpty()) 1 else days.last().counter + 1)
        return dayRepository.save(day)
    }

    @CrossOrigin
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/{dayId}/scenes")
    fun createScene(@PathVariable dayId: String): Scene {
        val day = dayRepository.findOne(dayId) ?: throw ResourceNotFoundException()
        val scene = sceneRepository.save(Scene())
        day.scenes.add(scene)
        dayRepository.save(day)
        return scene
    }

    @CrossOrigin
    @GetMapping("/{dayId}/scenes/last")
    fun fetchLastScene(@PathVariable dayId: String): Scene? {
        val day = dayRepository.findOne(dayId) ?: throw ResourceNotFoundException()
        return if (day.scenes.isEmpty()) null else day.scenes.last()
    }

}
