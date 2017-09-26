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
        ),
        'read'  : readHero(ID),
        'update': updateHero(ID,
            [name: 'Фей']
        ),
        'patch' : partiallyUpdateHero(ID,
            [description: 'Персонаж Леши']
        ),
        'delete': deleteHero(ID)
    ]

    then:
    with(responses['create']) {
      status == 201
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.name == 'Фея'
      json.description == 'Персонаж Леши'
      json.level == 5
      json.category == 'Волшебник'
      json.race == 'Эладрин'
      json.experience == 5500
      json.languages == ['Общий', 'Эльфийский']
    }

    with(responses['read']) {
      status == 200
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.name == 'Фея'
      json.description == 'Персонаж Леши'
      json.level == 5
      json.category == 'Волшебник'
      json.race == 'Эладрин'
      json.experience == 5500
      json.languages == ['Общий', 'Эльфийский']
    }

    with(responses['update']) {
      status == 200
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.name == 'Фей'
      json.description == null
      json.level == 1
      json.languages == []
    }

    with(responses['patch']) {
      status == 200
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.name == 'Фей'
      json.description == 'Персонаж Леши'
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
