
// Convert string '2018-08-15' to string 'Aug 15, 2018'
export function formatDateShort(date) {
  return formatDateString(date, true);
}

// Convert string '2018-08-15' to string 'August 15, 2018'
export function formatDateLong(date) {
  return formatDateString(date);
}

function formatDateString(date, shortMonth = false) {
  const monthNamesLong = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ];
  const monthNamesShort = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'
  ];
  const monthNames = shortMonth ? monthNamesShort : monthNamesLong;
  const [year, month, day] = date.split('-');
  return monthNames[month - 1] + ' ' + day + ', ' + year;
}