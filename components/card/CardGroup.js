import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardGroup = props => {
  const { className, tag: Tag = "div", ...attrs } = props;
  const classes = classNames(className, "bs-card-group");

  return <Tag {...attrs} className={classes} />;
};

CardGroup.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default CardGroup;
