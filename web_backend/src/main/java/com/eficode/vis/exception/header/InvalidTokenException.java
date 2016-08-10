/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.eficode.vis.exception.header;

/**
 *
 * @author allhaker
 */
public class InvalidTokenException extends HeaderException{
    @Override
    public String getMessage(){
        return "Web Token Expired";
    }
}
