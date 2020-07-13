package edu.uptc.model;

public class Employee {

	private int id;
	private String name;
	private String email;
	private long phoneNumber;
	
	public Employee(int id, String name, String email, long phoneNumber) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.phoneNumber = phoneNumber;
	}

	public Employee(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}
	
	public void update(int id, String name, String email, long phoneNumber) {
		if (id > 0) {
			this.id = id;
		}
		if (name != "") {
			this.name = name;
		}
		if (email != "") {
			this.email = email;
		}
		if (phoneNumber > 0) {
			this.phoneNumber = phoneNumber;
		}
	}

	@Override
	public boolean equals(Object obj) {
		Employee employee = (Employee) obj;
		return id == employee.id;
	}
}
