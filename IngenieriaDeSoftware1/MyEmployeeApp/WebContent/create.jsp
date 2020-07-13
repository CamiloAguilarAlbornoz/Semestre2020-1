<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Agregar Empleado</title>
		<link rel="stylesheet" href="css/empStyle.css" type="text/css">
	</head>
	<body>
		<div>
			<h1>Agregar un empleado</h1>
			<form action="EmployeeServlet" method="post">
				<table class="content">
					<tr>
						<td>Ingresar el Id</td>
						<td>
							<input type="number" class="addData" name="id"/>
						</td>
					</tr>
					<tr>
						<td>Ingresar el Nombre</td>
						<td>
							<input type="text" class="addData" name="name"/>
						</td>
					</tr>
					<tr>
						<td>Ingresar el Correo Electronico</td>
						<td>
							<input type="email" class="addData" name="email"/>
						</td>
					</tr>
					<tr>
						<td>Ingresar el Numero Telefonico</td>
						<td>
							<input type="number" class="addData" name="phoneNumber"/>
						</td>
					</tr>
				</table>
				<br/>
				<input type="submit" class="create" name = "crud" value="Enviar"/>
				<br>
				<br>
				<input type="submit" class="create" name = "crud" value="Cancelar"/>
			</form>
		</div>
	</body>
</html>