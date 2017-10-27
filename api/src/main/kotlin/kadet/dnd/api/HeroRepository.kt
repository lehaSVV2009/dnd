package kadet.dnd.api

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "heroes", excerptProjection = HeroProjection::class, path = "heroes")
interface HeroRepository : MongoRepository<Hero, String>