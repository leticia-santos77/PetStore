package br.com.dbccompany.resourcereservation.model;

import java.util.Date;

public class BookingResponseDTO {

    private String id;
    private Test test_id;
    private Integer quantityOfPeople;
    private Date date;
    private Date creationDate;
    private Boolean canceled;
    private Boolean use_tv;

    public BookingResponseDTO(String id, Test test_id, Integer quantityOfPeople, Date date, Date creationDate, Boolean canceled, Boolean use_tv) {
    }

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

    public static BookingResponseDTO toDTO(Booking booking) {
        return new BookingResponseDTO(booking.getId(), booking.getTest_id(), booking.getQuantityOfPeople(), booking.getDate(), booking.getCreationDate(), booking.getCanceled(), booking.getUse_tv());
    }

}
