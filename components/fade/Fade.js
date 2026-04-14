import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Transition from "react-transition-group/Transition";
import omit from "lodash.omit";
import pick from "lodash.pick";

import { TIMEOUT, TRANSITION_KEYS } from "./../constants";

/**
 * The `Fade` component allows you to easily fade in and out content and is powered by [react-transition-group](https://github.com/reactjs/react-transition-group).
 */
const Fade = props => {
  const {
    tag: Tag = "div",
    baseClass = "bs-fade",
    baseClassActive = "bs-show",
    className,
    children,
    innerRef,
    timeout = TIMEOUT.FADE,
    appear = true,
    enter = true,
    exit = true,
    in: inProp = true,
    ...attrs
  } = props;

  const transitionProps = pick(attrs, TRANSITION_KEYS);
  const childProps = omit(attrs, TRANSITION_KEYS);

  return (
    <Transition
      {...transitionProps}
      timeout={timeout}
      appear={appear}
      enter={enter}
      exit={exit}
      in={inProp}
    >
      {status => {
        const isActive = status === "entered";
        const classes = classNames(
          className,
          baseClass,
          isActive && baseClassActive
        );
        return (
          <Tag className={classes} {...childProps} ref={innerRef}>
            {children}
          </Tag>
        );
      }}
    </Transition>
  );
};

Fade.propTypes = {
  ...Transition.propTypes,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  baseClass: PropTypes.string,
  baseClassActive: PropTypes.string,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Fade;
