import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { Logs, PanelLeft } from "lucide-react";
import React, { useState } from "react";
import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

const urls = [
  { url: "/blogs", Content: "Blogs" },
  { url: "/posts", Content: "Posts" },
  { url: "/scrollrestoration", Content: "Scroll Restoration" },
];

function Layout() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <ScrollRestoration
        getKey={(location, matches) => {
          console.log(location, matches);
          return location.pathname;
        }}
      />

      <div className="h-10 w-8">
        <Button
          className="fixed border-none"
          variant="outlined"
          color="black"
          onClick={handleOpen}
        >
          <PanelLeft />
        </Button>
        <div>
          <Drawer open={open} onClose={handleOpen}>
            <List>
              {urls.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    to={item.url}
                    onClick={() => handleOpen}
                    className={({ isActive, isPending }) =>
                      isActive ? "bg-neutral-400" : ""
                    }
                  >
                    <ListItem>
                      <ListItemPrefix>
                        <Logs />
                      </ListItemPrefix>
                      <Typography variant="h5">{item.Content}</Typography>
                    </ListItem>
                  </NavLink>
                );
              })}
            </List>
          </Drawer>
        </div>
      </div>
      <div className={`ml-8`}>{<Outlet />}</div>
    </>
  );
}

export default Layout;
