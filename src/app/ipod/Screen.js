import NowPlaying from "./NowPlaying";

export default function Screen({ menu, index, nowPlaying, isPlaying }) {
    if (nowPlaying) {
        return (
            <>
                <div className="flex justify-between px-2">
                    <div className="">{menu.title}</div>
                    {isPlaying ? "▶️" : "⏸️"}
                </div>
                <NowPlaying song={nowPlaying} isPlaying={isPlaying} />
            </>
        );
    }
    return (
        <>
            <div className="flex justify-between px-2">
                <div className="">{menu.title}</div>
                {isPlaying ? "▶️" : "⏸️"}
            </div>
            <ul>
                {menu.items.map((item, i) => (
                    <li
                        key={i}
                        className={`px-2 py-1 text-sm ${
                            i === index ? "bg-blue-500 text-white" : ""
                        }`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
