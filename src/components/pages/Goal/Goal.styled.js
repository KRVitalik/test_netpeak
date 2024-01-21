import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
  color: var(--General-Black, #2d3436);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.71; /* 171.429% */
  letter-spacing: 0.2px;
  margin-top: 15px;
`;

const ItemContainer = styled.ul`
  display: grid;
  grid-template-rows: repeat(2, 172px);
  grid-template-columns: repeat(2, 172px);
  gap: 16px;
  justify-content: center;
  margin-top: 15px;
`;

const ItemContentLink = styled.li`
  padding-left: 10.42px;
  border-radius: 20.848px;
  border: 1.042px solid var(--Separator-Light, #e1e1e1);
  background: var(
    --Background-Gradient-Light,
    linear-gradient(214deg, #f1f1f1 12.33%, #fff 69.93%)
  );
  overflow: hidden;
`;

const ItemLink = styled(Link)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

export { StyledHeader, P, ItemContentLink, ItemContainer, ItemLink };
