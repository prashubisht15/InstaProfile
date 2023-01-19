import React from 'react'
import './apply.css';
import SearchIcon from '@mui/icons-material/Search';
import {
  InputAdornment,
  TextField,
  Button
} from "@mui/material";
const Header = () => {
  return (
    <>
      <div className='header container'>
          <h1 className='instagram'>Instagram</h1>
          <div className='search'>
          <TextField
            className="search-desktop"
            size="large"
            type="text"
            sx={{ width: "15vw" }}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
            placeholder="Search for items/categories"
            name="search"
          ></TextField>
          </div>
          <div className='login-signup'>
          <Button
              className="button"
              variant="contained"
            >
             login
            </Button>
            <Button
              className="button"
              variant="contained"
            >
              signup
            </Button>
          </div>
      </div>
      <hr />
    </>
  )
}

export default Header
