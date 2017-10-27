package kadet.dnd.api

import groovy.json.JsonSlurper
import org.springframework.test.web.servlet.ResultActions

class TestUtils {
  static def response(ResultActions resultActions) {
    resultActions.andReturn().response
  }

  static def parseJson(byte[] content) {
    new JsonSlurper().parse(content)
  }
}
