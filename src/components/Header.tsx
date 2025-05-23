export default function Header() {
    return (
        <div className="flex flex-row w-full h-20 p-5 justify-around">
            <div className="flex flex-row items-center text-2xl gap-2">
                <div className="w-10 h-10 rounded-4xl flex items-center justify-center shadow-xl foreground"><i className="fa-solid fa-check"></i></div>
                <div className="hover:cursor-pointer" onClick={() => {window.open('https://github.com/Ravry', '_blank')}}>rav<span className="text-white font-bold text-3xl">ry</span></div>
            </div>

            <div className="flex items-center rounded-xl p-4 font-bold foreground shadow-xl">
                contact
            </div>
        </div>
    );
}