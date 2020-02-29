package br.com.dbccompany.resourcereservation.service;

import br.com.dbccompany.resourcereservation.model.Test;
import br.com.dbccompany.resourcereservation.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class TestService {

    @Autowired
    private TestRepository repository;

    @Transactional( rollbackFor = Exception.class )
    public Test save(Test test ){
        return repository.save( test );
    }

    @Transactional( rollbackFor = Exception.class )
    public Test edit( Test test, String id ){
        test.setId( id );
        return repository.save( test );
    }

    public List<Test> listAllTests(){
        return ( List<Test> ) repository.findAll();
    }

}
