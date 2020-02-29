package br.com.dbccompany.resourcereservation.repository;

import br.com.dbccompany.resourcereservation.model.Resource;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResourceRepository extends MongoRepository<Resource, String> {
}
