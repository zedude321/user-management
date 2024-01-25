import { Header, Sidebar } from "./";

export function Layout({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-grow flex-col p-6 overflow-scroll h-screen bg-bg">
                <Header />
                <main>{children}</main>
            </div>
        </div>
    )
}