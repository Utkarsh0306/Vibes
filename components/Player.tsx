'use client';
import { useState } from "react";
export default function Player() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    return (
        <div className="Player-tile flex flex-row justify-between items-center w-full h-full px-4">
            <div className="thumbnail-info w-1/3">Carries the thumbnail</div>
            <div className="audio-controls flex flex-col justify-center items-center w-1/3 gap-6">
            <div className="flex items-center gap-4">
                <button type="button">Prev</button>
                <button type="button" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <button type="button">Next</button>
            </div>
             <input type="range" className="w-full cursor-pointer" min="0" max="100" defaultValue="0" />
            </div>
            <div className="Volume-control flex justify-end w-1/3">Volume slider</div>
        </div>
    );
}