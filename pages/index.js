import { Layout, Input, Button, AddUser, UserListItem } from "@/components/";
import { ArrowLeft, ArrowRight, Configure, Pen, Trash } from "@/icons";
import { useEffect, useState } from "react";

export default function Home() {
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

  const add = (name, email, type) => {
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let temp = {
      name, email, type, role: 'Lorem Ipsum', date: `${new Date().getDate()} ${month[new Date().getMonth()]}, ${new Date().getFullYear()}`
    }
    setData([temp, ...data]);
    setOpen(false)
  }

  return (
    <Layout>
      <AddUser open={open} setOpen={setOpen} add={add} />
      {/* Search */}
      <div className="flex flex-col gap-4 w-full py-5">
        <h1 className="font-bold text-primary text-2xl pl-5">Users Dashboard</h1>
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
      {/* List */}
      <div className="bg-white rounded-2xl">
        <h2 className="font-semibold p-5">List Users</h2>
        <div className="grid grid-cols-6 bg-[#EFF4FA] p-6 text-light-blue font-semibold">
          <p className="col-span-3 pl-2">Name</p>
          <p className="">Create Date</p>
          <p className="">Role</p>
          <p className=" text-end pr-4">Action</p>
        </div>
        {/* Users */}
        <div className="px-5 text-sm overflow-scroll max-h-[52vh] divide-y divide-bg">
          {data && data.map((e, i) => {
            if (i < itemsPerPage * (page+1) && i >= itemsPerPage*page)
              return (
                <div className="grid grid-cols-6 pl-4 py-5">
                  <div className="col-span-2 pl-6">
                    <h3 className="font-semibold text-sm">{e.name}</h3>
                    <p className="text-gray text-sm">{e.email}</p>
                  </div>
                  <div className={`${e.type=='Employee' ? 'bg-accent text-light-blue' : 'bg-cyan text-white'} font-semibold text-center justify-self-end mr-16 min-w-32 p-1 px-4 rounded-lg text-sm h-fit`}>
                    {e.type}
                  </div>
                  <p className="text-sm">{e.date}</p>
                  <p className="text-sm">{e.role}</p>
                  <p className="justify-self-end flex gap-5 text-light-gray pr-2">
                    <Pen className='cursor-pointer' />
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
      </div>
    </Layout>
  );
}

const dataSet = [
  {
    name: 'David Wagner',
    email: 'david_wagner@example.com',
    type: 'Super Admin',
    date: '24 Oct, 2015',
    role: 'Lorem Ipsum',
  },
  {
    name: 'David Wagner',
    email: 'david_wagner@example.com',
    type: 'Employee',
    date: '24 Oct, 2015',
    role: 'Lorem Ipsum',
  },
  {
    name: 'David Wagner',
    email: 'david_wagner@example.com',
    type: 'Super Admin',
    date: '24 Oct, 2015',
    role: 'Lorem Ipsum',
  },
  {
    name: 'David Wagner3',
    email: 'david_wagner@example.com',
    type: 'Super Admin',
    date: '24 Oct, 2015',
    role: 'Lorem Ipsum',
  },
  {
    name: 'David Wagner4',
    email: 'david_wagner@example.com',
    type: 'Super Admin',
    date: '24 Oct, 2015',
    role: 'Lorem Ipsum',
  },
  {
    name: 'David Wagner5',
    email: 'david_wagner@example.com',
    type: 'Super Admin',
    date: '24 Oct, 2015',
    role: 'Lorem Ipsum',
  },
  {
    name: 'David Wagner6',
    email: 'david_wagner@example.com',
    type: 'Super Admin',
    date: '24 Oct, 2015',
    role: 'Lorem Ipsum',
  },
  {
    name: 'David Wagner7',
    email: 'david_wagner@example.com',
    type: 'Super Admin',
    date: '24 Oct, 2015',
    role: 'Lorem Ipsum',
  }
];
