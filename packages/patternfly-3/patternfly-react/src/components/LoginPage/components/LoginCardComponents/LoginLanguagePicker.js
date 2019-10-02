import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton, MenuItem } from '../../../../index';
import { noop } from '../../../../common/helpers';

class LoginLanguagePicker extends React.Component {
  constructor(props) {
    super(props);
    const { selectedLanguage, availableLanguages } = props;
    this.state = {
      title: selectedLanguage || (availableLanguages && availableLanguages[0].text)
    };
  }

  componentWillReceiveProps(nextProps) {
    const { selectedLanguage, availableLanguages } = nextProps;
    const title = selectedLanguage || (availableLanguages && availableLanguages[0].text);

    this.setState({ title });
  }

  handleClick = e => {
    const { onLanguageChange } = this.props;
    onLanguageChange(e);
    this.setState({ title: e.target.text });
  };

  render() {
    const { availableLanguages, className, id } = this.props;
    const { title } = this.state;
    if (!availableLanguages) {
      return null;
    }
    const menuItems = availableLanguages.map((language, index) => (
      <MenuItem key={index} value={language.value} active={title === language.text} onClick={this.handleClick}>
        {language.text}
      </MenuItem>
    ));

    return (
      <div className={classNames('bootstrap-select btn-group', className)}>
        <DropdownButton title={title} id={id}>
          {menuItems}
        </DropdownButton>
      </div>
    );
  }
}

LoginLanguagePicker.propTypes = {
  /** Provided languages to pass into the dropdown menu */
  availableLanguages: PropTypes.arrayOf(
    PropTypes.shape({
      /** the language menu item's value */
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      /** the language menu item's text */
      text: PropTypes.string
    })
  ),
  /** The default selected language */
  selectedLanguage: PropTypes.string,
  /** Callback to trigger when selecting a language */
  onLanguageChange: PropTypes.func,
  /** Additional css classes */
  className: PropTypes.string,
  /** The dropdown's id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LoginLanguagePicker.defaultProps = {
  selectedLanguage: null,
  availableLanguages: null,
  onLanguageChange: noop,
  className: null,
  id: 'language-picker'
};

export default LoginLanguagePicker;
