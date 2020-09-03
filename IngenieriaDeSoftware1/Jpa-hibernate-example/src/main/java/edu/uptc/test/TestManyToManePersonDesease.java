package edu.uptc.test;

import java.util.ArrayList;
import java.util.function.Consumer;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import edu.uptc.entity.Disease;
import edu.uptc.entity.Person;

public class TestManyToManePersonDesease {

	public static void main(String[] args) {
		EntityManagerFactory managerFactory = Persistence.createEntityManagerFactory("JPA_PU");
		EntityManager entityManager = managerFactory.createEntityManager();
		EntityTransaction entityTransaction = entityManager.getTransaction();
		ArrayList<Disease> diseasesList = new ArrayList<Disease>();
		diseasesList.add(new Disease(0, "Hemorroides", 100));
		diseasesList.add(new Disease(1, "Deabetes", 300));
		diseasesList.add(new Disease(2, "Apendisitis", 500));
		ArrayList<Person> personsList = new ArrayList<Person>();
		personsList.add(new Person("666", "uribe", "alvaro", "hdpta"));
		personsList.add(new Person("11 11 11", "arango", "alicia", "ptaprra"));
		personsList.add(new Person("no tiene por bruta", "caval", "maria fernanda", "ptabruta"));
		personsList.forEach(new Consumer<Person>() {

			@Override
			public void accept(Person person) {
				person.setDiseasesList(diseasesList);
				entityTransaction.begin();
				entityManager.persist(person);
				entityTransaction.commit();
			}
		});
	}
}
