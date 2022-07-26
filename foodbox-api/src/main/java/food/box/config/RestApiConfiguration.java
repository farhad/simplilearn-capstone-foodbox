package food.box.config;

import food.box.category.Category;
import food.box.dish.Dish;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class RestApiConfiguration implements RepositoryRestConfigurer {

    private EntityManager entityManager;

    @Autowired
    public RestApiConfiguration(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] unsupportedMethods = {HttpMethod.PUT, HttpMethod.DELETE, HttpMethod.POST};

        config.getExposureConfiguration()
                .forDomainType(Category.class)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedMethods))
                .withCollectionExposure(((metadata, httpMethods) -> httpMethods.disable(unsupportedMethods)));

        config.getExposureConfiguration()
                .forDomainType(Dish.class)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedMethods))
                .withCollectionExposure(((metadata, httpMethods) -> httpMethods.disable(unsupportedMethods)));

        exposeIds(config);
    }

    public void exposeIds(RepositoryRestConfiguration config) {
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();

        List<Class> entityClasses = new ArrayList<>();

        for (EntityType entityType : entities) {
            entityClasses.add(entityType.getJavaType());
        }

        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);
    }
}
