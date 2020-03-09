package br.com.dbccompany.resourcereservation.dto;

import org.springframework.data.mongodb.core.index.Indexed;

public class UserDTO {
    @Indexed(unique=true)
    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
