import moment from 'moment';

export class TimeTool {
  static instance: any;
  name?: string;
  version?: string;
  formatDate?: (date: Date, formatStr?: string) => string;
  foemmatDateTime?: (date: Date, formatStr?: string) => string;

  constructor() {
    if (!TimeTool.instance) {
      this.name = 'timeTool——日期时间工具';
      this.version = '1.0.0';
      this.formatDate = (date: Date, formatStr: string = 'YYYY-MM-DD') => {
        return moment(date).format(formatStr);
      };
      this.foemmatDateTime = (date: Date, formatStr: string = 'YYYY-MM-DD HH:mm:ss') => {
        return moment(date).format(formatStr);
      };
      TimeTool.instance = this;
    }
    return TimeTool.instance;
  }
}

export const timeTool = new TimeTool();
