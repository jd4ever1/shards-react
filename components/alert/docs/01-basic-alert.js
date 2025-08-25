import React from "react";
import { Alert } from "shards-react";

/**
 * ## Basic Alerts
 *
 * Alerts come in various contextual theme colors.
 */
export default function AlertExample() {
  return (
    <div className="example">
      <Alert theme="primary">
        Alert - Primary Theme (default) -{" "}
        <a className="bs-alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="secondary">
        Alert - Secondary Theme -{" "}
        <a className="bs-alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="success">
        Alert - Success Theme -{" "}
        <a className="bs-alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="danger">
        Alert - Danger Theme -{" "}
        <a className="bs-alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="warning">
        Alert - Warning Theme -{" "}
        <a className="bs-alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="info">
        Alert - Info Theme -{" "}
        <a className="bs-alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="light">
        Alert - Light Theme -{" "}
        <a className="bs-alert-link" href="#">
          Example Link
        </a>
      </Alert>
      <Alert theme="dark">
        Alert - Dark Theme -{" "}
        <a className="bs-alert-link" href="#">
          Example Link
        </a>
      </Alert>
    </div>
  );
}
