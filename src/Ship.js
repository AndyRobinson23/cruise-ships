const Port = require('../src/Port');

const Ship = function (currentPort, port) {
    this.currentPort = currentPort;
    this.port = port;
};

Ship.prototype.setSail = function () {
    this.currentPort = false;
}

Ship.prototype.dock = function (port) {
    this.currentPort = port;
}
module.exports = Ship;