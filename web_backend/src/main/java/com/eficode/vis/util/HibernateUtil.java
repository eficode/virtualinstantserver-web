package com.eficode.vis.util;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;

public class HibernateUtil {

    private static SessionFactory sessionFactory = createSessionFactory();
    private static ServiceRegistry serviceRegistry;
    
    public static SessionFactory createSessionFactory() {
        Configuration configuration = getConfiguration();
        serviceRegistry = new ServiceRegistryBuilder().applySettings(configuration.getProperties()).buildServiceRegistry();
        sessionFactory = configuration.buildSessionFactory(serviceRegistry);
        return sessionFactory;
    }
    
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
    
    public static void shutdown() {
        getSessionFactory().close();
    }
    
    private static Configuration getConfiguration() {
        Configuration configuration;
        
        if (new Utils().checkIfProductionEnvironment()) {
           configuration = new Configuration().configure(); 
        } else {
           configuration = new Configuration().configure("hibernate_dev.cfg.xml"); 
        }
        
        return configuration;
    }
}
