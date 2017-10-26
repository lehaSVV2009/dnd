package kadet.dnd.api

import groovy.json.JsonBuilder
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Shared
import spock.lang.Specification
import spock.lang.Stepwise

import static kadet.dnd.api.TalentApiTest.createTalent
import static kadet.dnd.api.TestUtils.parseJson
import static kadet.dnd.api.TestUtils.response
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post

@AutoConfigureMockMvc
@SpringBootTest
@Stepwise
class HeroApiTest extends Specification {

  @Autowired
  MockMvc mvc

  @Shared
  String heroId

  def 'should create hero'() {
    given:
    def hero = [
        condition: [
            money: 455.12
        ],
        profile  : [
            name       : 'Фея',
            description: 'Персонаж Леши',
            category   : 'Волшебник',
            race       : 'Эладрин',
            experience : 5500,
            languages  : [
                'Общий', 'Эльфийский'
            ]
        ],
        talents  : [
            [title: 'New talent']
        ]
    ]

    when:
    def response = createHeroRequest(mvc, hero)

    then:
    response.status == 201
    def json = parseJson(response.contentAsByteArray)
    with(json) {
      id
      condition.money == 455.12
      profile.name == 'Фея'
      profile.description == 'Персонаж Леши'
      profile.category == 'Волшебник'
      profile.race == 'Эладрин'
      profile.experience == 5500
      profile.languages.contains 'Общий'
      profile.languages.contains 'Эльфийский'
      talents[0].title == 'New talent'
    }

    cleanup:
    if (json && json.id) {
      heroId = json.id
    }
  }

  def 'should patch hero'() {
    given:
    def hero = [
        profile: [
            description: 'Персонаж XXX',
        ],
    ]

    when:
    def response = patchHeroRequest(mvc, heroId, hero)

    then:
    response.status == 200
    def json = parseJson(response.contentAsByteArray)
    with(json) {
      profile.name == 'Фея'
      profile.description == 'Персонаж XXX'
    }
  }

  def 'should delete hero'() {
    when:
    def response = deleteHeroRequest(mvc, heroId)

    then:
    response.status == 204
  }

  static def createHero(MockMvc mvc, def hero) {
    def response = createHeroRequest(mvc, hero)
    parseJson response.contentAsByteArray
  }

  static def createHeroRequest(MockMvc mvc, def hero) {
    String json = new JsonBuilder(hero)
    response mvc.perform(post('/heroes').content(json))
  }

  static def patchHeroRequest(MockMvc mvc, String id, def partialHero) {
    String json = new JsonBuilder(partialHero)
    response mvc.perform(patch("/heroes/${id}").content(json))
  }

  static def deleteHeroRequest(MockMvc mvc, String id) {
    response mvc.perform(delete("/heroes/${id}"))
  }
}
