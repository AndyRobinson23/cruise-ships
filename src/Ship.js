const Ship = function (startingPort) {
    this.startingPort = startingPort;
};

Ship.prototype.setSail = function () {
    this.startingPort = false;
}

module.exports = Ship;