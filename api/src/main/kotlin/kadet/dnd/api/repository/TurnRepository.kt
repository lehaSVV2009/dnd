package kadet.dnd.api.repository

import kadet.dnd.api.model.Turn
import org.springframework.data.mongodb.repository.MongoRepository

interface TurnRepository : MongoRepository<Turn, String>