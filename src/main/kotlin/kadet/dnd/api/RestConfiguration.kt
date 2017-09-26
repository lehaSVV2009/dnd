package kadet.dnd.api

import org.springframework.context.annotation.Configuration
import org.springframework.data.rest.core.config.RepositoryRestConfiguration
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter

@Configuration
class RestConfiguration : RepositoryRestConfigurerAdapter() {

    override fun configureRepositoryRestConfiguration(config: RepositoryRestConfiguration?) {
        // By default id is not exposed to client
        // https://jira.spring.io/browse/DATAREST-366
        config!!.exposeIdsFor(Person::class.java)
    }
}