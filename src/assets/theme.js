const light = {
    colors: {
        background: "#dee2e6",
        border: "rgb(216, 216, 216)",
        card: "#dee2e6",
        notification: "rgb(255, 59, 48)",
        primary: "rgb(0, 122, 255)",
        text: "rgb(28, 28, 30)",
        placeholder: "rgba(18, 18, 18, 0.65)"
    },
    dark: false,
};

const dark = {
    colors: {
        background: "#070707",
        border: "rgb(39, 39, 41)",
        card: "#070707",
        notification: "rgb(255, 69, 58)",
        primary: "rgb(10, 132, 255)",
        text: "rgb(229, 229, 231)",
        placeholder: "rgba(218, 218, 218, 0.75)"
    },
    dark: true,
};

export default function getTheme(darkMode) {
    const theme = darkMode ? dark : light;
    return theme;
}
