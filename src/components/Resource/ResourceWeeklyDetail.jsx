import React from "react"
export default function ResourceWeeklyDetail() {
    return (
        <div>
            {/* <h1>ApproveByResource</h1> */}
            <div className='container main-border mt-4'>
                <div>
                <nav className="navbar navbar-light bg-light mt-4">
  <div className="container-fluid">
  <ol className="breadcrumb ms-3">
    <li className="breadcrumb-item"><a href="/"className="text-decoration-none">Resource View</a></li>
    <li className="breadcrumb-item"><a href="/"className="text-decoration-none">Feb4 User5</a></li>
    <li className="breadcrumb-item">3MRCR-301012<i className="bi bi-chevron-left"></i>Sep02Proj13<i className="bi bi-chevron-right"></i></li>
  </ol>
  </div>
</nav>

                </div>
                <div>

                </div>
                <fieldset className="container border">
                    <legend className="float-none w-auto p-2 text-color" >Resource Weekly Detail</legend>
                    <div className="container mb-3 mt-4">
                        <form className="row g-3 d-flex justify-content-between">
                            <div className="col-md-3">
                                <div className="input-group date">
                                    <span className="input-group-append">
                                        <span className="input-group-text bg-light">
                                            <i className="bi bi-calendar-event-fill"></i>
                                        </span>
                                    </span>
                                    <input type="text" placeholder="April/2022" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <select className="form-select inc-search">
                                    <option selected>Pending</option>
                                    <option>Full Filled</option>
                                    <option>Reject</option>
                                </select>
                            </div>
                        </form>
                    </div>

                    <div className="container mb-3">
                        <form className="row g-3 d-flex justify-content-between">
                            <div className="col-md-2 col-12">
                                <label className="d-flex flex-row align-items-center">
                                    Show
                                    <select className="form-select form-select-sm mx-2">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>

                                    entries

                                </label>

                            </div>
                            <div className="col-md-2 col-12">
                                <div className="input-box input-group-sm">
                                    <input type="text" className="form-control rounded-pill" />
                                </div>

                            </div>

                        </form>

                    </div>
                    <table className="table table-bordered table-striped text-center">
                        <thead>
                            <tr>
                                <th>Resource Name  <i className="bi bi-arrow-down-up"></i> </th>
                                <th><span> Time Period(s) <i className="bi bi-arrow-down-up"></i> </span></th>
                                <th><span> Approved <br></br> Hour(s) <i className="bi bi-arrow-down-up"></i> </span></th>
                                <th><span> Rejected <br></br> Hour(s) <i className="bi bi-arrow-down-up"></i> </span></th>
                                <th><span> Regular <br></br> Submitted <br></br> Hour(s) <i className="bi bi-sort-down text-primary"></i> </span></th>
                                <th><span> OverTime <br></br> Submitted <br></br> Hour(s) <i className="bi bi-sort-down text-primary"></i> </span></th>
                                <th><span> Not <br></br> Submitted <br></br> Hour(s)  <i className="bi bi-arrow-down-up"></i> </span></th>
                                <th> Approve <br></br> All <input type="checkbox" /></th>
                                <th> Reject <br></br> All <input type="checkbox" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{"Feb4 User5"}</td>
                                <td className="text-hover">{"27/03/2022-02/04/2022"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"8.0"}</td>
                                <td>{"8.0"}</td>
                                <td>{"0.0"}</td>
                                {/* <td>{"8.0"}</td> */}
                                {/* <td>{"0.0"}</td> */}
                                <td><input type="checkbox" /></td>
                                <td><input type="checkbox" /></td>
                            </tr>

                            <tr>
                                <td>{"Feb4 User5"}</td>
                                <td>{"20/03/2022-26/03/2022"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                {/* <td>{"0.0"}</td> */}
                                {/* <td>{"0.0"}</td> */}
                                <td><input type="checkbox" /></td>
                                <td><input type="checkbox" /></td>
                            </tr>

                            <tr>
                                <td>{"Feb4 User5"}</td>
                                <td>{"03/04/2022-09/04/2022"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                {/* <td>{"0.0"}</td> */}
                                {/* <td>{"0.0"}</td> */}
                                <td><input type="checkbox" /></td>
                                <td><input type="checkbox" /></td>
                            </tr>
            
                        </tbody>
                    </table>

                        <div className='col'>
                            <nav aria-label="Page navigation example ">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">Page 1 of 1</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                   
                    <div className='row mb-3'>
                        <div className='col'>
                            <button className='btn btn-primary submit-btn rounded-pill'> Submit </button>
                        </div>
                    </div>
                </fieldset>
            </div>

        </div>
    )
}