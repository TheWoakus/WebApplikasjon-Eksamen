import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { upload, download } from '../utils/imageService';
import { list, create } from '../utils/categoryService';
import { create as artworkCreate } from '../utils/artworkService';

import NewCategoryButton from './NewCategoryButton.jsx';
import NewCategoryModal from './NewCategoryModal.jsx';

import styled from 'styled-components';

const StyledForm = styled.form`
	max-width: 600px;
`;


const ArtworkForm = () => {
	const [loaded, setLoaded] = useState(null);

	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [picture, setPicture] = useState(null);
	const [category, setCategory] = useState([]);
	const [artist, setArtist] = useState(null);
	const [price, setPrice] = useState(null);

	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(null);
	
	const history = useHistory();

	useEffect(async () => {
		const { data } = await list();

		setCategories(data.data);
		setLoaded(true);
	}, []);

	const createCategory = async (inputCategory) => {
		const { data } = await create(inputCategory);
		if (!data.success) {
			setError('Kunne ikke opprette kategori');
		}

		setCategories([...categories, data.data]);
	};

	useEffect(() => {
		if (error) {
			// alert.show(error, { type: 'error' });
			setError(null);
		}
	}, [error]);

	const onSubmit = async (event) => {
		event.preventDefault();

		const information = {
			title,
			description,
			picture,
			category,
			artist,
			price,
		};

		if (
			information.title === null ||
			information.description === null ||
			information.picture === null ||
			information.category === null ||
			information.artist === null ||
			information.price === null
		) {
			setError('Ikke alle felt er fylt ut');
			return;
		}

		if (!error) {
			let imageID = '';

			const { data } = await upload(picture);
			if (!data.success) {
				setError(data.message);
				return;
			}

			imageID = data.data._id;

			const imgData = await download(imageID);

			if (!imgData.data.success) {
				setError(imgData.data.message);
				return;
			}

			const artworkDetails = {
				title,
				description,
				picture: imageID,
				category,
				artist,
				price,
				imgSrc: imgData.data.data.imagePath,
			};

			const artworkData = await artworkCreate(artworkDetails);
			if (!artworkData.data.success) {
				setError(artworkData.data.message);
				return;
			}

			history.push(`/artwork/${artworkData.data.data._id}`);
		}
	};

	return (
		<>
			{loaded && (
				<>
					<NewCategoryModal addCategory={createCategory} />
					<section id="page_wrapper">
						<section id="page_content">
					<StyledForm onSubmit={onSubmit}>
						<fieldset>
							<label className="formLabel" htmlFor="title">
								Tittel
              </label>
							<input
								type="text"
								name="title"
								className="input"
								placeholder="Skriv en passende tittel"
								onChange={(e) => setTitle(e.target.value)}
							/>

							<label className="formLabel" htmlFor="description">
								Beskrivelse
              </label>
							<textarea
								name="description"
								cols="30"
								rows="5"
								className="input"
								placeholder="En liten description"
								onChange={(e) => setDescription(e.target.value)}
							></textarea>

							<label className="formLabel" htmlFor="picture">
								Bilde
              </label>
							<input
								type="file"
								name="picture"
								className="input"
								onChange={(e) => setPicture(e.target.files[0])}
							/>

							<label className="formLabel" htmlFor="category">
								Kategori
              </label>
							<select
								defaultValue="DEFAULT"
								onChange={(e) => setCategory(e.target.value)}
							>
								<option className="default" value="DEFAULT" disabled>
									Velg en kategori
                </option>
								{categories.map((categoryItem) => (
									<option key={categoryItem._id} value={categoryItem._id}>
										{categoryItem.name}
									</option>
								))}
							</select>

							<NewCategoryButton />

							<label className="formLabel" htmlFor="artist">
								Artist
              </label>
							<input
								type="string"
								name="artist"
								className="input"
								onChange={(e) => setArtist(e.target.value)}
							/>

							<label className="formLabel" htmlFor="price">
								Pris
              </label>
							<input
								type="number"
								name="price"
								className="input"
								onChange={(e) => setPrice(e.target.value)}
							/>

							<button type="submit" className="button centered big">
								Opprett
              </button>
						</fieldset>
					</StyledForm>
						</section>
					</section>
				</>
			)}
		</>
	);
};

export default ArtworkForm;
