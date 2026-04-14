import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import InputGroupText from "./InputGroupText";
import { INPUT_GROUP_ADDON_TYPES } from "../constants";

const InputGroupAddon = props => {
  const { className, children, tag: Tag = "div", type, ...attrs } = props;
  const classes = classNames(className, `bs-input-group-${type}`);

  if (typeof children === "string") {
    return (
      <Tag {...attrs} className={classes}>
        <InputGroupText>{children}</InputGroupText>
      </Tag>
    );
  }

  return (
    <Tag {...attrs} className={classes}>
      {children}
    </Tag>
  );
};

InputGroupAddon.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * The addon type.
   */
  type: PropTypes.oneOf(INPUT_GROUP_ADDON_TYPES).isRequired,
  /**
   * The component's tag type.
   */
  tag: PropTypes.string
};

export default InputGroupAddon;
