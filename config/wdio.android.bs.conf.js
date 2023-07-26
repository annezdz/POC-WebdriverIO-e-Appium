require('dotenv').config()
const {config} = require('./wdio.shared.conf')

//
// ============
// BrowserStack Credentials
// ============
config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

//
// ============
// Specs
// ============
config.specs = ['./test/specs/**/*.spec.js']

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: 'Android',
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'Samsung Galaxy S22',
        'appium:automationName': 'UIAutomator2',
        'appium:app': 'bs://15b31f77d7fe84d410432ef7181e7756cbbd9bcb',
        'appium:autoGrantPermissions': true
    }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack']

exports.config = config
