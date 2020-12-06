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

		const userDetails = {
			name: this.name.value,
			mail: this.mail.value,
			username: this.username.value,
			password: this.password.value,
			verifypassword: this.verifypassword.value,
		};

		axios.post(`${process.env.BASE_URL}${process.env.API_VERSION}/register`, userDetails)
			.then((res) => {
				console.log(res.data)
				this.signupForm.reset();
				this.props.history.push('/user');
			}).catch((error) => {
				console.log(error)
			});
	}
	render() {
		return (
			<>
				<form
					ref={(input) => (this.signupForm = input)}
					onSubmit={(event) => this.onSubmit(event)}
				>
					<fieldset>
						<label htmlFor="name">Navn&#58;</label>
						<input
							ref={(input) => (this.name = input)}
							type="text"
							name="name"
							className="input"
							placeholder="Vennligst oppgi ditt navn"
							onChange={this.onChangeName}
						/>

						<label htmlFor="mail">Epost&#58;</label>
						<input
							ref={(input) => (this.mail = input)}
							type="text"
							name="mail"
							className="input"
							placeholder="Vennligst oppgi din epost"
							onChange={this.onChangeMail}
						/>

						<label htmlFor="username">Brukernavn&#58;</label>
						<input
							ref={(input) => (this.username = input)}
							type="text"
							name="username"
							className="input"
							placeholder="Hva ønsker du å ha som ditt brukernavn?"
							onChange={this.onChangeUsername}
						/>

						<label htmlFor="password">Passord&#58;</label>
						<input
							ref={(input) => (this.password = input)}
							type="password"
							name="password"
							className="input"
							placeholder="Skriv inn ditt ønskede passord"
							onChange={this.onChangePassword}
						/>

						<label htmlFor="verifypassword">Bekreft passord&#58;</label>
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
							className="button link"
						>Register</button>
					</fieldset>
				</form>
			</>
		)
	}
}

export default withRouter(Form);