import { Search } from "@/icons";

export function Input ({placeholder, className, searchIcon = false, ...other}) {
    return (
        <div className={`flex items-center bg-white rounded-2xl ${searchIcon && 'px-5'} ${className}`}>
            {searchIcon && <Search />}
            <input {...other} className="p-3 outline-none w-full placeholder:text-dark-gray" placeholder={placeholder} />
        </div>
    )
}