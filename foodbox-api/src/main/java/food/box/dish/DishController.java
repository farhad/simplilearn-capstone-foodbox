package food.box.dish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class DishController {

    private final DishService service;

    @Autowired
    public DishController(DishService service) {
        this.service = service;
    }

    @PostMapping(path = "/add", produces = "application/json", consumes = "application/json")
    public ResponseEntity<Dish> add(@RequestBody Dish dish) {
        Dish newDish = service.add(dish);
        return new ResponseEntity<>(newDish, HttpStatus.CREATED);
    }

    @PutMapping(path = "/update", produces = "application/json", consumes = "application/json")
    public ResponseEntity<Dish> update(@RequestBody Dish dish) {
        Dish updatedDish = service.update(dish);
        return new ResponseEntity<>(updatedDish, HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete/{dishId}", produces = "application/json")
    public ResponseEntity<?> delete(@PathVariable Long dishId) {
        service.delete(dishId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
