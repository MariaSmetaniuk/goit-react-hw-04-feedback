import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <Box display="flex" gridGap={4}>
        {options.map(option => (
          <Button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </Button>
        ))}
      </Box>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
