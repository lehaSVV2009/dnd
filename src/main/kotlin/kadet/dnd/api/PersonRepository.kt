package kadet.dnd.api

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

/**
 * Auto generated /persons CRUD endpoints
 * They are connected to 'persons' DB table
 */
@RepositoryRestResource(collectionResourceRel = "persons", path = "persons")
interface PersonRepository : MongoRepository<Person, String>