package kadet.dnd.api

import groovy.json.JsonBuilder
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Shared
import spock.lang.Specification
import spock.lang.Stepwise

import static kadet.dnd.api.TestUtils.parseJson
import static kadet.dnd.api.TestUtils.response
import static kadet.dnd.api.TurnApiTest.createTurn
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post

@AutoConfigureMockMvc
@SpringBootTest
@Stepwise
class SceneApiTest extends Specification {

  @Autowired
  MockMvc mvc

  @Shared
  String sceneId

  def 'should create scene'() {
    given:
    def scene = [:]

    when:
    def response = createSceneRequest(mvc, scene)

    then:
    response.status == 201
    def json = parseJson(response.contentAsByteArray)
    with(json) {
      id
    }

    cleanup:
    if (json && json.id) {
      sceneId = json.id
    }
  }

  def 'should add turn to scene'() {
    given:
    def newTurn = createTurn(mvc, [:])

    when:
    patchSceneRequest(mvc, sceneId, [turns: [newTurn._links.self.href]])
    def response = readSceneTurns(mvc, sceneId)

    then:
    response.status == 200
    def json = parseJson(response.contentAsByteArray)
    with(json) {
      _embedded.turns[0].id == newTurn.id
    }
  }

  def 'should delete scene'() {
    when:
    def response = deleteSceneRequest(mvc, sceneId)

    then:
    response.status == 204
  }

  static def createScene(MockMvc mvc, def scene) {
    def response = createSceneRequest(mvc, scene)
    parseJson response.contentAsByteArray
  }

  static def createSceneRequest(MockMvc mvc, def scene) {
    String json = new JsonBuilder(scene)
    response mvc.perform(post('/scenes').content(json))
  }

  static def patchSceneRequest(MockMvc mvc, String id, def scene) {
    String json = new JsonBuilder(scene)
    response mvc.perform(patch("/scenes/${id}").content(json))
  }

  static def deleteSceneRequest(MockMvc mvc, String id) {
    response mvc.perform(delete("/scenes/${id}"))
  }

  static def readSceneTurns(MockMvc mvc, String id) {
    response mvc.perform(get("/scenes/${id}/turns"))
  }
}
