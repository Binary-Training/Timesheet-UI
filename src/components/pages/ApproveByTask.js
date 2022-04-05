import React from "react";

import { Table } from "react-bootstrap";


export default function ApproveByReject() {
  return (
    <div>
      <h1>ApproveByReject</h1>
      <fieldset className="container border">
        <legend className="float-none w-auto p-2 text-color">* Timesheet Pending Approval *</legend>


        <div className='container main-border'>
          <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light borden-top">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active bg-secondary" aria-current="page" href="#">My Approvals</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Detengent Approvals</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
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
                    <input type="text" placeholder="search" className="form-control rounded-pill" />
                    <i className="bi bi-search"></i>
                </div>
            </form>
        </div>
    </div>


          <Table striped bordered hover>
            <thead>
              <tr>
                <th><span>Resource Name <i class="bi bi-sort-down"></i></span></th>
                <th><span>Timesheet Period <i class="bi bi-arrow-down-up"></i></span></th>
                <th><span>Regular Hours <i class="bi bi-arrow-down-up"></i></span></th>
                <th><span>Overtime Hours <i class="bi bi-arrow-down-up"></i></span></th>
                <th><input type="text" placeholder="Add Comment" /><br />Approve All<input type="checkbox" /></th>
                <th><input type="text" placeholder="Add Comment" /><br />Reject All<input type="checkbox" /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Feb4 User2"}</td>
                <td className="text-primary">{"01/05/2022-07/05/2022"}</td>
                <td>{"15.00"}</td>
                <td>{"0.0"}</td>
                <td><input type="checkbox" /><br /><input placeholder="Add Comment" /></td>
                <td><input type="checkbox" /><br /><input placeholder="Add Comment" /></td>
              </tr>
              <tr>
                <td>{"Feb4 User2"}</td>
                <td className="text-primary">{"06/03/2022-12/03/2022"}</td>
                <td>{"0.0"}</td>
                <td>{"8.00"}</td>
                <td><input type="checkbox" /><br /><input placeholder="Add Comment" /></td>
                <td><input type="checkbox" /><br /><input placeholder="Add Comment" /></td>
              </tr>
              <tr>
                <td>{"Feb4 User3"}</td>
                <td className="text-primary">{"01/05/2022-07/05/2022"}</td>
                <td>{"10.00"}</td>
                <td>{"0.0"}</td>
                <td><input type="checkbox" /><br /><input placeholder="Add Comment" /></td>
                <td><input type="checkbox" /><br /><input placeholder="Add Comment" /></td>
              </tr>
              <tr>
                <td>{"Feb4 User3"}</td>
                <td className="text-primary">{"06/03/2022-12/03/2022"}</td>
                <td>{"23.00"}</td>
                <td>{"0.0"}</td>
                <td><input type="checkbox" /><br /><input placeholder="Add Comment" /></td>
                <td><input type="checkbox" /><br /><input placeholder="Add Comment" /></td>
              </tr>
              <tr>
                <td>{"Feb4 User4"}</td>
                <td className="text-primary">{"27/02/2022-05/03/2022"}</td>
                <td>{"23.00"}</td>
                <td>{"0.0"}</td>
                <td><input type="checkbox" /><br /><input placeholder="Add Comment" /></td>
                <td><input type="checkbox" /><br /><input placeholder="Add Comment" /></td>
              </tr>
            </tbody>
          </Table>


          <div className='row'>
            <div className='col'>
              <button className='btn btn-outline-secondary export-btn rounded-pill'>export</button>
            </div>

            <div className='col'>
              <nav aria-label="Page navigation example ">
                <ul class="pagination justify-content-end">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">Page 1 of 2</a></li>
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
              <button className='btn btn-primary submit-btn rounded-pill'>Save & Submit</button>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  )
}