package br.com.dbccompany.resourcereservation.model;

import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.context.annotation.EnableMBeanExport;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Document(collection = "Booking")
public class Booking {

    @Id
    private String id;

//    @DBRef
//    private Resources resource_id;

    @NotEmpty
    private Integer quantityOfPeople;

    @NotEmpty
    private Date date;

    @NotEmpty
    private Date creationDate;

    @NotEmpty
    private Boolean canceled;

    @NotEmpty
    private Boolean use_tv;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

//    public Resources getResource_id() {
//        return resource_id;
//    }
//
//    public void setResource_id(Resources resource_id) {
//        this.resource_id = resource_id;
//    }

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

    public Boolean getUse_tv() {
        return use_tv;
    }

    public void setUse_tv(Boolean use_tv) {
        this.use_tv = use_tv;
    }
}
