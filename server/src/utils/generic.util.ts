import { v4 as uuidv4 } from 'uuid';

export async function generateUUID(){
    return uuidv4();
}

export function getLastWeekDays(): string[] {
    const today = new Date();
    const weekdays: any[] = [];
  
    // Get the first 3 letters of the weekday for the last 7 days
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const weekday = date.toLocaleString('en-US', { weekday: 'short' });
      weekdays.push({id : i,weekday,order : 0});
    }
  
    return weekdays;
  }
  