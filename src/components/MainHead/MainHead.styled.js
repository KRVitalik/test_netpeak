import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadTitle = styled.h2`
  color: #374234;

  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.45px;
  margin-left: 9.5px;
`;

const IconBackground = styled.div`
  border-radius: 6.543px;
  background: linear-gradient(0deg, #f4f4f4 0%, #f4f4f4 100%);
`;

export { StyledHeader, HeadTitle, IconBackground };
