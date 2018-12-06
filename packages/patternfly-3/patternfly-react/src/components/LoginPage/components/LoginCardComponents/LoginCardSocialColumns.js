import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Icon } from '../../../../index';
import LoginCardSocialLink from './LoginCardSocialLink';

class LoginCardSocialColumns extends React.Component {
  state = {
    expend: false,
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  getListItems = () => {
    this.hiddenLinks = [];
    const { links, numberOfButtonsToShow } = this.props;
    return (
      links &&
      links.map((link, index) => {
        if (index >= numberOfButtonsToShow) {
          this.hiddenLinks.push(link);
          return true;
        }

        return <LoginCardSocialLink link={link} key={link.key || index} />;
      })
    );
  };

  getHiddenListItems = () => {
    const { numberOfButtonsToShow } = this.props;
    return (
      this.hiddenLinks &&
      this.hiddenLinks.map((link, index) => (
        <LoginCardSocialLink link={link} key={link.key || index + numberOfButtonsToShow} />
      ))
    );
  };

  toggleExpend = () => {
    this.setState({ expend: !this.state.expend });
  };

  render() {
    const { links, numberOfButtonsToShow } = this.props;
    if (!links) {
      return null;
    }
    const { expend, width } = this.state;
    const expendButton = width > 768 &&
      links.length > numberOfButtonsToShow && (
        <Button bsStyle="link" bsClass="btn btn-link login-pf-social-toggle" onClick={this.toggleExpend}>
          {expend ? 'Less' : 'More'} &nbsp;
          <Icon name={`angle-${expend ? 'up' : 'down'}`} />
        </Button>
      );

    const doubleColumn = links.length > 4 ? 'login-pf-social-double-col' : '';
    const moreItems = expend || width < 768 ? this.getHiddenListItems() : null;
    return (
      <div>
        <ul className={classNames('login-pf-social list-unstyled', doubleColumn)}>
          {this.getListItems()}
          {moreItems}
        </ul>
        {expendButton}
      </div>
    );
  }
}

LoginCardSocialColumns.propTypes = {
  /** Array of social links to generate. */
  links: PropTypes.arrayOf(PropTypes.shape({ ...LoginCardSocialLink.propTypes })),
  /** The amount of buttons to show. Above this number, the buttons would be hidden */
  numberOfButtonsToShow: PropTypes.number
};

LoginCardSocialColumns.defaultProps = {
  links: [],
  numberOfButtonsToShow: 8
};

export default LoginCardSocialColumns;
