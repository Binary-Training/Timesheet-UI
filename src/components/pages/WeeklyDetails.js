const WeeklyDetails = () => {
  return (
    <>
      <div className="container mb-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded fw-bold">
          <div className="container-fluid">
            <ol className="breadcrumb pt-2">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none">
                  Project View
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none">
                  3MRCR-301012 <i className="bi bi-chevron-left"></i>Sep02Proj13
                  <i className="bi bi-chevron-right"></i>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Feb4 User5
              </li>
            </ol>
          </div>
        </nav>
      </div>

      <fieldset className="container border mb-5">
        <legend className="float-none w-auto p-2 text-color fs-6">
          Approve By Project
        </legend>
        <div className="container mb-3 mt-4">
          <form className="row g-3 d-flex justify-content-between">
            <div className="col-md-2">
              <div className="input-group date">
                <span className="input-group-append">
                  <span className="input-group-text bg-light">
                    <i className="bi bi-calendar-event-fill"></i>
                  </span>
                </span>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option selected>Pending</option>
                <option>Full Filled</option>
                <option>Reject</option>
              </select>
            </div>
          </form>
        </div>

        <div className="container mb-3">
          <form className="row g-3 d-flex justify-content-between">
            <div className="col-md-2">
              <div className="d-flex flex-row text-center">
                <span className="mt-2 me-2">Show</span>
                <select className="form-select">
                  <option selected>5</option>
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>All</option>
                </select>
                <span className="mt-2 ms-2">Entries</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="input-box">
                <input type="text" className="form-control rounded-pill" />
                <i className="bi bi-search"></i>
              </div>
            </div>
          </form>
        </div>

        <div className="container mb-3 table-responsive">
          <table className="table table table-bordered table-striped text-center">
            <thead>
              <tr>
                <th>
                  Resource Name <i className="bi bi-arrow-down-up"></i>
                </th>
                <th>
                  Time Period(s) <i className="bi bi-arrow-down-up"></i>
                </th>
                <th>
                  <span>Approved</span> <br /> <span>Hour(s)</span>
                  <i className="bi bi-arrow-down-up"></i>
                </th>
                <th>
                  <span>Rejected</span> <br /> <span>Hour(s)</span>
                  <i className="bi bi-arrow-down-up"></i>
                </th>
                <th>
                  <span>Regular</span> <br /> <span>Submitted</span> <br />
                  <span>Hour(s)</span>
                  <i className="bi bi-sort-down text-primary"></i>
                </th>
                <th>
                  <span>Overtime</span>
                  <br /> <span>Submitted</span>
                  <br /> <span>Hour(s)</span>
                  <i className="bi bi-sort-down text-primary"></i>
                </th>
                <th>
                  <span>Not</span>
                  <br />
                  <span>Submitted</span> <br /> <span>Hour(s)</span>
                  <span>
                    <i className="bi bi-arrow-down-up"></i>
                  </span>
                </th>
                <th>
                  Approve All
                  <span className="ms-1">
                    <input className="form-check-input" type="checkbox" />
                  </span>
                </th>
                <th>
                  Reject All
                  <span className="ms-1">
                    <input className="form-check-input" type="checkbox" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-hover">Feb4 User5</td>
                <td>
                  <span>27/03/22-02/04/22</span>
                </td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.8</td>
                <td>0.8</td>
                <td>0.0</td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-hover">Feb4 User3</td>
                <td>
                  <span>27/03/22-02/04/22</span>
                </td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.8</td>
                <td>0.8</td>
                <td>0.0</td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-hover">Feb4 User2</td>
                <td>
                  <span>27/03/22-02/04/22</span>
                </td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.8</td>
                <td>0.8</td>
                <td>0.0</td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-hover">Mar27 User</td>
                <td>
                  <span>27/03/22-02/04/22</span>
                </td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.8</td>
                <td>0.8</td>
                <td>0.0</td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="container d-flex justify-content-end">
          <ul className="pagination pagination-sm">
            <li className="page-item">
              <a className="page-link" href="/" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="container d-flex justify-content-end mb-3">
          <button
            type="button"
            className="btn btn-sm px-4 btn-primary rounded-pill"
          >
            Submit
          </button>
        </div>
      </fieldset>
    </>
  );
};

export default WeeklyDetails;
