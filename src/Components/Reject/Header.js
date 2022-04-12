import React from "react";

import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
        <Link to="ApproveByReject">ApproveByReject</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="RegisterTimesheet">RegisterTimesheet</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="TimesheetDetail">TimesheetDetail</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default Header;