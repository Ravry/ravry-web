export default function Footer() {
    console.log("Footer rendered"); // Add this
    return (
        <div className="flex flex-row justify-center w-full h-auto">
            <span className="flex items-center rounded-xl p-4 font-bold foreground shadow-xl hover:cursor-pointer hover:cursor-pointer" onClick={() => document.getElementById("background")?.scrollTo({ top: 0, behavior: 'smooth'})}>
                <i className="fa-solid fa-chevron-up"></i>
            </span>
        </div>
    );
}