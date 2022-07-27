package food.box.fixture;

import food.box.category.Category;

import static food.box.utils.TestUtils.randomId;
import static food.box.utils.TestUtils.randomString;

public class CategoryFixture {

    public static Category testCategory() {
        return Category.builder()
                .id(randomId())
                .title(randomString(10))
                .description(randomString(10))
                .build();
    }
}
