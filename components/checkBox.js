import { CheckIcon } from "@/icons/checkIcon";

export function CheckBox ({checked, ...other}) {
    return (
        <div className="relative w-fit">
            <input defaultChecked={checked} {...other} type="checkbox" className="
                place-self-start w-4 h-4 rounded border-2 checked:bg-dark-blue cursor-pointer border-dark-blue 
                text-dark-blue appearance-none peer box-border"     
            />
            <CheckIcon className='absolute w-4 h-4 peer-checked:block hidden text-white top-[2px] left-0 pointer-events-none' />
        </div>
    )
}