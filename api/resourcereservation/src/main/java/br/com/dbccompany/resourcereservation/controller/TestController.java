package br.com.dbccompany.resourcereservation.controller;

import br.com.dbccompany.resourcereservation.model.Test;
import br.com.dbccompany.resourcereservation.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/test")
public class TestController {

    @Autowired
    TestService service;

    @GetMapping("/all")
    @ResponseBody
    public List<Test> allTests(){
        return service.listAllTests();
    }

    @PostMapping("/new")
    @ResponseBody
    public Test newTest( @RequestBody Test test ){
        return service.save( test );
    }

    @PutMapping("/edit")
    @ResponseBody
    public Test editTest( @RequestBody Test test, String id ){
        return service.edit( test, id );
    }

}
