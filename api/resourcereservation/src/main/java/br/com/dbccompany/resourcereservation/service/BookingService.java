package br.com.dbccompany.resourcereservation.service;

import br.com.dbccompany.resourcereservation.dto.BookingDTO;
import br.com.dbccompany.resourcereservation.model.Booking;
import br.com.dbccompany.resourcereservation.model.Resource;
import br.com.dbccompany.resourcereservation.repository.BookingRepository;
import br.com.dbccompany.resourcereservation.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repository;

    @Autowired
    private ResourceService resourceService;

    @Autowired
    private ResourceRepository resourceRepository;


    @Transactional( rollbackFor = Exception.class )
    public Booking save( BookingDTO dto ){

        Resource resource = resourceService.findById( dto.getResourceId() );

        Booking booking = new Booking();

        Date today = new Date();

        Date eventDate = dto.getDate();

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/mm/yyyy");
        dateFormat.format(today);

        dateFormat.format(eventDate);

        if(resource == null){
            throw new  RuntimeException(" Recurso não encontrado");
        }
        if( !(resource.getActiveRoom())){
            throw new  RuntimeException(" Recurso indisponivel no momento");
        }
        if( dto.getQuantityOfPeople() > resource.getNumberOfSeats() || dto.getQuantityOfPeople() < 1 ){
            throw new  RuntimeException("A quantidade de pessoas não suporta o recurso selecionado");
        }
        if ( !(resource.getHasTelevision()) && dto.getUseTv() ){
            throw new RuntimeException("Este recurso não possui televisão");
        }
        if( today.after( eventDate ) ){
            throw new RuntimeException("A data deve ser maior que a data atual");
        }

        booking.setResourceId(dto.getResourceId());
        booking.setResourceName(resource.getName());
        booking.setQuantityOfPeople(dto.getQuantityOfPeople());
        booking.setUseTv(dto.getUseTv() == null ? false : dto.getUseTv());
        booking.setDate(dto.getDate());
        booking.setCanceled(dto.getCanceled() == null ? false : dto.getCanceled());
        booking.setCreationDate( today );

        return repository.save( booking );
    }

    @Transactional( rollbackFor = Exception.class )
    public Booking edit( String id, BookingDTO dto ){

        Booking booking = repository.findById(id).get();

        Resource resource = resourceRepository.findById(booking.getResourceId()).get();

        booking.setId( id );
        booking.setResourceId( booking.getResourceId() );
        booking.setCreationDate( booking.getCreationDate() );
        booking.setCanceled( dto.getCanceled() == null ? booking.getCanceled() : dto.getCanceled() );
        booking.setUseTv( dto.getUseTv() == null ? booking.getUseTv() : dto.getUseTv() );

        Date today = new Date();

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/mm/yyyy hh:mm");
        dateFormat.format(today);

       if ( ( dto.getDate() == null ) || ( today.compareTo( dto.getDate() ) > 0 ) ){
           booking.setDate( booking.getDate() );
        } else {
           booking.setDate( dto.getDate() );
        }

        if( ( dto.getQuantityOfPeople() == null )  || ( dto.getQuantityOfPeople() > resource.getNumberOfSeats() ) || ( dto.getQuantityOfPeople() < 1 )  ) {
            booking.setQuantityOfPeople( booking.getQuantityOfPeople() );
        }else {
            booking.setQuantityOfPeople( dto.getQuantityOfPeople() );
        }

        return repository.save( booking );
    }

    public List<Booking> listAllBookings() {
        return (List<Booking>) repository.findAll();
    }

    public Booking findById(String id){
        Booking booking = repository.findById(id).get();
        return booking;
    }
    public List<Booking> findAllByResourceId(String resourceId){
        return repository.findAllByResourceId(resourceId);
    }

}
