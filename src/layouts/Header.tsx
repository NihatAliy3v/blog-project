import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { UseLoggedIn } from "../hooks/UseLoggedIn";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/registerSlice";
const settings = ['Logout'];
export const Header = () => {
  const loggedIn = UseLoggedIn();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch()
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleUserMenu = (setting:string) => {
    setAnchorElUser(null);
    if(setting==="Logout"){
      dispatch(logout())
    }
  };
  return (
    <header className="h-15 bg-primary flex items-center">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-3xl text-white">
          Logo
        </Link>

        {loggedIn && (
          <>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={()=>{handleUserMenu(setting)}}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </>
        )}
        {!loggedIn && (
          <div className="flex gap-2 items-center">
            <Button
              text="Login"
              variant="text"
              size="medium"
              handleClick={() => navigate("/login")}
            />
            <Button
              text="Register"
              variant="outlined"
              size="medium"
              handleClick={() => navigate("/register")}
            />
          </div>
        )}
      </div>
    </header>
  );
};
