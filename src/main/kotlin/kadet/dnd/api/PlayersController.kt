package kadet.dnd.api

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/players")
class PlayersController {

    @GetMapping
    fun fetchAll(): List<String> = listOf("Alex", "Pavel", "Ivan", "Katerina", "Eugen", "Sergei")
}