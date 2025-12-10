export default function Screen({ menu, index }) {
    return (
        <>
            <div className="">{menu.title}</div>
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
