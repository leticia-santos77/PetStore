package br.com.dbccompany.resourcereservation.service;

import br.com.dbccompany.resourcereservation.dto.ResourceDTO;
import br.com.dbccompany.resourcereservation.model.Resource;
import br.com.dbccompany.resourcereservation.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ResourceService {
    @Autowired
    ResourceRepository repository;

    @Transactional(rollbackFor = Exception.class)
    public Resource save(Resource resource){
        //ArrayList<Resource> resources

        if(!( resource.getName().isEmpty() ) && resource.getNumberOfSeats() > 0 ) {
            resource.setCreationDate(new Date());
            return repository.save(resource);
        }else{
            throw new RuntimeException("Todos os campos devem ser preenchidos");
        }
    }
    @Transactional(rollbackFor = Exception.class)
    public Resource edit( String id, ResourceDTO dto){
        Resource resource = repository.findById(id).get();
        resource.setName(dto.getName() == null ? resource.getName() : dto.getName());
        return repository.save(resource);
    }
    public Resource findByName(String name){
        Optional<Resource> resource = repository.findByName(name);
        return resource.orElse(null);
    }
    public List<Resource> findAllResources(){
        return (List<Resource>) repository.findAll();
    }
    public Resource findById(String id){
        return repository.findById(id).get();
    }
}
