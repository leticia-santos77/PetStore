package br.com.dbccompany.resourcereservation.service;

import br.com.dbccompany.resourcereservation.model.Resource;
import br.com.dbccompany.resourcereservation.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class ResourceService {
    @Autowired
    ResourceRepository repository;

    @Transactional(rollbackFor = Exception.class)
    public Resource save(Resource resource){
        resource.setCreationDate(new Date());
        return repository.save(resource);
    }
    @Transactional(rollbackFor = Exception.class)
    public Resource edit(Resource resource, String id,Date date){
        resource.setId(id);
        resource.setCreationDate(date);
        return repository.save(resource);
    }

    public List<Resource> findAllResources(){
        return (List<Resource>) repository.findAll();
    }

    public Resource findById(String id){
        return repository.findById(id).get();
    }
}
