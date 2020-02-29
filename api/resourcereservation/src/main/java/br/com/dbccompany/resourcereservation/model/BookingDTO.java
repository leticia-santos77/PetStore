package br.com.dbccompany.resourcereservation.model;

import javax.validation.constraints.NotEmpty;
import java.util.Date;

public class BookingDTO {

    //nome do recurso

    @NotEmpty
    private Integer quantityOfPeople;

    @NotEmpty
    private Date date;

    @NotEmpty
    private Boolean canceled;

    @NotEmpty
    private Boolean use_tv;

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

    public Boolean getUse_tv() {
        return use_tv;
    }

    public void setUse_tv(Boolean use_tv) {
        this.use_tv = use_tv;
    }

    public Booking turnsToObject(){
        return new Booking( this.quantityOfPeople, this.date, this.canceled, this.use_tv );
    }

}
