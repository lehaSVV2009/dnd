package kadet.dnd.api

import org.springframework.data.annotation.Id

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
     * Display name like 'Frode'
     */
    val name: String? = null

    /**
     * Hero notes
     */
    val description: String? = null

    /**
     * Уровень от 1 до ..
     */
    // TODO no need to store level if experience is stored
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

    /**
     * Состояние
     */
    val condition: Condition? = null

    /**
     * Защиты
     */
    val protections: Protections? = null

    /**
     * Характеристики
     */
    val characteristics: Characteristics? = null

    /**
     * Навыки
     */
    val skills: Skills? = null
}