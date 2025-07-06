import { updateTimes } from './main';

describe('updateTimes reducer', () => {
  
  test('returns weekend times for Saturday', () => {
    const action = { type: 'UPDATE_TIMES', date: '2025-07-12' }; 
    const result = updateTimes([], action);
    
    const expectedWeekendTimes = [
      "11:00", "11:30", "12:00", "12:30", 
      "17:00", "17:30", "18:00", "18:30", 
      "19:00", "19:30", "20:00", "20:30", "21:00"
    ];
    
    expect(result).toEqual(expectedWeekendTimes);
  });

});