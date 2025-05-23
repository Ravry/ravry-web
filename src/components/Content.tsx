import Selector from "./Selector";

export default function Content() {
    return (
        <div className="flex flex-col items-center w-full text-center gap-2">
            <p className="text-6xl font-bold">View my work</p>
            <p className="text-xl">Discover the projects and experiences behind my journey.</p>
            <div className="foreground p-4 rounded-2xl">Browse my work</div>
            <p>v1.0.1</p>
            <Selector/>
        </div>
    );
}