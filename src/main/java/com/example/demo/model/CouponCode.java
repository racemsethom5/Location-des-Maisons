package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "couponcode")
@Entity
public class CouponCode {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String nom;
	private int  val;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom=nom ;	}
	public int getVal() {
		return val;
	}
	public void setVal(int val) {
		this.val = val;
	}
	@Override
	public String toString() {
		return "CouponCode [id=" + id + ", name=" + nom + ", val=" + val + "]";
	}
	

}
