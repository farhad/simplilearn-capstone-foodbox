package food.box.dish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/dish")
public class DishController {

    private final DishService service;

    @Autowired
    public DishController(DishService service) {
        this.service = service;
    }

    @GetMapping(path = "/list/{categoryId}", produces = "application/json")
    public ResponseEntity<List<Dish>> getCuisines(@PathVariable Long categoryId) {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }
}
