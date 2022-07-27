package food.box.dish;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static food.box.fixture.DishFixture.testDish;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
public class DishControllerTest {

    @InjectMocks
    private DishService service;

    @Mock
    private DishRepository repository;

    @Test
    public void when_controller_getDishesByCategory_then_listOf_dishes() {
        // arrange
        Dish testDish = testDish();
        DishController controller = new DishController(service);

        // act
        when(repository.findByCategoryId(any())).thenReturn(List.of(testDish));
        ResponseEntity<List<Dish>> response =
                controller.getDishesByCategory(testDish.getCategory().getId());

        // assert
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isNotNull();

        var body = response.getBody();
        assertThat(body.size()).isEqualTo(1);
        assertThat(body.get(0)).isEqualTo(testDish);

    }
}
