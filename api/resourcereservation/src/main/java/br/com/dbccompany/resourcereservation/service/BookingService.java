package br.com.dbccompany.resourcereservation.service;

import br.com.dbccompany.resourcereservation.dto.BookingDTO;
import br.com.dbccompany.resourcereservation.model.Booking;
import br.com.dbccompany.resourcereservation.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repository;

    @Autowired
    private ResourceService ResourceService;

    @Transactional( rollbackFor = Exception.class )
    public Booking save( Booking booking ){
        booking.setCreationDate( new Date());
        return repository.save( booking );
    }

    @Transactional( rollbackFor = Exception.class )
    public Booking edit( String id, BookingDTO dto ){
        Booking booking = repository.findById(id).get();
        booking.setId( id );
        booking.setCreationDate( dto.getDate() == null ? booking.getDate() : dto.getDate() );
        booking.setQuantityOfPeople(dto.getQuantityOfPeople() == null  && dto.getQuantityOfPeople() <= booking.getQuantityOfPeople()? booking.getQuantityOfPeople() : dto.getQuantityOfPeople());
        booking.setUseTv(dto.getUseTv() == null ? booking.getUseTv() : dto.getUseTv());
        return repository.save( booking );
    }

    public List<Booking> listAllBookings() {
        return (List<Booking>) repository.findAll();
    }

    public Booking findById(String id){
        Optional<Booking> booking = repository.findById(id);
        return booking.orElse(null);
    }

}
