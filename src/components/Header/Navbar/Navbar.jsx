import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-800 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/favourites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-800 underline" : ""
                            }
                        >
                            Favourites
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-800 underline" : ""
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