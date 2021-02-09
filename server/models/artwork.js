import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const ArtworkSchema = new Schema (
	{
		title: {
			type: String,
			required: true,
			unique: false,
			min: 1,
		},
		slug: {
			type: String,
		},
		description: {
			type: String,
			required: true,
			uniquie: false,
			min: 1,
		},
		picture: {
			type: String,
			required: false,
			unique: false,
		},
		category: {
			type: String,
			required: true,
			unique: false,
		},
		artist: {
			type: String,
			required: true,
			unique: false,
		},
		price: {
			type: Number,
			required: true,
			unique: false
		},
	},
	{ timestamps: true, toJSON: {virtuals: true }, toObject: {virtuals: true } }
);

ArtworkSchema.pre(`save`, function (next) {
	this.slug = slugify(this.title, { lower: true });
	next();
});

export default mongoose.model(`Artwork`, ArtworkSchema);