package br.com.dbccompany.resourcereservation.dto;

import br.com.dbccompany.resourcereservation.model.Resource;

public class ResourceDTO {

    private String name;

    private Integer numberOfSeats;

    private boolean hasTelevision;

    private boolean activeRoom = true;

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
