package food.box.dish;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "dish", path = "dish")
public interface DishRepository extends JpaRepository<Dish, Long> {

    Page<Dish> findDishByCategoryId(@RequestParam("id") Long id, Pageable pageable);
}
