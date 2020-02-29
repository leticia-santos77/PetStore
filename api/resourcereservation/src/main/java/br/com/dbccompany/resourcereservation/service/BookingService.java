package br.com.dbccompany.resourcereservation.service;

import br.com.dbccompany.resourcereservation.model.Booking;
import br.com.dbccompany.resourcereservation.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repository;

    @Transactional( rollbackFor = Exception.class )
    public Booking save( Booking booking ){
        return repository.save( booking );
    }

    @Transactional( rollbackFor = Exception.class )
    public Booking edit( Booking booking, String id ){
        booking.setId( id );
        return repository.save( booking );
    }

    public List<Booking> listAllBookings(){
        return ( List<Booking> ) repository.findAll();
    }

}
