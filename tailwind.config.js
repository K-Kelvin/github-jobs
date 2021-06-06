module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#334680",
                black: "#282538",
                black2: "#334680",
                grayish: "#B9BDCF",
                lightGrayish: "#B7BCCE",
                blue: "#1E86FF",
            },
            spacing: {
                3.5: "0.875rem",
                4.5: "1.125rem",
                10.5: "2.265rem",
                22.5: "5.625rem",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
