import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Modal = styled.section`
	height: 100vh;
	width: 100vw;
	display: none;
	position: absolute;
	top: 0;
	background-color: rgba(0, 0, 0, .2);
`;

const ModalContent = styled.section`
	max-width: 700px;
	margin: 15% auto 0 auto;
	background-color: #fff;
	border-radius: 6px;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, .6);
	padding: 10px;
`;

const Header = styled.h2`
	display: grid;
	grid-template-columns: 1fr 1fr;
	max-width: 600px;
	margin: 20px auto;
`;

const Close = styled.span`
	justify-self: end;
	margin-left: 40px;
	color: #333;
	cursor: pointer;
`;


class NewCategoryModal extends React.Component {
	constructor() {
		super();

		this.state = {};
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
			name: this.title.value,
		};
		this.props.addCategory(categoryDetails);
		this.categoryform.reset();
		this.closeModal();
	}

	render() {
		return (
			<>
				<Modal id="modal">
					<section id="page_wrapper">
						<section id="page_content">
							<ModalContent id="modalContent">
								<>
								<Header className="callout">
									Opprett en ny kategori
									<Close
										id="close"
										role="button"
										tabIndex="0"
										tooltip="lukk"
										onClick={this.closeModal}
										onKeyPress={this.closeModal}
									>
									Lukk &times;
									</Close>
								</Header>
								</>

								<form
									ref={(input) => (this.categoryform = input)}
									onSubmit={(e) => this.createCategory(e)}
								>
									<fieldset>
										<section id="fieldset">
											<section className="field">
												<label className="formLabel" htmlFor="newTodoTitle">
													Kategori
													<span id="category_error">
														OBS!! Sjekk at denne er riktig
													</span>
												</label>
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
											>
												Opprett
											</button>
										</section>
									</fieldset>
								</form>
							</ModalContent>
						</section>
					</section>
				</Modal>
			</>
		);
	}
}

NewCategoryModal.propTypes = {
	addCategory: PropTypes.func.isRequired,
};
export default NewCategoryModal;
