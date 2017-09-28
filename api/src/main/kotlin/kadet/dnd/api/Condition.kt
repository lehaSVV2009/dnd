package kadet.dnd.api

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
}
