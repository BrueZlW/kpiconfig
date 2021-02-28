package com.kpi.container.line;

import java.util.Date;

public class Logistics_line {
    private Integer id;
    private double linebalance_l;
//    private double Pro_shift_meet_l;
//    private double Noproduc_l;
    private double Linesmooth;
    private Date date;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public double getLinebalance_l() {
        return linebalance_l;
    }

    public void setLinebalance_l(double linebalance_l) {
        this.linebalance_l = linebalance_l;
    }

//    public double getPro_shift_meet_l() {
//        return Pro_shift_meet_l;
//    }
//
//    public void setPro_shift_meet_l(double pro_shift_meet_l) {
//        Pro_shift_meet_l = pro_shift_meet_l;
//    }
//
//    public double getNoproduc_l() {
//        return Noproduc_l;
//    }
//
//    public void setNoproduc_l(double noproduc_l) {
//        Noproduc_l = noproduc_l;
//    }

    public double getLinesmooth() {
        return Linesmooth;
    }

    public void setLinesmooth(double linesmooth) {
        Linesmooth = linesmooth;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }


}
