import React from 'react';

export const mockLoadingContents = () => (
  <div className="blank-slate-pf">
    <div className="spinner spinner-lg blank-slate-pf-icon" />
    <h3 className="blank-slate-pf-main-action">Loading Wizard</h3>
    <p className="blank-slate-pf-secondary-action">
      Lorem ipsum dolor sit amet, porta at suspendisse ac, ut wisi vivamus, lorem sociosqu eget nunc amet.{' '}
    </p>
  </div>
);

export const mockWizardItems = [
  {
    step: 1,
    label: '1',
    title: 'First Step',
    subSteps: [
      {
        subStep: '1.1',
        label: '1A.',
        title: 'Details',
        contents: {
          label1: 'Name',
          label2: 'Description'
        }
      },
      {
        subStep: '1.2',
        label: '1B.',
        title: 'Settings',
        contents: {
          label1: 'Lorem ipsum',
          label2: 'Dolor'
        }
      }
    ]
  },
  {
    step: '2',
    label: '2',
    title: 'Second Step',
    subSteps: [
      {
        subStep: '2.1',
        label: '2A.',
        title: 'Details',
        contents: {
          label1: 'Aliquam',
          label2: 'Fermentum'
        }
      },
      {
        subStep: '2.2',
        label: '2B.',
        title: 'Settings',
        contents: {
          label1: 'Consectetur',
          label2: 'Adipiscing'
        }
      }
    ]
  },
  {
    step: 3,
    label: '3',
    title: 'Review',
    subSteps: [
      {
        subStep: '3.1',
        label: '3A.',
        title: 'Summary'
      },
      {
        subStep: 4,
        label: '4A.',
        title: 'Progress'
      }
    ]
  }
];

export const mockWizardFormContents = (label1, label2) => (
  <form className="form-horizontal">
    <div className="form-group required">
      <label className="col-sm-2 control-label">{label1}</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" />
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">{label2}</label>
      <div className="col-sm-10">
        <textarea className="form-control" rows="2" />
      </div>
    </div>
  </form>
);
