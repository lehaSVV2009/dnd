package kadet.dnd.api.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef

class Day(val counter : Int = 1) {

    @Id
    val id: String? = null

    @DBRef
    val scenes : MutableList<Scene>  = mutableListOf()

}