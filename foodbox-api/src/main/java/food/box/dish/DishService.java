package food.box.dish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DishService {

    private final DishRepository repository;

    @Autowired
    public DishService(DishRepository repository) {
        this.repository = repository;
    }

    public List<Dish> findByCategoryId(Long categoryId) {
        return repository.findByCategoryId(categoryId);
    }
}
