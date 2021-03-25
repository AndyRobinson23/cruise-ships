const Ship = require('../src/Ship');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship('Manchester')).toBeInstanceOf(Object);
    });

    it('has a starting port set to the value passed in when the new instance object is created', () => {
        const ship = new Ship('Manchester');
        expect(ship.startingPort).toEqual('Manchester');
    });

    it('can set sail', () => {
        const ship = new Ship('Manchester');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    })
});