import React from 'react';
import axios from 'axios';

import { withRouter } from 'react-router-dom';

import NewCategoryButton from './NewCategoryButton';
import NewCategoryModal from './NewCategoryModal';


class Form extends React.Component {

	constructor() {
		super();

		this.addCategory = this.addCategory.bind(this);
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeIngress = this.onChangeIngress.bind(this);
		this.onChangeContent = this.onChangeContent.bind(this);
		this.onChangeCategory = this.onChangeCategory.bind(this);
		this.onChangePaygrade = this.onChangePaygrade.bind(this);
		this.onChangeAuthor = this.onChangeAuthor.bind(this);

		this.state = {
			categories: {},
			author: 'Lars Larsen',
			paygrade: 'Standard',
		}

	}

	addCategory(categoryDetails) {
		const categories = { ...this.state.categories };
		const timestamp = Date.now();
		categories[`cat-${timestamp}`] = categoryDetails;
		this.setState({ categories });
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

	onChangePaygrade(event) {
		this.setState({ paygrade: event.target.value })
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
			paygrade: this.state.paygrade,
			author: this.state.author
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

		const allChoices = Object.values(this.state.categories)
			.map((data) => (
			<option 
				key={new Date()}
				ref={(input) => (this.category = input)}
				name="category"
				>{data.title}
			</option>
			))

		return (
			<>
				<NewCategoryModal addCategory={this.addCategory}/>
				<form
					ref={(input) => (this.articleForm = input)}
					onSubmit={(event) => this.onSubmit(event)}
				>
					<fieldset>
						<label className="formLabel" htmlFor="title">Tittel&#58;<span id="title_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.title = input)}
							type="text"
							name="title"
							className="input"
							placeholder="Skriv en passende tittel"
							onChange={this.onChangeTitle}
						/>

						<label className="formLabel" htmlFor="ingress">Ingress&#58;<span id="ingress_error">OBS!! Sjekk at denne er riktig</span></label>
						<input
							ref={(input) => (this.ingress = input)}
							type="text"
							name="ingress"
							className="input"
							placeholder="En liten ingress"
							onChange={this.onChangeIngress}
						/>

						<label className="formLabel" htmlFor="content">Innhold&#58;<span id="content_error">OBS!! Sjekk at denne er riktig</span></label>
						<textarea
							ref={(input) => (this.content = input)}
							name="content"
							cols="30"
							rows="5"
							className="input"
							placeholder="Fortell en historie"
							onChange={this.onChangeContent}
						></textarea>

						<label className="formLabel" htmlFor="category">Kategori&#58;<span id="category_error">OBS!! Sjekk at denne er riktig</span></label>
						<select>
							{allChoices}
						</select>
						<NewCategoryButton/>

						<label className="formLabel" htmlFor="paygrade">Klarering&#58;<span id="paygrade_error">OBS!! Sjekk at denne er riktig</span></label>
						<select
							onChange={this.onChangePaygrade}
							defaultValue={this.state.paygrade}>
								<option value="Standard">Standard</option>
								<option value="Registrert">Registrert</option>
								<option value="Admin">Admin</option>
								<option value="SuperAdmin">SuperAdmin</option>
						</select>
						<label className="formLabel" htmlFor="author">Forfatter&#58;<span id="author_error">OBS!! Sjekk at denne er riktig</span></label>
						<select
							onChange={this.onChangeAuthor}
							defaultValue={this.state.author}>
								<option value="Lars Larsen">Lars Larsen</option>
								<option value="Gunn Gundersen">Gunn Gundersen</option>
								<option value="Simen Simensen">Simen Simensen</option>
						</select>
							
						<button
							type="submit"
							className="button centered big"
						>Publiser</button>
					</fieldset>
				</form>
			</>
		)
	}
}

export default withRouter(Form);