const timeTools = {

  getToday: function () {
    let day = new Date()
    let month = day.getMonth()
    if (month < 10) {
      month = '0' + (month + 1)
    }
    let today = day.getDate()
    if (today < 10) {
      today = '0' + today
    }
    return day.getFullYear() + '-' + month + '-' + today
  },

  getPreMonth: function (date) {
    let year = date.slice(0, 4)
    let month = date.slice(5, 7)
    let day = date.slice(8, 10)
    let daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (year % 4 === 0) {
      daysInMonth[2] = 29
    }
    if (month - 1 === 0) {
      month = 12
      year--
    } else {
      month--
    }
    day = Math.min(day, daysInMonth[month])
    if (month < 10) {
      month = '0' + month
    }
    if (day < 10) {
      day = '0' + day
    }
    return year + '-' + month + '-' + day
  },

  getYesterday: function (date) {
    let daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let year = date.slice(0, 4)
    let month = date.slice(5, 7)
    let day = date.slice(8, 10)
    if (day - 1 === 0) {
      if (month - 1 === 0) {
        year--
        month = 12
        day = 31
      } else {
        month--
        day = daysInMonth[month]
      }
    } else {
      day--
    }
    if (month < 10) {
      month = '0' + month
    }
    if (day < 10) {
      day = '0' + day
    }
    return year + '-' + month + '-' + day
  }

}
export default timeTools