/*
 * Utility functions for our browser tests
 */
export function createEvent(eventType: any): Event {
  var evt: Event = document.createEvent('Event');
  evt.initEvent(eventType, true, true);
  return evt;
}

export function dispatchEvent(element: any, eventType: any) {
  element.dispatchEvent(createEvent(eventType));
}
