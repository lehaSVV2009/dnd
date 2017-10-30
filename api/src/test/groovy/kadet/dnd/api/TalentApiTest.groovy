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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post

@AutoConfigureMockMvc
@SpringBootTest
@Stepwise
class TalentApiTest extends Specification {

  @Autowired
  MockMvc mvc

  @Shared
  String talentId

  def 'create talent'() {
    given:
    def talent = [
        title       : 'Магическая стрела',
        description : 'Вы запускаете во врага серебристый разряд силового поля.',
        limit_type  : 'Неограниченный',
        action_type : 'Стандартное действие',
        requirements: ['Инструмент', 'Магический', 'Силовое поле'],
    ]

    when:
    def response = createTalentRequest(mvc, talent)

    then:
    response.status == 201
    def json = parseJson(response.contentAsByteArray)
    with(json) {
      id
      title == 'Магическая стрела'
      description == 'Вы запускаете во врага серебристый разряд силового поля.'
      limit_type == 'Неограниченный'
      action_type == 'Стандартное действие'
      requirements.contains 'Инструмент'
      requirements.contains 'Магический'
      requirements.contains 'Силовое поле'
    }

    cleanup:
    if (json && json.id) {
      talentId = json.id
    }
  }

  def 'patch talent'() {
    given:
    def talent = [
        description : 'Тадам!',
    ]

    when:
    def response = patchTalentRequest(mvc, talentId, talent)

    then:
    response.status == 200
    def json = parseJson(response.contentAsByteArray)
    with(json) {
      id
      title == 'Магическая стрела'
      description == 'Тадам!'
    }
  }

  def 'delete talent'() {
    when:
    def response = deleteTalentRequest(mvc, talentId)

    then:
    response.status == 204
  }

  static def createTalent(MockMvc mvc, def talent) {
    def response = createTalentRequest(mvc, talent)
    parseJson response.contentAsByteArray
  }

  static def createTalentRequest(MockMvc mvc, def talent) {
    String json = new JsonBuilder(talent)
    response mvc.perform(post('/talents').content(json))
  }

  static def patchTalentRequest(MockMvc mvc, String id, def partialTalent) {
    String json = new JsonBuilder(partialTalent)
    response mvc.perform(patch("/talents/${id}").content(json))
  }

  static def deleteTalentRequest(MockMvc mvc, String id) {
    response mvc.perform(delete("/talents/${id}"))
  }
}
