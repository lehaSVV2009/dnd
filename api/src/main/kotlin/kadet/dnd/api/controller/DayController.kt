package kadet.dnd.api.controller

import kadet.dnd.api.model.Day
import kadet.dnd.api.model.Scene
import kadet.dnd.api.service.DayService
import kadet.dnd.api.service.SceneService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/days")
class DayController(val dayService: DayService, val sceneService: SceneService) {

    @GetMapping
    fun fetchAllDays(): List<Day> {
        return dayService.findAll()
    }

    @GetMapping("/last")
    fun fetchLast(): Day {
        return dayService.findLast()
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    fun create(): Day {
        return dayService.startDay()
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{dayId}")
    fun delete(@PathVariable dayId: String) {
        dayService.delete(dayId)
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/{dayId}/scenes")
    fun createScene(@PathVariable dayId: String): Scene {
        return sceneService.startScene(dayId)
    }

    @GetMapping("/{dayId}/scenes/last")
    fun fetchLastScene(@PathVariable dayId: String): Scene? {
        return dayService.findLastScene(dayId)
    }
}
