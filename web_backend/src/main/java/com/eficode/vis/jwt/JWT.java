/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.eficode.vis.jwt;

import com.auth0.jwt.JWTSigner;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.JWTVerifyException;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author allhaker
 */
public class JWT {

    final String issuer;
    final String secret;
    final String audience;

    public JWT() {
        this.issuer = "https://localhost.com/";
        this.secret = "dfjijo09 *(ioljP{O;;mklBHJVKG)9udh";
        this.audience = "every_body";
    }

    public String signInJwt(Long time) {
        final long iat = System.currentTimeMillis() / 1000l; // issued at claim 
        final long exp = iat + time; // expires claim.        
        final JWTSigner signer = new JWTSigner(this.secret);
        final HashMap<String, Object> claims = new HashMap<>();
        
        claims.put("iss", this.issuer);
        claims.put("exp", exp);
        claims.put("iat", iat);
        claims.put("aud", this.audience);

        final String jwt = signer.sign(claims);

        return jwt;
    }

    public boolean verifyJwr(String jwt) throws NoSuchAlgorithmException, InvalidKeyException, IllegalStateException, IOException, SignatureException, JWTVerifyException {
        final JWTVerifier verifier = new JWTVerifier(this.secret, this.audience, this.issuer);
        final Map<String, Object> claims = verifier.verify(jwt);

        return true;
    }
}
