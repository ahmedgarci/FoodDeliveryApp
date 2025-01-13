const {formatDistance, subDays} = require("date-fns")

function ChangeDateFormat(date){
    return formatDistance(date, new Date(), { addSuffix: true });
}

module.exports = {ChangeDateFormat}