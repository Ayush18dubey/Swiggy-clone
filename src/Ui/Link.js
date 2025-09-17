import { NavLink } from "react-router-dom";

const Link=({url,name})=> {
    return (
        <l1>
            <NavLink to={url}>{name}</NavLink>
        </l1>
    );
};

export default Link;