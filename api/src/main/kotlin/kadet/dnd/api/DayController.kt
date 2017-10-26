package kadet.dnd.api

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/days")
class DayController(val dayRepository: DayRepository) {

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
}
