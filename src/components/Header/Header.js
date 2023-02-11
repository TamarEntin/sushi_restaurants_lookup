import { AppBar, Box, InputBase, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@react-google-maps/api";
import React from "react";
import "./Header.css";

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Typography variant="h5" className="title">
          Sushi Restaurants Lookup
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className="title">
            Explore new places:
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="search">
              <div className="search-icon">
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: "input-root", input: "input-input" }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
