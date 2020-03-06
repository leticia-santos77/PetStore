package br.com.dbccompany.resourcereservation.service;

import br.com.dbccompany.resourcereservation.dto.ResourceDTO;
import br.com.dbccompany.resourcereservation.model.Resource;
import br.com.dbccompany.resourcereservation.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ResourceService {
    @Autowired
    ResourceRepository repository;

    @Transactional(rollbackFor = Exception.class)
    public Resource save(ResourceDTO dto){
        Resource resource = new Resource();
        if( dto.getName().isEmpty() ) {
            throw new RuntimeException("Deve ser informado o nome do recurso");
        }
        if( dto.getNumberOfSeats() <= 0 ) {
            throw new RuntimeException("Deve ser informada a quantidade de assentos diponivel no recurso");
        }
        resource.setName(dto.getName());
        resource.setNumberOfSeats(dto.getNumberOfSeats());
        resource.setHasTelevision(dto.isHasTelevision());
        resource.setActiveRoom(dto.isActiveRoom());
        resource.setCreationDate(new Date());
        return repository.save(resource);
    }
    @Transactional(rollbackFor = Exception.class)
    public Resource edit( String id, ResourceDTO dto){
        Resource resource = repository.findById(id).get();
        if(resource == null){
            throw new RuntimeException("Recurso não localizado");
        }
        resource.setId( id );
        resource.setName(dto.getName() == null ? resource.getName() : dto.getName());
        resource.setHasTelevision(dto.isHasTelevision());
        resource.setActiveRoom(true);
        resource.setCreationDate( resource.getCreationDate() );
        if(dto.getNumberOfSeats() == null || dto.getNumberOfSeats() <= 0 ){
            resource.setNumberOfSeats(resource.getNumberOfSeats());
        }else{
            resource.setNumberOfSeats(dto.getNumberOfSeats());

        }
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
        Optional<Resource> resource = repository.findById(id);
        return resource.orElse(null);
    }
}