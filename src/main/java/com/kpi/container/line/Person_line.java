package com.kpi.container.line;

import java.util.Date;

public class Person_line {
    private Integer id;
    private double Pro_plan_comple_rate;
    private double Ontime_att_rate;
    private double Labor_productivity;
    private double Skills_growth;
    private double Effec_staff_alloca_rate;
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

    public double getPro_plan_comple_rate() {
        return Pro_plan_comple_rate;
    }

    public void setPro_plan_comple_rate(double pro_plan_comple_rate) {
        Pro_plan_comple_rate = pro_plan_comple_rate;
    }

    public double getOntime_att_rate() {
        return Ontime_att_rate;
    }

    public void setOntime_att_rate(double ontime_att_rate) {
        Ontime_att_rate = ontime_att_rate;
    }

    public double getLabor_productivity() {
        return Labor_productivity;
    }

    public void setLabor_productivity(double labor_productivity) {
        Labor_productivity = labor_productivity;
    }

    public double getSkills_growth() {
        return Skills_growth;
    }

    public void setSkills_growth(double skills_growth) {
        Skills_growth = skills_growth;
    }

    public double getEffec_staff_alloca_rate() {
        return Effec_staff_alloca_rate;
    }

    public void setEffec_staff_alloca_rate(double effec_staff_alloca_rate) {
        Effec_staff_alloca_rate = effec_staff_alloca_rate;
    }

    @Override
    public String toString() {
        return "Person_line{" +
                "id=" + id +
                ", Pro_plan_comple_rate=" + Pro_plan_comple_rate +
                ", Ontime_att_rate=" + Ontime_att_rate +
                ", Labor_productivity=" + Labor_productivity +
                ", Skills_growth=" + Skills_growth +
                ", Effec_staff_alloca_rate=" + Effec_staff_alloca_rate +
                ", date=" + date +
                '}';
    }
}
