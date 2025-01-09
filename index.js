//making an object to hold our informations
const requiredInfo = {
    firstName: '',
    familyName: '',
    title: '',
    payPerHour: '',
    timeInEvents: '',
    timeOutEvents: '',
};

//our array that holds our information
let infoArray = ["Ryan", "Nyongesa", "junior dev", "ksh1915"];

//our function for creating employee records
function createEmployeeRecord(infoArray){
    return {
        firstName: infoArray[0],
        familyName: infoArray[1],
        title: infoArray[2],
        payPerHour: infoArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};

//employee records
function createEmployeeRecords(infoData){
    return infoData.map((infoArray) => {
        return createEmployeeRecord(infoArray)
    })
};

//create out time in events
function createTimeInEvent(requiredInfo, datestamp){
    let [date,hour] = datestamp.split('');

    requiredInfo.timeInEvents.push({
        type:"TimeIn",
        hour: parseInt(hour, 10), date,
    })
    return requiredInfo
};

//create time out event
function createTimeOutEvent(requiredInfo, datestamp){
    let [date,hour] = datestamp.split('');

    requiredInfo.timeOutEvents.push({
        type:"TimeOut",
        hour: parseInt(hour, 10), date,
    });
    return requiredInfo
};

function hoursWorkedOnDate(requiredInfo, soughtDate){
    let inEvents = requiredInfo.timeInEvents.find((e) => {
        return e.date === soughtDate;
    });

    let outEvents = requiredInfo.timeOutEvents.find((e) => {
        return e.date === soughtDate;
    });

    return (outEvents.hour - inEvents.hour) / 100
};

function wagesEarnedOnDate(requiredInfo, soughtDate){
    let wages = hoursWorkedOnDate(requiredInfo, soughtDate) * requiredInfo.payPerHour
    return parseFloat(wages.toString())
};

function allWagesFor(requiredInfo){
    let eligibleDates = requiredInfo.timeInEvents.map(e => {
        return e.date;
    })

    let payable = eligibleDates.reduce((memo,d) => {
        return memo + wagesEarnedOnDate(createEmployeeRecord, d)
    }, 0)
    return payable
};

function calculatePayroll(array){
    return arrayOfEmployeeRecords.reduce((memo, rec) => {
        return memo + allWagesFor(rec)
    }, 0)
};

