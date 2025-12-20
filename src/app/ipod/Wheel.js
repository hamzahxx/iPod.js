"use client";

import { useRef, useState } from "react";

export default function Wheel({ onUp, onDown, onBack, onCenter }) {

    const wheelRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const lastAngle = useRef(null);

    // Angle Calculator
    const getAngle = (clientX, clientY) => {
        const rect = wheelRef.current.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;

        return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    };

    // Mouse Detection
    const handleMouseDown = (e) => {
        setIsScrolling(true);
        lastAngle.current = getAngle(e.clientX, e.clientY);
    };

    const handleMouseMove = (e) => {
        if (!isScrolling) return;

        const currentAngle = getAngle(e.clientX, e.clientY);
        const diff = currentAngle - lastAngle.current;

        let normalizedDiff = diff;
        if (diff > 180) normalizedDiff = diff - 360;
        if (diff < -180) normalizedDiff = diff + 360;

        if (normalizedDiff > 15) {
            onDown();
            lastAngle.current = currentAngle;
        } else if (normalizedDiff < -15) {
            onUp();
            lastAngle.current = currentAngle;
        }
    };

    const handleMouseUp = () => {
        setIsScrolling(false);
        lastAngle.current = null;
    };

    // Touch Detection
    const handleTouchStart = (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        setIsScrolling(true);
        lastAngle.current = getAngle(touch.clientX, touch.clientY);
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
        if (!isScrolling) return;

        const touch = e.touches[0];
        const currentAngle = getAngle(touch.clientX, touch.clientY);
        const diff = currentAngle - lastAngle.current;

        let normalizedDiff = diff;
        if (diff > 180) normalizedDiff = diff - 360;
        if (diff < -180) normalizedDiff = diff + 360;

        if (normalizedDiff > 15) {
            onDown();
            lastAngle.current = currentAngle;
        } else if (normalizedDiff < -15) {
            onUp();
            lastAngle.current = currentAngle;
        }
    };

    const handleTouchEnd = (e) => {
        e.preventDefault();
        setIsScrolling(false);
        lastAngle.current = null;
    };

    return (
        <div
            ref={wheelRef}
            // Mouse events
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            // Touch events
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            className="flex justify-center items-center bg-gray-300 w-[250px] h-[250px] rounded-full relative touch-none"
        >
            <button
                onClick={onBack}
                // Bug fix
                onTouchEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onBack();
                }}
                className="w-20 h-10 absolute top-4 left-1/2 -translate-x-1/2 text-sm font-bold z-10"
            >
                MENU
            </button>
            <button
                onClick={() => console.log("Play/Pause")}
                onTouchEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Play/Pause")
                }}
                className="w-20 h-10 absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-bold z-10"
            >
                ⏯️
            </button>
            <button
                onClick={() => console.log("Previous")}
                onTouchEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Previous")
                }}
                className="w-12 h-20 absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold z-10"
            >
                ⏮️
            </button>
            <button
                onClick={() => console.log("Next")}
                onTouchEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Next")
                }}
                className="w-12 h-20 absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold z-10"
            >
                ⏭️
            </button>
            <button
                onClick={onCenter}
                onTouchEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onCenter();
                }}
                className="bg-gray-100 w-[120px] h-[120px] rounded-full relative z-10 touch-auto"
            >
                SELECT
            </button>
        </div>
    );
}
