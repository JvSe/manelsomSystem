import React from 'react';

export default function reducer( state = {vehicle:''}, actions) {
    switch (actions.type) {
        case "Car":
            return { vehicle: 'Its is a Car'};
        case "Bike":
            return { vehicle: 'Its is a Bike'};
        default:
            return false;
    };

}