package edu.uptc.test;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import edu.uptc.entity.ClinicHistory;
import edu.uptc.entity.Person;

public class TestInsertarPerson {

	public static void main(String[] args) {
		EntityManagerFactory managerFactory = Persistence.createEntityManagerFactory("JPA_PU");
		EntityManager entityManager = managerFactory.createEntityManager();
		EntityTransaction entityTransaction = entityManager.getTransaction();
		Person person = new Person("1073385271", "Aguilar Albornoz", "Camilo Andres", "C.C");
		ClinicHistory clinicHistory = new ClinicHistory(2);
		clinicHistory.setPerson(person);
		person.setClinicHistory(clinicHistory);
		entityTransaction.begin();
		entityManager.persist(person);
		entityTransaction.commit();
	}

}
