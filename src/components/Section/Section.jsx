import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Title } from './Section.styled';

export const Section = ({ title = 'My title', children }) => {
  return (
    <Box py={4} as="section">
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
