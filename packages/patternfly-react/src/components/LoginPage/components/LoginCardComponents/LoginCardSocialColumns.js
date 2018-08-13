import React from 'react';
import PropTypes from 'prop-types';
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
    return (
      this.props.links &&
      this.props.links.map((link, index) => {
        if (index >= this.props.shownButtons) {
          this.hiddenLinks.push(link);
          return true;
        }

        return <LoginCardSocialLink link={link} key={link.key || index} />;
      })
    );
  };

  getHiddenListItems = () =>
    this.hiddenLinks &&
    this.hiddenLinks.map((link, index) => (
      <LoginCardSocialLink link={link} key={link.key || index + this.props.shownButtons} />
    ));

  toggleExpend = () => {
    this.setState({ expend: !this.state.expend });
  };

  render() {
    const { links, shownButtons } = this.props;
    if (!links) {
      return null;
    }
    const { expend, width } = this.state;
    const expendButton = width > 768 &&
      links.length > shownButtons && (
        <Button bsStyle="link" bsClass="btn btn-link login-pf-social-toggle" onClick={e => this.toggleExpend(e)}>
          {expend ? 'Less' : 'More'} &nbsp;
          <Icon name={`angle-${expend ? 'up' : 'down'}`} />
        </Button>
      );

    const doubleColumn = links.length > 4 ? 'login-pf-social-double-col' : '';
    const moreItems = expend || width < 768 ? this.getHiddenListItems() : null;
    return (
      <div>
        <ul className={`login-pf-social list-unstyled ${doubleColumn}`}>
          {this.getListItems()}
          {moreItems}
        </ul>
        {expendButton}
      </div>
    );
  }
}

LoginCardSocialColumns.propTypes = {
  links: PropTypes.array,
  shownButtons: PropTypes.number
};

LoginCardSocialColumns.defaultProps = {
  links: [],
  shownButtons: 8
};

export default LoginCardSocialColumns;
