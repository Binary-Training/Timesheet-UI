const ApproveByProject = () => {
  return (
    <>
      <div className="container mb-1">
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded fw-bold">
          <div className="container-fluid">
            <ol className="breadcrumb pt-2">
              <li className="breadcrumb-item">Project View</li>
            </ol>
          </div>
        </nav>
      </div>

      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <fieldset className="border p-2">
            <legend className="float-none w-auto p-2 text-color">
              Approve By Project
            </legend>

            <form>
              <div className="row d-flex justify-content-between">
                <div className="col-md-6 col-lg-3 col-sm-6 col-12">
                  <div className="input-group input-group-sm mb-2">
                    <span className="input-group-text" id="inputGroup-sizing-sm">
                      <i className="bi bi-calendar-event-fill"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 col-sm-6 col-12">
                  <select className="form-select form-select-sm mb-2">
                    <option>Pending</option>
                    <option>Resolve</option>
                    <option>Reject</option>
                  </select>
                </div>
              </div>

              <div className="row d-flex justify-content-between">
                <div className="col-md-3 col-lg-2 col-sm-3 col-12">
                  <label className="form-label select-label d-flex flex-row align-items-center">
                    <span className="fw-bold px-1">Show</span>
                    <select className="form-select form-select-sm">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>All</option>
                    </select>
                    <span className="fw-bold px-1">entries</span>
                  </label>
                </div>
                <div className="col-md-6 col-lg-3 col-sm-6 col-12">
                  <div className="input-group input-group-sm mb-2">
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                    <span className="input-group-text" id="inputGroup-sizing-sm">
                      Search
                    </span>
                  </div>
                </div>
              </div>
            </form>

            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead className="text-center">
                      <tr>
                        <th>
                          <div>
                            <span>Project Name</span>
                            <span class="bi bi-arrow-down-up"></span>
                          </div>
                        </th>
                        <th>
                          <div>
                            <span>Project</span>
                            <br />
                            <span>Manager</span>
                            <br />
                            <span>Name</span>
                            <span class="bi bi-arrow-down-up"></span>
                          </div>
                        </th>
                        <th>
                          <span>Project</span>
                          <br />
                          <span>Country</span>
                          <i class="bi bi-arrow-down-up"></i>
                        </th>
                        <th>
                          <span>Project</span>
                          <br />
                          <span>Description</span>
                          <i class="bi bi-arrow-down-up"></i>
                        </th>
                        <th>
                          <span>Approved</span>
                          <br />
                          <span>Hour(s)</span>
                          <i class="bi bi-arrow-down-up"></i>
                        </th>
                        <th>
                          <span>Rejected</span>
                          <br />
                          <span>Hour(s)</span>
                          <i class="bi bi-arrow-down-up"></i>
                        </th>
                        <th>
                          <span>Regular</span>
                          <br />
                          <span>Submitted</span>
                          <br />
                          <span>Hour(s)</span>
                          <i class="bi bi-sort-down"></i>
                        </th>
                        <th>
                          <span>Overtime</span>
                          <br />
                          <span>Submitted</span>
                          <br />
                          <span>Hour(s)</span>
                          <i class="bi bi-sort-down"></i>
                        </th>
                        <th>
                          <span>Not</span>
                          <br />
                          <span>Submitted</span>
                          <br />
                          <span>Hour(s)</span>
                          <i class="bi bi-arrow-down-up"></i>
                        </th>
                        <th>
                          <span>Approve</span>
                          <br />
                          <span>All</span>
                          <span className="ms-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </span>
                        </th>
                        <th>
                          <span>Reject</span>
                          <br />
                          <span>All</span>
                          <span className="ms-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-center">
                      <tr>
                        <td>3MRCR-301012</td>
                        <td>Feb5 Pm1</td>
                        <td>LATAM2014</td>
                        <td>Sep02Proj13</td>
                        <td>0.0</td>
                        <td>0.0</td>
                        <td>0.8</td>
                        <td>0.8</td>
                        <td>0.0</td>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>3MRCR-301012</td>
                        <td>Feb5 Pm1</td>
                        <td>LATAM2014</td>
                        <td>Sep02Proj13</td>
                        <td>0.0</td>
                        <td>0.0</td>
                        <td>0.8</td>
                        <td>0.8</td>
                        <td>0.0</td>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>3MRCR-301012</td>
                        <td>Feb5 Pm1</td>
                        <td>LATAM2014</td>
                        <td>Sep02Proj13</td>
                        <td>0.0</td>
                        <td>0.0</td>
                        <td>0.8</td>
                        <td>0.8</td>
                        <td>0.0</td>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>3MRCR-301012</td>
                        <td>Feb5 Pm1</td>
                        <td>LATAM2014</td>
                        <td>Sep02Proj13</td>
                        <td>0.0</td>
                        <td>0.0</td>
                        <td>0.8</td>
                        <td>0.8</td>
                        <td>0.0</td>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>3MRCR-301012</td>
                        <td>Feb5 Pm1</td>
                        <td>LATAM2014</td>
                        <td>Sep02Proj13</td>
                        <td>0.0</td>
                        <td>0.0</td>
                        <td>0.8</td>
                        <td>0.8</td>
                        <td>0.0</td>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>3MRCR-301012</td>
                        <td>Feb5 Pm1</td>
                        <td>LATAM2014</td>
                        <td>Sep02Proj13</td>
                        <td>0.0</td>
                        <td>0.0</td>
                        <td>0.8</td>
                        <td>0.8</td>
                        <td>0.0</td>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="d-flex justify-content-between">
                  <button type="button" className="btn-sm button">
                    Export
                  </button>
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="/" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="/">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="/">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="/" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex justify-content-end">
                  <button className="btn btn-sm btn-danger rounded-pill px-4">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
    </>
  );
};

export default ApproveByProject;
