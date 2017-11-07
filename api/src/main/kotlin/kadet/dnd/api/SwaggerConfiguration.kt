package kadet.dnd.api

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import springfox.documentation.builders.ApiInfoBuilder
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.service.ApiInfo
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2

@Configuration
@EnableSwagger2
class SwaggerConfiguration {

    /**
     * Swagger API generator
     * Available in {host}:{port}/swagger-ui.html
     */
    @Bean
    fun v1(): Docket = Docket(DocumentationType.SWAGGER_2)
            .apiInfo(apiInfo())
            .select()
            .apis(RequestHandlerSelectors.any())
            .paths(PathSelectors.any())
            .build()

    private fun apiInfo(): ApiInfo = ApiInfoBuilder()
            .title("Dungeons and Dragons Hero API")
            .description("API to make life of DnD Heros easier")
            .build()
}


