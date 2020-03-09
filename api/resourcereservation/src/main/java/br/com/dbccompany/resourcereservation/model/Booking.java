package br.com.dbccompany.resourcereservation.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Document(collection = "Booking")
public class Booking {

    @Id
    @NotNull
    private String id;

    @NotEmpty
    private String resourceId;

    private String resourceName;
    @NotEmpty
    private Integer quantityOfPeople;

    @NotEmpty
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    private Date date;

    @NotEmpty
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private Date creationDate;

    @NotEmpty
    private Boolean canceled = null;

    @NotEmpty
    private Boolean useTv = null;

    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
    }


    public Booking(@NotEmpty Integer quantityOfPeople, @NotEmpty Date date, @NotEmpty Boolean canceled, @NotEmpty Boolean useTv, @NotEmpty String  resourceId,String resourceName) {
        this.quantityOfPeople = quantityOfPeople;
        this.date = date;
        this.canceled = canceled;
        this.useTv = useTv;
        this.resourceId = resourceId;
        this.resourceName = resourceName;
    }


    public Booking() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

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

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
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
}