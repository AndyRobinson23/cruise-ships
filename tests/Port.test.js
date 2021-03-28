const Port = require('../src/Port');

describe('Port', () => {
    describe('with port setup', () => {
        let port;

        beforeEach(() => {
            port = new Port('Dover')
        })

        it('has a name property set to the argument passed in', () => {
            expect(port.name).toBe('Dover')
        })

        it('can add a ship', () => {
            const ship = {};

            port.addShip(ship);

            expect(port.ships).toContain(ship);
        })

        it('can remove a ship', () => {
            const titanic = {};
            const queenMary = {};

            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);

            expect(port.ships).toEqual([titanic]);
        })
    })

    it('can be instantiated', () => {
        expect(new Port('Manchester')).toBeInstanceOf(Object);
    });

})