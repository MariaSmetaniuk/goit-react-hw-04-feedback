import { Component } from 'react';
import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';
import { Item } from '../StatisticsItem/StatisticsItem';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <StatisticsList>
        <Item name="Good:" value={good} />
        <Item name="Neutral:" value={neutral} />
        <Item name="Bad:" value={bad} />
        <Item name="Total:" value={total} />
        <Item name="Positive feedback:" value={`${positivePercentage}%`} />
      </StatisticsList>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
