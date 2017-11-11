package kadet.dnd.api.model

class Profile {

    /**
     * Display name like 'Frode' or 'Alex'
     */
    val name: String? = null

    /**
     * Hero notes
     */
    val description: String? = null

    /**
     * Link to avatar
     */
    val avatar: String? = null

    /**
     * Link to large descriptive image
     */
    val image: String? = null

    /**
     * From 0 to ....
     * Level is calculated from experience
     */
    val experience: Int = 0

    /**
     * Wizard/warrior/...
     */
    // TODO move to enums
    val category: String? = null

    /**
     * Elf/dwarf/...
     */
    // TODO move to enums
    val race: String? = null

    /**
     * Known languages
     */
    val languages: Set<String> = setOf()

    val additionalNotes: String? = null
}