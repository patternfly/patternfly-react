import React from 'react';
import { Filter } from '../index';
import { mockFilterFields } from './mockFilterFields';

export class MockFilterDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      filtersText: '',
    };
  }

  filterAdded = (field, value) => {
    let filterText = '';
    if (field.title) {
      filterText = field.title;
    } else {
      filterText = field;
    }
    filterText += ': ';

    if (value.filterCategory) {
      filterText +=
        (value.filterCategory.title || value.filterCategory) +
        '-' +
        (value.filterValue.title || value.filterValue);
    } else if (value.title) {
      filterText += value.title;
    } else {
      filterText += value;
    }
    filterText += '\n';
    this.setState({ filtersText: this.state.filtersText + filterText });
  };

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <Filter fields={mockFilterFields} filterAddedCB={this.filterAdded} />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <hr />
            </div>
            <div className="col-xs-12">
              <label className="events-label pull-left">
                Current Filters:{' '}
              </label>
            </div>
            <div className="col-xs-12">
              <textarea
                className="col-xs-12"
                rows="5"
                value={this.state.filtersText}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mockFilterDisplaySource = `
   <Filter fields={this.filterFields} filterAddedCB={this.filterAdded} />
`;
