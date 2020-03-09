package br.com.dbccompany.resourcereservation;

import br.com.dbccompany.resourcereservation.model.Booking;
import br.com.dbccompany.resourcereservation.model.Resource;
import br.com.dbccompany.resourcereservation.repository.BookingRepository;
import br.com.dbccompany.resourcereservation.repository.ResourceRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.Assert;
import java.util.Date;

@SpringBootTest
public class BookingRepositoryTest {
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private ResourceRepository resourceRepository;
    @Test
    public void createOneBooking(){
        Booking booking = new Booking();
        booking.setQuantityOfPeople(15);
        booking.setDate(new Date());
        booking.setCanceled(false);
        this.bookingRepository.save(booking);
        Assert.assertNotNull(booking);
        this.bookingRepository.delete(booking);
    }
}
