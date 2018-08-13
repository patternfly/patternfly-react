import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../Cards/Card';
import Header from './LoginCardHeader';
import LanguagePicker from './LoginLanguagePicker';
import WithValidation from './LoginCardWithValidation';
import Form from './LoginCardForm';
import SignUp from './LoginCardSignUp';
import Input from './LoginCardInput';
import Settings from './LoginCardSettings';
import FormError from './LoginFormError';
import LoginCardForgotPassword from './LoginCardForgotPassword';
import LoginCardRememberMe from './LoginCardRememberMe';
import LoginCardSocialLink from './LoginCardSocialLink';
import LoginCardSocialSection from './LoginCardSocialSection';
import LoginCardSocialColumns from './LoginCardSocialColumns';
import SocialLoginCard from './SocialLoginCard';
import BasicLoginCardLayout from './BasicLoginCardLayout';

const LoginCard = ({ children, ...props }) => <Card {...props}>{children}</Card>;

LoginCard.propTypes = {
  children: PropTypes.node
};

LoginCard.defaultProps = {
  children: null
};

LoginCard.Header = Header;
LoginCard.LanguagePicker = LanguagePicker;
LoginCard.WithValidation = WithValidation;
LoginCard.Form = Form;
LoginCard.SignUp = SignUp;
LoginCard.Input = Input;
LoginCard.Settings = Settings;
LoginCard.FormError = FormError;
LoginCard.ForgotPassword = LoginCardForgotPassword;
LoginCard.RememberMe = LoginCardRememberMe;
LoginCard.Social = SocialLoginCard;
LoginCard.SocialLink = LoginCardSocialLink;
LoginCard.SocialSection = LoginCardSocialSection;
LoginCard.SocialColumns = LoginCardSocialColumns;
LoginCard.BasicLayout = BasicLoginCardLayout;

export default LoginCard;
