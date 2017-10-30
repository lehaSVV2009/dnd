package kadet.dnd.api.model

import java.math.BigDecimal

class Condition {

    /**
     * Хиты
     */
    val maxHitPoints: Int = 0

    /**
     * Текущее количество хитов
     */
    val currentHitPoints: Int = 0

    /**
     * Исцеления
     */
    val healings: Int = 0

    /**
     * Исцеления в день
     */
    val healingsPerDay: Int = 0

    /**
     * Величина исцеления
     */
    val healingValue: Int = 0

    /**
     * Неудачные спасброски от смерти
     */
    val deathSaveFailures: Int = 0

    /**
     * Количество золотых. (123.12 - 123 золотых, 12 серебрянных).
     */
    val money: BigDecimal = BigDecimal.valueOf(0)
}
