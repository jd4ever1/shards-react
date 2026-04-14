import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardText = props => {
  const { className, tag: Tag = "p", ...attrs } = props;
  const classes = classNames(className, "bs-card-text");

  return <Tag {...attrs} className={classes} />;
};

CardText.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default CardText;
