package edu.uptc.entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "persona")
public class Person {
	
	@Id
	@Column(name = "documento")
	private String documentID;
	@Column(name = "apellidos")	
	private String lastName;
	@Column(name = "fecha_nacimiento")
	private Date date;
	@Column(name = "nombres")
	private String name;
	@Column(name = "tipo_documento")
	private String docType;
	@OneToOne(mappedBy = "person", cascade = CascadeType.PERSIST)
	@JoinColumn(name = "hc_documento", referencedColumnName = "documento")
	private ClinicHistory clinicHistory;
	@ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	@JoinTable(
			name = "persona_enfermedad",
			joinColumns = @JoinColumn(name = "documento"),
			inverseJoinColumns = @JoinColumn(name = "id")
			)
	private List<Disease> diseasesList;
	
	public Person(String documentID, String lastName, String name, String docType) {
		this.documentID = documentID;
		this.lastName = lastName;
		this.name = name;
		this.docType = docType;
		diseasesList = new ArrayList<Disease>();
	}
	
	public void setClinicHistory(ClinicHistory clinicHistory) {
		this.clinicHistory = clinicHistory;
	}

	public Person() {
		diseasesList = new ArrayList<Disease>();
	}

	public void setDiseasesList(ArrayList<Disease> diseasesList) {
		this.diseasesList.addAll(diseasesList);
	}
}
