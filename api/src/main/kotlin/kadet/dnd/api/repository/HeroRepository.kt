package kadet.dnd.api.repository

import kadet.dnd.api.model.Hero
import org.springframework.data.mongodb.repository.MongoRepository

interface HeroRepository : MongoRepository<Hero, String>