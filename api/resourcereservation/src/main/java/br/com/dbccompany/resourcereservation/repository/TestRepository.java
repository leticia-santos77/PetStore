package br.com.dbccompany.resourcereservation.repository;

import br.com.dbccompany.resourcereservation.model.Test;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends MongoRepository<Test, String> {
}
