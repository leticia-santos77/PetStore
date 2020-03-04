package br.com.dbccompany.resourcereservation.dto;

import br.com.dbccompany.resourcereservation.model.Resource;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class ResourceDTO {

    @NotEmpty
    private String name;

    @NotEmpty
    private Integer numberOfSeats;

    @NotEmpty
    private boolean hasTelevision;

    @NotEmpty
    private boolean activeRoom;

    public Resource toObject(){
        return new Resource(this.name,this.numberOfSeats,this.hasTelevision,this.activeRoom);
    }

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
}
