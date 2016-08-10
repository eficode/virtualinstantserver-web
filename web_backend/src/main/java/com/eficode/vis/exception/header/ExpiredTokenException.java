package com.eficode.vis.exception.header;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author allhaker
 */


public class ExpiredTokenException extends HeaderException {

    @Override
    public String getMessage(){
        return "Web Token Expired";
    }
}
