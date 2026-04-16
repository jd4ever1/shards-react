import React from "react";
import classNames from "classnames";


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
  ...attrs
}) => {
  const classes = classNames(
    className,
    "bs-alert",
    `bs-alert-${theme}`,
    dismissible && "bs-alert-dismissible",
    open ? 'bs-block' : 'bs-d-none',
  );

  const closeClasses = classNames("bs-close", closeClassName);



  return (
    <Tag
      {...attrs}
      className={classes}
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
    </Tag>
  );
};


export default Alert;
