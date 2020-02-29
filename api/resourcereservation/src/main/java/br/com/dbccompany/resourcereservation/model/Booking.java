package br.com.dbccompany.resourcereservation.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Document(collection = "Booking")
public class Booking {

    @Id
    private String id;

    @DBRef
    private Test test_id;

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

    public Booking( Integer quantityOfPeople, Date date, Boolean canceled, Boolean use_tv ){
        this.quantityOfPeople = quantityOfPeople;
        this.date = date;
        this.canceled = canceled;
        this.use_tv = use_tv;
    }

    public Booking(){}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Test getTest_id() {
        return test_id;
    }

    public void setTest_id(Test test_id) {
        this.test_id = test_id;
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

    public Boolean getUse_tv() {
        return use_tv;
    }

    public void setUse_tv(Boolean use_tv) {
        this.use_tv = use_tv;
    }
}
