package kadet.dnd.api

import org.springframework.data.rest.webmvc.ResourceNotFoundException
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

// TODO move transactional logic to services
@RestController
@RequestMapping("/scenes")
class SceneController(val sceneRepository: SceneRepository,
                      val sceneService: SceneService) {

    @CrossOrigin
    @PostMapping("/{sceneId}/stop")
    fun stopScene(@PathVariable sceneId: String): Scene {
        val scene = sceneRepository.findOne(sceneId) ?: throw ResourceNotFoundException("Scene not found [id: $sceneId]")
        scene.finished = true
        return sceneRepository.save(scene)
    }

    @CrossOrigin
    @PostMapping("/{sceneId}/turns")
    fun makeMove(@PathVariable sceneId: String, @RequestBody turn: Turn): Turn {
        return sceneService.makeMove(sceneId, turn.owner?.id, turn.action?.id)
    }

    @CrossOrigin
    @GetMapping("/{sceneId}/heroes/{heroId}/availableTalents")
    fun findAvailableTalents(@PathVariable sceneId: String, @PathVariable heroId: String) : Set<Talent> {
        return sceneService.findAvailableTalents(sceneId, heroId)
    }
}
