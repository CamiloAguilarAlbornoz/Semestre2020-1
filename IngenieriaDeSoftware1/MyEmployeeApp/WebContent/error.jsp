<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<link rel="stylesheet" href="css/empStyle.css" type="text/css">
	</head>
	<body>
		<%
			String error = String.valueOf(request.getSession().getAttribute("error"));
		%>
		<h1>!!!!!Error</h1>
		<h2>Ha ingreado uno o varios datos incorrectamente</h2>
		<br/>
		<a href='<%="." + error  %>'>Volver...</a>
	</body>
</html>