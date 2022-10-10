import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem.styled';

export const Item = ({ name, value }) => {
  return (
    <StatisticsItem>
      {name}
      <span>{value}</span>
    </StatisticsItem>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
