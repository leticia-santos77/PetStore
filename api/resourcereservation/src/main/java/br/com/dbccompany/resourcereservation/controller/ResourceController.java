package br.com.dbccompany.resourcereservation.controller;

import br.com.dbccompany.resourcereservation.model.Resource;
import br.com.dbccompany.resourcereservation.dto.ResourceDTO;
import br.com.dbccompany.resourcereservation.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/resource")
public class ResourceController {
    @Autowired
    ResourceService service;

    @PostMapping(value = "/add")
    @ResponseBody
    public ResponseEntity<Resource> newResource(@RequestBody ResourceDTO dto){
        try {
            Resource resource = service.save(dto);
            return new ResponseEntity<>(resource, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping( value = "/edit/{id}")
    @ResponseBody
    public ResponseEntity<Resource> edit( @PathVariable String id, @RequestBody ResourceDTO dto){
       try {
           Resource resource = service.edit(id, dto);
           return new ResponseEntity<>(resource, HttpStatus.OK);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }
    @GetMapping(value = "/findbyname/{name}")
    @ResponseBody
    public ResponseEntity<Resource> findByName(@PathVariable String name){
        try {
            Resource resource = service.findByName(name);
            return new ResponseEntity<>(resource, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping(value = "/findbyid/{id}")
    @ResponseBody
    public ResponseEntity<Resource> findById(@PathVariable String id){
        try{
            Resource resource = service.findById(id);
            return  new ResponseEntity<>(resource,HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping(value = "/all")
    @ResponseBody
    public List<Resource> allRecources(){
        return service.findAllResources();
    }

}
