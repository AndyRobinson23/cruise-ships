const Port = require('../src/Port');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port('Manchester')).toBeInstanceOf(Object);
    });

    it('has a name property set to the argument passed in', () => {
        const port = new Port('Manchester')
        expect(port.name).toBe('Manchester')
    })
})