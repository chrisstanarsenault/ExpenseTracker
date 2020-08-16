import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Search from "./Search";

const ActionPanel = ({ query, setQuery, selectedItems, clearSelections }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const [searchButton, showSearchButton] = useState(false);

  // Delete selected list items
  const deleteSelectedItems = (selections) => {
    selections.forEach((id) => deleteTransaction(id));
    clearSelections();
  };

  // Style
  const margin = { marginRight: "2px" };

  return (
    <>
      {selectedItems.length ? (
        <div className="options-panel">
          <div>
            <button
              className="actionable-button"
              onClick={clearSelections}
              style={margin}
            >
              <i className="fas fa-times"></i>
            </button>
            <h3 className="bold-title">{`${selectedItems.length} selected`}</h3>
          </div>

          <div>
            {selectedItems.length === 1 && (
              <button className="actionable-button">
                <i className="fas fa-pen"></i>
              </button>
            )}
            <button
              className="actionable-button delete-btn"
              onClick={() => deleteSelectedItems(selectedItems)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="search-panel">
          <h3 className="bold-title">{query ? query + "..." : "History"}</h3>
          {searchButton ? <Search query={query} setQuery={setQuery} /> : null}
          <button
            className="actionable-button"
            onClick={() => showSearchButton((searchButton) => !searchButton)}
          >
            {searchButton ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-search"></i>
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default ActionPanel;
