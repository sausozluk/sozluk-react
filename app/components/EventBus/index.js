import React from 'react';

class EventBus extends React.Component {
  constructor() {
    super();
    this.all = {};
  }

  toList(type) {
    const t = type.toLocaleLowerCase();

    if (!this.all[t]) {
      this.all[t] = [];
    }

    return this.all[t];
  }

  on(type, handler) {
    this.toList(type).push(handler);
  }

  off(type, handler) {
    const e = this.toList(type);
    const i = e.indexOf(handler);
    if (i > -1) {
      e.splice(i, 1);
    }
  }

  emit(type, event) {
    this.toList('*')
      .concat(this.toList(type))
      .forEach((f) => {
        f(event);
      });
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default EventBus;
