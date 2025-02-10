import {
    Grid2X2,
    Heart,
    LayoutGrid,
    Search,
    ShoppingCart,
    User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex flex-col md:flex-row bg-walmart items-center px-10 py-7 space-x-5">
            <Link href="/" className="mb-5 md:mb-0">
                <Image
                    src="https://links.papareact.com/xsi"
                    alt="Walmart Logo"
                    width={150}
                    height={150}
                />
            </Link>
            <form className="flex items-center bg-white rounded-full w-full flex-1">
                <input
                    placeholder="Search Everything..."
                    type="text"
                    className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
                />
                <button>
                    <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
                </button>
            </form>
            <div className="flex space-x-5 p-5 pb-0 md:p-0">
                <Link href="/" className="hidden xl:flex header-links">
                    <Grid2X2 size={20} />
                    <p>Departments</p>
                </Link>
                <Link href="/" className="hidden xl:flex header-links">
                    <LayoutGrid size={20} />
                    <p>Services</p>
                </Link>
                <Link href="/" className="flex header-links">
                    <Heart size={20} />
                    <div className="">
                        <p className="text-xs font-extralight">Reorder</p>
                        <p>My Items</p>
                    </div>
                </Link>
                <Link href="/" className="flex header-links">
                    <User size={20} />
                    <div className="">
                        <p className="text-xs font-extralight">Sign In</p>
                        <p>Account</p>
                    </div>
                </Link>
                <Link href="/" className="flex header-links">
                    <ShoppingCart size={20} />
                    <div className="">
                        <p className="text-xs font-extralight">No Items</p>
                        <p>$0.00</p>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
