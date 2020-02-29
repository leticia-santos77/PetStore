package br.com.dbccompany.resourcereservation.controller;

import br.com.dbccompany.resourcereservation.model.Resource;
import br.com.dbccompany.resourcereservation.model.ResourceDTO;
import br.com.dbccompany.resourcereservation.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {
    @Autowired
    ResourceService service;

    @PostMapping(value = "/add")
    @ResponseBody
    public ResponseEntity<Resource> newResource(@RequestBody ResourceDTO resourceDTO){
        Resource resource = service.save(resourceDTO.toObject());
        return new ResponseEntity<>(resource, HttpStatus.CREATED);
    }
    @GetMapping(value = "/listAll")
    @ResponseBody
    public List<Resource> allRecources(){
        return service.findAllResources();
    }

    @PutMapping( value = "/edit/{id}")
    @ResponseBody
    public ResponseEntity<Resource> edit( @PathVariable String id, @RequestBody ResourceDTO resourceDTO){
        Date date = service.findById(id).getCreationDate();
        Resource resource = service.edit(resourceDTO.toObject(),id,date);
        return new ResponseEntity<>(resource, HttpStatus.OK);
    }
}
