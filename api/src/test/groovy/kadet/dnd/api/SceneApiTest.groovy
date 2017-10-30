package kadet.dnd.api

import groovy.json.JsonBuilder
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Shared
import spock.lang.Specification
import spock.lang.Stepwise

import static kadet.dnd.api.DayApiTest.createDayRequest
import static kadet.dnd.api.DayApiTest.createDayScene
import static kadet.dnd.api.DayApiTest.createDaySceneRequest
import static kadet.dnd.api.HeroApiTest.createHero
import static kadet.dnd.api.TestUtils.parseJson
import static kadet.dnd.api.TestUtils.response
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post

@AutoConfigureMockMvc
@SpringBootTest
@Stepwise
class SceneApiTest extends Specification {

  @Autowired
  MockMvc mvc

  @Shared
  String sceneId
  @Shared
  String heroId

  def 'should create scene'() {
    when:
    def response = createScene(mvc)

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
    def hero = createHero(mvc, [
        talents  : [
            [limit_type: 'Неограниченный'],
            [limit_type: 'На сцену'],
            [limit_type: 'На день'],
        ]
    ])
    def talent = hero.talents[1]
    def turn = [
        owner: hero,
        action: talent
    ]

    when:
    def response = createSceneTurn(mvc, sceneId, turn)

    then:
    response.status == 200
    with(parseJson(response.contentAsByteArray)) {
      id
      it.owner.id == hero.id
      it.action.id == talent.id
    }

    cleanup:
    if (hero && hero.id) {
      heroId = hero.id
    }
  }

  def 'should read available talents after new turn'() {
    when:
    def response = readAvailableTalents(mvc, sceneId, heroId)

    then:
    response.status == 200
    with(parseJson(response.contentAsByteArray)) {
      it.size() == 2
    }
  }

  def 'should delete scene'() {
    when:
    def response = deleteSceneRequest(mvc, sceneId)

    then:
    response.status == 204
  }

  static def createScene(MockMvc mvc) {
    def dayJson = parseJson(createDayRequest(mvc).contentAsByteArray)
    createDaySceneRequest(mvc, dayJson.id as String)
  }

  static def deleteSceneRequest(MockMvc mvc, String id) {
    response mvc.perform(delete("/scenes/${id}"))
  }

  static def readAvailableTalents(MockMvc mvc, String id, String heroId) {
    response mvc.perform(get("/scenes/${id}/heroes/${heroId}/availableTalents"))
  }

  static def createSceneTurn(MockMvc mvc, String id, def turn) {
    String json = new JsonBuilder(turn)
    response mvc.perform(post("/scenes/${id}/turns").content(json))
  }
}
