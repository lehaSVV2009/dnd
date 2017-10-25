package kadet.dnd.api

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef

class Day {

    @Id
    val id: String? = null

    /**
     * Day 1
     */
    val name: String? = null

    @DBRef
    val scenes : List<Scene>  = listOf()

}