export default function Button ({className, children, ...other}) {
    return (
        <button className={"px-4 text-white bg-primary rounded-md " + className} {...other}>
            {children}
        </button>
    )
}