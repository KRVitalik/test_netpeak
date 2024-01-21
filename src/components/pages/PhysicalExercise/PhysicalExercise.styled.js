import styled from 'styled-components';

const GroupItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const GroupImg = styled.img`
  width: 173px;
  height: 363px;
`;

const GroupItemsText = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
`;

const OptionText = styled.li`
  display: flex;
  width: 172px;
  height: 80px;
  padding: 18px 30px 18px 15px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--Separator-Light, #e1e1e1);
  background: var(--Background-Light, #fff);

  color: var(--General-Black, #2d3436);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.2px;
  cursor: pointer;

  &:active {
    border: 2px solid var(--Separator-Light, #e1e1e1);
  }
`;

export { GroupItems, GroupImg, GroupItemsText, OptionText };
