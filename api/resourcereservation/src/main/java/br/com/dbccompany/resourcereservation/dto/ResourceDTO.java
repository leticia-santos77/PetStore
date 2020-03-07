package br.com.dbccompany.resourcereservation.dto;

import org.springframework.data.mongodb.core.index.Indexed;

public class ResourceDTO {

    @Indexed(unique=true)
    private String name;

    private Integer numberOfSeats;

    private Boolean hasTelevision = null;

    private Boolean activeRoom = null;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(Integer numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
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
}
