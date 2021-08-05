import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	// let history = useHistory();

	function save() {
		let name = document.getElementById("name").value;
		let email = document.getElementById("email").value;
		let phone = document.getElementById("phone").value;
		let address = document.getElementById("address").value;

		let contact = {
			full_name: name,
			email: email,
			phone: phone,
			address: address,
			agenda_slug: "apolo"
		};

		if (name === "" || email === "" || phone === "" || address === "") {
			alert("Falta informacion");
		} else {
			console.log(contact);
			actions.newContact(contact);
			// La forma para redireccionar es usar {loggedIn ? <Redirect to=“/dashboard” /> : <PublicHomePage />}
			// history.push("/index.html");
		}
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" id="name" className="form-control" placeholder="Full Name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" id="email" className="form-control" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" id="phone" className="form-control" placeholder="Enter phone" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" id="address" className="form-control" placeholder="Enter address" />
					</div>
					<button
						onClick={() => {
							save();
						}}
						type="button"
						className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
