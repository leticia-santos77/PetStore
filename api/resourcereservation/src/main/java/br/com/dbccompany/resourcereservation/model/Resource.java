package br.com.dbccompany.resourcereservation.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;
import java.util.Date;

@Document(collection = "Resource")
public class Resource {
    @Id
    private String id;
    @NotEmpty
    private String name;
    @NotEmpty
    private Integer quantityOfPlaces;
    @NotEmpty
    private boolean hasTelevision;
    @NotEmpty
    private boolean activeRoom;
    @NotEmpty
    private Date creationDate;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getQuantityOfPlaces() {
        return quantityOfPlaces;
    }

    public void setQuantityOfPlaces(Integer quantityOfPlaces) {
        this.quantityOfPlaces = quantityOfPlaces;
    }

    public boolean isHasTelevision() {
        return hasTelevision;
    }

    public void setHasTelevision(boolean hasTelevision) {
        this.hasTelevision = hasTelevision;
    }

    public boolean isActiveRoom() {
        return activeRoom;
    }

    public void setActiveRoom(boolean activeRoom) {
        this.activeRoom = activeRoom;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
