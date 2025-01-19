import moment from 'moment';

export const getToday = (): string => {
    return moment().format('YYYY-MM-DD');
}