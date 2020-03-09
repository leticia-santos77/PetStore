package br.com.dbccompany.resourcereservation;

import br.com.dbccompany.resourcereservation.model.Resource;
import br.com.dbccompany.resourcereservation.dto.ResourceDTO;
import br.com.dbccompany.resourcereservation.repository.ResourceRepository;

import br.com.dbccompany.resourcereservation.service.ResourceService;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class ResourceRepositoryTest {
    @Autowired
    private ResourceRepository resourceRepository;
    @Autowired
    private ResourceService service;
    @Test
    public  void createOneResourceData(){
        ResourceDTO dto = new ResourceDTO();
        dto.setName("Test");
        dto.setNumberOfSeats(10);
        dto.setActiveRoom(true);
        dto.setHasTelevision(true);
        Resource resource = new Resource();
        resource.setName(dto.getName());
        resource.setNumberOfSeats(dto.getNumberOfSeats());
        resource.setActiveRoom(dto.getActiveRoom());
        resource.setHasTelevision(dto.getHasTelevision());
        this.resourceRepository.save(resource);
        Assert.assertEquals("Test",resourceRepository.findById(resource.getId()).get().getName());
        this.resourceRepository.delete(resource);
    }
    @Test
    public void createOneResourceAndEdit(){
        ResourceDTO dto = new ResourceDTO();
        dto.setHasTelevision(true);
        dto.setNumberOfSeats(10);
        dto.setActiveRoom(false);
        dto.setName("TestTwo");
        ResourceDTO dto2 = new ResourceDTO();
        dto2.setName("TestThree");
        dto2.setNumberOfSeats(10);
        dto2.setActiveRoom(true);
        dto2.setHasTelevision(true);
        Resource resource = new Resource(dto.getName(),dto.getNumberOfSeats(),dto.getHasTelevision(),dto.getActiveRoom());
        this.resourceRepository.save(resource);
        Assert.assertEquals("TestTwo",resourceRepository.findById(resource.getId()).get().getName());
        this.service.edit(resource.getId(),dto2);
        Assert.assertEquals(("TestThree"),resourceRepository.findById(resource.getId()).get().getName());
        this.resourceRepository.delete(resource);
    }

}
