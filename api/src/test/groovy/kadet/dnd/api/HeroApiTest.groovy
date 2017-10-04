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
                condition: [
                    money: 455.12
                ],
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
                ],
                talents: [[
                    title: 'Магическая стрела',
                    description: 'Вы запускаете во врага серебристый разряд силового поля.',
                    limit_type: 'Неограниченный',
                    action_type: 'Стандартное действие',
                    requirements: ['Инструмент', 'Магический', 'Силовое поле'],
                    used: 0
                ]]
            ]
        ),
        'read'  : readHero(ID),
        'update': updateHero(ID,
            [
                condition: [ money: 500 ],
                profile: [ name: 'Фей'],
                talents: [[ goal: 'Одно существо' ]]
            ]
        ),
        'patch' : partiallyUpdateHero(ID,
            [
                profile: [ description: 'Персонаж Леши'],
                talents: [[:], [ used: 1 ]]
            ]
        ),
        'delete': deleteHero(ID)
    ]

    then:
    with(responses['create']) {
      status == 201
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.condition.money == 455.12
      json.profile.name == 'Фея'
      json.profile.description == 'Персонаж Леши'
      json.profile.level == 5
      json.profile.category == 'Волшебник'
      json.profile.race == 'Эладрин'
      json.profile.experience == 5500
      json.profile.languages == ['Общий', 'Эльфийский']
      json.talents[0].title == 'Магическая стрела'
      json.talents[0].limit_type == 'Неограниченный'
      json.talents[0].action_type == 'Стандартное действие'
      json.talents[0].used == 0
    }

    with(responses['read']) {
      status == 200
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.condition.money == 455.12
      json.profile.name == 'Фея'
      json.profile.description == 'Персонаж Леши'
      json.profile.level == 5
      json.profile.category == 'Волшебник'
      json.profile.race == 'Эладрин'
      json.profile.experience == 5500
      json.profile.languages == ['Общий', 'Эльфийский']
      json.talents[0].title == 'Магическая стрела'
      json.talents[0].limit_type == 'Неограниченный'
      json.talents[0].action_type == 'Стандартное действие'
      json.talents[0].used == 0
    }

    with(responses['update']) {
      status == 200
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.condition.money == 500.0
      json.profile.name == 'Фей'
      json.profile.description == null
      json.profile.level == 1
      json.profile.languages == []
      json.talents[0].goal == 'Одно существо'
    }

    with(responses['patch']) {
      status == 200
      def json = parseJson(contentAsByteArray)
      json.id == ID
      json.condition.money == 500.0
      json.profile.name == 'Фей'
      json.profile.description == 'Персонаж Леши'
      json.talents[0].goal == 'Одно существо'
      json.talents[1].used == 1
    }

    cleanup:
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
