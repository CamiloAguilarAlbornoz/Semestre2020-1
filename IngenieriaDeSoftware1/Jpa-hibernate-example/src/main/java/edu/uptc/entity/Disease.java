package edu.uptc.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "enfermedad")
public class Disease {

	@Id
	@Column(name = "id")
	private int id;
	@Column(name = "nombre")
	private String name;
	@Column(name = "descripción")
	private int description;
	@ManyToMany(mappedBy = "diseasesList")
	private List<Person> personsList;
	
	public Disease(int id, String name, int description) {
		this.id = id;
		this.name = name;
		this.description = description;
		personsList = new ArrayList<Person>();
	}

	public Disease() {
		personsList = new ArrayList<Person>();
	}

	public void setPersonsList(ArrayList<Person> personsList) {
		this.personsList = personsList;
	}
}
