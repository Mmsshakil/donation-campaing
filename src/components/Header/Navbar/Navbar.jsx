import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between">
                <Logo></Logo>
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/favourites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Favourites
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
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