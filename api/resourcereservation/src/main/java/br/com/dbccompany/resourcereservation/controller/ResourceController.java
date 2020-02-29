package br.com.dbccompany.resourcereservation.controller;

import br.com.dbccompany.resourcereservation.model.Resource;
import br.com.dbccompany.resourcereservation.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Resource newResource(@RequestBody Resource resource){
        resource.setCreationDate(new Date());
        return service.save(resource);
    }
    @GetMapping(value = "/listAll")
    @ResponseBody
    public List<Resource> allRecources(){
        return service.findAllResources();
    }
    @PutMapping( value = "/edit/{id}")
    @ResponseBody
    public Resource edit( @PathVariable String id, @RequestBody Resource resource){
        return service.edit(resource,id);
    }
}
