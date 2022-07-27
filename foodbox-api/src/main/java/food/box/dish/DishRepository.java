package food.box.dish;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Long> {

    @Query("select d from Dish d where d.category.id = :categoryId")
    List<Dish> findByCategoryId(Long categoryId);
}
