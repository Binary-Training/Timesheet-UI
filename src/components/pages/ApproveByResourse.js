import React from "react"
export default function ApproveByResource() {
    return (
        <div>
            {/* <h1>ApproveByResource</h1> */}
            <div className='container main-border'>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light borden-top">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    {/* <li class="nav-item">
                                        <a class="nav-link active bg-secondary" aria-current="page" href="#">My Approvals</a>
                                    </li> */}
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Resource View</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>

                </div>
                <fieldset className="container border">
                    <legend className="float-none w-auto p-2 text-color">Approve By Resource</legend>
                    <div className="container mt-4">
                        <form className="row g-3 d-flex justify-content-between">
                            <div class="col-md-3">
                                <div class="input-group date">
                                    <span class="input-group-append">
                                        <span class="input-group-text bg-light">
                                            <i class="bi bi-calendar-event-fill"></i>
                                        </span>
                                    </span>
                                    <input type="text" placeholder="April/2022" class="form-control" />
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

                    <div className='row mt-3'>
                        <div className='col'>
                            <nav class="navbar navbar-expand-lg navbar-light ">
                                <div class="container-fluid">
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" >Show</a>
                                            </li>


                                            <li class="nav-item">
                                                <select class=" form-select" aria-label="Default select example" >
                                                    <option selected>0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </li>


                                            <li class="nav-item">
                                                <a class="nav-link" >enteries</a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </nav>
                        </div>

                        <div className='col'>
                            <form class="d-flex justify-content-end">
                                <div className="input-box">
                                    <input type="text" className="form-control rounded-pill" />
                                    <i className="bi bi-search"></i>
                                </div>
                            </form>
                        </div>
                    </div>
                    <table className="table table-bordered table-striped text-center">
                        <thead>
                            <tr>
                                <th>Resource Name</th>
                                <th><span>Resource Country <br></br> Name</span></th>
                                <th><span> Approved <br></br> Hour(s) <i class="bi bi-arrow-down-up"></i></span></th>
                                <th><span> Rejected <br></br> Hours(s) <i class="bi bi-arrow-down-up"></i></span></th>
                                <th><span> Regular <br></br> Submitted <br></br> Hour(s) <i class="bi bi-sort-down"></i></span></th>
                                <th><span> OverTime <br></br> Submitted <br></br> Hour(s) <i class="bi bi-sort-down"></i></span></th>
                                <th><span>Not Submitted<br></br> Hours(s) <i class="bi bi-sort-down"></i></span></th>
                                <th> Approve <br></br> All <input type="checkbox" /></th>
                                <th> Reject <br></br> All <input type="checkbox" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-hover">{"Feb4 User5"}</td>
                                <td>{"LATAM2014"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"16.0"}</td>
                                <td>{"8.0"}</td>
                                <td>{"0.0"}</td>
                                <td><input type="checkbox" /></td>
                                <td><input type="checkbox" /></td>
                            </tr>
                            <tr>
                                <td>{"Feb4 User2"}</td>
                                <td>{"LATAM2014"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td><input type="checkbox" /></td>
                                <td><input type="checkbox" /></td>
                            </tr>
                            <tr>
                                <td>{"Feb4 User3"}</td>
                                <td>{"LATAM2014"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td><input type="checkbox" /></td>
                                <td><input type="checkbox" /></td>
                            </tr>
                            <tr>
                                <td>{"Feb4 User4"}</td>
                                <td>{"LATAM2014"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td><input type="checkbox" /></td>
                                <td><input type="checkbox" /></td>
                            </tr>
                            <tr>
                                <td>{"Mar27 User"}</td>
                                <td>{"LATAM2014"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td>{"0.0"}</td>
                                <td><input type="checkbox" /></td>
                                <td><input type="checkbox" /></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='row'>
                        <div className='col'>
                            <button className='btn btn-outline-secondary export-btn'>export</button>
                        </div>

                        <div className='col'>
                            <nav aria-label="Page navigation example ">
                                <ul class="pagination justify-content-end">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">Page 1 of 1</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button className='btn btn-primary submit-btn rounded-pill'>Submit</button>
                        </div>
                    </div>
                </fieldset>
            </div>

        </div>
    )
}