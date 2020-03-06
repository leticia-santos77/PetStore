package br.com.dbccompany.resourcereservation.repository;

import br.com.dbccompany.resourcereservation.model.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;

@Repository
public interface BookingRepository extends MongoRepository<Booking, String> {
    Optional<Booking> findByDate(Date date);
}
