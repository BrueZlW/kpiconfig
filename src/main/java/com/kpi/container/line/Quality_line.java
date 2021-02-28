package com.kpi.container.line;

import java.util.Date;

public class Quality_line {
    private Integer id;
    private double Part_error_rate;
    //private double Pro_plan_comple_rate;
    private double Part_waste_rate;
    private double Part_leftc_rate;
    private double Part_reduce_rate;
    private double Part_probad_rate;
    private Date date;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public double getPart_error_rate() {
        return Part_error_rate;
    }

    public void setPart_error_rate(double part_error_rate) {
        Part_error_rate = part_error_rate;
    }

//    public double getPro_plan_comple_rate() {
//        return Pro_plan_comple_rate;
//    }
//
//    public void setPro_plan_comple_rate(double pro_plan_comple_rate) {
//        Pro_plan_comple_rate = pro_plan_comple_rate;
//    }

    public double getPart_waste_rate() {
        return Part_waste_rate;
    }

    public void setPart_waste_rate(double part_waste_rate) {
        Part_waste_rate = part_waste_rate;
    }

    public double getPart_leftc_rate() {
        return Part_leftc_rate;
    }

    public void setPart_leftc_rate(double part_leftc_rate) {
        Part_leftc_rate = part_leftc_rate;
    }

    public double getPart_reduce_rate() {
        return Part_reduce_rate;
    }

    public void setPart_reduce_rate(double part_reduce_rate) {
        Part_reduce_rate = part_reduce_rate;
    }

    public double getPart_probad_rate() {
        return Part_probad_rate;
    }

    public void setPart_probad_rate(double part_probad_rate) {
        Part_probad_rate = part_probad_rate;
    }


}
