import ArticleList from "../ArticleList";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";

// Material-UI
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PublicIcon from "@material-ui/icons/Public";
import Typography from "@material-ui/core/Typography";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const YourFeedTab = props => {
  if (props.token) {
    const clickHandler = ev => {
      ev.preventDefault();
      props.onTabClick("feed", agent.Articles.feed());
    };

    return (
      <Paper>
        <li className="nav-item">
          <a
            href=""
            className={props.tab === "feed" ? "nav-link active" : "nav-link"}
            onClick={clickHandler}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <Typography variant="h5" color="textSecondary" component="p">
                Your Feed
              </Typography>
              <DynamicFeedIcon
                color="secondary"
                style={{
                  margin: 10
                }}
              />
            </div>
          </a>
        </li>
      </Paper>
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
    <Paper>
      <li className="nav-item">
        <a
          href=""
          className={props.tab === "all" ? "nav-link active" : "nav-link"}
          onClick={clickHandler}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <Typography variant="h5" color="textSecondary" component="p">
              Global Feed
            </Typography>
            <PublicIcon
              color="secondary"
              style={{
                margin: 10
              }}
            />
          </div>
        </a>
      </li>
    </Paper>
  );
};

const TagFilterTab = props => {
  if (!props.tag) {
    return null;
  }

  return (
    <Paper>
      <li className="nav-item">
        <a href="" className="nav-link active">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: 60
            }}
          >
            <Typography variant="h5" color="textSecondary" component="p">
              {props.tag}
            </Typography>
            <LocalOfferIcon
              color="secondary"
              style={{
                margin: 10
              }}
            />
          </div>
        </a>
      </li>
    </Paper>
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
          <ul className="nav nav-pills outline-active col-xs-12 col-md-10 offset-md-1">
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
