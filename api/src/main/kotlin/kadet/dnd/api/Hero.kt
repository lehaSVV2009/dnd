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
     * Основная информация
     */
    val profile: Profile? = null

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

    /**
     * Таланты
     */
    val talents: List<Talent> = listOf()
}