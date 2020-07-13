package edu.uptc.model;

import java.util.ArrayList;

public class ManagerEmployee {

	private ArrayList<Employee> employeesList;

	public ManagerEmployee() {
		employeesList = new ArrayList<>();
	}
	
	public static Employee createEmployee(int id, String name, String email, long phoneNumber) {
		return new Employee(id, name, email, phoneNumber);
	}
	
	public static Employee createEmployee(int id) {
		return new Employee(id);
	}
	
	public void addEmployee(Employee employee) {
		employeesList.add(employee);
	}
	
	public void updateEmployee(int id, int newId, String name, String email, long phoneNumber) {
		Employee aux = new Employee(id);
		for (Employee employee : employeesList) {
			if (employee.equals(aux)) {
				employee.update(newId, name, email, phoneNumber);
				break;
			}
		}
	}

	public void removeEmployee(Employee employee) {
		employeesList.remove(employee);
	}

	public ArrayList<Employee> getEmployeesList() {
		return employeesList;
	}
}
