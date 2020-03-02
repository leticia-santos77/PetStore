package br.com.dbccompany.resourcereservation.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Document(collection = "Resource")
public class Resource {
    @NotNull
    @Id
    private String id;
    @NotEmpty
    private String name;
    @NotEmpty
    private Integer numberOfSeats;
    @NotEmpty
    private boolean hasTelevision;
    @NotEmpty
    private boolean activeRoom;
    @NotEmpty
    @JsonFormat( shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy" )
    private Date creationDate;

    public Resource() {
    }

    public Resource(@NotEmpty String name, @NotEmpty Integer numberOfSeats, @NotEmpty boolean hasTelevision, @NotEmpty boolean activeRoom) {
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

    public Integer getnumberOfSeats() {
        return numberOfSeats;
    }

    public void setnumberOfSeats(Integer numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
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
