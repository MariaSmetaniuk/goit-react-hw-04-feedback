import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
`;
