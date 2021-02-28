package com.kpi.service;

import com.kpi.container.line.*;
import com.kpi.dao.Linemapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Lineservice {
    @Autowired
    private Linemapper linemapper;

    public List<Equipment_line> getELine(String table, int limit){

        return linemapper.getELine(table,limit);
    };
    public List<Person_line> getPersonLine(String table, int limit){
        return linemapper.getPersonLine(table,limit);
    };
    public List<Process_line> getProLine(String table, int limit){
        return linemapper.getProLine(table,limit);
    };
    public List<Quality_line> getQLine(String table, int limit){
        return linemapper.getQLine(table,limit);
    };
    public List<Logistics_line> getLoLine(String table, int limit){
        return linemapper.getLoLine(table,limit);
    };
    public List<Person_p_a> getperonpa(String table, int limit){
        return linemapper.getperonpa(table,limit);
    }



}
