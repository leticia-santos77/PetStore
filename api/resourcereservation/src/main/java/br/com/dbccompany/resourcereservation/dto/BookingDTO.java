package br.com.dbccompany.resourcereservation.dto;

import br.com.dbccompany.resourcereservation.model.Booking;
import br.com.dbccompany.resourcereservation.model.Resource;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotEmpty;
import java.util.Date;

public class BookingDTO {
    @NotEmpty
    private Integer quantityOfPeople;

    @NotEmpty
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm")
    private Date date;

    @NotEmpty
    private Boolean canceled;

    @NotEmpty
    private Boolean useTv;

    // raf
    private String resourceId;

    public String getResourceId() {
        return resourceId;
    }

    public void setResourceId(String resourceId) {
        this.resourceId = resourceId;
    }

    public Integer getQuantityOfPeople() {
        return quantityOfPeople;
    }

    public void setQuantityOfPeople(Integer quantityOfPeople) {
        this.quantityOfPeople = quantityOfPeople;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Boolean getCanceled() {
        return canceled;
    }

    public void setCanceled(Boolean canceled) {
        this.canceled = canceled;
    }

    public Boolean getUseTv() {
        return useTv;
    }

    public void setUseTv(Boolean useTv) {
        this.useTv = useTv;
    }

    public Booking turnsToObject(){
        return new Booking( this.quantityOfPeople, this.date, this.canceled, this.useTv, this.resourceId );
    }

}
