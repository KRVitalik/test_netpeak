import styled from 'styled-components';

const BehaviorsGrid = styled.ul`
  display: grid;
  gap: 15px;
  justify-content: center;
  grid-template-rows: repeat(3, 60px);
  grid-template-columns: repeat(2, 172px);
  margin-top: 15px;
  margin-bottom: 129px;
`;

const BehaviorsGridItem = styled.li`
  display: flex;
  padding: 12px 24px 12px 15px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid var(--Separator-Light, #e1e1e1);
  background: var(--Background-Light, #fff);
  cursor: pointer;

  &:active,
  &:hover {
    border: 2px solid var(--Separator-Light, #e1e1e1);
  }
`;

const BehaviorsGridItemText = styled.p`
  color: var(--General-Black, #2d3436);
  /* 12 sp • Paragraph Mobile */
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5; /* 150% */
  letter-spacing: 0.3px;
  width: 93px;
`;

export { BehaviorsGrid, BehaviorsGridItem, BehaviorsGridItemText };
