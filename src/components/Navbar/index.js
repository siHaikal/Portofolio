import Link from "next/link"

const Navbar = () => {
    return (
        <div className ="flex items-center justify-between bg-blue-500 p-4">
            <h1 className="ms-10">Haikal</h1>
            <nav className="me-10">
                <ul className ="flex items-center list-none">
                    <li className="px-4 "><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                    <li className="px-4"><a href="#" className="text-white hover:text-gray-300">About</a></li>
                    <li className="px-4"><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar