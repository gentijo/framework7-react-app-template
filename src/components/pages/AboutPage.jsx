import React from 'react';
import { Page, Navbar, Link, Block, BlockTitle } from 'framework7-react';

var Winterfell = require('winterfell');
var FW7React = require('framework7-react');

var schema = require('../../ReportV1.schema');

var fw7RadioOptionsInput = require('../formElements/fw7RadioOptionsInput');

Winterfell.addInputType("radioOptionsInput", fw7RadioOptionsInput);

var onRender = () => {
  console.log('Great news! Winterfell rendered successfully');
};

var onUpdate = (questionAnswers) => {
  console.log('Question Updated! The current set of answers is: ', questionAnswers);
};
var onSwitchPanel = (panel) => {
  console.log('Moving on to the panel that is identified as "' + panel.panelId + '"');
};

var onSubmit = (questionAnswers, target) => {
  console.log('Form submitted!', questionAnswers);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log('-----');
  alert('Submitted. Check the console to see the answers!');
};



export default () => (
  <Page>
    <Navbar title="About" backLink="Back"></Navbar>
    <BlockTitle>About My App</BlockTitle>
    <Block strong>
    <Winterfell schema={schema}
        onRender={onRender}
        onUpdate={onUpdate}
        renderRequiredAsterisk={() => <span>{'*'}</span>} />

    </Block>
  </Page>
);
