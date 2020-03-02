import React from 'react';
import PropTypes from 'prop-types';

class TodayButton extends React.Component {
  setToday = () => {
    const { setSelected } = this.props;
    if (setSelected) {
      setSelected(new Date());
    }
  };
  render() {
    return (
      <table className="table-condensed">
        <tbody>
          <tr>
            <td>
              <button type="button" className="today-button" onClick={this.setToday}>
                <span className="today-button-pf" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

TodayButton.propTypes = {
  setSelected: PropTypes.func
};

TodayButton.defaultProps = {
  setSelected: null
};
export default TodayButton;
