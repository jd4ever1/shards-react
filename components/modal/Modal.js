import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { TIMEOUT } from "../constants";

/**
 * Creating flexible modal dialogs can be achieved using the `Modal` component. They feature a series of helpful subcomponents, sizes and various other options that you can use to customize the display and behavior of your modals.
 */
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open || false,
      mounted: false
    };
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.modalContent = null;
  }

  componentDidMount() {
    if (this.state.open) {
      this.setState({ mounted: true });
      this.props.showModal && this.props.showModal();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open && !this.state.open) {
        // Opening
        this.setState({ open: true, mounted: true }, () => {
          // Force reflow to ensure transition works
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.setState({ show: true });
            });
          });
        });
      } else if (!this.props.open && this.state.open) {
        // Closing
        this.props.hideModal && this.props.hideModal();
        this.setState({ show: false }, () => {
          setTimeout(() => {
            this.setState({ open: false, mounted: false });
            this.props.hiddenModal && this.props.hiddenModal();
          }, this.props.fade ? TIMEOUT.FADE : 0);
        });
      }
    }
  }

  handleBackdropClick(e) {
    if (!this.modalContent.contains(e.target)) {
      this.props.toggle();
    }
  }

  render() {
    const {
      id,
      backdrop,
      fade,
      tabIndex,
      backdropClassName,
      modalClassName,
      animation,
      modalContentClassName,
      position,
      role,
      size,
      children,
      centered,
      className
    } = this.props;

    const { open, mounted, show } = this.state;

    if (!mounted && !open) {
      return null;
    }

    const backdropClasses = classNames(
      "bs-modal-backdrop",
      fade ? "fade" : "bs-show",
      show && "show",
      backdropClassName
    );

    const modalClasses = classNames(
      "bs-modal",
      fade && "fade",
      show && "show",
      modalClassName,
      fade &&
        (animation || (position && position.split("-").slice(-1)[0]) || "top")
    );

    const modalAttrs = {
      "aria-hidden": !show,
      id: id || undefined,
      tabIndex,
      role,
      style: {
        display: "block"
      }
    };

    const modalDialogClasses = classNames(
      "bs-modal-dialog",
      className,
      size && `bs-modal-${size}`,
      centered && "bs-modal-dialog-centered",
      position && `bs-modal-${position}`
    );

    const contentClasses = classNames("bs-modal-content", modalContentClassName);

    return (
      <Fragment>
        {backdrop && (
          <div
            className={backdropClasses}
            style={{
              transition: fade ? `opacity 500ms ease-in-out` : 'none',
              opacity: 0.4,
            }}
          />
        )}
        <div
          className={modalClasses}
          {...modalAttrs}
          onClick={this.handleBackdropClick}
          style={{
            ...modalAttrs.style,
            transition: fade ? `opacity 500ms ease-in-out` : 'none',
            opacity: 1,
          }}
        >
          <div className={modalDialogClasses} role="document">
            <div
              ref={el => (this.modalContent = el)}
              className={contentClasses}
            >
              {children}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Modal.propTypes = {
  /**
   * The id.
   */
  id: PropTypes.string,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether it is open, or not.
   */
  open: PropTypes.bool,
  /**
   * Whether it should fade, or not.
   */
  fade: PropTypes.bool,
  /**
   * Whether it should display a backdrop, or not.
   */
  backdrop: PropTypes.bool,
  /**
   * The function that should be triggered when the modal is shown.
   */
  showModal: PropTypes.func,
  /**
   * The function that should be triggered when the modal is set to hide.
   */
  hideModal: PropTypes.func,
  /**
   * The function that should be triggered when the modal is finally hidden.
   */
  hiddenModal: PropTypes.func,
  /**
   * Whether it should be centered, or not.
   */
  centered: PropTypes.bool,
  /**
   * The class name for the backdrop element.
   */
  backdropClassName: PropTypes.string,
  /**
   * The toggle function.
   */
  toggle: PropTypes.func,
  /**
   * The class name for the modal.
   */
  modalClassName: PropTypes.string,
  /**
   *
   */
  animation: PropTypes.bool,
  /**
   * The position.
   */
  position: PropTypes.string,
  /**
   * The size.
   */
  size: PropTypes.string,
  /**
   * The tab index.
   */
  tabIndex: PropTypes.string,
  /**
   * The class name for the modal content.
   */
  modalContentClassName: PropTypes.string,
  /**
   * The role attribute for the modal.
   */
  role: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Modal.defaultProps = {
  open: false,
  fade: true,
  backdrop: true,
  role: "dialog"
};

export default Modal;