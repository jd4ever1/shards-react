import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardHeader = props => {
  const { className, tag: Tag = "div", ...attrs } = props;
  const classes = classNames(className, "bs-card-header");

  return <Tag {...attrs} className={classes} />;
};

CardHeader.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default CardHeader;
