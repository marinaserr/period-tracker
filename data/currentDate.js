const { DateTime } = require("luxon");

let currentDate = DateTime.now().setZone('America/New_York');
let date = currentDate.toLocaleString({ weekday: 'long', month: 'long', day: 'numeric' })
let time = currentDate.toLocaleString(DateTime.TIME_SIMPLE)

//calendar
let month = currentDate.toLocaleString({ month: 'long', year: 'numeric' })

module.exports = {
    date, time, month
}