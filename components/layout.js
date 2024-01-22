import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-grow flex-col p-6 overflow-scroll h-screen">
                <Header />
                <main>{children}</main>
            </div>
        </div>
    )
}