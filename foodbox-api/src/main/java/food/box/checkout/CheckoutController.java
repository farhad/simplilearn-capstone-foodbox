package food.box.checkout;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    @Autowired
    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PlaceOrderResponse placeOrder(@RequestBody PlaceOrderRequest placeOrderRequest) {
        return checkoutService.placeOrder(placeOrderRequest);
    }
}
