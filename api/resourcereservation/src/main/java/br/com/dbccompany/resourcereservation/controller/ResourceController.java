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
        Resource resource = service.save(dto);
        return new ResponseEntity<>(resource, HttpStatus.CREATED);
    }

    @PutMapping( value = "/edit/{id}")
    @ResponseBody
    public ResponseEntity<Resource> edit( @PathVariable String id, @RequestBody ResourceDTO dto){
        Resource resource = service.edit(id, dto);
        return new ResponseEntity<>(resource, HttpStatus.OK);
    }
        @GetMapping(value = "/findbyname/{name}")
    @ResponseBody
    public Resource findByName(@PathVariable String name){
        return service.findByName(name);
    }

    @GetMapping(value = "/all")
    @ResponseBody
    public List<Resource> allRecources(){
        return service.findAllResources();
    }

}
