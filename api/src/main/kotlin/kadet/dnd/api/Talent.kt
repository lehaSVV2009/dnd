package kadet.dnd.api

class Talent {

    /**
     * By time limiting (limited per day)
     */
    val limitType: String? = null

    /**
     * Standard or small action
     */
    val actionType: String? = null

    /**
     * Name like 'Magic arrow'
     */
    val title: String? = null

    /**
     * Short description of talent
     */
    val description: String? = null

    /**
     * Required instruments or skills
     */
    val requirements: List<String> = listOf()

    /**
     * Description of how many enemies can be damaged
     */
    val goal: String? = null

    /**
     * Type and distance of talent attack
     */
    val distance: String? = null

    /**
     * Description of attempt to attack an enemy
     */
    val attack: String? = null

    /**
     * Description of damage if attack is successful
     */
    val hit: String? = null

    /**
     * Description of damage if attack is not successful
     */
    val miss: String? = null

    /**
     * Description of additional damage effect
     */
    val effect: String? = null

    /**
     * Description of not usual talent characteristic
     */
    val speciality: String? = null

    /**
     * Minimum hero level to get a talent
     */
    val level: Int = 1

    // TODO move outside talent - wrong model
    /**
     * Counts how many times hero used the talent
     */
    val used: Int = 0
}