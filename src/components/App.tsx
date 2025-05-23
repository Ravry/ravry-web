import Header from "./Header";
import Content from "./Content";

export default function App() {
    return (
        <div className="relative w-screen h-screen overflow-auto">
            {/* Parallax background */}
            <div className="absolute top-0 left-0 w-full h-full z-0 bg-fixed bg-cover bg-center">
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col gap-5 p-2 min-h-screen backdrop-blur-sm">
                <Header />
                <Content />
            </div>
        </div>
    );
}