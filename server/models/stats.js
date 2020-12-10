import mongoose from 'mongoose';

const { Schema } = mongoose;

const StatsSchema = new Schema(
  {
    a_ref: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      required: false,
      default: 1,
    },
    u_refs: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Stats', StatsSchema);
