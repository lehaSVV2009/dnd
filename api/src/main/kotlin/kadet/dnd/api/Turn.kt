package kadet.dnd.api

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef

/**
 * Current step (action) of hero
 */
class Turn {

    @Id
    val id: String? = null

    /**
     * Who used the talent
     */
    @DBRef
    var owner: Hero? = null

    /**
     * Used talent
     */
    @DBRef
    var action: Talent? = null
}