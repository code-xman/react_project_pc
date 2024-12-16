export class Observer {
  message: any;
  constructor() {
    this.message = {};
  }

  $on(event: string, callback: any) {
    if (!event || !callback) return;
    if (!this.message[event]) {
      this.message[event] = [];
    }
    this.message[event].push(callback);
  }

  $off(event: string, callback: any) {
    if (!this.message[event]) return;
    if (!callback) {
      this.message[event] = null;
    }
    this.message[event] = this.message[event].filter((item: any) => item !== callback);
  }

  $emit(event: string, ...args: any) {
    if (!this.message[event]) return;
    this.message[event].forEach((fn: Function) => {
      fn.apply(this, args);
    });
  }
}

export const bus = new Observer();
