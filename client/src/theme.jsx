const white = "#FFFFFF";
const black = "#161617";
const gray = "#F8F8F9";

const themeLight = {
    background: white,
    body: black,
    color: black
};

const themeDark = {
    background: black,
    body: white,
    color: white
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;