package food.box.fixture;

import food.box.dish.Dish;

import static food.box.fixture.CategoryFixture.testCategory;
import static food.box.utils.TestUtils.randomId;
import static food.box.utils.TestUtils.randomString;

public class DishFixture {

    public static Dish testDish() {
        return Dish.builder()
                .id(randomId())
                .name(randomString(10))
                .description(randomString(10))
                .imagePath(randomString(10))
                .category(testCategory()).build();
    }
}
