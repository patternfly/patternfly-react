import React from 'react';
import * as Examples from './components/demos'

/** Add the name of the demo and it's component here to have them show up in the demo app */
export const Demos = [{
    name: 'Hello World Demo',
    componentType: Examples.HelloWorldDemo
},
{
    name: 'Wizard Demo',
    componentType: Examples.WizardDemo
}];

export default Demos;