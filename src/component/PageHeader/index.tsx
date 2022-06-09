import AppBar from "@suid/material/AppBar";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import { Component } from "solid-js";
import { SITE_TITLE } from "../../App";
import { Style } from "../../types/style";
import LinkGroup from "./LinkGroup";
import MenuGroup from "./MenuGroup";
import ToggleThemeButton from "./ToggleThemeButton";

const PageHeader: Component = () => {
  return (
    <AppBar position="fixed" sx={style.AppBar}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={style.Typography}>
          {SITE_TITLE}
        </Typography>
        <MenuGroup sx={style.MenuGroup} />
        <LinkGroup />
        <ToggleThemeButton />
      </Toolbar>
    </AppBar>
  );
};

const style: Style = {
  AppBar: {
    flexGrow: 1,
    paddingX: 2,
  },
  Typography: { paddingRight: 1 },
  MenuGroup: { flexGrow: 1 },
};

export default PageHeader;
