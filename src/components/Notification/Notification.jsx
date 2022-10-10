import { Component } from 'react';
import PropTypes from 'prop-types';
import { NotificationStyled } from './Notification.styled';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <NotificationStyled>{message}</NotificationStyled>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
