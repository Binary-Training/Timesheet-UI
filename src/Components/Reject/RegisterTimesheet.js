import React from "react";

import Table from "react-bootstrap/Table"


export default function MainTable() {
    return (
        <div>
            <fieldset className="container border ">
                <legend className="float-none w-auto p-2 text-color extra">Register Timesheet</legend>

                <div className="row silve">
                    <div className="col silvers">Employee Id<i class="fa fa-info-circle" aria-hidden="true"></i></div>
                    <div className="col silvers"><input type="text" placeholder="Employee Id" /></div>
                    <div className="col silvers">Employee Name</div>
                    <div className="col silvers"><input type="text" placeholder="Employee Name" /></div>
                    <div className="col silvers">Employee Cost Center</div>
                    <div className="col silvers"><input type="text" placeholder="Employee Cost Center" /></div>
                </div>
                <br />

                <br />
                <div className="row upper">
                    <div className="col slid">
                        <button type="button" className="btn btn-danger export-btn">Copy From Previous Week Tasks</button>{"  "}
                        <button type="button" class="btn btn-danger export-btn">Copy From Previous Week Tasks & Time</button>
                    </div>
                </div>

                <div className="row upper">
                    <div className="col">

                    </div>

                    <div className="col slide">
                        TimeSheet Status:
                        <br />
                        Last Modified Date:
                    </div>
                </div>
                <Table striped bordered hover>
                    <thead className="center cent">
                        <tr>
                            <th>Project</th>
                            <th>Project Description</th>
                            <th>Effort Type</th>
                            <th><span> SUN <br></br> Mar <br></br> 27 </span></th>
                            <th><span> MON <br></br> Mar <br></br> 28 </span></th>
                            <th><span> TUE <br></br> Mar <br></br> 29 </span></th>
                            <th><span> WED <br></br> Mar <br></br> 30 </span></th>
                            <th><span> THU <br></br> Mar <br></br> 31 </span></th>
                            <th><span> FRI <br></br> Apr <br></br> 1 </span></th>
                            <th><span> SAT <br></br> Apr <br></br> 2 </span></th>
                            <th>Approver</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="center">
                        <tr>
                            <td><select>
                                <option selected="selected" disabled="disabled">Please Select</option>
                                <option>9A</option>
                                <option>Another action</option>
                                <option>Something else here</option>

                            </select></td>
                            <td>
                                <select>
                                    <option selected="selected" disabled="disabled"></option>
                                    <option>9A</option>
                                    <option>Another action</option>
                                    <option>Something else here</option>

                                </select>
                            </td>
                            <td>
                                <select>
                                    <option selected="selected" disabled="disabled">Regular</option>
                                    <option>9A</option>
                                    <option>Another action</option>
                                    <option>Something else here</option>

                                </select>
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>

                            <td>{""}</td>
                            <td>{""}</td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>

                            <td>
                                <i class="bi bi-trash-fill" style={{ fontSize: '20px' }}></i>
                            </td>

                        </tr>


                        <tr>
                            <td colSpan="14" className="slow">

                                <a href="/">+ Add Row</a>

                            </td>
                        </tr>


                        <tr>
                            <td colSpan="3" className="centers">Regular Hours</td>

                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>

                            </td>
                        </tr>


                        <tr>
                            <td colSpan="3" className="centers">Overtime Hours</td>

                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>{""}</td>
                            <td>{""}</td>
                            <td>
                                <input type="text" style={{ width: '45px', height: '30px' }} />
                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </Table>

                <div className="row upper">
                    <div className="col slide">
                        <button className="btn btn-danger export-btn">Submit Time For Approval</button>{' '}
                        <button className="btn btn-danger exports-btn">Save</button>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}