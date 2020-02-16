import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "Portal name" },
  { id: "publication", label: "Publications" },
  {
    id: "property",
    label: "Properties",

    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "XML",
    label: "XML",

    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "Lastgen",
    label: "Last Generation ",

    align: "right",
    format: value => value.toFixed(2)
  },
  {
    id: "LastFetch",
    label: "Last Fetch ",

    align: "right",
    format: value => value.toFixed(2)
  },
  {
    id: "Portal",
    label: "Portal",

    align: "right",
    format: value => value.toFixed(2)
  },
  {
    id: "Status",
    label: "Status",

    align: "right",
    format: value => value.toFixed(2)
  }
];

function createData(
  name,
  publication,
  property,
  XML,
  Lastgen,
  LastFetch,
  Portal,
  Status
) {
  return {
    name,
    publication,
    property,
    XML,
    Lastgen,
    LastFetch,
    Portal,
    Status
  };
}

const rows = [
  createData("India", "IN", 13241, 3287263),
  createData("India", "IN", 13241, 3287263),
  createData("India", "IN", 13241, 3287263),
  createData("India", "IN", 13241, 3287263),
  createData("India", "IN", 13241, 3287263),
  createData("India", "IN", 13241, 3287263)
];

const useStyles = makeStyles({
  root: {
    background: "#FBFBFC 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    border: "2px solid #303F9F",
    borderRadius: 10,
    opacity: 1
  },
  container: {}
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <TableContainer className={classes.root}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}
