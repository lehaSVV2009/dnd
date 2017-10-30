package kadet.dnd.api.repository

import kadet.dnd.api.model.Day
import org.springframework.data.mongodb.repository.MongoRepository

interface DayRepository : MongoRepository<Day, String>