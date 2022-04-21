import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <h2>Timesheet</h2>
                <ul>
                    <li><Link to="ApproveByReject"><i class="fa-solid fa-person-circle-check">&nbsp;&nbsp;</i>ApproveByReject</Link></li>
                    <li><Link to="RegisterTimesheet"><i class="fa-solid fa-person-circle-check">&nbsp;&nbsp;</i>RegisterTimesheet</Link></li>
                    <li><Link to="Timesheetdetail"><i class="fa-solid fa-person-circle-check">&nbsp;&nbsp;</i>TimesheetDetail</Link></li>
                </ul>

                <div className="social_media">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div className="main_content">
                <div className="headers">Timesheet Table</div>
            </div>
        </div>
    )
}

export default SideNav;