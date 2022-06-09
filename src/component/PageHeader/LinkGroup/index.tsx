import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import { SxProps } from "@suid/system";
import { Component } from "solid-js";
import { LINK_CONTENTS } from "../../../App";
import { getIsDarkTheme } from "../../../states/theme";
import { iconSize } from "../../../utils/theme";

const LinkGroup: Component<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box sx={sx}>
      {LINK_CONTENTS.map((link) => {
        return (
          // @ts-ignore
          <Button href={link.url} target="_brank">
            <link.Icon
              size={iconSize}
              color={getIsDarkTheme() ? "white" : "black"}
            />
          </Button>
        );
      })}
    </Box>
  );
};

export default LinkGroup;
