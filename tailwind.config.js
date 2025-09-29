module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                oswald: ['Oswald', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('daisyui') 
    ],
    daisyui: {
        themes: ['night'], 
    },
}
