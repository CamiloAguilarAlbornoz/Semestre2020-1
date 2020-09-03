package edu.uptc.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="historiaclinica")
public class ClinicHistory {

	@Id
	@Column(name = "id")
	private int id;
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "persona_documento", referencedColumnName = "documento")
	private Person person;
	
	public ClinicHistory(int id) {
		this.id = id;
	}

	public ClinicHistory() {}

	public void setPerson(Person person) {
		this.person = person;
	}
}
