import styled from 'styled-components';

export const StatisticsItem = styled.li`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 500;
  color: ${p => p.theme.colors.text};
  span {
    margin-left: ${p => p.theme.space[2]}px;
    font-weight: ${p => p.theme.fontWeights.normal};
  }
`;
