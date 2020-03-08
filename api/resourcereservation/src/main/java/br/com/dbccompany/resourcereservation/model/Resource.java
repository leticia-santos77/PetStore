package br.com.dbccompany.resourcereservation.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Document(collection = "Resource")
public class Resource {

    @Id
    @NotNull
    private String id;

    @NotEmpty
    @Indexed(unique=true)
    private String name;

    @NotEmpty
    private Integer numberOfSeats;


    @NotBlank
    @NotEmpty
    private Boolean hasTelevision = true;

    public Integer getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(Integer numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }

    @NotEmpty
    private Boolean activeRoom = null;

    @NotEmpty
    @JsonFormat( shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy" )
    private Date creationDate;

    public Resource() {
    }

    public Resource(@NotEmpty String name, @NotEmpty Integer numberOfSeats, @NotEmpty Boolean hasTelevision, @NotEmpty Boolean activeRoom) {
        this.name = name;
        this.numberOfSeats = numberOfSeats;
        this.hasTelevision = hasTelevision;
        this.activeRoom = activeRoom;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getHasTelevision() {
        return hasTelevision;
    }

    public void setHasTelevision(Boolean hasTelevision) {
        this.hasTelevision = hasTelevision;
    }

    public Boolean getActiveRoom() {
        return activeRoom;
    }

    public void setActiveRoom(Boolean activeRoom) {
        this.activeRoom = activeRoom;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
}
