import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function BasicTable({data}) {

    if (!data) {
        // Render a loading state or a message indicating that data is being fetched
        return <div>Loading...</div>;
      }
    
      if (data.length === 0) {
        // Render a message indicating that no data is available
        return <div>No data available</div>;
      }

      // Generate unique IDs for each row
  const rows = data.map((row, index) => ({
    ...row,
    id: index + 1, // You can use any unique identifier here
  }));

  // Get the list of all unique properties in the data objects
  const properties = Array.from(
    rows.reduce((accumulator, object) => {
      Object.keys(object).forEach((key) => {
        accumulator.add(key);
      });
      return accumulator;
    }, new Set())
  );

  // Map properties to columns for DataGrid
  const columns = properties.map((property) => ({
    field: property,
    headerName: property,
    width: 150,
  }));

  return (
    <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
    </Box>

  );
}