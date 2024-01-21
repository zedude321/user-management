import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function Tab ({text, children, path}) {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div onClick={() => router.push(path)} className={`${pathname == path ? 'text-primary font-semibold border-r-4' : 'text-gray'} cursor-pointer py-2 flex items-center gap-4`}>
            {children}
            <p>{text}</p>
        </div>
    )
}