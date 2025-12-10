"use client";

import Wheel from "./Wheel";

export default function IpodBody() {
    return (
        <>
            <div className="flex flex-col items-center bg-gray-200 rounded-3xl w-[320px] h-[530px] p-4 shadow-xl">
                <div className="bg-white w-full h-[200px] rounded-xl mb-4"></div>
                <Wheel
                    onUp={() => console.log("UP")}
                    onDown={() => console.log("DOWN")}
                    onLeft={() => console.log("LEFT")}
                    onRight={() => console.log("RIGHT")}
                    onCenter={() => console.log("CENTER")}
                />
            </div>
        </>
    );
}
