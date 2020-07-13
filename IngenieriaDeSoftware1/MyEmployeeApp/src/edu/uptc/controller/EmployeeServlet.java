package edu.uptc.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.uptc.model.ManagerEmployee;

/**
 * Servlet implementation class EmployeeServlet
 */
@WebServlet("/EmployeeServlet")
public class EmployeeServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	private static final String CRUD = "crud";
	private static final String CREATE = "Agregar Empleado";
	private static final String READ = "Mostrar Empleados";
	private static final String SEND = "Enviar";
	private static final String DELETE = "Eliminar Empleado";
	private static final String UPDATE = "Actualizar Datos de Empleados";
	private static final String UPDATE_ALL = "Actualizar";
	private static final String DELETE_SELECT = "Eliminar";
	private static final String CANCEL = "Cancelar";
	
	protected ManagerEmployee managerEmployee;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EmployeeServlet() {
        super();
        managerEmployee = new ManagerEmployee();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		switch (request.getParameter(CRUD)) {
		case CREATE:
			response.sendRedirect(request.getContextPath() + "/create.jsp");
			break;
		case READ:
			read(request, response);
			break;
		case UPDATE:
			update(request, response);
			break;
		case DELETE:
			delete(request, response);
			break;
		case SEND:
			create(request, response);
			break;
		case UPDATE_ALL:
			updateAll(request, response);
			break;
		case DELETE_SELECT:
			delecteSelect(request, response);
			break;
		case CANCEL:
			response.sendRedirect(request.getContextPath() + "/index.jsp");
			break;
		}
	}

	private void delecteSelect(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String initialId = request.getParameter("toDelete");
		if (!initialId.equals("")) {
			managerEmployee.removeEmployee(ManagerEmployee.createEmployee(Integer.parseInt(initialId)));
			response.sendRedirect(request.getContextPath() + "/confirm.jsp");
		} else {
			request.getSession().setAttribute("error", "/delete.jsp");
			response.sendRedirect(request.getContextPath() + "/error.jsp");
		}
	}

	private void update(HttpServletRequest request, HttpServletResponse response) throws IOException {
		request.getSession().setAttribute("manager_update", managerEmployee);
		response.sendRedirect(request.getContextPath() + "/update.jsp");
	}

	private void updateAll(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String initialId = request.getParameter("firstid");
		if (!initialId.equals("")) {
			int id = Integer.parseInt(initialId);
			String initialNewId = request.getParameter("secondid");
			int newId = !initialNewId.equals("") ? Integer.parseInt(initialNewId) : 0;
			String name = request.getParameter("secondname");
			String email = request.getParameter("secondemail");
			String initialPhoneNumber = request.getParameter("secondphoneNumber");
			long phoneNumber = !initialPhoneNumber.equals("") ? Long.parseLong(initialPhoneNumber) : 0;
			managerEmployee.updateEmployee(id, newId, name, email, phoneNumber);
			response.sendRedirect(request.getContextPath() + "/confirm.jsp");
		} else {
			request.getSession().setAttribute("error", "/update.jsp");
			response.sendRedirect(request.getContextPath() + "/error.jsp");
		}
	}

	private boolean isApropiate(int id, String name, String email, long phoneNumber) {
		return id > 0 && phoneNumber > 0 && !name.equals("") && !email.equals("");
	}
	
	private void create(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String initialId = request.getParameter("id");
		String initialPhoneNumber = request.getParameter("phoneNumber");
		if (!initialId.equals("") && !initialPhoneNumber.equals("")) {
			int id = Integer.parseInt(initialId);
			String name = request.getParameter("name");
			String email = request.getParameter("email");
			long phoneNumber = Long.parseLong(initialPhoneNumber);
			if (isApropiate(id, name, email, phoneNumber)) {
				managerEmployee.addEmployee(ManagerEmployee.createEmployee(id, name, email, phoneNumber));
				response.sendRedirect(request.getContextPath() + "/confirm.jsp");
			} else {
				request.getSession().setAttribute("error", "/create.jsp");
				response.sendRedirect(request.getContextPath() + "/error.jsp");
			}
		} else {
			request.getSession().setAttribute("error", "/create.jsp");
			response.sendRedirect(request.getContextPath() + "/error.jsp");
		}
	}

	private void read(HttpServletRequest request, HttpServletResponse response) throws IOException {
		request.getSession().setAttribute("manager", managerEmployee);
		response.sendRedirect(request.getContextPath() + "/read.jsp");
	}

	private void delete(HttpServletRequest request, HttpServletResponse response) throws IOException {
		request.getSession().setAttribute("manager_delete", managerEmployee);
		response.sendRedirect(request.getContextPath() + "/delete.jsp");
	}

}
