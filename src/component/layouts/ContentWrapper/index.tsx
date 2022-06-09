import Grid from "@suid/material/Grid";
import Stack from "@suid/material/Stack";
import Box from "@suid/system/Box";
import { Component, JSXElement } from "solid-js";
import { Style } from "../../../types/style";

const ContentWrapper: Component<{ children: JSXElement }> = ({ children }) => {
  return (
    <Box sx={style.Box} component="div">
      <Stack spacing={2}>{children}</Stack>
    </Box>
  );
};

const style: Style = {
  Box: {
    maxWidth: 900,
    width: "100%",
    margin: "0 auto",
    paddingTop: 16,
    paddingBottom: 8,
  },
};

export default ContentWrapper;
