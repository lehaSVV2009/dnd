package kadet.dnd.api

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
     * Уровень от 1 до ..
     */
    val level: Int? = 1

    /**
     * Опыт
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
    val languages: List<String> = listOf()
}