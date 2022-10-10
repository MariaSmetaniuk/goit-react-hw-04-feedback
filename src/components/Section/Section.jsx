import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Title } from './Section.styled';

export class Section extends Component {
  static defaultProps = {
    title: 'My title',
  };

  render() {
    const { title, children } = this.props;
    return (
      <Box py={4} as="section">
        <Title>{title}</Title>
        {children}
      </Box>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};
