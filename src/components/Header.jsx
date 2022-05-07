import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authAction } from "../store/store";
const Header = () => {
  const isloggedin = useSelector((state) => state.isLoogedIn);
  const [value, setvalue] = useState();
  const dispatch = useDispatch();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">Blogs</Typography>
        {isloggedin && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setvalue(val)}
            >
              <Tab
                // className={classes.font}
                LinkComponent={Link}
                to="/blogs"
                label="All Blogs"
              />
              <Tab
                // className={classes.font}
                LinkComponent={Link}
                to="/userblog"
                label="User Blogs"
              />
              <Tab
                // className={classes.font}
                // LinkComponent={Link}
                to="/blogs/add"
                label="Add Blog"
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isloggedin && (
            <>
              <Button
                color="warning"
                sx={{ margin: 1, borderRadius: 10 }}
                variant="contained"
                LinkComponent={Link}
                to="/auth"
              >
                Login
              </Button>
              <Button
                color="warning"
                sx={{ margin: 1, borderRadius: 10 }}
                variant="contained"
                LinkComponent={Link}
                to="/auth"
              >
                Signup
              </Button>
            </>
          )}
          {isloggedin && (
            <Button
              onClick={() => dispatch(authAction.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
