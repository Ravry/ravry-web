import Selector from "./Selector";

export default function Content() {
    return (
        <div className="flex flex-col items-center w-full text-center gap-3">
            <p className="text-6xl font-bold">View my work</p>
            <p className="text-xl">Discover the projects and experiences behind my journey.</p>
            <div className="foreground p-4 rounded-2xl">Browse my work</div>
            <p>v1.0.1</p>
            <Selector/>

            <p className="text-6xl font-bold mt-10" id="contact">Contact Me</p>
            <p className="text-xl">Contact me on various platforms.</p>
            <div className="flex flex-row w-full items-center justify-center text-3xl gap-5">
                <div onClick={() => window.open("https://www.instagram.com/", "_blank")?.focus()}><i className="fa-brands fa-instagram"></i></div>
                <div onClick={() => window.open("https://twitter.com/", "_blank")?.focus()}><i className="fa-brands fa-x-twitter"></i></div>
                <div onClick={() => window.open("https://bsky.app/", "_blank")?.focus()}><i className="fa-brands fa-bluesky"></i></div>
                <div onClick={() => window.open("https://itch.io/", "_blank")?.focus()}><i className="fa-brands fa-itch-io"></i></div>
            </div>
        </div>
    );
}