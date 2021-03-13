class StatusResult {

    constructor() {
        this.mongoDatabaseEmailAddressesCount = 0;
        this.sourceEmailAddressesCount = 0;
        this.sourceEmailAddressesToSendCount = 0;
        this.mongoDatabaseEmailAddressesExistsCount = 0;
    }
}

module.exports = StatusResult;