class TimeSpan {
    constructor(hours, minutes, seconds) {
        if (!Number.isInteger(hours))
            throw new RangeError("Invalid hours: " + hours);
        if (!Number.isInteger(minutes))
            throw new RangeError("Invalid minutes: " + minutes);
        if (!Number.isInteger(seconds))
            throw new RangeError("Invalind seconds: " + seconds);

        this._seconds = (hours * 60 * 60) + (60 * minutes) + seconds;
    }

    toString() {
        let seconds = this._seconds % 60;
        let minutes = Math.trunc(this._seconds / 60) % 60;
        let hours = (this._seconds / (60 * 60)).toFixed(0);

        seconds = ("0" + seconds).slice(-2);
        minutes = ("0" + minutes).slice(-2);

        return `${hours}:${minutes}:${seconds}`;
    }
}

//console.log('' + new TimeSpan(7, 8, 5));     =>  7:08:05
//console.log('' + new TimeSpan(12, 76, -5));  =>  13:15:55
//console.log('' + new TimeSpan('', 2.5, {})); =>  RangeError: Invalid hours:
