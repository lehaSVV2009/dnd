package kadet.dnd.api

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.databind.*
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.MediaType
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter

@Configuration
class JacksonConfiguration {

  /**
   * Customize json mapping configurations
   */
  @Bean
  fun jacksonBuilder(): Jackson2ObjectMapperBuilder {
    val builder = Jackson2ObjectMapperBuilder()

    // Add spaces and end lines to JSON
    builder.indentOutput(true)

    // If field value is null, the field should not be included to json
    // Use @JsonInclude(JsonInclude.Include.ALWAYS) if you want null field to be included to json
    builder.serializationInclusion(JsonInclude.Include.NON_NULL)

    // Transform all 'myField' object field names to 'my_field'
    builder.propertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE)

    // Disable date serialization as long epoch time
    builder.featuresToDisable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)

    // Disable float deserialization to integer cause it modifies client data (e.g. numeric custom field)
    builder.featuresToDisable(DeserializationFeature.ACCEPT_FLOAT_AS_INT)

    // Sort json by keys alphabetically
    builder.featuresToEnable(MapperFeature.SORT_PROPERTIES_ALPHABETICALLY)

    return builder
  }

  /**
   * Allow not to add 'Content-Type:application/json' header to all the json requests
   */
  @Bean
  fun jacksonConverter(objectMapper: ObjectMapper) : MappingJackson2HttpMessageConverter {
    val jacksonConverter = MappingJackson2HttpMessageConverter(objectMapper)
    jacksonConverter.supportedMediaTypes = listOf(MediaType.ALL)
    return jacksonConverter
  }
}
