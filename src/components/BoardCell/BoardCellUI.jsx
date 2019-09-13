import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'linaria';

const cellStyle = css`
  background-color: #1f8f76;

  &:hover {
    background-color: #e07089;
    cursor: pointer;
  }
  &:focus {
    border: 5px solid #e07089;
  }
`;

const BoardCellUI = ({ children, events = {}, classes = [] }) => {
  return (
    <button
      type="button"
      aria-label="Выбрать ячейку"
      {...events}
      className={cx(cellStyle, ...classes)}>
      {children}
    </button>
  );
};

BoardCellUI.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  events: PropTypes.objectOf(PropTypes.func),
  classes: PropTypes.array,
};

BoardCellUI.defaultProps = {
  children: '',
};

export default BoardCellUI;
