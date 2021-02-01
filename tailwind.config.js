const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans]
            },

            fontSize: {
                large: '2.5rem',
            },
            colors: {
                primary: '#2B3F72',
                secondary: '#A36F00',
                grey: "#DEE8EA"
            },

        },
    },
    variants: {
        extend: {},
    },
    plugins: [

        require('@tailwindcss/custom-forms'),
    ],
}