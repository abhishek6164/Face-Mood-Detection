import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
export default function FacialExpression() {
    const videoRef = useRef();
    const canvasRef = useRef();
    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = '/models';
            await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
            await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
        };
        const startVideo = () => {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                })
                .catch((err) => console.error("Error accessing webcam: ", err));
        };
        const handleVideoPlay = () => {
            setInterval(async () => {
                const detections = await faceapi
                    .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
                    .withFaceExpressions();
                const canvas = canvasRef.current;
                const displaySize = {
                    width: videoRef.current.videoWidth,
                    height: videoRef.current.videoHeight,
                };
                faceapi.matchDimensions(canvas, displaySize);
                const resized = faceapi.resizeResults(detections, displaySize);
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
                faceapi.draw.drawDetections(canvas, resized);
                faceapi.draw.drawFaceExpressions(canvas, resized);

                console.log(detections[0].expressions)
            }, 500);
        };
        loadModels().then(startVideo);
        videoRef.current && videoRef.current.addEventListener('play', handleVideoPlay);
    }, []);

    const detectMode = () => {

    }
    return (
        <div className="relative w-[40rem] flex flex-row items-center gap-4 p-8 rounded-xl bg-gradient-to-r from-[#1f1c2c] to-[#928dab] shadow-2xl">
            <video
                ref={videoRef}
                autoPlay
                muted
                className="w-[10rem] rounded-xl shadow-lg border-2 border-white/20 object-cover"
            />

            <button
                onClick={detectMode}
                className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-all duration-300 shadow-md cursor-pointer"
            >
                Mood Check 🔍
            </button>
        </div>
    );

}