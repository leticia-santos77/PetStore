package br.com.dbccompany.resourcereservation.service;

import br.com.dbccompany.resourcereservation.model.Booking;
import br.com.dbccompany.resourcereservation.model.Test;
import br.com.dbccompany.resourcereservation.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repository;

    @Transactional( rollbackFor = Exception.class )
    public Booking save( Booking booking ){
        booking.setCreationDate( new Date());
        return repository.save( booking );
    }

    @Transactional( rollbackFor = Exception.class )
    public Booking edit( Booking booking, String id, Date date ){
        booking.setId( id );
        return repository.save( booking );
    }

    public List<Booking> listAllBookings() {
        return (List<Booking>) repository.findAll();
    }

    public Booking findById(String id){
        return repository.findById(id).get();
    }

}
