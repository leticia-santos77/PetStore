package br.com.dbccompany.resourcereservation.controller;

import br.com.dbccompany.resourcereservation.model.Booking;
import br.com.dbccompany.resourcereservation.model.BookingDTO;
import br.com.dbccompany.resourcereservation.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/booking")
public class BookingController {

    @Autowired
    BookingService service;

    @GetMapping("/all")
    @ResponseBody
    public List<Booking> allBookings(){
        return service.listAllBookings();
    }

    @PostMapping("/new")
    @ResponseBody
    public ResponseEntity<Booking> newBooking(@RequestBody BookingDTO dto ){
        Booking booking = service.save( dto.turnsToObject() );
        return new ResponseEntity<>( booking, HttpStatus.CREATED);
    }

    @PutMapping("/edit")
    @ResponseBody
    public Booking editBooking( @RequestBody Booking booking, String id ){
        return service.edit( booking, id );
    }

}
