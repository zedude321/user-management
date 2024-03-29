import { XIcon } from "@/icons";
import { useState } from "react";
import { Button, CheckBox, Input } from "./";

export function AddUser ({open, setOpen, add}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [id, setID] = useState('');

    if (open)
        return (
        <div className="w-screen h-screen absolute flex items-center justify-center bg-opacity-40 bg-dark-blue top-0 left-0">
            <div className="bg-white z-50 rounded-lg 2xl:w-modal-2xl xl:w-modal-xl lg:w-modal-lg w-4/5 flex flex-col">
                <div className="flex justify-between p-5 border-b border-bg">
                    <h1 className="font-semibold">Add User</h1>
                    <a className="cursor-pointer" onClick={() => setOpen(false)}>
                        <XIcon />
                    </a>
                </div>
                {/* Form */}
                <div className="grid grid-cols-6 gap-4 p-5 py-8 pb-10">
                    <Input value={id} onChange={(e) => setID(e.target.value)} className='w-full outline outline-1 outline-bg text-sm col-span-6' placeholder='User ID *' />
                    <Input className='w-full outline outline-1 outline-bg text-sm col-span-3' placeholder='First Name *' />
                    <Input className='w-full outline outline-1 outline-bg text-sm col-span-3' placeholder='Last Name *' />
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full outline outline-1 outline-bg text-sm col-span-2' placeholder='Email ID *' />
                    <Input className='w-full outline outline-1 outline-bg text-sm col-span-2' placeholder='Mobile No' />
                    <select value={type} onChange={(e) => setType(e.target.value)} className='w-full outline outline-1 rounded-md outline-bg text-sm col-span-2 p-3 bg-transparent'>
                        <option value=''>Select Role Type</option>
                        <option value='Super Admin'>Super Admin</option>
                        <option value='Admin'>Admin</option>
                        <option value='Employee'>Employee</option>
                        <option value='HR Admin'>HR Admin</option>
                    </select>
                    <Input value={name} onChange={(e) => setName(e.target.value)} className='w-full outline outline-1 outline-bg text-sm col-span-2' placeholder='Username *' />
                    <Input type='password' className='w-full outline outline-1 outline-bg text-sm col-span-2' placeholder='Password*' />
                    <Input type='password' className='w-full outline outline-1 outline-bg text-sm col-span-2' placeholder='Confirm Password*' />
                </div>
                {/* Permissions */}
                <div>
                    <div className="bg-[#EFF4FA] w-full py-5 px-8 text-light-blue grid grid-cols-6 font-semibold">
                        <p className="col-span-3">Module Permission</p>
                        <p>Read</p>
                        <p>Write</p>
                        <p>Delete</p>
                    </div>
                    <div className="w-full py-5 px-8 divide-y divide-bg">
                        <div className="w-full grid grid-cols-6 py-5">
                            <p className="col-span-3 text-xs">Super Admin</p>
                            <CheckBox checked />
                            <CheckBox checked />
                            <CheckBox checked />
                        </div>
                        <div className="w-full grid grid-cols-6 py-5">
                            <p className="col-span-3 text-xs">Admin</p>
                            <CheckBox checked />
                            <CheckBox />
                            <CheckBox />
                        </div>
                        <div className="w-full grid grid-cols-6 py-5">
                            <p className="col-span-3 text-xs">Employee</p>
                            <CheckBox checked />
                            <CheckBox />
                            <CheckBox />
                        </div>
                        <div className="w-full grid grid-cols-6 py-5">
                            <p className="col-span-3 text-xs">HR Admin</p>
                            <CheckBox checked />
                            <CheckBox checked />
                            <CheckBox checked />
                        </div>
                    </div>
                </div>
                {/* Actions */}
                <div className="w-full flex justify-end pb-5">
                    <Button onClick={() => {add(name, email, type, id); setName(''); setEmail(''); setType('')}} className='!bg-cyan text-xs py-1 mr-4'>Add User</Button>
                    <Button onClick={() => setOpen(false)} className='!bg-transparent !text-light-blue text-xs py-1 mr-4'>Cancel</Button>
                </div>
            </div>
        </div>
    )
}