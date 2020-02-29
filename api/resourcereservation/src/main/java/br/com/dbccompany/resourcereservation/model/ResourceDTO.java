package br.com.dbccompany.resourcereservation.model;

import javax.validation.constraints.NotNull;

public class ResourceDTO {

    @NotNull
    private String name;

    @NotNull
    private Integer quantityOfPlaces;

    @NotNull
    private boolean hasTelevision;

    @NotNull
    private boolean activeRoom;

    public Resource toObject(){
        return new Resource(this.name,this.quantityOfPlaces,this.hasTelevision,this.activeRoom);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
}
