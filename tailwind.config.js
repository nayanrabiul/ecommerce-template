/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    daisyui: {
        themes: [
            'light',
            'night',
            {
                light: {
                    ...require('daisyui/src/theming/themes')['[data-theme=light]'],
                    '--rounded-box': '.6rem', // border radius rounded-box utility class, used in card and other large boxes
                    '--rounded-btn': '0.3rem', // border radius rounded-btn utility class, used in buttons and similar element
                    '--rounded-badge': '0.9rem', // border radius rounded-badge utility class, used in badges and similar
                    '--animation-btn': '0.25s', // duration of animation when you click on button
                    '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
                    '--btn-text-case': 'uppercase', // set default text transform for buttons
                    '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
                    '--border-btn': '1px', // border width of buttons
                    '--tab-border': '1px', // border width of tabs
                    '--tab-radius': '0.1`rem', // border radius of tabs
                },
                night: {
                    ...require('daisyui/src/theming/themes')['[data-theme=night]'],
                    primary: '#2a3042',
                    neutral: '#a6b0cf',
                    '--rounded-box': '.6rem', // border radius rounded-box utility class, used in card and other large boxes
                    '--rounded-btn': '0.3rem', // border radius rounded-btn utility class, used in buttons and similar element
                    '--rounded-badge': '0.9rem', // border radius rounded-badge utility class, used in badges and similar
                    '--animation-btn': '0.25s', // duration of animation when you click on button
                    '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
                    '--btn-text-case': 'uppercase', // set default text transform for buttons
                    '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
                    '--border-btn': '1px', // border width of buttons
                    '--tab-border': '1px', // border width of tabs
                    '--tab-radius': '0.1`rem', // border radius of tabs
                },
            },
        ],
    },

    plugins: [require('daisyui')],
};
