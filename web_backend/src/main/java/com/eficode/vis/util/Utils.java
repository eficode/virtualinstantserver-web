/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.eficode.vis.util;

import java.util.Collections;
import java.util.List;

/**
 *
 * @author allhaker
 */
public class Utils {
    
    public Long findLeastMissingValue(List list) {
        Collections.sort(list);
        for (int i = 0; i<list.size(); i++) {
            Long temp = (Long) list.get(i) - 101;
            if (temp != i) {
                return (new Long (i+1));
            }
        }
        return list.size() + 1l;
    }
}
