import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavbarBrand = props => {
  const { className, tag: Tag = "a", ...attrs } = props;
  const classes = classNames(className, "bs-navbar-brand");

  return <Tag {...attrs} className={classes} />;
};

NavbarBrand.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default NavbarBrand;
