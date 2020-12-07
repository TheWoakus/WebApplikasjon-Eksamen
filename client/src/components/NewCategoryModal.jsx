import React from 'react';

class NewCategoryModal extends React.Component {
	constructor() {
		super();

		this.state = {

		}
	}

	componentDidMount() {
		this.clickListener();
	}

	closeModal() {
		const modal = document.getElementById('modal');
		modal.style.display = 'none';
	}

	clickListener() {
		const modal = document.getElementById('modal');
		window.onclick = function (event) {
			if (event.target === modal) {
				modal.style.display = 'none';
			}
		};
	}

	createCategory(event) {
		event.preventDefault();
		const categoryDetails = {
			title: this.title.value,
		};
		this.props.addCategory(categoryDetails);
		this.categoryform.reset();
		{ this.closeModal() };
	}

	render() {
		return (
			<>
				<section id="modal">
					<section id="modalContent">
						<h2 className="callout">
							Ny kategori
              				<span
								id="close"
								role="button"
								tabIndex="0"
								onClick={this.closeModal}
								onKeyPress={this.closeModal}
								>&times;
              				</span>
						</h2>

						<form
							ref={(input) => (this.categoryform = input)}
							onSubmit={(e) => this.createCategory(e)}
						>
							<fieldset>
								<section id="fieldset">
									<section className="field">
										<label htmlFor="newTodoTitle">Title</label>
										<input
											ref={(input) => (this.title = input)}
											type="text"
											name="newCategoryTitle"
											id="newCategoryTitle"
											className="input"
											placeholder="Hva skal den nye kategorien hete?"
											required
										/>
									</section>
									<button
										type="submit"
										className="button centered big block"
										onSubmit={(e) => this.createCategory(e)}
										>Create
                  					</button>
								</section>
							</fieldset>
						</form>
					</section>
				</section>
			</>
		);
	}
}

export default NewCategoryModal;