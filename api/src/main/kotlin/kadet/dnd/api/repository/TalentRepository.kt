package kadet.dnd.api.repository

import kadet.dnd.api.model.Talent
import org.springframework.data.mongodb.repository.MongoRepository

interface TalentRepository : MongoRepository<Talent, String>