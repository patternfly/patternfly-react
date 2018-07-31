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
import ForgotPassword from './ForgotPassword';
import RememberMe from './RememberMe';
import Body from '../../../Cards/CardBody';
import LoginCardSocialSection from './LoginCardSocialSection';
import LoginCardSocialColumns from './LoginCardSocialColumns';
import SocialLoginCard from './SocialLoginCard';
import BasicLoginCardLayout from './BasicLoginCardLayout';

const LoginCard = ({ children, ...props }) => (
  <Card {...props}>{children}</Card>
);

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
LoginCard.Body = Body;
LoginCard.Input = Input;
LoginCard.Settings = Settings;
LoginCard.FormError = FormError;
LoginCard.ForgotPassword = ForgotPassword;
LoginCard.RememberMe = RememberMe;
LoginCard.Social = SocialLoginCard;
LoginCard.SocialSection = LoginCardSocialSection;
LoginCard.SocialColumns = LoginCardSocialColumns;
LoginCard.BasicLayout = BasicLoginCardLayout;

export default LoginCard;
