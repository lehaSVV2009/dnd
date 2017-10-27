package kadet.dnd.api

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "talents", excerptProjection = TalentProjection::class, path = "talents")
interface TalentRepository : MongoRepository<Talent, String>