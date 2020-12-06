import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {

	constructor() {
		super();

		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeIngress = this.onChangeIngress.bind(this);
		this.onChangeContent = this.onChangeContent.bind(this);
		this.onChangeCategory = this.onChangeCategory.bind(this);
		this.onChangeAuthor = this.onChangeAuthor.bind(this);
	}

	onChangeTitle(event) {
		this.setState({ title: event.target.value })
	}

	onChangeIngress(event) {
		this.setState({ ingress: event.target.value })
	}

	onChangeContent(event) {
		this.setState({ content: event.target.value })
	}

	onChangeCategory(event) {
		this.setState({ category: event.target.value })
	}

	onChangeAuthor(event) {
		this.setState({ author: event.target.value })
	}

	onSubmit(event) {
		event.preventDefault()

		const articleDetails = {
			title: this.title.value,
			ingress: this.ingress.value,
			content: this.content.value,
			category: this.category.value,
			author: this.author.value,
		}

		axios.post(`${process.env.BASE_URL}${process.env.API_VERSION}/nyartikel`, articleDetails)
			.then((res) => {
				console.log(res.data)
				this.articleForm.reset();
				this.props.history.push('/fagartikler');
			}).catch((error) => {
				console.log(error)
		});

	}
	render() {
		return (
			<>
				<form
					ref={(input) => (this.articleForm = input)}
					onSubmit={(event) => this.onSubmit(event)}
				>
					<fieldset>
						<label className="registerLabel" htmlFor="name">Navn&#58;<span id="title_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.title = input)}
							type="text"
							name="title"
							className="input"
							placeholder="Skriv en passende tittel"
							onChange={this.onChangeTitle}
						/>

						<label className="registerLabel" htmlFor="ingress">Ingress&#58;<span id="ingress_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.ingress = input)}
							type="text"
							name="ingress"
							className="input"
							placeholder="En liten ingress"
							onChange={this.onChangeIngress}
						/>

						<label className="registerLabel" htmlFor="content">Innhold&#58;<span id="content_error">OBS!! Sjekk at denne er riktig</span></label>
						<textarea
							ref={(input) => (this.content = input)}
							name="content"
							cols="30"
							rows="5"
							className="input"
							placeholder="Fortell en historie"
							onChange={this.onChangeContent}
						></textarea>

						<label className="registerLabel" htmlFor="category">Kategori&#58;<span id="category_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.category = input)}
							type="text"
							name="category"
							className="input"
							placeholder="Legg denne i en kategori"
							onChange={this.onChangeCategory}
						/>

						<label className="registerLabel" htmlFor="author">Forfatter&#58;<span id="author_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.author = input)}
							type="text"
							name="author"
							className="input"
							placeholder="Hvem skrev disse vise ord?"
							onChange={this.onChangeAuthor}
						/>
						<button
							type="submit"
							className="button link"
						>Publiser</button>
					</fieldset>
				</form>
			</>
		)
	}
}

export default withRouter(Form);