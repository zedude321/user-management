export function UserListItem ({name, email, type, date, role, children}) {
    return (
        <>
            <div className="col-span-2 pl-6">
                <h3 className="font-semibold text-sm">{name}</h3>
                <p className="text-gray text-sm">{email}</p>
            </div>
            <div className={`${type=='Employee' ? 'bg-light-gray text-light-blue' : 'bg-cyan text-white'} font-semibold text-center justify-self-end mr-16 min-w-32 p-1 px-4 rounded-lg text-sm h-fit`}>
                {type}
            </div>
            <p className="text-sm">{date}</p>
            <p className="text-sm">{role}</p>
            {children}
        </>
    )
}