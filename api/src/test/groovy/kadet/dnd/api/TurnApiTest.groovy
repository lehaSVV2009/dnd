package kadet.dnd.api

import groovy.json.JsonBuilder
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Shared
import spock.lang.Specification
import spock.lang.Stepwise

import static kadet.dnd.api.HeroApiTest.createHero
import static kadet.dnd.api.TalentApiTest.createTalent
import static kadet.dnd.api.TestUtils.parseJson
import static kadet.dnd.api.TestUtils.response
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*

@AutoConfigureMockMvc
@SpringBootTest
@Stepwise
class TurnApiTest extends Specification {

  @Autowired
  MockMvc mvc

  @Shared
  String turnId

  def 'should create turn'() {
    given:
    def newTalent = createTalent(mvc, [
        title: 'New talent'
    ])

    def newHero = createHero(mvc, [
        profile: [
            name: 'Фей'
        ]
    ])

    def turn = [
        owner : "/heroes/${newHero.id}",
        action: newTalent._links.self.href,
    ]

    when:
    def response = createTurnRequest(mvc, turn)

    then:
    response.status == 201
    def json = parseJson(response.contentAsByteArray)
    json.id

    cleanup:
    if (json && json.id) {
      turnId = json.id
    }
  }

  def 'should read turn owner'() {
    when:
    def response = readTurnOwnerRequest(mvc, turnId)

    then:
    response.status == 200
    def json = parseJson(response.contentAsByteArray)
    with(json) {
      profile.name == 'Фей'
    }
  }

  def 'should read turn action'() {
    when:
    def response = readTurnActionRequest(mvc, turnId)

    then:
    response.status == 200
    def json = parseJson(response.contentAsByteArray)
    with(json) {
      title == 'New talent'
    }
  }

  def 'should delete turn'() {
    when:
    def response = deleteTurnRequest(mvc, turnId)

    then:
    response.status == 204
  }

  static def createTurn(MockMvc mvc, def turn) {
    def response = createTurnRequest(mvc, turn)
    parseJson response.contentAsByteArray
  }

  static def createTurnRequest(MockMvc mvc, def turn) {
    String json = new JsonBuilder(turn)
    response mvc.perform(post('/turns').content(json))
  }

  static def deleteTurnRequest(MockMvc mvc, String id) {
    response mvc.perform(delete("/turns/${id}"))
  }

  static def readTurnOwnerRequest(MockMvc mvc, String id) {
    response mvc.perform(get("/turns/${id}/owner"))
  }

  static def readTurnActionRequest(MockMvc mvc, String id) {
    response mvc.perform(get("/turns/${id}/action"))
  }
}
