const Ship = require('../src/Ship');
const Port = require('../src/Port');

describe('Ship', () => {
    it('can be instantiated', () => {
        const port = new Port('Dover');
        expect(new Ship(port)).toBeInstanceOf(Object);
    });

    it('has a current port set to the value passed in when the new instance object is created', () => {
        const port = new Port('Dover');
        const ship = new Ship('Manchester', port);
        expect(ship.currentPort).toEqual('Manchester');
    });

    it('has a port set to the port object passed in', () => {
        const port = new Port('Dover');
        const ship = new Ship('Manchester', port);
        expect(ship.port).toBe(port);
    });

    it('can set sail', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    })

    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);

        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    })
});