package edu.uptc.test;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import edu.uptc.entity.ClinicHistory;
import edu.uptc.entity.Person;

public class TestInsertClinicHistory {

	public static void main(String[] args) {
		EntityManagerFactory managerFactory = Persistence.createEntityManagerFactory("JPA_PU");
		EntityManager entityManager = managerFactory.createEntityManager();
		EntityTransaction entityTransaction = entityManager.getTransaction();
		ClinicHistory clinicHistory = new ClinicHistory(1);
		Person person = new Person("97092916220", "Murcia Albornoz", "Samuel David", "T.I");
		person.setClinicHistory(clinicHistory);
		clinicHistory.setPerson(person);
		entityTransaction.begin();
		entityManager.persist(clinicHistory);
		entityTransaction.commit();
	}
}