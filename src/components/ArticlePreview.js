import React from "react";
import { Link } from "react-router";
import agent from "../agent";
import { connect } from "react-redux";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles(theme => ({
  card: {
    margin: 20
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  BlogPreviewTitle: {
    backgroundColor: "#c8e6c9",
    margin: 10
  },
  BlogPreviewHeader: {
    margin: 10
  },
  customBadge: {
    margin: 15
  },
  ArticleIcons: {
    color: "#1b5e20"
  },
  ReadMore: {
    marginLeft: 50
  },
  fab: {
    margin: theme.spacing.unit, // You might not need this now
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3
  }
}));

const FAVORITED_CLASS = "btn btn-sm btn-primary";
const NOT_FAVORITED_CLASS = "btn btn-sm btn-outline-primary";

const mapDispatchToProps = dispatch => ({
  favorite: slug =>
    dispatch({
      type: "ARTICLE_FAVORITED",
      payload: agent.Articles.favorite(slug)
    }),
  unfavorite: slug =>
    dispatch({
      type: "ARTICLE_UNFAVORITED",
      payload: agent.Articles.unfavorite(slug)
    })
});

const ArticlePreview = props => {
  const article = props.article;
  const classes = useStyles();

  const favoriteButtonClass = article.favorited
    ? FAVORITED_CLASS
    : NOT_FAVORITED_CLASS;

  const handleClick = ev => {
    ev.preventDefault();
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };

  return (
    <Card className={[classes.card, "elevate-shadow"]}>
      <Link className="preview-link" to={`@${article.author.username}`}>
        <Card position="static" className={classes.BlogPreviewHeader}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar} src={article.author.image} />
            }
            title={article.author.username}
            subheader={new Date(article.createdAt).toDateString()}
          />
        </Card>
      </Link>

      <Link to={`article/${article.slug}`} className="preview-link">
        <Card
          position="static"
          className={classes.BlogPreviewTitle}
          variant="outline"
        >
          <Toolbar>
            <Typography variant="body2" className={classes.title}>
              {article.title}
            </Typography>
          </Toolbar>
        </Card>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.description}
          </Typography>
        </CardContent>
      </Link>

      <CardActions disableSpacing>
        <div style={{ flex: 1 }}>
          {/* Favourite button */}
          <Badge
            className={classes.customBadge}
            badgeContent={[article.favoritesCount]}
            color="primary"
          >
            <button className={favoriteButtonClass} onClick={handleClick}>
              <i className="ion-heart"></i>
            </button>
          </Badge>

          {/* Comments button */}
          <Badge
            className={classes.customBadge}
            badgeContent={[article.commentCount]}
            color="primary"
          >
            <ModeCommentIcon className={classes.ArticleIcons} />
          </Badge>
        </div>
        <Link to={`article/${article.slug}`} className="preview-link">
          <Button variant="contained" className={classes.button} size="small">
            Read more...
          </Button>
        </Link>
      </CardActions>

      {article.tagList.map(tag => {
        return (
          <Chip
            style={{ margin: 5, marginBottom: 15 }}
            key={tag}
            label={tag}
            className={classes.chip}
            variant="outlined"
            color="secondary"
          />
        );
      })}
    </Card>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
