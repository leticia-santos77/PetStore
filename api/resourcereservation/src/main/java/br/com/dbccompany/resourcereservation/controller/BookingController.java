package br.com.dbccompany.resourcereservation.controller;

import br.com.dbccompany.resourcereservation.model.Booking;
import br.com.dbccompany.resourcereservation.model.BookingDTO;
import br.com.dbccompany.resourcereservation.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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

    @PostMapping("/add")
    @ResponseBody
    public ResponseEntity<Booking> newBooking(@RequestBody BookingDTO dto ){
        Booking booking = service.save( dto.turnsToObject() );
        return new ResponseEntity<>( booking, HttpStatus.CREATED );
    }

    @PutMapping("/edit/{id}")
    @ResponseBody
    public ResponseEntity<Booking> edit( @PathVariable String id, @RequestBody BookingDTO dto) {
        Date date = service.findById(id).getCreationDate();
        Booking booking = service.edit(dto.turnsToObject(), id, date);
        return new ResponseEntity<>(booking, HttpStatus.OK);
    }


}
