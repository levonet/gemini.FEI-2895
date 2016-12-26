gemini.suite('index', (suite) => {
    suite.setUrl('/');

    gemini.suite('test', (suite) => {
        suite
            .setCaptureElements('.test')
            .ignoreElements(['.test_e1', '.test_e2', '.test_e3', '.test_e4', '.test_e5', '.test_e6', '.test_e7', '.test_e8', '.test_e9', '.test_e10', '.test_e0'])
            .capture('plain');
    });
});
