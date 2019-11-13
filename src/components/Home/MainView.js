import ArticleList from "../ArticleList";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";

const YourFeedTab = props => {
  if (props.token) {
    const clickHandler = ev => {
      ev.preventDefault();
      props.onTabClick("feed", agent.Articles.feed());
    };

    return (
      <li className="nav-item">
        <a
          href=""
          className={props.tab === "feed" ? "nav-link active" : "nav-link"}
          onClick={clickHandler}
        >
          Your Feed
        </a>
      </li>
    );
  }
  return null;
};

const GlobalFeedTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick("all", agent.Articles.all());
  };
  return (
    <li className="nav-item">
      <a
        href=""
        className={props.tab === "all" ? "nav-link active" : "nav-link"}
        onClick={clickHandler}
      >
        Global Feed
      </a>
    </li>
  );
};

const TagFilterTab = props => {
  if (!props.tag) {
    return null;
  }

  return (
    <li className="nav-item">
      <a href="" className="nav-link active">
        <i className="ion-pound"></i> {props.tag}
      </a>
    </li>
  );
};

const mapStateToProps = state => ({
  ...state.articleList,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onSetPage: (tab, p) =>
    dispatch({
      type: "SET_PAGE",
      page: p,
      payload: tab === "feed" ? agent.Articles.feed(p) : agent.Articles.all(p)
    }),
  onTabClick: (tab, payload) => dispatch({ type: "CHANGE_TAB", tab, payload })
});

const MainView = props => {
  const onSetPage = page => props.onSetPage(props.tab, page);
  return (
    <div className="row">
      <div className="col-xs-12 col-md-10 offset-md-1">
        <div className="feed-toggle">
          <ul className="nav nav-pills outline-active">
            <YourFeedTab
              token={props.token}
              tab={props.tab}
              onTabClick={props.onTabClick}
            />

            <GlobalFeedTab tab={props.tab} onTabClick={props.onTabClick} />

            <TagFilterTab tag={props.tag} />
          </ul>
        </div>

        <ArticleList
          articles={props.articles}
          articlesCount={props.articlesCount}
          currentPage={props.currentPage}
          onSetPage={onSetPage}
        />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
