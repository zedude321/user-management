import { ArrowDown, BellBadge } from "@/icons";

export function Header() {
    return (
        <div>
            {/* Header */}
            <div className="flex flex-row justify-between w-full pl-5">
                <div>
                    <h1 className="font-semibold text-xl">Hello, Lekan</h1>
                    <p className="text-sm text-gray">Have a nice day</p>
                </div>
                <div className="text-black flex items-center gap-6">
                    <BellBadge />
                    <div className="w-[2px] h-full bg-light-gray"></div>
                    <div className="flex gap-4 items-center">
                        <div className="rounded-full w-12 h-12 bg-light-gray"></div>
                        <div>
                            <h1 className="font-semibold">Lekan Okeowo</h1>
                            <p className="text-sm">Admin</p>
                        </div>
                        <ArrowDown />
                    </div>
                </div>
            </div>
        </div>
    )
}