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
     * Класс
     */
    // TODO move to enums
    val category: String? = null

    /**
     * Раса
     */
    // TODO move to enums
    val race: String? = null

    /**
     * Известные языки
     */
    val languages: Set<String> = setOf()
}