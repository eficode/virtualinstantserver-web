/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.eficode.vis.util;

import java.nio.charset.Charset;
import java.util.Collections;
import java.util.List;

/**
 *
 * @author allhaker
 */
public class Utils {

    public Long findLeastMissingValue(List list) {
        Collections.sort(list);
        for (int i = 0; i < list.size(); i++) {
            Long temp = (Long) list.get(i) - 101;
            if (temp != i) {
                return (new Long(i + 1));
            }
        }
        return list.size() + 1l;
    }

    public String getEnvironment() {
        if (System.getenv("VIS_ENV") != null) {
            return System.getenv("VIS_ENV");
        }
        return "undefined";
    }

    public boolean checkIfProductionEnvironment() {
        String env = getEnvironment().toLowerCase();
        return !(env.equals("docker") || env.equals("dev") || env.equals("development"));
    }

    public String MD5(String md5) {
        try {
            java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");
            byte[] array = md.digest(md5.getBytes(Charset.forName("UTF-8")));
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < array.length; ++i) {
                sb.append(Integer.toHexString((array[i] & 0xFF) | 0x100).substring(1, 3));
            }
            return sb.toString();
        } catch (java.security.NoSuchAlgorithmException e) {
        }
        return null;
    }
}
