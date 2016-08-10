/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.eficode.vis.model;

import com.google.gson.annotations.Expose;
import java.io.Serializable;

/**
 *
 * @author allhaker
 */
public final class AuthUser implements Serializable {

    @Expose
    long id;
    
    @Expose
    String username;
    
    @Expose
    String token;
    
    @Expose
    String role;

    public AuthUser() {
        this.id = 0l;
        this.username = "";
        this.token = "";
        this.role = "";
    }

    public AuthUser(User user, String token) {
        this.setId(user.getId());
        this.setUsername(user.getUsername());
        this.setToken(token);
        this.setRole(user.getUserRole().getName());
    }

    public String getToken() {
        return token;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", username=" + username + ", token=" + token + ", role=" + role + '}';
    }

}
