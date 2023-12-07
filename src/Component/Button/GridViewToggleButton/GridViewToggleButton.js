// GridViewToggleButton.jsx
import React from 'react';

const GridViewToggleButton = ({ isGridView, handleGridViewClick, handleListViewClick }) => {
  return (
    <div className="grid-container float-right">
      <span className="search-label">View: </span>
      <input
        type="button"
        className={isGridView ? 'list-view-active-column' : 'list-view-default-column'}
        onClick={handleGridViewClick}
      />
      <input
        type="button"
        className={isGridView ? 'list-view-default-row' : 'list-view-active-row'}
        onClick={handleListViewClick}
      />
    </div>
  );
};

export default GridViewToggleButton;

