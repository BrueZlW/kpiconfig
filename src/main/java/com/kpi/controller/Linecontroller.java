package com.kpi.controller;

import com.kpi.container.line.*;
import com.kpi.service.Lineservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/getline")
public class Linecontroller {
    @Autowired
    private Lineservice lineservice;

    @ResponseBody
    @RequestMapping("/showE")
    public List<Equipment_line> getlineEqui(){
        return lineservice.getELine("Equipment_line",4);
    }

    @ResponseBody
    @RequestMapping("/showPer")
    public List<Person_line> getlinePer(){
        return lineservice.getPersonLine("Person_line",4);
    }

    @ResponseBody
    @RequestMapping("/showPro")
    public List<Process_line> getlinePro(){
        return lineservice.getProLine("Process_line",4);
    }

    @ResponseBody
    @RequestMapping("/showQ")
    public List<Quality_line> getlineQua(){
        return lineservice.getQLine("Quality_line",4);
    }

    @ResponseBody
    @RequestMapping("/showL")
    public List<Logistics_line> getlineLog(){
        return lineservice.getLoLine("Logistics_line",4);
    }

    @ResponseBody
    @RequestMapping("/showPerinf")
    public List<Person_p_a> getlinepersoninf(){
        return lineservice.getperonpa("Person_p_a",1);
    }
}
