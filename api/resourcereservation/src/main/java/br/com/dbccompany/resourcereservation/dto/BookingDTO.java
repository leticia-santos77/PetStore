package br.com.dbccompany.resourcereservation.dto;

import br.com.dbccompany.resourcereservation.model.Booking;
import br.com.dbccompany.resourcereservation.model.Resource;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotEmpty;
import java.util.Date;

public class BookingDTO {

    private Integer quantityOfPeople;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    private Date date;

    private Boolean canceled = null;

    private Boolean useTv = null;

    private String resourceId;

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

    public String getResourceId() {
        return resourceId;
    }

    public void setResourceId(String resourceId) {
        this.resourceId = resourceId;
    }
}
