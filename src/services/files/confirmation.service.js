const readline = require('readline');
const { logUtils } = require('../../utils');
const logsService = require('./logs.service');

class ConfirmationService {

    constructor() { }

    confirm(settings) {
        if (!settings.IS_PRODUCTION_MODE) {
            return true;
        }
        const readLine = readline.createInterface(process.stdin, process.stdout);
        logUtils.log(logsService.createConfirmSettingsTemplate(settings));
        return new Promise((resolve, reject) => {
            try {
                readLine.on('line', (line) => {
                    switch (line) {
                        case 'y': resolve(true); break;
                        case 'n': resolve(false); break;
                        default: resolve(false); break;
                    }
                    readLine.close();
                }).on('close', () => { resolve(false); });
            }
            catch (error) { reject(false); }
        }).catch();
    }
}

module.exports = new ConfirmationService();