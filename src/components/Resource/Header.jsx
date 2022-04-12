import React from "react";

import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <Link to="ApproveByResource">ApproveByResource</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="ResourceDetail">ResourceDetail</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="ResourceWeeklyDetail">ResourceWeeklyDetail</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default Header;