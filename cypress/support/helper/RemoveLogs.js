//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
class LogConfig{

	removeLogs(){

		// ** COPIA Y PEGA EN CADA SUITE QUE SE REALICE CON UN SUT DE MUCHO FETCH Y XHR O PROBLEMAS DE EXCEPCIÓN O... IMPORTA ESTA FUNCIÓN DE ESTE MÓDULO PARA APLICARLO EN EL SUITE.
		Cypress.on('uncaught:exception', (err, runnable) => {
			// returning false here prevents Cypress from
			// failing the test
			return false
		})
		// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
		const origLog = Cypress.log
		Cypress.log = function (opts, ...other) {
			if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
				return
			}
			return origLog(opts, ...other)
		}
	}
}

export const logConfig = new LogConfig;