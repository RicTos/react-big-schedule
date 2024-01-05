import React, { Component } from "react";
import { PropTypes } from "prop-types";

class TaskItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { task, isDragging, connectDragSource, connectDragPreview } =
      this.props;
    let dragContent = (
      <li
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "20px",
          listStyle: "none",
        }}
      >
        {task.name}
      </li>
    );

    return isDragging ? null : (
      <div>{connectDragPreview(connectDragSource(dragContent))}</div>
    );
  }
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
