import styled from 'styled-components';

export const NotificationStyled = styled.p`
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: 0.05rem;
  text-shadow: ${p => p.theme.shadows.text};
  color: ${p => p.theme.colors.accent};
`;
