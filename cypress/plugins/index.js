const AllureWriter = require('@shelex/cypress-allure-plugin/writer');

function setViewPortsAndUserAgent(device) {
    if (device === 'mobile') {
        return {
            viewportWidth: 375,
            viewportHeight: 667,
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16D57'
        }
    }
    if (device === 'web' || device === 'desktop') {
        return {
            viewportWidth: 1280,
            viewportHeight: 800,
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
        }
    }

    throw new Error('device not supported - [please set device to mob or web]')
}
module.exports = (on, config) => {
    AllureWriter(on, config);
    
    const viewportConfig = setViewPortsAndUserAgent(config.env.device)
    config = Object.assign({}, viewportConfig)

    return config
}
