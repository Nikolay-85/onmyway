import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';
import connectedMap, { TrackingMap } from '../../src/components/map';

function setup() {
    const props = {
        changeCoords: expect.createSpy(),
        params: {
            teamId: 1
        },
        gps: {
            lat: 50,
            lng: 30
        },
        team: {}
    };

    const enzymeWrapper = shallow(<TrackingMap {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('components', () => {
    describe('TrackingMap', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.find('Map').length).toEqual(1);
            expect(enzymeWrapper.find('TileLayer').length).toEqual(1);
            expect(enzymeWrapper.find('Marker').length).toEqual(1);
            expect(enzymeWrapper.find('Connect(Chat)').length).toEqual(1);
        });
    });
});