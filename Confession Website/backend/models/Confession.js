import mongoose from 'mongoose';

const confessionSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    authorName: { type: String, default: 'Anonymous', trim: true }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);

export default mongoose.model('Confession', confessionSchema);
