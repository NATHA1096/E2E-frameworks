
/*Login, búsqueda de profesores y filtros por materia en la página de un profesor*/
describe('Los estudiantes login', function () {
  it('Visits los estudiantes and pass at login', function () {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()
    //Lineas nuevas  
    cy.contains('Ingresar').click()
    cy.get('.cajaLogIn').find('input[name="correo"]').click().type("jmauriciopv@gmail.com")
    cy.get('.cajaLogIn').find('input[name="password"]').click().type("01010101")
    cy.get('.cajaLogIn').contains('Ingresar').click()
    cy.contains('Busca y califica profesores y clases anónimamente')
  })
});

describe('Los estudiantes Registro', function () {
  it('Visits los estudiantes and Register', function () {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()

    cy.contains('Ingresar').click()
    cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("prueba")
    cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("exitosa")
    cy.get('.cajaSignUp').find('input[name="correo"]').click().type("pruebaexitosa39@example.com")
    cy.get('.cajaSignUp').contains('Estudio una maestria').click()
    cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Maestría en Ingeniería de Software")
    cy.get('.cajaSignUp').find('input[name="password"]').click().type("PruebaExitosa.01")
    cy.get('.cajaSignUp').contains('Acepto los términos y condiciones y la política de privacidad.').click()
    cy.get('.cajaSignUp').contains('Registrarse').click()
    cy.contains('Registro exitoso')
  })
});

describe('Los estudiantes Registro con cuenta existente', function () {
  it('Visits los estudiantes and Register with an existing account', function () {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()

    cy.contains('Ingresar').click()
    cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("prueba")
    cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("exitosa")
    cy.get('.cajaSignUp').find('input[name="correo"]').click().type("prueba1exitosa@example.com")
    cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes').should('have.value', 'universidad-de-los-andes')
    cy.get('.cajaSignUp').find('[type="checkbox"]').check()
    cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('16')
    cy.get('.cajaSignUp').find('input[name="password"]').click().type("PruebaExitosa.01")
    cy.get('.cajaSignUp').find('input[name="acepta"]').check()
    cy.get('.cajaSignUp').contains('Registrarse').click()
    cy.contains("Ya existe un usuario registrado con el correo 'prueba1exitosa@example.com'").should('to.exist')
  })
});

describe('Los estudiantes Busqueda Profesores', function () {
  it('Visits los estudiantes and search a teacher', function () {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()

    cy.get('div[class="Select-placeholder"]').click()
    cy.get('input').type("Mario Linares")
    cy.get('div[id="react-select-required_error_checksum--option-0"]').contains("Mario Linares")
  })
});

describe('Los estudiantes Dirigirse a Profesor', function () {
  it('Visits los estudiantes and go to a teacher page', function () {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()

    cy.get('div[class="Select-placeholder"]').click()
    cy.get('input').type("Pruebas Automaticas")
    cy.get('div[id="react-select-required_error_checksum--option-0"]').contains("MISO4208")

  })
});