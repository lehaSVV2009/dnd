package kadet.dnd.api.repository

import kadet.dnd.api.model.Scene
import org.springframework.data.mongodb.repository.MongoRepository

interface SceneRepository : MongoRepository<Scene, String>