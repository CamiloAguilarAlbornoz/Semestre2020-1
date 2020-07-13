<%@page import="edu.uptc.model.Employee"%>
<%@page import="java.util.ArrayList"%>
<%@page import="edu.uptc.model.ManagerEmployee"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Lista de Empleados</title>
		<link rel="stylesheet" href="css/empStyle.css" type="text/css">
	</head>
	<body>
		<%
			ManagerEmployee managerEmployee =(ManagerEmployee) request.getSession().getAttribute("manager");
			ArrayList<Employee> employeesList = managerEmployee.getEmployeesList();
		%>
		<h1>Cantidad de empleados : <%=employeesList.size() %></h1>
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
		<br>
		<form action="EmployeeServlet" method="post">
			<a href="./index.jsp">Volver a la pagina principal</a>
		</form>
	</body>
</html>