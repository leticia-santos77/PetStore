package br.com.dbccompany.resourcereservation.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Document(collection = "Booking")
public class Booking {

    @Id
    private String id;

    @NotEmpty
    private String resourceId;

    @NotEmpty
    private Integer quantityOfPeople;

    @NotEmpty
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm")
    private Date date;

    @NotEmpty
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date creationDate;

    @NotEmpty
    private boolean canceled = false;

    @NotEmpty
    private boolean useTv = false;

    public Booking(@NotEmpty Integer quantityOfPeople, @NotEmpty Date date,@NotEmpty boolean canceled,@NotEmpty boolean useTv,@NotEmpty String  resourceId) {
        this.quantityOfPeople = quantityOfPeople;
        this.date = date;
        this.canceled = canceled;
        this.useTv = useTv;
        this.resourceId = resourceId;
    }


    public Booking() {
    }


    public String getResourceId() {
        return resourceId;
    }

    public void setResourceId(String resourceId) {
        this.resourceId = resourceId;
    }

    public boolean getUseTv() {
        return useTv;
    }

    public void setUseTv(boolean useTv) {
        this.useTv = useTv;
    }
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public boolean getCanceled() {
        return canceled;
    }

    public void setCanceled(boolean canceled) {
        this.canceled = canceled;
    }
}