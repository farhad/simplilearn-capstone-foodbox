package food.box.dish;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class DishControllerTest {

    @InjectMocks
    private DishService service;

    @Mock
    private DishRepository repository;

    @Test
    public void when_controller_getAll_then_listOf_dishes() {

    }
}
