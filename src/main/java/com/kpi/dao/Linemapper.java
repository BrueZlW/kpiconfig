package com.kpi.dao;

import com.kpi.container.line.*;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface Linemapper {
    //查询line层
    List<Equipment_line> getELine(String table,int limit);
    List<Person_line> getPersonLine(String table, int limit);
    List<Process_line> getProLine(String table, int limit);
    List<Quality_line> getQLine(String table, int limit);
    List<Logistics_line> getLoLine(String table, int limit);
    List<Person_p_a> getperonpa(String table, int limit);

}
