package kadet.dnd.api

import org.springframework.data.rest.webmvc.ResourceNotFoundException
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/scenes")
class SceneController(val sceneRepository: SceneRepository) {

    @CrossOrigin
    @PostMapping("/{sceneId}/stop")
    fun stopScene(@PathVariable sceneId: String): Scene {
        val scene = sceneRepository.findOne(sceneId) ?: throw ResourceNotFoundException("Scene not found $sceneId")
        scene.finished = true
        return sceneRepository.save(scene)
    }
}
