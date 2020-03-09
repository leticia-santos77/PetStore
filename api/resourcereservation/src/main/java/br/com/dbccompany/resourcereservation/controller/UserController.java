package br.com.dbccompany.resourcereservation.controller;

import br.com.dbccompany.resourcereservation.dto.UserDTO;
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

    @GetMapping( value = "/all" )
    public List<User> findAll() {
        return service.findAll();
    }

    @PostMapping( value = "/add" )
    public ResponseEntity<?> add(@RequestBody UserDTO dto ) {
        try {
            return ResponseEntity
                    .status( HttpStatus.OK )
                    .body( service.save( dto ));
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("USUÁRIO INVÁLIDO");
        }
    }

    @GetMapping(value = "/findByUsername/{username}")
    public User findByUsername( @PathVariable String username ) {
        return service.findByUsername( username );
    }

}

