package br.com.dbccompany.resourcereservation.controller;

import br.com.dbccompany.resourcereservation.model.User;
import br.com.dbccompany.resourcereservation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping( value = "/findAll" )
    public List<User> findAll() {
        return service.findAll();
    }

    @PostMapping( value = "/add" )
    public ResponseEntity<?> add(@RequestBody User user ) {
        return ResponseEntity
                .status( HttpStatus.OK )
                .body( service.save( user ));
    }

    @GetMapping(value = "/findByUsername/{username}")
    public User findByUsername( @PathVariable String username ) {
        return service.findByUsername( username );
    }

    // ONLY FOR TESTING PORPOISE
    @GetMapping(value = "/teste")
    public String getTeste() {
        return "TESTE RETURNED";
    }
}

