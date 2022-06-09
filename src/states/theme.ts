import { createSignal } from "solid-js";

export const [getIsDarkTheme, setIsDarkTheme] = createSignal<boolean>(false, {
  equals: false,
});
