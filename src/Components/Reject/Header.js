import React from "react";

import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
        <Link to="ApproveByReject"><p>ApproveByReject</p></Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="RegisterTimesheet"><p>RegisterTimesheet</p></Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="TimesheetDetail"><p>TimesheetDetail</p></Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default Header;