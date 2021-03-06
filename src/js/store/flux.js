const url = "https://assets.breatheco.de/apis/fake/contact/";
const slug = "apolo";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			// Obtener el listado de los contactos
			getContacts: () => {
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/JSON"
					}
				};

				fetch(url + "agenda/apolo", OBJCONFIG)
					.then(res => res.json())
					.then(console.log("el GET se ha ejecutado"))
					.then(data => {
						setStore({ contacts: data.results });
						console.log(data);
					});
			},

			// Añadir un contacto
			newContact: new_contact => {
				const OBJCONFIG = {
					method: "POST",
					body: JSON.stringify(new_contact),
					headers: {
						"Content-type": "application/JSON"
					}
				};

				fetch(url, OBJCONFIG)
					.then(res => res.json())
					.then(data => {
						console.log("la respuesta es ", data);
						// Ahora lo redirecciono al home de nuevo
						window.location.pathname = "/";
					});
			}

			// Eliminar un contacto
		}
	};
};

export default getState;
