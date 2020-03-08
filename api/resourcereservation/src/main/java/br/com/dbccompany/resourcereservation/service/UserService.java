package br.com.dbccompany.resourcereservation.service;


import br.com.dbccompany.resourcereservation.model.User;
import br.com.dbccompany.resourcereservation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Bean
    public static BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Transactional(rollbackFor = Exception.class)
    public User save(User user){
        user.setPassword(passwordEncoder().encode(user.getPassword()));
        return repository.save(user);
    }

    @Transactional(rollbackFor = Exception.class)
    public User edit(User user, String id, Date date){
        user.setId(id);
        return repository.save(user);
    }

    public long count() {
        return repository.count();
    }

    public User findByUsername( String username ) {
        return repository.findByUsername( username ).get();
    }

    public List<User> findAll(){
        return (List<User>) repository.findAll();
    }

    public User findById(String id){
        return repository.findById(id).get();
    }

}
