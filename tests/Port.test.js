const Port = require('../src/Port');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port('Manchester')).toBeInstanceOf(Object);
    });

    it('has a name property set to the argument passed in', () => {
        const port = new Port('Manchester')
        expect(port.name).toBe('Manchester')
    })

    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    })

    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    })
})