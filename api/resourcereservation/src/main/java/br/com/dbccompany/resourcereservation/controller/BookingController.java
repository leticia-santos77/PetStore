package br.com.dbccompany.resourcereservation.controller;

import br.com.dbccompany.resourcereservation.model.Booking;
import br.com.dbccompany.resourcereservation.dto.BookingDTO;
import br.com.dbccompany.resourcereservation.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@Controller
@RestController
@RequestMapping(value = "/api/booking")
public class BookingController {

    @Autowired
    BookingService service;

    @GetMapping(value = "/all")
    @ResponseBody
    public List<Booking> allBookings(){
        return service.listAllBookings();
    }

    @GetMapping(value = "/findbyid/{id}")
    @ResponseBody
    public ResponseEntity<Booking> findById(@PathVariable String id){
        try{
            Booking booking = service.findById(id);
            return  new ResponseEntity<>(booking,HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping(value = "/findbyresource/{resourceId}")
    @ResponseBody
    public List<Booking> findByResourceId(@PathVariable String resourceId){
                return  service.findAllByResourceId(resourceId);
    }
    @PostMapping("/add")
    @ResponseBody
    public ResponseEntity<Booking> newBooking(@RequestBody BookingDTO dto ){
        try{
            Booking booking = service.save(dto);
            return new ResponseEntity<>( booking, HttpStatus.CREATED );
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping(value = "/edit/{id}")
    @ResponseBody
    public ResponseEntity<Booking> edit( @PathVariable String id, @RequestBody BookingDTO dto) {
        try{
            Booking booking = service.edit( id, dto);
            return new ResponseEntity<>(booking, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


}
