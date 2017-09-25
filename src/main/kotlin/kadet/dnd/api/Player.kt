package kadet.dnd.api

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

/**
 * Simple player metadata.
 */
@Entity
class Player {

    /**
     * Unique player id like '1'.
     */
    @Id
    @GeneratedValue
    val id: String? = null

    /**
     * Display name like 'Harry Potter'.
     * No limit.
     */
    val name: String? = null

    /**
     * Player notes.
     * No limit.
     */
    val description: String? = null
}