export const convertDateToUnixTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000); //getTime returns ms but unix uses seconds so this converts from ms to s
};

export const convertUnixTimestampToDate = (unixTimestamp) => {
    const milliseconds = unixTimestamp * 1000;
    return new Date(milliseconds).toLocaleDateString();
}

export const createDate = (date, days, weeks, months, years) => {
//negative parameters will create a date in the past    
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days + 7 * weeks);
    newDate.setMonth(newDate.getMonth() + months);
    newDate.setFullYear(newDate.getFullYear() + years);
};