import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';
//import { makeStyles } from '@mui/styles';
//import DataGrid from '@material-ui/data-grid';
//import { makeStyles } from '@material-ui/core/styles';

/*const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
}); */

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'size', headerName: 'Size' },
  { field: 'githubUrl', headerName: 'GitHub URL', width: 200,
  renderCell: (params) => (
    <Button 
        color="secondary"
      startIcon={<GitHubIcon />}
      href={params.value}
      target="_blank"
      variant="contained"
      size="large"
      style={{ marginLeft: 16 }}
    >
      Github
    </Button>

)

},
  { field: 'downloadUrl', 
    headerName: 'Download URL',
    width: 250,
    renderCell: (params) => (
      <Button 
        startIcon={<DownloadIcon />}
        href={params.value}
        target="_blank"
        variant="contained"
        size="large"
        style={{ marginLeft: 16 }}
      >
        Download
      </Button>

)},
];

const ScraperList = () => {
  //const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/Equator-Studios/scrapers/contents/scrapers')
      .then(res => {
        const scrapers = res.data.map(scraper => {
          return {
            id: scraper.sha,
            name: scraper.name,
            size: scraper.size,
            githubUrl: scraper.html_url,
            downloadUrl: scraper.download_url,
          };
        });
        setData(scrapers);
      })
      .catch(err => console.error("An error has ocurred " + err));
  }, []);

  return (
    <div  style={{ display: 'flex', height: '100%', justifyContent: 'center' }}>
          <div style={{ flexGrow: 1 }}>

      <DataGrid
        sx={{
            justifyContent: 'center',
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
        }}
        autoPageSize
        autoHeight
        rows={data}
        rowsPerPageOptions={[5, 10, 20]}
        columns={columns}
        pageSize={15}
        pagination
        rowSelection="single"
        toolbar={false}
      />
      </div>
    </div>
  );
};

export default ScraperList;
