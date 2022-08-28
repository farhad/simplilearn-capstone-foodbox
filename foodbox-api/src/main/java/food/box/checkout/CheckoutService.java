package food.box.checkout;

import food.box.customer.Customer;
import food.box.customer.CustomerRepository;
import food.box.order.Order;
import food.box.order.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutService {

    private CustomerRepository customerRepository;

    @Autowired
    public CheckoutService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Transactional
    PlaceOrderResponse placeOrder(PlaceOrderRequest placeOrderRequest) {

        Order order = placeOrderRequest.getOrder();

        String trackingNumber = generateTrackingNumber();
        order.setTrackingNumber(trackingNumber);

        Set<OrderItem> orderItems = placeOrderRequest.getOrderItems();
        orderItems.forEach((item -> {
            item.setOrder(order);
        }));

        order.setAddress(placeOrderRequest.getAddress());
        order.setOrderItems(orderItems);

        Customer customer = placeOrderRequest.getCustomer();
        customer.add(order);

        customerRepository.save(customer);

        return new PlaceOrderResponse(trackingNumber);
    }

    private String generateTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
