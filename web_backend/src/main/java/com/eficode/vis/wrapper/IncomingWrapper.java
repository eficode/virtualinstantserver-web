package com.eficode.vis.wrapper;

import com.auth0.jwt.JWTVerifyException;
import com.eficode.vis.dao.UserDao;
import com.eficode.vis.exception.header.ExpiredTokenException;
import com.eficode.vis.exception.header.InvalidTokenException;
import com.eficode.vis.exception.header.WrongUserIdException;
import com.eficode.vis.exception.header.WrongVersionException;
import com.eficode.vis.jwt.JWT;
import com.eficode.vis.model.User;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;

public class IncomingWrapper {

    private static final int VERSION = 2;

    public void HandleMessage(int version, long userId, String token, String message) throws WrongVersionException,
            WrongUserIdException, ExpiredTokenException, InvalidTokenException {
        UserDao userDao = new UserDao();
        User user = userDao.get(userId);
        if (VERSION != version) {
            throw new WrongVersionException();
        } else if (user == null) {
            throw new WrongUserIdException();
        } else {
            try {
                if (!(new JWT().verifyJwr(token))) {                    
                    throw new InvalidTokenException();
                }
            } catch (NoSuchAlgorithmException | InvalidKeyException | IllegalStateException | IOException | SignatureException | JWTVerifyException ex) {
                if (ex.getMessage().equals("jwt expired")) {
                    throw new ExpiredTokenException();
                }                
                throw new InvalidTokenException();              
            }
        }
    }

    public void CheckUnauthorizesMessage(int version, String message) throws WrongVersionException {
        if (VERSION != version) {
            throw new WrongVersionException();
        }
    }
}
