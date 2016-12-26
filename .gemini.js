module.exports = {
    rootUrl: 'http://localhost:8080',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',

    browsers: {
        'desktop-chrome': {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },

    sets: {
        desktop: {
            files: [
                "*.gemini.js"
            ],
            browsers: [
                "desktop-chrome"
            ]
        }
    }
};
