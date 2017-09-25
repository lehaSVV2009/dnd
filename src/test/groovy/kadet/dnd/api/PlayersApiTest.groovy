package kadet.dnd.api

import groovy.json.JsonBuilder
import groovy.json.JsonSlurper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.ResultActions
import spock.lang.Specification

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put

@SpringBootTest
@AutoConfigureMockMvc
class PlayersApiTest extends Specification {

  public static final String ID = '1'

  @Autowired
  MockMvc mvc

  def 'should CRUD player'() {
    when:
    def responses = [
        'create': createPlayer(
            [id: ID, name: 'Alex', description: 'My hero is here']
        ),
        'read'  : readPlayer(ID),
        'update': updatePlayer(ID,
            [name: 'Alexey']
        ),
        'patch' : partiallyUpdatePlayer(ID,
            [description: 'My hero is still here']
        ),
        'delete': deletePlayer(ID)
    ]

    then:
    with(responses['create']) {
      status == 201
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.name == 'Alex'
      json.description == 'My hero is here'
    }

    with(responses['read']) {
      status == 200
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.name == 'Alex'
      json.description == 'My hero is here'
    }

    with(responses['update']) {
      status == 200
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.name == 'Alexey'
      json.description == null
    }

    with(responses['patch']) {
      status == 200
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.name == 'Alexey'
      json.description == 'My hero is still here'
    }

    with(responses['delete']) {
      status == 204
      contentAsString == ''
    }
  }

  private def createPlayer(def player) {
    String json = new JsonBuilder(player)
    response(mvc.perform(post('/players').content(json)))
  }

  private def readPlayer(String id) {
    response mvc.perform(get("/players/${id}"))
  }

  private def updatePlayer(String id, def player) {
    String json = new JsonBuilder(player)
    response mvc.perform(put("/players/${id}").content(json))
  }

  private def partiallyUpdatePlayer(String id, def partialPlayer) {
    String json = new JsonBuilder(partialPlayer)
    response mvc.perform(patch("/players/${id}").content(json))
  }

  private def deletePlayer(String id) {
    response mvc.perform(delete("/players/${id}"))
  }

  def response(ResultActions resultActions) {
    resultActions.andReturn().response
  }

  def parseJson(byte[] content) {
    new JsonSlurper().parse(content)
  }
}
