import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 50%;
  margin: auto;
`;

const StyledTr = styled.tr`
  padding: 10px 0;
`;

const StyledTd = styled.td`
  padding: 10px 0;
  text-align: center;
  background-color: white;
  color: grey;
`;

const StyledTh = styled.th`
  width: 33.33333%;
  background-color: rgb(21, 131, 158);
  color: white;
  padding: 10px;
`;

const TransactionHistory = ({ items }) => {
  return (
    <StyledTable className="transaction-history">
      <thead>
        <StyledTr>
          <StyledTh>Type</StyledTh>
          <StyledTh>Amount</StyledTh>
          <StyledTh>Currency</StyledTh>
        </StyledTr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <StyledTr key={item.id}>
              <StyledTd>{item.type}</StyledTd>
              <StyledTd>{item.amount}</StyledTd>
              <StyledTd>{item.currency}</StyledTd>
            </StyledTr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.string.isRequired,
      currency: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
