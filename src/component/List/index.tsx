import Divider from "@suid/material/Divider";
import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";
import Box from "@suid/system/Box";
import { Component } from "solid-js";
import { ListItemProp, ListProp } from "../../types/list";
import ListItem from "./ListItem";

const CardList: Component<ListProp> = ({ title, listItems }) => {
  return (
    <Stack spacing={1}>
      <Typography variant="h4" component="div" textAlign="start">
        {title}
      </Typography>
      <Divider flexItem />
      {listItems.map((props) => (
        <ListItem {...props} />
      ))}
    </Stack>
  );
};

export default CardList;
