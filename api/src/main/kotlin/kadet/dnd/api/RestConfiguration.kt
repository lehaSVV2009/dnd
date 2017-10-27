package kadet.dnd.api

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.projection.ProjectionFactory
import org.springframework.data.projection.SpelAwareProxyProjectionFactory
import org.springframework.data.rest.core.config.RepositoryRestConfiguration
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter

@Configuration
class RestConfiguration : RepositoryRestConfigurerAdapter() {

    override fun configureRepositoryRestConfiguration(config: RepositoryRestConfiguration?) {
        // By default id is not exposed to client
        // https://jira.spring.io/browse/DATAREST-366
        config!!.exposeIdsFor(Hero::class.java)
                .exposeIdsFor(Talent::class.java)
                .exposeIdsFor(Turn::class.java)
                .exposeIdsFor(Scene::class.java)
                .exposeIdsFor(Day::class.java)

        // Allow cross origin requests in spring-rest-data app
        // https://stackoverflow.com/questions/31724994/spring-data-rest-and-cors
        config.corsRegistry
                .addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600)
    }
}