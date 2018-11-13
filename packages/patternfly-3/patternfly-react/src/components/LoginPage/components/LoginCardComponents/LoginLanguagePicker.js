import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from '../../../../index';
import { noop } from '../../../../common/helpers';

class LoginLanguagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:
        (this.props.selectedLanguage && this.props.selectedLanguage.text) ||
        (this.props.availableLanguages && this.props.availableLanguages[0].text)
    };
  }

  componentWillReceiveProps(nextProps) {
    const { selectedLanguage, availableLanguages } = nextProps;
    const title = (selectedLanguage && selectedLanguage.text) || (availableLanguages && availableLanguages[0].text);

    this.setState({ title });
  }

  handleClick = e => {
    this.props.onLanguageChange && this.props.onLanguageChange(e);
    this.setState({ title: e.target.text });
  };

  render() {
    const { availableLanguages } = this.props;
    if (!availableLanguages) {
      return null;
    }
    const menuItems = availableLanguages.map((language, index) => (
      <MenuItem
        key={index}
        value={language.value}
        active={this.state.title === language.text}
        onClick={e => this.handleClick(e)}
      >
        {language.text}
      </MenuItem>
    ));

    return (
      <div className={`bootstrap-select btn-group ${this.props.className}`}>
        <DropdownButton title={this.state.title} id={this.props.id}>
          {menuItems}
        </DropdownButton>
      </div>
    );
  }
}

LoginLanguagePicker.propTypes = {
  availableLanguages: PropTypes.array,
  selectedLanguage: PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string
  }),
  onLanguageChange: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LoginLanguagePicker.defaultProps = {
  selectedLanguage: null,
  availableLanguages: null,
  onLanguageChange: noop,
  className: '',
  id: 'language-picker'
};

export default LoginLanguagePicker;
