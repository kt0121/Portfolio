import { Component, createSignal } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { ThemeProvider } from "@suid/material";
// import { getIsDarkTheme } from "./states/theme";
import { darkTheme, lightTheme } from "./utils/theme";
import PageHeader from "./component/PageHeader";
import { links, pages } from "./dict";
import Home from "./pages/Home";
import { FaBrandsGithub } from "solid-icons/fa";
import { IconTypes } from "solid-icons";
import { Route, Routes } from "solid-app-router";
import ToggleThemeButton from "./component/PageHeader/ToggleThemeButton";
import { getIsDarkTheme } from "./states/theme";
import CssBaseline from "@suid/material/CssBaseline";
import ComingSoon from "./pages/ComingSoon";
import Career from "./pages/Career";
import PageFooter from "./component/PageFooter";

const App: Component = () => {
  return (
    <ThemeProvider theme={getIsDarkTheme() ? darkTheme : lightTheme}>
      <CssBaseline />
      <PageHeader />
      <Routes>
        {PAGE_CONTENTS.map((page) => (
          <Route path={page.path} component={page.Component} />
        ))}
      </Routes>
      <PageFooter />
    </ThemeProvider>
  );
};

export const PAGE_CONTENTS: {
  path: string;
  name: string;
  Component: Component;
}[] = [
  { path: pages.Home, name: "ホーム", Component: Home },
  { path: pages.Career, name: "キャリア", Component: Career },
  { path: pages.Skill, name: "スキル", Component: ComingSoon },
  { path: pages.Project, name: "プロジェクト", Component: ComingSoon },
];

export const LINK_CONTENTS: { url: string; Icon: IconTypes }[] = [
  { url: links.GitHub, Icon: FaBrandsGithub },
];

export const SITE_TITLE = "Tatsuya Kato's Portfolio";

export default App;
