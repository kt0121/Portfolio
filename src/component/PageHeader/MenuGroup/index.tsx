import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Link from "@suid/material/Link";
import { SxProps } from "@suid/system";
import { Component } from "solid-js";
import { PAGE_CONTENTS } from "../../../App";

const MenuGroup: Component<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box sx={sx}>
      {PAGE_CONTENTS.map((page) => {
        return (
          <Button color="inherit" href={page.path}>
            {page.name}
          </Button>
        );
      })}
    </Box>
  );
};

export default MenuGroup;
