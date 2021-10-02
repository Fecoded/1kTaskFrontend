import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  height: 100vh;
  background-color: #f7f8fc;
  font-family: "Open Sans", sans-serif;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 750px;
  }
`;

export const Table = styled.table`
  border-spacing: 0 4px;
  color: #333;
  padding: 10px;
  width: 100%;

  th,
  td {
    padding: 15px;
    text-align: left;
  }

  tbody tr {
    background-color: #909090;
    color: #f4f4f4;
  }

  tbody tr:hover {
    background-color: blue;
    color: #f4f4f4;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }

  tbody tr td:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  tbody tr td:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
  }

  tbody tr.priority-200 td:first-of-type {
    border-left: 5px solid #fff;
  }

  .edit {
    background-color: blue;
    border: 0;
    border-radius: 2px;
    color: #f4f4f4;
    cursor: pointer;
    font-size: 16px;
    padding: 5px 10px;
    opacity: 0;
  }

  img {
    width: 30px;
    height: 30px;
  }

  tbody tr:hover .edit {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    border: 0;

    th:nth-of-type(8),
    td:nth-of-type(8) {
      display: none;
    }

    tbody tr.priority-200 td:first-of-type {
      border-left: none;
    }

    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 1rem;
      text-align: right;

      &:last-child {
        border-bottom: 0;
      }

      &::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: #fff;
  border: 3px solid #dce7ff;
  border-radius: 3px;
  width: auto;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 330px;
    margin-bottom: 10rem;
  }
`;

export const FormControl = styled.div`
  margin: 10px 0;
  width: 100%;

  .label {
    display: inline-block;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
