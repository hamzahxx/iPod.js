export default function NowPlaying({ song, isPlaying }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-44 rounded-b-xl px-4 py-3 bg-blue-200">
            
            <div className="w-32 h-32 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg mb-4" />

            <div className="text-center mb-4">
                <h2 className="font-bold text-lg">{song.title}</h2>
                <p className="text-sm text-gray-600">{song.artist}</p>
                <p className="text-xs text-gray-500">{song.album}</p>
            </div>

            <div className="w-full bg-gray-300 h-1 rounded-full mb-2">
                <div className="bg-blue-500 h-1 rounded-full w-1/3" />
            </div>

            <div className="flex justify-between w-full text-xs text-gray-600">
                <span>0:45</span>
                <span>3:24</span>
            </div>
        </div>
    );
}
