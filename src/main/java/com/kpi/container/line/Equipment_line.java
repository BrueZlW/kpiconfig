package com.kpi.container.line;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class Equipment_line {
    private Integer id;
    private double oee;
    private double Equipment_load_rate;
    private double Equipment_matain_rate;
    private double good_rate;
    private double noerros_rate;
    //@JsonFormat(pattern = "dd")
    private Date date;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public double getOee() {
        return oee;
    }

    public void setOee(double oee) {
        this.oee = oee;
    }

    public double getEquipment_load_rate() {
        return Equipment_load_rate;
    }

    public void setEquipment_load_rate(double equipment_load_rate) {
        Equipment_load_rate = equipment_load_rate;
    }

    public double getEquipment_matain_rate() {
        return Equipment_matain_rate;
    }

    public void setEquipment_matain_rate(double equipment_matain_rate) {
        Equipment_matain_rate = equipment_matain_rate;
    }

    public double getGood_rate() {
        return good_rate;
    }

    public void setGood_rate(double good_rate) {
        this.good_rate = good_rate;
    }

    public double getNoerros_rate() {
        return noerros_rate;
    }

    public void setNoerros_rate(double noerros_rate) {
        this.noerros_rate = noerros_rate;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Equipment_line{" +
                "id=" + id +
                ", oee=" + oee +
                ", Equipment_load_rate=" + Equipment_load_rate +
                ", Equipment_matain_rate=" + Equipment_matain_rate +
                ", good_rate=" + good_rate +
                ", noerros_rate=" + noerros_rate +
                ", date=" + date +
                '}';
    }
}
