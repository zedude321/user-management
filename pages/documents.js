import { Button, Input, Layout } from "@/components";
import { Configure, Delete, Doc, Document, Expand, PaintBucket, Pencil, Print } from "@/icons";

export default function Documents () {
    const showDocs = () => {
        let rows=[];
        for(let i = 0; i < 9; i++) {
            rows.push(0);
        }
        return (
            <>
                {rows.map(() => (
                    <div className="py-2 flex justify-between items-center">
                        <div className="p-2 bg-[#ECF0F3] text-primary rounded-md"><Document /></div>
                        <div>
                            <p className="text-sm">Lorem Ipsum</p>
                            <p className="text-xs text-light-gray">April 9, 2022</p>
                        </div>
                        <span className="text-xs xl:w-3/4 w-1/2 text-light-gray whitespace-break-spaces">
                            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, \nsed do eiusmod tempor incididunt ut labore et dolore.`}
                        </span>
                        <div className="flex gap-4">
                            <div className="text-primary p-2 h-fit border border-light-gray rounded-sm cursor-pointer">
                                <Pencil className='h-4 w-4' />
                            </div>
                            <div className="text-primary p-2 h-fit border border-light-gray rounded-sm cursor-pointer">
                                <Delete className='h-4 w-4' />
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    return (
        <Layout>
            {/* Search */}
            <div className="flex flex-col gap-4 w-full pt-5">
                <h1 className="font-bold text-primary text-2xl pl-5">Documents</h1>
                <div className="flex items-center gap-8">
                <Input searchIcon className='w-full' placeholder='Search Documents' />

                <select name='sort' className="bg-transparent outline-none text-lg font-semibold">
                    <option className="font-normal text-base" value=''>Sort by</option>
                </select>

                <Configure className='text-dark-gray shrink-0' />
                </div>
            </div>
            {/* Items */}
            <div className="flex justify-between w-full py-5">
                <div className="flex gap-4">
                    <div className="text-primary p-4 h-fit border border-light-gray rounded-sm cursor-pointer">
                        <PaintBucket />
                    </div>
                    <div className="text-primary p-4 h-fit border border-light-gray rounded-sm cursor-pointer">
                        <Expand />
                    </div>
                    <div className="text-primary p-4 h-fit border border-light-gray rounded-sm cursor-pointer">
                        <Doc />
                    </div>
                    <div className="text-primary p-4 h-fit border border-light-gray rounded-sm cursor-pointer">
                        <Print />
                    </div>
                    <div className="text-primary p-4 h-fit border border-light-gray rounded-sm cursor-pointer">
                        <Delete />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="border rounded-sm border-light-gray pr-4 w-[227px]">
                        <select className="bg-transparent p-5 w-full py-4">
                            <option value=''>This Month</option>
                        </select>
                    </div>
                    <div className="border rounded-sm border-light-gray pr-4 w-[227px]">
                        <select className="bg-transparent p-5 w-full py-4">
                            <option value=''>Documents</option>
                        </select>
                    </div>
                    <Button className='font-extrabold text-2xl aspect-square'>+</Button>
                </div>
            </div>
            {/* Documents */}
            <div className="bg-white rounded-lg">
                <div className="p-5 px-7 border-b border-bg">
                    <h1 className="font-semibold">List of documents</h1>
                    <p className="text-light-gray text-xs">Lorem Ipsum dolor sit amet</p>
                </div>
                <div className="pl-6 pr-8 py-1 divide-y divide-bg">
                    {showDocs()}
                </div>
            </div>
        </Layout>
    )
}