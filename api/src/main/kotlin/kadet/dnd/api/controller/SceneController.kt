package kadet.dnd.api.controller

import kadet.dnd.api.model.Scene
import kadet.dnd.api.model.Talent
import kadet.dnd.api.model.Turn
import kadet.dnd.api.repository.SceneRepository
import kadet.dnd.api.service.SceneService
import org.springframework.data.rest.webmvc.ResourceNotFoundException
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

// TODO move transactional logic to services
@RestController
@RequestMapping("/scenes")
class SceneController(val sceneService: SceneService) {

    @PostMapping("/{sceneId}/stop")
    fun stopScene(@PathVariable sceneId: String): Scene {
        return sceneService.stopScene(sceneId)
    }

    @PostMapping("/{sceneId}/turns")
    fun makeMove(@PathVariable sceneId: String, @RequestBody turn: Turn): Turn {
        return sceneService.makeMove(sceneId, turn)
    }

    @GetMapping("/{sceneId}/heroes/{heroId}/availableTalents")
    fun findAvailableTalents(@PathVariable sceneId: String, @PathVariable heroId: String) : Set<Talent> {
        return sceneService.findAvailableTalents(sceneId, heroId)
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{sceneId}")
    fun delete(@PathVariable sceneId: String) {
        sceneService.delete(sceneId)
    }
}
