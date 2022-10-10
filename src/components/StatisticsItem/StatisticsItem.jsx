import { Component } from 'react';
import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem.styled';

export class Item extends Component {
  render() {
    const { name, value } = this.props;
    return (
      <StatisticsItem>
        {name}
        <span>{value}</span>
      </StatisticsItem>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
