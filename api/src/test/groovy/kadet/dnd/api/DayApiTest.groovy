package kadet.dnd.api

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Shared
import spock.lang.Specification
import spock.lang.Stepwise

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
    def response = readLastDayRequest(mvc)

    then:
    response.status == 200
    def json = parseJson(response.contentAsByteArray)
    with(json) {
      id == this.dayId
    }
  }

  def 'should add scene to day'() {
    when:
    def response = createDaySceneRequest(mvc, dayId)

    then:
    response.status == 201
    with(parseJson(response.contentAsByteArray)) {
      id
      finished == false
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

  static def readLastDayRequest(MockMvc mvc) {
    response mvc.perform(get('/days/last'))
  }

  static def deleteDayRequest(MockMvc mvc, String id) {
    response mvc.perform(delete("/days/${id}"))
  }

  static def createDaySceneRequest(MockMvc mvc, String id) {
    response mvc.perform(post("/days/${id}/scenes"))
  }
}
