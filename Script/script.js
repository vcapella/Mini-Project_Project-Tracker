//set date that appears in boxes 
let timeUntil = $('timeuntil')
let dueDate = $('duedate')
let endDate = moment(timeUntil.textcontent, "DDDD hh:mm:ss") - moment("DDDD hh:mm:ss")

dueDate.textcontent = endDate