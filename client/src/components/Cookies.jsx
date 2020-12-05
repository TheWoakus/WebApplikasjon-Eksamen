import React from 'react';
import Cookie from 'react-cookie';

class Modal extends React.Component {
	constructor() {
		super();

		this.state = {
			remaining: 50,
		}
	}

	// run this
	componentDidMount() {
		this.clickListener();
	}

	// when user clicks on x, close the modal
	closeModal() {
		const modal = document.getElementById('modal');
		modal.style.display = 'none';
	}

	// when the user clicks anywhere outside the modal, close it
	clickListener() {
		const modal = document.getElementById('modal');
		window.onclick = function (event) {
			if (event.target === modal) {
				modal.style.display = 'none';
			}
		};
	}

	acceptCookies() {
		// TODO: set a cookie and make sure we don't bother the user ever again
		this.closeModal();
	}

	render() {
		return (
			<>
				<section id="modal">
					<section id="modalContent">
						<h2>
							New todo
              				<span
								id="close"
								role="button"
								tabIndex="0"
								onClick={this.closeModal}
								onKeyPress={this.closeModal}
							>
								&times;
              				</span>
						</h2>
						<p>
							Hei, Vi vil gjerne gi deg best mulig opplevelse på denne siden. Vi kommer derfor til å spore deg litt.
						</p>
						<p>
							Om du ikke ønsker at vi skal spore, så kan du klikke på x'en oppi høyre hjørne. Mulig du blir kastet ut eller får begrenset opplevelse her.. 
						</p>
						<p>
							Bekreft at vi kan lagre litt info om deg, så skal vi ikke mase mer om dette EVER AGAIN!!
						</p>
						<button onClick={this.acceptCookies()}>Accept cookies</button>
					</section>
				</section>
			</>
		);
	}
}

export default Modal;
