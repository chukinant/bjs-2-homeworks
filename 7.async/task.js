class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        const timeRegex = /^\d{2}:\d{2}$/;

        if (!timeRegex.test(time)) {
            console.warn("Время указано не в формате HH:MM");
        }

        if (!time || !callback) {
            throw new Error("Отсутствуют обязательные аргументы");
        }

        if (this.alarmCollection.some((alarm) => alarm.time === time)) {
            console.warn("Уже присутствует звонок на это же время");
        }

        const alarm = {
            time,
            callback,
            canCall: true
        };

        this.alarmCollection.push(alarm);
    }
    
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const currentTime = new Date();
        let currentHour = currentTime.getHours();
        let currentMinute = currentTime.getMinutes();
        return `${currentHour}:${currentMinute}`;
    }

    start() {
        if (!!this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach((alarm) => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}