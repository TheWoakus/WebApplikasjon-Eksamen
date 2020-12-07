import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {

	constructor() {
		super();

		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeMail = this.onChangeMail.bind(this);
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangeVerifyPassword = this.onChangeVerifyPassword.bind(this);
	}

	onChangeName(event) {
		this.setState({ name: event.target.value })
	}

	onChangeMail(event) {
		this.setState({ mail: event.target.value })
	}

	onChangeUsername(event) {
		this.setState({ username: event.target.value })
	}

	onChangePassword(event) {
		this.setState({ password: event.target.value })
	}

	onChangeVerifyPassword(event) {
		this.setState({ verifypassword: event.target.value })
	}

	onSubmit(event) {
		event.preventDefault()

		if (this.password.value == this.verifypassword.value) {
			const userDetails = {
				name: this.name.value,
				mail: this.mail.value,
				username: this.username.value,
				password: this.password.value,
			};

			axios.post(`${process.env.BASE_URL}${process.env.API_VERSION}/register`, userDetails)
				.then((res) => {
					console.log(res.data)
					this.signupForm.reset();
					this.props.history.push('/'); // where do we want to send the user after registration??
				}).catch((error) => {
					console.log(error)
				});
		}
		else {
			console.log("Passordene stemmer ikke.. prøv igjen.");
		}

	}
	render() {
		return (
			<>
				<form
					ref={(input) => (this.signupForm = input)}
					onSubmit={(event) => this.onSubmit(event)}
				>
					<fieldset>
						<label className="registerLabel" htmlFor="name">Navn&#58;<span id="name_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.name = input)}
							type="text"
							name="name"
							className="input"
							placeholder="Vennligst oppgi ditt navn"
							onChange={this.onChangeName}
						/>

						<label className="registerLabel" htmlFor="mail">Epost&#58;<span id="mail_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.mail = input)}
							type="text"
							name="mail"
							className="input"
							placeholder="Vennligst oppgi din epost"
							onChange={this.onChangeMail}
						/>

						<label className="registerLabel" htmlFor="username">Brukernavn&#58;<span id="username_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.username = input)}
							type="text"
							name="username"
							className="input"
							placeholder="Hva ønsker du å ha som ditt brukernavn?"
							onChange={this.onChangeUsername}
						/>

						<label className="registerLabel" htmlFor="password">Passord&#58;<span id="password_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.password = input)}
							type="password"
							name="password"
							className="input"
							placeholder="Skriv inn ditt ønskede passord"
							onChange={this.onChangePassword}
						/>

						<label className="registerLabel" htmlFor="verifypassword">Bekreft passord&#58;<span id="verifypassword_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.verifypassword = input)}
							type="password"
							name="verifypassword"
							className="input"
							placeholder="Bekreft ditt passord"
							onChange={this.onChangeVerifyPassword}
						/>
						<button
							type="submit"
							className="button centered big"
						>Register</button>
					</fieldset>
				</form>
			</>
		)
	}
}

export default withRouter(Form);