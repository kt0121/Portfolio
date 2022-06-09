import Box from "@suid/material/Box";
import Card from "@suid/material/Card";
import CardActions from "@suid/material/CardActions";
import CardContent from "@suid/material/CardContent";
import Button from "@suid/material/Button";
import Typography from "@suid/material/Typography";
import { Style } from "../../../types/style";
import { Component } from "solid-js";
import { ListItemProp } from "../../../types/list";
import Grid from "@suid/material/Grid";
import Stack from "@suid/material/Stack";
import {
  FaBookmark,
  FaBrandsStackOverflow,
  FaSolidArrowCircleRight,
  FaSolidBook,
  FaSolidExpandArrowsAlt,
  FaSolidLongArrowAltRight,
  FaSolidSearchPlus,
} from "solid-icons/fa";

const ListItem: Component<ListItemProp> = ({
  overview,
  descriptions,
  term,
  link,
}) => {
  return (
    <Box sx={style.Box}>
      <Grid container direction="row">
        <Grid item xs={6}>
          <Typography sx={style.Term} color="text.secondary" gutterBottom>
            {term}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Stack>
            <Typography sx={style.Overview} component="div">
              {overview}
            </Typography>

            {descriptions &&
              descriptions.map((description) => (
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              ))}
          </Stack>
        </Grid>

        {link && (
          <Grid item xs={1}>
            {/* @ts-ignore */}
            <Button
              color="inherit"
              href={link}
              target="_brank"
              sx={{ justifySelf: "center" }}
            >
              <FaSolidSearchPlus size="24px" />
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

const style: Style = {
  Term: {
    fontSize: 14,
  },
  Overview: {
    fontSize: 20,
  },
  Box: {
    width: "90%",
    alignSelf: "center",
  },
};

export default ListItem;
