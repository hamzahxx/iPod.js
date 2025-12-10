"use client";

import useNavigation from "@/hooks/useNavigation";
import Screen from "./Screen";
import Wheel from "./Wheel";

export default function IpodBody() {
    const { currentMenu, index, up, down, select, back } = useNavigation();
    return (
        <>
            <div className="flex flex-col items-center bg-gray-200 rounded-3xl w-[320px] h-[530px] p-4 shadow-xl">
                <div className="bg-white w-full h-[200px] rounded-xl mb-4">
                    <Screen menu={currentMenu} index={index} />
                </div>
                <Wheel
                    onUp={back}
                    onPlay={down}
                    onRewind={() => console.log("Previous Song")}
                    onForward={() => console.log("Next Song")}
                    onCenter={select}
                />
            </div>
        </>
    );
}
