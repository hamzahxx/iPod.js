export default function Wheel({ onUp, onDown, onLeft, onRight, onCenter }) {
    return (
        <div className="flex justify-center items-center bg-gray-300 w-[250px] h-[250px] rounded-full relative">
            <button
                onClick={onUp}
                className="w-20 h-10 absolute top-4 left-1/2 -translate-x-1/2 text-sm font-bold"
            >
                MENU
            </button>
            <button
                onClick={onDown}
                className="w-20 h-10 absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-bold"
            >
                DOWN
            </button>
            <button
                onClick={onLeft}
                className="w-12 h-20 absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold"
            >
                BACK
            </button>
            <button
                onClick={onRight}
                className="w-12 h-20 absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold"
            >
                RIGHT
            </button>
            <button
                onClick={onCenter}
                className="bg-gray-100 w-[120px] h-[120px] rounded-full relative"
            ></button>
        </div>
    );
}
