const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    album: String,
    releaseDate: String,
    audioUrl: String,
    coverImage: String,
    mood: String // e.g. "happy", "sad", "angry"
});

const songModel = mongoose.model('song', songSchema);

module.exports = songModel;
