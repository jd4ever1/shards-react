import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { TIMEOUT } from "../constants";

import Fade from "../fade";

const FADE_DEFAULTS = {
  tag: "div",
  baseClass: "fade",
  baseClassActive: "show",
  timeout: TIMEOUT.FADE,
  appear: true,
  enter: true,
  exit: true,
  in: true
};

/**
 * The alert component can be used to display contextual user messages.
 */
const Alert = ({
  className,
  closeClassName,
  closeAriaLabel = "Close",
  tag: Tag = "div",
  theme = "primary",
  open = true,
  dismissible,
  children,
  transition = {
    ...FADE_DEFAULTS,
    unmountOnExit: true
  },
  fade = true,
  ...attrs
}) => {
  const classes = classNames(
    className,
    "bs-alert",
    `bs-alert-${theme}`,
    dismissible && "bs-alert-dismissible"
  );

  const closeClasses = classNames("bs-close", closeClassName);

  const alertTransition = {
    ...FADE_DEFAULTS,
    ...transition,
    baseClass: fade ? transition.baseClass : "",
    timeout: fade ? transition.timeout : 0
  };

  return (
    <Fade
      {...attrs}
      {...alertTransition}
      tag={Tag}
      className={classes}
      in={open}
      role="alert"
    >
      {dismissible ? (
        <button
          type="button"
          className={closeClasses}
          aria-label={closeAriaLabel}
          onClick={dismissible}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      ) : null}
      {children}
    </Fade>
  );
};

Alert.propTypes = {
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The close button's class name.
   */
  closeClassName: PropTypes.string,
  /**
   * The close button's aria label.
   */
  closeAriaLabel: PropTypes.string,
  /**
   * The theme color.
   */
  theme: PropTypes.string,
  /**
   * Whether it should fade, or not.
   */
  fade: PropTypes.bool,
  /**
   * Whether is open, or not.
   */
  open: PropTypes.bool,
  /**
   * Whether is dismissible, or not.
   */
  dismissible: PropTypes.func,
  /**
   * The transition config. See `Fade` component for more details.
   */
  transition: PropTypes.shape(Fade.propTypes),
  /**
   * The component tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default Alert;
