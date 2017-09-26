package kadet.dnd.api

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

/**
 * Auto generated /heroes CRUD endpoints
 * They are connected to 'heroes' DB table
 */
@RepositoryRestResource(collectionResourceRel = "heroes", path = "heroes")
interface HeroRepository : MongoRepository<Hero, String>