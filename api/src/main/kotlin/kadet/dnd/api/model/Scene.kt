package kadet.dnd.api.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef

class Scene(var finished: Boolean = false) {

    @Id
    val id: String? = null

    @DBRef
    var turns : MutableList<Turn>  = mutableListOf()

}