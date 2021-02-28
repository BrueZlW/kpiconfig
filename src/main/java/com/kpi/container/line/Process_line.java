package com.kpi.container.line;

import java.util.Date;

public class Process_line {
    private Integer id;
    //private double oee_p;
    //private double Pro_plan_comple_rate_p;
    private double Pro_shift_meet;
    private double Pro_quatity;
    private double linebalance;
    private double Noproduc;
    private Date date;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

//    public double getOee_p() {
//        return oee_p;
//    }
//
//    public void setOee_p(double oee_p) {
//        this.oee_p = oee_p;
//    }

    public double getPro_shift_meet() {
        return Pro_shift_meet;
    }

    public void setPro_shift_meet(double pro_shift_meet) {
        Pro_shift_meet = pro_shift_meet;
    }

    public double getPro_quatity() {
        return Pro_quatity;
    }

    public void setPro_quatity(double pro_quatity) {
        Pro_quatity = pro_quatity;
    }

    public double getLinebalance() {
        return linebalance;
    }

    public void setLinebalance(double linebalance) {
        this.linebalance = linebalance;
    }

    public double getNoproduc() {
        return Noproduc;
    }

    public void setNoproduc(double noproduc) {
        Noproduc = noproduc;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
