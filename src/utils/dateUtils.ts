
function dateDifference(date: string){
    const givenDate = new Date(date)

    // get time difference in seconds
    const difference = (new Date().getTime() - givenDate.getTime()) / 1000 

    const minutesAgo = Math.floor(difference / 60)
    const hoursAgo = Math.floor(minutesAgo / 60)
    const daysAgo = Math.floor(hoursAgo / 24)
    const monthsAgo = Math.floor(daysAgo / 30)

    return {secondsAgo:difference, minutesAgo, hoursAgo, daysAgo, monthsAgo}
}

function plural(str: string, num: number){
    if (num > 1) return str + "s"
    return str;
}

export default function getTimeAgoString(date: string){
    const {secondsAgo, minutesAgo, hoursAgo, daysAgo, monthsAgo} = dateDifference(date)
    
    if (monthsAgo >= 1) return `${monthsAgo} ${plural("month", monthsAgo)} ago`
    if (daysAgo >= 1) return `${daysAgo} ${plural("day", daysAgo)} ago`
    if (hoursAgo >= 1) return `${hoursAgo} ${plural("hour", hoursAgo)} ago`
    if (minutesAgo >= 1) return `${minutesAgo} ${plural("minute", minutesAgo)} ago`
    if (secondsAgo >= 1) return `${secondsAgo} ${plural("second", secondsAgo)} ago`
}