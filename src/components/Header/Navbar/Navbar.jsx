import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center my-6">
                <Logo></Logo>
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] text-lg font-bold underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/favourites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] text-lg font-bold underline" : ""
                            }
                        >
                            Donations
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] text-lg font-bold underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;