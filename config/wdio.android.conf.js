const path = require('path')
const {config} = require('./wdio.shared.conf')

//
// ====================
// Runner Configuration
// ====================

runner: 'local',
    (config.port = 4723),
//
// ====================
// Specs
// ====================

    (config.specs = ['./test/specs/**/*.spec.js']),
//
// ====================
// Capabilities
// ====================

    (config.capabilities = [
        {
            platformName: 'Android',
            'appium:platformVersion': '11.0',
            'appium:deviceName': 'Pixel 3',
            'appium:automationName': 'UIAutomator2',
            'appium:app': path.join(process.cwd(), './app/android/ColorNoteNotepad.apk'),
            'appium:autoGrantPermissions': true
        }
    ])
exports.config = config
