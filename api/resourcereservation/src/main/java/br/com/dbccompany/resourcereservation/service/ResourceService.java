package br.com.dbccompany.resourcereservation.service;

import br.com.dbccompany.resourcereservation.dto.BookingDTO;
import br.com.dbccompany.resourcereservation.dto.ResourceDTO;
import br.com.dbccompany.resourcereservation.model.Booking;
import br.com.dbccompany.resourcereservation.model.Resource;
import br.com.dbccompany.resourcereservation.repository.BookingRepository;
import br.com.dbccompany.resourcereservation.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.Date;
import java.util.List;

@Service
public class ResourceService {
    @Autowired
    ResourceRepository repository;
    @Autowired
    BookingRepository bookingRepository;

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
        resource.setHasTelevision(dto.getHasTelevision() == null ? false : dto.getHasTelevision());
        resource.setActiveRoom(dto.getActiveRoom() == null ? true : dto.getActiveRoom());
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
        resource.setHasTelevision(dto.getHasTelevision() == null ? resource.getHasTelevision() : dto.getHasTelevision());
        resource.setCreationDate( resource.getCreationDate() );
        resource.setActiveRoom(dto.getActiveRoom() == null ? resource.getActiveRoom() : dto.getActiveRoom());
        if(dto.getNumberOfSeats() == null || dto.getNumberOfSeats() <= 0 ){
            resource.setNumberOfSeats(resource.getNumberOfSeats());
        }else{
            resource.setNumberOfSeats(dto.getNumberOfSeats());
        }

        List<Booking> booking = bookingRepository.findAllByResourceId(resource.getId());
        for (Booking element : booking  ) {
            element.setResourceName(resource.getName());
            bookingRepository.save(element);
        }

        return repository.save(resource);
    }
    public Resource findByName(String name){
        Resource resource = repository.findByName(name).get();
        return resource;
    }
    public List<Resource> findAllResources(){
        return (List<Resource>) repository.findAll();
    }
    public Resource findById(String id){
        Resource resource = repository.findById(id).get();
        return resource;
    }
}