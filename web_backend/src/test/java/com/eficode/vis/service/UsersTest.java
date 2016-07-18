/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.eficode.vis.service;

import com.eficode.vis.model.UserRest;
import org.junit.After;
import org.junit.AfterClass;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author yevgen
 */
public class UsersTest {

    
    private static int version;
    private static long userId;
    private static String password;
    private static String urlBase;
    
    @BeforeClass
    public static void setUpClass() throws Exception {
        UsersTest.version = 2;
        UsersTest.userId = 2l;
        UsersTest.password = "SuperUser1Pass";
        UsersTest.urlBase = "http://localhost:8080/VIS/users";
    }

    @AfterClass
    public static void tearDownClass() throws Exception {
    }

    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {
    }

    /**
     * Test of listUsers method, of class Users.
     */
    /*@Test
    public void testListUsers() {
        System.out.println("listUsers");
        int version = 2;
        long userId = 2;
        String password = "SuperUser1Pass";
        String message = "";
        Users instance = new Users();
        String expResult = "";
        String result = instance.listUsers(version, userId, password, message);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }*/

    /*
    @Test
    public void testGetUser() {
        System.out.println("getUser");
        Long id = null;
        int version = 0;
        long userId = 0L;
        String password = "";
        String message = "";
        Users instance = new Users();
        String expResult = "";
        String result = instance.getUser(id, version, userId, password, message);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    
    @Test
    public void testCreateUser() {
        System.out.println("createUser");
        UserRest data = null;
        int version = 0;
        long userId = 0L;
        String password = "";
        String message = "";
        Users instance = new Users();
        String expResult = "";
        String result = instance.createUser(data, version, userId, password, message);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    
    @Test
    public void testUpdateUser() {
        System.out.println("updateUser");
        Long id = null;
        UserRest data = null;
        int version = 0;
        long userId = 0L;
        String password = "";
        String message = "";
        Users instance = new Users();
        String expResult = "";
        String result = instance.updateUser(id, data, version, userId, password, message);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    
    @Test
    public void testDeleteUser() {
        System.out.println("deleteUser");
        Long id = null;
        int version = 0;
        long userId = 0L;
        String password = "";
        String message = "";
        Users instance = new Users();
        String expResult = "";
        String result = instance.deleteUser(id, version, userId, password, message);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    
    @Test
    public void testLogin() {
        System.out.println("login");
        UserRest data = null;
        int version = 0;
        String message = "";
        Users instance = new Users();
        String expResult = "";
        String result = instance.login(data, version, message);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    
    @Test
    public void testListVMUsers() {
        System.out.println("listVMUsers");
        Long id = null;
        int version = 0;
        long userId = 0L;
        String password = "";
        String message = "";
        Users instance = new Users();
        String expResult = "";
        String result = instance.listVMUsers(id, version, userId, password, message);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    
    @Test
    public void testChangePassword() {
        System.out.println("changePassword");
        Long id = null;
        UserRest data = null;
        int version = 0;
        long userId = 0L;
        String password = "";
        String message = "";
        Users instance = new Users();
        String expResult = "";
        String result = instance.changePassword(id, data, version, userId, password, message);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    
    @Test
    public void testRestorePassword() {
        System.out.println("restorePassword");
        String email = "";
        int version = 0;
        String message = "";
        Users instance = new Users();
        String expResult = "";
        String result = instance.restorePassword(email, version, message);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }*/
    
}
