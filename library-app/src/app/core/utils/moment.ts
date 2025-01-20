import moment from 'moment';

export const getToday = (): string => {
    return moment().format('YYYY-MM-DD');
}

export const getNextDay = (date: string): string => {
    return moment(date).add(1, 'days').format('YYYY-MM-DD');
}

export const isEndDateValid = (startDate: string, endDate: string): boolean => {
    return moment(endDate).isAfter(startDate);
}