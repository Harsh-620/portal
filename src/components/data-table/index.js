import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

import "./styles.scss";

const DataTable = ({
  columns = [],
  rows = [],
  pagination = { page: 1, perPage: 15, total: 35 },
}) => {
  const paginationArr = [];
  const processPagination = () => {
    const availablePages = Math.ceil(pagination.total / pagination.perPage);
    for (let i = 0; i < availablePages; i++) {
      paginationArr.push(
        <MDBPaginationItem>
          <MDBPaginationLink href="#">{i + 1}</MDBPaginationLink>
        </MDBPaginationItem>
      );
    }
  };
  processPagination();
  return (
    <>
      <MDBTable responsive id="table">
        {rows.length > 0 ? (
          <>
            <MDBTableHead className="table-head">
              <tr>
                {columns.map((c) => {
                  return <th scope="col">{c.title}</th>;
                })}
              </tr>
            </MDBTableHead>
            <MDBTableBody className="table-body">
              {rows.map((r) => {
                const rowData = columns.map((c) => {
                  if (!c.key) {
                    return <th scope="row">{c.render()}</th>;
                  } else {
                    return <th scope="row">{r[c.key]}</th>;
                  }
                });
                return (
                  <tr className="table-row">
                    {rowData.map((rd) => {
                      return rd;
                    })}
                  </tr>
                );
              })}
            </MDBTableBody>
          </>
        ) : (
          <MDBTableBody>No data</MDBTableBody>
        )}
      </MDBTable>
      {/* {rows.length > 0 ? (
        <nav aria-label="Page navigation example">
          <MDBPagination end className="mb-0">
            {paginationArr.map((paginate) => {
              return paginate;
            })}
          </MDBPagination>
        </nav>
      ) : null} */}
    </>
  );
};

export default DataTable;
