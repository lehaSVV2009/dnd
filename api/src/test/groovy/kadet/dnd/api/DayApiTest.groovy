package kadet.dnd.api

import groovy.json.JsonBuilder
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Shared
import spock.lang.Specification
import spock.lang.Stepwise

import static kadet.dnd.api.SceneApiTest.createScene
import static kadet.dnd.api.TestUtils.parseJson
import static kadet.dnd.api.TestUtils.response
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*

@AutoConfigureMockMvc
@SpringBootTest
@Stepwise
class DayApiTest extends Specification {

  @Autowired
  MockMvc mvc

  @Shared
  String dayId

  def 'should create day'() {
    when:
    def response = createDayRequest(mvc)

    then:
    response.status == 201
    def json = parseJson(response.contentAsByteArray)
    with(json) {
      id
      counter >= 1
    }

    cleanup:
    if (json && json.id) {
      dayId = json.id
    }
  }

  def 'should read last day'() {
    when:
    def response = readLastDay(mvc)

    then:
    response.status == 200
    def json = parseJson(response.contentAsByteArray)
    with(json) {
      id == this.dayId
    }
  }

  def 'should add scene to day'() {
    given:
    def newScene = createScene(mvc, [:])

    when:
    patchDayRequest(mvc, dayId, [scenes: [newScene._links.self.href]])
    def response = readDayScenes(mvc, dayId)

    then:
    response.status == 200
    def json = parseJson(response.contentAsByteArray)
    with(json) {
      _embedded.scenes[0].id == newScene.id
    }
  }

  def 'should delete day'() {
    when:
    def response = deleteDayRequest(mvc, dayId)

    then:
    response.status == 204
  }

  static def createDayRequest(MockMvc mvc) {
    response mvc.perform(post('/days'))
  }

  static def readLastDay(MockMvc mvc) {
    response mvc.perform(get('/days/last'))
  }

  static def patchDayRequest(MockMvc mvc, String id, def day) {
    String json = new JsonBuilder(day)
    response mvc.perform(patch("/days/${id}").content(json))
  }

  static def deleteDayRequest(MockMvc mvc, String id) {
    response mvc.perform(delete("/days/${id}"))
  }

  static def readDayScenes(MockMvc mvc, String id) {
    response mvc.perform(get("/days/${id}/scenes"))
  }
}
