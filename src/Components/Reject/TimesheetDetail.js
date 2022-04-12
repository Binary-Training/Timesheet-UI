import React from "react";

import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

function TimesheetDetail() {
    return (
        <div>

            <fieldset className="container border ">
                <legend className="float-none w-auto p-2 text-color extra">Pending</legend>

                <div className="row silver">
                    <div className="col silvers">Employee Id<i class="fa fa-info-circle" aria-hidden="true"></i></div>
                    <div className="col silvers"><input type="text" placeholder="Employee Id" /></div>
                    <div className="col silvers">Employee Name</div>
                    <div className="col silvers"><input type="text" placeholder="Employee Name" /></div>
                    <div className="col silvers">Employee Cost Center</div>
                    <div className="col silvers"><input type="text" placeholder="Employee Cost Center" /></div>
                </div>
                <br />
                <br />
                <Table striped bordered hover >
                    <thead className="center">
                        <tr>
                            <th><span>WBS</span></th>
                            <th><span>Effort Type</span></th>
                            <th><span>Sun<br />Mar<br />27</span></th>
                            <th><span>Mon<br />Mar 28</span></th>
                            <th><span>Tue<br />Mar<br />29</span></th>
                            <th><span>Wed<br />Mar 30</span></th>
                            <th><span>Thu<br />Mar 31</span></th>
                            <th><span>Fri<br />Apr<br />01</span></th>
                            <th><span>Sat<br />Apr<br />02</span></th>
                            <th><span>Total</span></th>
                        </tr>
                    </thead>
                    <tbody className="center">
                        <tr>
                            <td className="centers">{"3MRCR-301012<Sep02Proj13>"}</td>
                            <td>{"Overtime"}</td>
                            <td>{""}</td>
                            <td>{"8.0+"}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{"8"}</td>
                        </tr>
                        <tr>
                            <td className="centers">{"3MRCR-301012<Sep02Proj13>"}</td>
                            <td>{"Regular"}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{"8.0+"}</td>
                            <td>{""}</td>
                            <td>{"8"}</td>
                        </tr>
                        <tr>
                            <td className="centers">{"Total(Regular+Overtime)"}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>{"16"}</td>
                        </tr>
                    </tbody>
                </Table>

                <div className="row upper">
                    <div className="col">
                        <input type="text" placeholder="Add Comment" className="extract" />
                    </div>

                    <div className="col slide">
                        <Button variant="primary" className=" export-btn">Approve</Button>{' '}
                        <Button variant="primary" className=" export-btn">Reject</Button>{' '}
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

export default TimesheetDetail;