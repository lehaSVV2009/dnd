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
class HeroApiTest extends Specification {

  public static final String ID = '999999'

  @Autowired
  MockMvc mvc

  def 'should CRUD Hero'() {
    when:
    def responses = [
        'create': createHero(
            [
                id         : ID,
                profile: [
                    name       : 'Фея',
                    description: 'Персонаж Леши',
                    level      : 5,
                    category   : 'Волшебник',
                    race       : 'Эладрин',
                    experience : 5500,
                    languages  : [
                        'Общий', 'Эльфийский'
                    ]
                ]
            ]
        ),
        'read'  : readHero(ID),
        'update': updateHero(ID,
            [profile: [ name: 'Фей']]
        ),
        'patch' : partiallyUpdateHero(ID,
            [profile: [ description: 'Персонаж Леши']]
        ),
        'delete': deleteHero(ID)
    ]

    then:
    with(responses['create']) {
      status == 201
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.profile.name == 'Фея'
      json.profile.description == 'Персонаж Леши'
      json.profile.level == 5
      json.profile.category == 'Волшебник'
      json.profile.race == 'Эладрин'
      json.profile.experience == 5500
      json.profile.languages == ['Общий', 'Эльфийский']
    }

    with(responses['read']) {
      status == 200
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.profile.name == 'Фея'
      json.profile.description == 'Персонаж Леши'
      json.profile.level == 5
      json.profile.category == 'Волшебник'
      json.profile.race == 'Эладрин'
      json.profile.experience == 5500
      json.profile.languages == ['Общий', 'Эльфийский']
    }

    with(responses['update']) {
      status == 200
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.profile.name == 'Фей'
      json.profile.description == null
      json.profile.level == 1
      json.profile.languages == []
    }

    with(responses['patch']) {
      status == 200
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.profile.name == 'Фей'
      json.profile.description == 'Персонаж Леши'
    }

    with(responses['delete']) {
      status == 204
      contentAsString == ''
    }
  }

  private def createHero(def Hero) {
    String json = new JsonBuilder(Hero)
    response(mvc.perform(post('/heroes').content(json)))
  }

  private def readHero(String id) {
    response mvc.perform(get("/heroes/${id}"))
  }

  private def updateHero(String id, def Hero) {
    String json = new JsonBuilder(Hero)
    response mvc.perform(put("/heroes/${id}").content(json))
  }

  private def partiallyUpdateHero(String id, def partialHero) {
    String json = new JsonBuilder(partialHero)
    response mvc.perform(patch("/heroes/${id}").content(json))
  }

  private def deleteHero(String id) {
    response mvc.perform(delete("/heroes/${id}"))
  }

  def response(ResultActions resultActions) {
    resultActions.andReturn().response
  }

  def parseJson(byte[] content) {
    new JsonSlurper().parse(content)
  }
}
