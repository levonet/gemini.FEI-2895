gemini.suite('ignore hiden elements', (suite) => {
    suite.setUrl('/');

    gemini.suite('all', (suite) => {
        suite
            .setCaptureElements('.test')
            .ignoreElements(Array.apply(null, {length: 11}).map((v, i) => {return '.test_e' + i}))
            .capture('plain');
    });

    gemini.suite('every', (suite) => {
        suite
            .setCaptureElements('.test')
            .ignoreElements({every: '.test_every'})
            .capture('plain');
    });
});
