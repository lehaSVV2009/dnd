package kadet.dnd.api

import groovy.json.JsonSlurper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.mock.web.MockHttpServletResponse
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Specification

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get

@SpringBootTest
@AutoConfigureMockMvc
class PlayersApiTest extends Specification {

  @Autowired
  MockMvc mvc

  def 'should list all players'() {
    when:
    def response = mvc.perform(get('/players')).andReturn().response

    then:
    response.status == 200

    def list = json(response) as List
    list.contains 'Alex'
  }

  def json(MockHttpServletResponse response) {
    return new JsonSlurper().parse(response.contentAsByteArray)
  }
}
