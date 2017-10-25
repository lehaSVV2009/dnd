package kadet.dnd.api

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef

class Scene {

    @Id
    val id: String? = null

    @DBRef
    val turns : List<Turn>  = listOf()

}