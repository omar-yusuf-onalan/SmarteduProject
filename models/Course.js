const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    image: {
        type: String,
        default: Date.now,
    },
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
