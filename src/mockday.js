class MockDay {
    constructor(frequency, reminders){
        this.frequency = frequency;
        this.reminders = reminders
    }
}

class Reminder {
    constructor(frequency, category){
        this.category = ["physical", "nutrition", "self-care"];
        this.frequency = frequency;
        this.active = true
        this.createdTime = Date.now()
        this.reminderTime = this.convertedHour()
    }

    convertedHour(){
       return this.createdTime + 3600000 
    }
    
}

const reminder1 = new Reminder(3600000, "physical")
console.log(reminder1)

//3600000 milliseconds = 1 hour
//reminder1.createdTime > reminder1.reminderTime to test whether the time has changed once the frequency has added 