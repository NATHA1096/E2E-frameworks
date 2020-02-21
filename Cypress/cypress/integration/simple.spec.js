
/*Login, búsqueda de profesores y filtros por materia en la página de un profesor*/
describe('Los estudiantes login', function() {
    it('Visits los estudiantes and pass at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas  
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("jmauriciopv@gmail.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("01010101")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('Busca y califica profesores y clases anónimamente')
    })
})


/*Test creación de usuario*/

/*describe('Los estudiantes creacion usuario', function() {
    it('Visits los estudiantes and create user', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas  
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Mauricio")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Vargas")
	  cy.get('.cajaSignUp').find('input[name="correo"]').click().type("jmauriciopv@gmail.com")
	  cy.get('[type="checkbox"]').check() 
	  cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("16")
	  cy.get('.cajaSignUp').find('input[name="password"]').click().type("01010101")
      cy.get('.cajaSignUp').contains('Registrarse').click()
	  cy.contains('Ocurrió un error activando tu cuenta')
	  cy.get('[type="button"]').contains('Ok').click()
    })
})*/
