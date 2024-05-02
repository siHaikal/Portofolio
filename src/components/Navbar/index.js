import Link from "next/link"

const Navbar = () => {
    return (
        <nav className=" bg-slate-100 rounded-full flex justify-center gap-8 shadow-md p-2 fixed w-72 top-5 left-0 right-0 mx-auto">
            <Link href="/" >Home</Link>
            <Link href="/about" >About</Link>
            <Link href="/login" >Login</Link>
       </nav>
    )
}

export default Navbar