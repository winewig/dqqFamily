import { Pipe, PipeTransform } from '@angular/core';

export enum WeekdayOfChinese {
  MONDAY = '周一',
  TUESDAY = '周二',
  WEDNESDAY = '周三',
  THURSDAY = '周四',
  FRIDAY = '周五',
  SATURDAY = '周六',
  SUNDAY = '周日'
}

@Pipe({
  name: 'dateFormat'
})

export class DateFormatPipe implements PipeTransform {

  transform(weekday: string): WeekdayOfChinese {
    return this.convertWeekday()[weekday]();
  }

  private convertWeekday() {
    return {
      'Monday': () => WeekdayOfChinese.MONDAY,
      'Tuesday': () => WeekdayOfChinese.TUESDAY,
      'Wednesday': () => WeekdayOfChinese.WEDNESDAY,
      'Thursday': () => WeekdayOfChinese.THURSDAY,
      'Friday': () => WeekdayOfChinese.FRIDAY,
      'Saturday': () => WeekdayOfChinese.SATURDAY,
      'Sunday': () => WeekdayOfChinese.SUNDAY
    };
  }
}
