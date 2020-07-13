<%@page import="edu.uptc.model.ManagerEmployee"%>
<%@page import="java.util.ArrayList"%>
<%@page import="edu.uptc.model.Employee"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Eliminar un empleado</title>
		<link rel="stylesheet" href="css/empStyle.css" type="text/css">
	</head>
	<body>
		<h1>Eliminar un empleado de la lista</h1>
		<hr/>
		<h2>Lista de empleados sin modificar</h2>
		<% 
			ManagerEmployee managerEmployee =(ManagerEmployee) request.getSession().getAttribute("manager_delete");
			ArrayList<Employee> employeesList = managerEmployee.getEmployeesList();
		%>
		<table border="1">
			<tr>
				<th>Id</th>
				<th>Nombre</th>
				<th>Correo Electronico</th>
				<th>Numero Telefonico</th>
			</tr>
			<%
				for (Employee employee : employeesList) {
					%>
					<tr>
						<td><%=employee.getId() %></td>
						<td><%=employee.getName() %></td>
						<td><%=employee.getEmail() %></td>
						<td><%=employee.getPhoneNumber() %></td>
					</tr>
					<%
				}
			%>
		</table>
		<br/>
		<form action="EmployeeServlet" method="post">
			<label class="content" for="toDelete">
				<strong>Ingresar el identificador del empleado que desea eliminar</strong>
				<input type="number" class="addData" name="toDelete"/>
			</label>
			<br/>
			<br/>
			<input type="submit" class="create" name="crud" value="Eliminar"/>
			<br/>
			<br/>
			<input type="submit" class="create" name = "crud" value="Cancelar"/>
		</form>
	</body>
</html>