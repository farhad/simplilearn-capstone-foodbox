package food.box.checkout;

import food.box.address.Address;
import food.box.customer.Customer;
import food.box.order.Order;
import food.box.order.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class PlaceOrderRequest {

    private Customer customer;
    private Address address;
    private Order order;
    private Set<OrderItem> orderItems;
}
