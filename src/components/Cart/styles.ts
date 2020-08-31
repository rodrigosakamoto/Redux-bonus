import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: #e60012;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#e60012')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  border: 1px solid #f3f3f3;
  border-radius: 8px;

  thead th {
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
  }

  tbody td.p-image {
    width: 100px;
    height: 100px;
  }
  img {
    max-height: 100px;
    max-width: 100px;
  }

  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }

  @media (max-width: 650px) {
    div {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    img {
      display: none;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
