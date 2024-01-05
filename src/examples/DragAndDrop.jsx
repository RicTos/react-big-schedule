import React, { Component, createRef } from "react";
import * as dayjsLocale from "dayjs/locale/it";
import * as antdLocale from "antd/locale/pt_BR";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";
import { DnDTypes } from "../config/default";

import Scheduler, {
  SchedulerData,
  ViewType,
  DemoData,
  wrapperFun,
  DnDSource,
} from "../index";

class DragAndDrop extends Component {
  constructor(props) {
    super(props);

    const schedulerData = new SchedulerData(
      "2022-12-20",
      ViewType.Day,
      false,
      false,
      {
        dayMaxEvents: 99,
        weekMaxEvents: 9669,
        monthMaxEvents: 9669,
        quarterMaxEvents: 6599,
        yearMaxEvents: 9956,
        customMaxEvents: 9965,
        eventItemPopoverTrigger: "click",
        responsiveByParent: true,
        // dayStartFrom: 2,
        // dayStopTo: 10,
        minuteStep: 60,
        //  dayResourceTableWidth:10,
        dayCellWidth: 60,
        nonAgendaDayCellHeaderFormat: "HH:mm",
        // relativeMove: false
      }
    );

    schedulerData.setSchedulerLocale(dayjsLocale);
    schedulerData.setCalendarPopoverLocale(antdLocale);
    schedulerData.setResources(DemoData.resources);
    schedulerData.setEvents(DemoData.events);

    this.state = {
      viewModel: schedulerData,
      mounted: false,
      taskDndSource: new DnDSource(
        (props) => {
          return props.task;
        },
        TaskItem,
        true,
        "task"
        ),
    };

    this.divRef = createRef();
  }

  componentDidMount() {
    this.setState((prevState) => ({ ...prevState, mounted: true }));
  }

  render() {
    const { viewModel, taskDndSource } = this.state;

    let taskList = (
      <TaskList
        schedulerData={viewModel}
        newEvent={this.newEvent}
        tasks={[
          {
            id: 1,
            name: "Drag and drop me",
          },
        ]}
        taskDndSource={taskDndSource}
      />
    );

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div ref={this.divRef} style={{ width: "70%", height: 600 }}>
          {this.state.mounted && (
            <Scheduler
              parentRef={this.divRef}
              schedulerData={viewModel}
              prevClick={this.prevClick}
              nextClick={this.nextClick}
              onSelectDate={this.onSelectDate}
              onViewChange={this.onViewChange}
              // eventItemClick={this.eventClicked}
              viewEventClick={this.ops1}
              viewEventText="Ops 1"
              viewEvent2Text="Ops 2"
              viewEvent2Click={this.ops2}
              updateEventStart={this.updateEventStart}
              updateEventEnd={this.updateEventEnd}
              moveEvent={this.moveEvent}
              newEvent={this.newEvent}
              onScrollLeft={this.onScrollLeft}
              onScrollRight={this.onScrollRight}
              onScrollTop={this.onScrollTop}
              onScrollBottom={this.onScrollBottom}
              toggleExpandFunc={this.toggleExpandFunc}
              // dndSources={[taskDndSource]}
            />
          )}
        </div>
        <div style={{ width: "30%" }}>{taskList}</div>
      </div>
    );
  }

  prevClick = (schedulerData) => {
    schedulerData.prev();
    schedulerData.setEvents(DemoData.events);
    this.setState({ viewModel: schedulerData });
  };

  nextClick = (schedulerData) => {
    schedulerData.next();
    schedulerData.setEvents(DemoData.events);
    this.setState({ viewModel: schedulerData });
  };

  onViewChange = (schedulerData, view) => {
    const start = new Date();
    schedulerData.setViewType(
      view.viewType,
      view.showAgenda,
      view.isEventPerspective
    );
    schedulerData.setEvents(DemoData.events);
    this.setState({ viewModel: schedulerData });
    function secondsBetween(date1, date2) {
      const diff = Math.abs(date1.getTime() - date2.getTime());
      return diff / 1000;
    }

    console.log(`Elapsed seconds: ${secondsBetween(start, new Date())}`);
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData,
    });
  };

  eventClicked = (schedulerData, event) => {
    alert(
      `You just clicked an event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  ops1 = (schedulerData, event) => {
    alert(
      `You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  ops2 = (schedulerData, event) => {
    alert(
      `You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    if (
      confirm(
        `Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`
      )
    ) {
      let newFreshId = 0;
      schedulerData.events.forEach((item) => {
        if (item.id >= newFreshId) newFreshId = item.id + 1;
      });

      const newEvent = {
        id: newFreshId,
        title: "New event you just created",
        start,
        end,
        resourceId: slotId,
        bgColor: "purple",
      };
      schedulerData.addEvent(newEvent);
      this.setState({
        viewModel: schedulerData,
      });
    }
  };

  updateEventStart = (schedulerData, event, newStart) => {
    if (
      confirm(
        `Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`
      )
    ) {
      schedulerData.updateEventStart(event, newStart);
    }
    this.setState({
      viewModel: schedulerData,
    });
  };

  updateEventEnd = (schedulerData, event, newEnd) => {
    if (
      confirm(
        `Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`
      )
    ) {
      schedulerData.updateEventEnd(event, newEnd);
    }
    this.setState({
      viewModel: schedulerData,
    });
  };

  moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    if (
      confirm(
        `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
      )
    ) {
      schedulerData.moveEvent(event, slotId, slotName, start, end);
      this.setState({
        viewModel: schedulerData,
      });
    }
  };

  onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewType.Day) {
      schedulerData.next();
      schedulerData.setEvents(DemoData.events);
      this.setState({
        viewModel: schedulerData,
      });

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  };

  onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewType.Day) {
      schedulerData.prev();
      schedulerData.setEvents(DemoData.events);
      this.setState({
        viewModel: schedulerData,
      });

      schedulerContent.scrollLeft = 10;
    }
  };

  onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log("onScrollTop");
  };

  onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log("onScrollBottom");
  };

  toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    this.setState({
      viewModel: schedulerData,
    });
  };
}

export default wrapperFun(DragAndDrop);