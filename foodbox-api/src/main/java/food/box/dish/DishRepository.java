package food.box.dish;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "dish", path = "dish")
public interface DishRepository extends JpaRepository<Dish, Long> {

    @Query("select d from Dish d where d.category.id = :categoryId")
    List<Dish> findByCategoryId(Long categoryId);
}
