import { useState } from "react";

export default function useNavigation() {
    // Music playing logic
    const [nowPlaying, setNowPlaying] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playSong = (song) => {
        setNowPlaying(song);
        setIsPlaying(true);
    };

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    // MENU logic
    const menuData = {
        iPod: ["Cover Flow", "Music", "Games", "Settings", "Sign in"],
        Music: ["Playlists", "Artists", "Albums", "Songs", "Genres"],
        Playlists: [],
        Artists: [],
        Albums: [],
        Songs: [],
        Genres: ["Rock", "Pop", "Hip-Hop", "Jazz", "Classical"],
        Games: ["Bricks"],
        Settings: ["About", "Choose service", "Device theme", "Sign out"],
    };

    const [screen, setScreen] = useState([
        { title: "iPod", items: menuData["iPod"] },
    ]);
    const [index, setIndex] = useState(0);

    const currentMenu = screen[screen.length - 1];

    const up = () => {
        setIndex((prev) => Math.max(0, prev - 1));
    };

    const down = () => {
        setIndex((prev) => Math.min(currentMenu.items.length - 1, prev + 1));
    };

    const select = () => {
        const selected = currentMenu.items[index];

        if (menuData[selected]) {
            setScreen((prev) => [
                ...prev,
                { title: selected, items: menuData[selected] },
            ]);
            setIndex(0);
        } else if (
            currentMenu.title === "Songs" ||
            currentMenu.title === "Playlists"
        ) {
            playSong({
                title: selected,
                artist: "Unknown Artist",
                album: "Unknown Album",
            });
        } else {
            console.log("Action:", selected);
        }
    };

    const back = () => {
        if (nowPlaying) {
            setNowPlaying(null);
        } else if (screen.length > 1) {
            setScreen((prev) => prev.slice(0, -1));
            setIndex(0);
        }
    };

    return {
        // Menu Related
        currentMenu,
        index,
        up,
        down,
        select,
        back,
        // Music related
        nowPlaying,
        isPlaying,
        togglePlayPause,
    };
}
