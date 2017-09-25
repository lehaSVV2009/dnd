package kadet.dnd.api

import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

/**
 * Auto generated /players CRUD endpoints.
 * They are connected to 'players' DB table.
 */
@RepositoryRestResource(collectionResourceRel = "players", path = "players")
interface PlayerRepository : PagingAndSortingRepository<Player, String>