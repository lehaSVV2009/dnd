package kadet.dnd.api

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef

/**
 * Simple hero metadata
 */
class Hero {

    /**
     * Unique Hero id like '123'
     */
    @Id
    val id: String? = null

    /**
     * Main info
     */
    val profile: Profile? = null

    /**
     * Current state
     */
    val condition: Condition? = null

    /**
     * Armor class, will etc.
     */
    val protections: Protections? = null

    /**
     * Speed, initiative etc.
     */
    val characteristics: Characteristics? = null

    /**
     * Acrobatics, athletics etc.
     */
    val skills: Skills? = null

    /**
     * Talents of a hero
     */
    @DBRef
    var talents: Set<Talent> = setOf()
}