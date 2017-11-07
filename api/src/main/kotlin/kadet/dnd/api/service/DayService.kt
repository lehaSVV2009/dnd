package kadet.dnd.api.service

import kadet.dnd.api.model.Day
import kadet.dnd.api.model.Scene
import kadet.dnd.api.repository.DayRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class DayService(val dayRepository: DayRepository) {

    /**
     * Start new day. New day is the last day.
     */
    @Transactional
    fun startDay(): Day {
        val days = dayRepository.findAll()
        val day = Day(if (days.isEmpty()) 1 else days.last().counter + 1)
        return dayRepository.save(day)
    }

    /**
     * Fetch all existing in db days.
     */
    fun findAll(): List<Day> {
        return dayRepository.findAll()
    }

    /**
     * Fetch last day from db, e.g. Day 25. (Last in array).
     */
    fun findLast(): Day {
        return findAll().last()
    }

    /**
     * Delete day entity from db.
     */
    @Transactional
    fun delete(dayId: String) {
        dayRepository.delete(dayId)
        // TODO not sure if I need to delete scenes as well
    }

    /**
     * Fetch all scenes in day.
     */
    fun findAllScenes(dayId: String): List<Scene> {
        return dayRepository.findOne(dayId).scenes
    }

    /**
     * Fetch last scene in day. (Last in array)
     */
    fun findLastScene(dayId: String): Scene? {
        val scenes = findAllScenes(dayId)
        return if (scenes.isEmpty()) null else scenes.last()
    }
}