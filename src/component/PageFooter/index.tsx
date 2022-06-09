import Link from "@suid/material/Link";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import { Component } from "solid-js";

const PageFooter: Component = () => {
  return (
    <Typography variant="body2" color="text.secondary" textAlign="center">
      Copyright ©
      <Link color="inherit" href="https://github.com/kt0121" target="_brank">
        Tatsuya Kato
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default PageFooter;
