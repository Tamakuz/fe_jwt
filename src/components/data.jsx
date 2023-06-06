import * as React from "react";

import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Box, Toolbar, Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "title", headerName: "Title", width: 150 },
];

const Data = () => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const updatedRows = res.data.map((item, i) => ({
        id: i + 1,
        title: item.title,
      }));
      setRows(updatedRows);
    });
  }, []);

  return (
    <Box>
      <Toolbar sx={{ height: 600, paddingTop: 10, display: "flex", flexDirection: 'column', gap: 5 }}>
        <DataGrid
          sx={{ backgroundColor: "white", width: "100%" }}
          columns={columns}
          rows={rows}
        />
      <Typography variant="h6" component="div" color="inherit">
        Login Sebagai Jovan
      </Typography>
      </Toolbar>
    </Box>
  );
};

export default Data;
