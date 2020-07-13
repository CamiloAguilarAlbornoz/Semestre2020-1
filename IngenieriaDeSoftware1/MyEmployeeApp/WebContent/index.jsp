<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="css/empStyle.css" type="text/css">
		<title>Formulario</title>
	</head>
	<body>
		<form action="EmployeeServlet" method="post">
			<div class="topnav">
				<input type="submit" class="btn" name="crud" value="Agregar Empleado"/>
				<input type="submit" class="btn" name="crud" value="Mostrar Empleados"/>
				<input type="submit" class="btn" name="crud" value="Actualizar Datos de Empleados">
				<input type="submit" class="btn" name="crud" value="Eliminar Empleado"/>
			</div>
		</form>
	</body>
</html>