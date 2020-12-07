import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {

	constructor() {
		super();

		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeMail = this.onChangeMail.bind(this);
		this.onChangeSubject = this.onChangeSubject.bind(this);
		this.onChangeMessage = this.onChangeMessage.bind(this);
	}

	onChangeName(event) {
		this.setState({ name: event.target.value })
	}

	onChangeMail(event) {
		this.setState({ mail: event.target.value })
	}

	onChangeSubject(event) {
		this.setState({ subject: event.target.value })
	}

	onChangeMessage(event) {
		this.setState({ message: event.target.value })
	}

	onSubmit(event) {
		event.preventDefault()

		const userDetails = {
			name: this.name.value,
			mail: this.mail.value,
			subject: this.subject.value,
			message: this.message.value,
		};

		axios.post(`${process.env.BASE_URL}${process.env.API_VERSION}/kontakt`, userDetails)
			.then((res) => {
				// TODO: insert confirmation message here?? 
				console.log(res.data)
				this.contactForm.reset();
				// this.props.history.push('/kontakt'); //TODO: is this needed??
			}).catch((error) => {
				console.log(error)
			});
	}
	render() {
		return (
			<>
				<form
					ref={(input) => (this.contactForm = input)}
					onSubmit={(event) => this.onSubmit(event)}
				>
					<fieldset>
						<label className="formLabel" htmlFor="name">Navn&#58;<span id="content_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.name = input)}
							type="text"
							name="name"
							className="input"
							placeholder="Vennligst oppgi ditt navn"
							onChange={this.onChangeName}
							// required
						/>

						<label className="formLabel" htmlFor="mail">Epost&#58;<span id="content_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.mail = input)}
							type="text"
							name="mail"
							className="input"
							placeholder="Vennligst oppgi din epost"
							onChange={this.onChangeMail}
							// required
						/>

						<label className="formLabel" htmlFor="title">Emne&#58;<span id="content_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.subject = input)}
							type="text"
							name="subject"
							className="input"
							placeholder="Hva gjelder din henvendelse?"
							onChange={this.onChangeSubject}
							// required
						/>

						<label className="formLabel" htmlFor="message">Melding&#58;<span id="content_error">OBS!! Sjekk at denne er riktig</span></label>
						<textarea
							ref={(input) => (this.message = input)}
							name="message"
							cols="30"
							rows="5"
							className="input"
							placeholder="Hva har du på hjertet?"
							onChange={this.onChangeMessage}
							// required
						></textarea>
						<button
							type="submit"
							className="button link"
							disabled
						>Send meldingen</button>
					</fieldset>
				</form>
			</>
		)
	}
}

export default withRouter(Form);