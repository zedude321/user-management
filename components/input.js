import { Search } from "@/icons";

export default function Input ({placeholder, className, ...other}) {
    return (
        <div className={"flex items-center " + className}>
            <Search />
            <input {...other} className="p-3 outline-none w-full placeholder:text-dark-gray" placeholder={placeholder} />
        </div>
    )
}