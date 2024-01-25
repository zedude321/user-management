import { AddUser, Button, Input, Layout } from "@/components";
import { ArrowLeft, ArrowRight, Configure, Trash, CheckIconCircle } from "@/icons";
import { useEffect, useState } from "react";

export default function Users () {
    const [data, setData] = useState();
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [page, setPage] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setData(dataSet);
    }, [])

    const deleteData = index => {
        setData(e => {
            return e.filter((_, i) => i !== index)
        })
    }
    
    const ifPageDown = () => {
        return page > 0;
    }
    const ifPageUp = () => {
        return data && (page+1)*itemsPerPage < data.length
    }

    const add = (name, _email, _type, id) => {
        const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        let temp = {
            name, date: `${new Date().getDate()} ${month[new Date().getMonth()]}, ${new Date().getFullYear()}`, endDate: 'present', id
        }
        setData([temp, ...data]);
        setOpen(false)
    }
    
    return (
        <Layout>
            <AddUser open={open} setOpen={setOpen} add={add} />
            {/* Search */}
            <div className="flex flex-col gap-4 w-full pt-5">
                <h1 className="font-bold text-primary text-2xl pl-5">Users</h1>
                <div className="flex items-center gap-8">
                <Input searchIcon className='w-full' placeholder='Search' />
                <Button onClick={() => setOpen(true)} className='whitespace-nowrap py-3 flex items-center'>Add User <p className="font-bold text-xl ml-1"> +</p></Button>

                <select name='sort' className="bg-transparent outline-none text-lg font-semibold">
                    <option className="font-normal text-base" value=''>Sort by</option>
                </select>
                <select name='savedSearch' className="bg-transparent outline-none text-lg font-semibold">
                    <option className="font-normal text-base" value=''>Saved Search</option>
                </select>

                <Configure className='text-dark-gray shrink-0' />
                </div>
            </div>
            {/* Data */}
            <div className="flex w-full gap-4 my-6">
                <div className="flex grow flex-col p-5 bg-white rounded-lg">
                    <p className="text-sm text-light-blue mb-2">Lorem Ipsum</p>
                    <h1 className="text-xl font-bold ">614</h1>
                </div>
                <div className="flex grow flex-col p-5 bg-white rounded-lg">
                    <p className="text-sm text-light-blue mb-2">Lorem Ipsum</p>
                    <h1 className="text-xl font-bold ">614</h1>
                </div>
                <div className="flex grow flex-col p-5 bg-white rounded-lg">
                    <p className="text-sm text-light-blue mb-2">Lorem Ipsum</p>
                    <h1 className="text-xl font-bold ">614</h1>
                </div>
                <div className="flex grow flex-col p-5 bg-white rounded-lg">
                    <p className="text-sm text-light-blue mb-2">Lorem Ipsum</p>
                    <h1 className="text-xl font-bold ">614</h1>
                </div>
            </div>
            {/* List */}
            <div className="grid grid-cols-11 bg-[#EFF4FA] p-5 text-light-blue font-semibold rounded-t-lg">
                <p className="col-span-2">Name</p>
                <p className="col-span-2 ">User ID</p>
                <p className="col-span-2 ">Lorem Ipsum</p>
                <p className="col-span-2 ">Date</p>
                <p className="col-span-2 ">Lorem Ipsum</p>
                <p className="text-end pr-6">Action</p>
            </div>
            <div className="bg-white rounded-b-lg px-5 text-xs overflow-scroll max-h-[44vh] divide-y divide-bg">
                {data && data.map((e, i) => {
                    if (i < itemsPerPage * (page+1) && i >= itemsPerPage*page) 
                        return (
                            <div className="grid grid-cols-11 py-6">
                                <p className="col-span-2 font-semibold pl-9">{e.name}</p>
                                <p className="col-span-2 ">{e.id}</p>
                                <p className="col-span-2 ">Lorem Ipsum</p>
                                <p className="col-span-2 ">{`${e.date} to ${e.endDate}`}</p>
                                <p className="col-span-2 ">Lorem Ipsum</p>
                                <p className="justify-self-end flex gap-5 text-light-gray">
                                    <CheckIconCircle className='cursor-pointer' />
                                    <Trash className='cursor-pointer' onClick={() => deleteData(i)} />
                                </p>
                            </div>
                        )
                })}
            </div>
            {/* Bottom */}
            <div className="w-full flex justify-center">
                <div className="flex justify-center items-center gap-6 text-xs text-gray absolute bottom-8">
                    <p>Items per page: </p>
                    <select onChange={(e) => setItemsPerPage(e.target.value)} className="p-2 bg-transparent border-b border-gray" name='itemsToShowPerPage' value={itemsPerPage}>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    </select>
                    <p>{data && `${page*itemsPerPage + 1}-${Math.min(itemsPerPage*(page+1), data.length)} of ${data.length}`}</p>
                    <a className={`cursor-pointer ${!ifPageDown() && 'text-light-gray'}`} onClick={() => ifPageDown() && setPage(page-1)}>
                    <ArrowLeft />
                    </a>
                    <a className={`cursor-pointer ${!ifPageUp() && 'text-light-gray'}`} onClick={() => ifPageUp() && setPage(page+1)}>
                    <ArrowRight />
                    </a>
                </div>
            </div>
        </Layout>
    )
}

const dataSet = [
    {
        name: 'David Wagner',
        id: 'LA-0234',
        date: '24 Oct, 2015',
        endDate: '30 Oct, 2020',
    },
    {
        name: 'David Wagner',
        id: 'LA-0234',
        date: '24 Oct, 2015',
        endDate: '30 Oct, 2020',
    },
    {
        name: 'David Wagner',
        id: 'LA-0234',
        date: '24 Oct, 2015',
        endDate: '30 Oct, 2020',
    },
    {
        name: 'David Wagner3',
        id: 'LA-0234',
        date: '24 Oct, 2015',
        endDate: '30 Oct, 2020',
    },
    {
        name: 'David Wagner4',
        id: 'LA-0234',
        date: '24 Oct, 2015',
        endDate: '30 Oct, 2020',
    },
    {
        name: 'David Wagner5',
        id: 'LA-0234',
        date: '24 Oct, 2015',
        endDate: '30 Oct, 2020',
    },
    {
        name: 'David Wagner6',
        id: 'LA-0234',
        date: '24 Oct, 2015',
        endDate: '30 Oct, 2020',
    },
    {
        name: 'David Wagner7',
        id: 'LA-0234',
        date: '24 Oct, 2015',
        endDate: '30 Oct, 2020',
    }
];