import Header from "./Header"
import Content from "./Content"

export default function App() {
    return (
        <div className="flex flex-col w-screen h-screen gap-5 p-2">
            <Header/>
            <Content/>
        </div>
    )
}