import React from "react";
import agent from "../../agent";

// Material-UI
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  tagBox: {
    margin: 20
  }
}));

const Tags = props => {
  const tags = props.tags;
  const classes = useStyles();

  if (tags) {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-10 offset-md-1">
          <Paper className={[classes.root, classes.tagBox]}>
            <Typography variant="h5" color="textSecondary" component="p">
              Popular tags
            </Typography>

            <div className="tag-list">
              {tags.map(tag => {
                const handleClick = ev => {
                  ev.preventDefault();
                  props.onClickTag(tag, agent.Articles.byTag(tag));
                };

                return (
                  <Chip
                    className={classes.chip}
                    key={tag}
                    label={tag}
                    variant="outlined"
                    color="secondary"
                    onClick={handleClick}
                  />
                );
              })}
            </div>
          </Paper>
        </div>
      </div>
    );
  } else {
    return <div>Loading Tags...</div>;
  }
};

export default Tags;
