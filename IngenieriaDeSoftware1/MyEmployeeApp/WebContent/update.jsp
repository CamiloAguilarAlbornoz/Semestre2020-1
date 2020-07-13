<%@page import="edu.uptc.model.Employee"%>
<%@page import="java.util.ArrayList"%>
<%@page import="edu.uptc.model.ManagerEmployee"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Actualizar Datos</title>
		<link rel="stylesheet" href="css/empStyle.css" type="text/css">
	</head>
	<body>
		<h1>Actualizar datos de un empleado</h1>
		<hr/>
		<h2>Empleados con sus datos sin modificar</h2>
		<% 
			ManagerEmployee managerEmployee =(ManagerEmployee) request.getSession().getAttribute("manager_update");
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
		<hr/>
		<form action="EmployeeServlet" method="post">
			<label for="firstid" class="content">
				<strong>Ingresar el identificador del empleado que desea modificar</strong>
				<input type="number" class="addData" name="firstid"/>
			</label>
			<hr/>
			<h3>Ingrese los datos que desea actualizar</h3>
			<hr/>
			<table class="content">
				<tr>
					<td>Ingresar el Id</td>
					<td>
						<input type="number" class="addData" name="secondid"/>
					</td>
				</tr>
				<tr>
					<td>Ingresar el Nombre</td>
					<td>
						<input type="text" class="addData" name="secondname"/>
					</td>
				</tr>
				<tr>
					<td>Ingresar el Correo Electronico</td>
					<td>
						<input type="email" class="addData" name="secondemail"/>
					</td>
				</tr>
				<tr>
					<td>Ingresar el Numero Telefonico</td>
					<td>
						<input type="number" class="addData" name="secondphoneNumber"/>
					</td>
				</tr>
			</table>
			<br/>
			<input type="submit" class="create" name="crud" value="Actualizar"/>
			<br>
			<br>
			<input type="submit" class="create" name = "crud" value="Cancelar"/>
		</form>
	</body>
</html>