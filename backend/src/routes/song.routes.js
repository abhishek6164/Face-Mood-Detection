const express = require('express');
const multer = require('multer');
const id3 = require("node-id3")
const uploadFile = require("../service/storage.service")
const songModel = require("../models/song.model");


const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post('/songs', upload.single("audio"), async (req, res) => {
    const file = req.file;
    const { mood } = req.body; // frontend se aa raha

    const tags = id3.read(file.buffer);
    const audio = await uploadFile(file.buffer, "audio");
    const coverImage = await uploadFile(tags.image.imageBuffer, "coverImage");

    const song = await songModel.create({
        title: tags.title,
        artist: tags.artist,
        album: tags.album,
        releaseDate: tags.year,
        audioUrl: audio.url,
        coverImage: coverImage.url,
        mood: mood || "neutral"
    });

    res.status(201).json({
        message: "Song created successfully",
        song
    });
});



router.get('/songs', async (req, res) => {
    const { mood } = req.query; // /songs?mood=happy

    let query = {};
    if (mood) {
        query.mood = mood;
    }

    const songs = await songModel.find(query);

    res.status(200).json({
        message: "Songs fetched successfully",
        songs
    });
});


module.exports = router;