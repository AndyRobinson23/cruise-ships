const Ship = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
    describe('with ports and an intinerary', () => {
        let dover;
        let calais;

        beforeEach(() => {
            dover = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Dover',
                ships: []
            };

            calais = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Calais',
                ships: []
            };

            itinerary = {
                ports: [dover, calais]
            };

            ship = new Ship(itinerary);
        });

        it('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it('sets the port', () => {
            expect(ship.currentPort.name).toEqual(itinerary.ports[0].name);
        });

        it('can set sail', () => {
            ship.setSail();

            expect(ship.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalledWith(ship);
        })

        it('gets added to port on instantiation', () => {
            expect(dover.addShip).toHaveBeenCalledWith(ship);
        })

        it('can dock at a different port', () => {
            ship.setSail();
            ship.dock();

            expect(ship.currentPort).toBe(calais);
            expect(calais.addShip).toHaveBeenCalledWith(ship);
        })
    })



    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
});