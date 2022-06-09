import Avatar from "@suid/material/Avatar";
import Grid from "@suid/material/Grid";
import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";
import { Component } from "solid-js";
import { Style } from "../../types/style";

const Profile: Component = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={3}>
        <Avatar
          alt="Tatsuya Kato"
          src="/src/assets/icon.jpg"
          sx={style.Avatar}
        />
      </Grid>
      <Grid container item xs justifyContent="space-around" direction="column">
        <Typography variant="h5">加藤 辰弥</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          性別: 男
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          誕生日: 2000年1月21日
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          出身: 愛知県
        </Typography>
      </Grid>
    </Grid>
  );
};

const AVATAR_SIZE = 156;

const style: Style = {
  Avatar: { width: AVATAR_SIZE, height: AVATAR_SIZE },
};

export default Profile;
