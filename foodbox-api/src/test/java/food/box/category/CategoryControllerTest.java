package food.box.category;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static food.box.fixture.CategoryFixture.testCategory;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@SpringBootTest
public class CategoryControllerTest {

    @InjectMocks
    private CategoryService service;

    @Mock
    private CategoryRepository repository;

    @Test
    public void it_returns_list_of_categories() {
        // arrange
        Category testCategory = testCategory();
        CategoryController controller = new CategoryController(service);

        // act
        when(repository.findAll()).thenReturn(List.of(testCategory));
        ResponseEntity<List<Category>> response = controller.getAll();

        // assert
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isNotNull();

        var responseBody = response.getBody();
        assertThat(responseBody.size()).isEqualTo(1);
        assertThat(responseBody.get(0).getId()).isEqualTo(testCategory.getId());
        assertThat(responseBody.get(0).getTitle()).isEqualTo(testCategory.getTitle());
        assertThat(responseBody.get(0).getDescription()).isEqualTo(testCategory.getDescription());
    }
}
