import React from "react";
import agent from "../agent";

// Material-UI
import Fab from "@material-ui/core/Fab";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const ListPagination = props => {
  if (props.articlesCount <= 10) {
    return null;
  }

  const range = [];
  for (let i = 0; i < Math.ceil(props.articlesCount / 10); ++i) {
    range.push(i);
  }

  const setPage = page => props.onSetPage(page);

  return (
    <div className="row">
      <AppBar position="static">
        <Toolbar>
          <nav>
            <ul className="pagination">
              {range.map(v => {
                const isCurrent = v === props.currentPage;
                const onClick = ev => {
                  ev.preventDefault();
                  setPage(v);
                };
                return (
                  <li
                    className={isCurrent ? "page-item active" : "page-item"}
                    onClick={onClick}
                    key={v.toString()}
                  >
                    <a className="page-link" href="">
                      <Fab aria-label="add" size="small">
                        {v + 1}
                      </Fab>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ListPagination;
