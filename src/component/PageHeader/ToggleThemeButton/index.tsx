import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import { SxProps } from "@suid/system";
import { Component } from "solid-js";
import { iconSize } from "../../../utils/theme";
import { BsBrightnessHigh, BsMoon } from "solid-icons/bs";
import { getIsDarkTheme, setIsDarkTheme } from "../../../states/theme";

const ToggleThemeButton: Component<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Box sx={sx}>
      <Button color="inherit" onClick={() => setIsDarkTheme(!getIsDarkTheme())}>
        {getIsDarkTheme() ? (
          <BsBrightnessHigh size={iconSize} />
        ) : (
          <BsMoon size={iconSize} />
        )}
      </Button>
    </Box>
  );
};

export default ToggleThemeButton;
