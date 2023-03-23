(function digitalClock() {
    // Numbers array, each number holds info of which dot should be active to display the wanted number
    const numbers = [
        [1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15],     // 0
        [6, 7, 8, 9, 10],                               // 1
        [1, 3, 4, 5, 6, 8, 10, 11, 12, 13, 15],         // 2
        [1, 3, 5, 6, 8, 10, 11, 12, 13, 14, 15],        // 3
        [1, 2, 3, 8, 11, 12, 13, 14, 15],               // 4
        [1, 2, 3, 5, 6, 8, 10, 11, 13, 14, 15],         // 5
        [1, 2, 3, 4, 5, 6, 8, 10, 11, 13, 14, 15],      // 6
        [1, 6, 11, 12, 13, 14, 15],                     // 7
        [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15],  // 8
        [1, 2, 3, 5, 6, 8, 10, 11, 12, 13, 14, 15,],    // 9
    ]

    let date = new Date(); // Full date

    let hours = addZero(date.getHours());   // Hours
    let h = hours.charAt(0);    // Hours first digit
    let hh = hours.charAt(1);   // Hours second digit

    let minutes = addZero(date.getMinutes());   // Minutes
    let m = minutes.charAt(0);  // Minutes first digit
    let mm = minutes.charAt(1); // Minutes second digit

    let seconds = addZero(date.getSeconds());   // Seconds
    let s = seconds.charAt(0);  // Seconds first digit
    let ss = seconds.charAt(1); // Seconds second digit

    // Function turns single digit numbers to two digit numbers
    function addZero(num) {
        num = num.toString();
        if (num.length == 1) {
            return num = "0" + num;
        } else {
            return num;
        }
    }

    // Prepares the array to be used with querySelectorAll
    function arrayToQuerySelectorAll(array, index) {
        var array = ".d" + array[index].join(", .d")
        return array;
    }

    let displayH = document.querySelector("[data-displayH]")    // Hours first digit Display
    let displayHH = document.querySelector("[data-displayHH]")  // Hours second digit Display
    let displayM = document.querySelector("[data-displayM]")    // Minutes first digit Display
    let displayMM = document.querySelector("[data-displayMM]")  // Minutes second digit Display
    let displayS = document.querySelector("[data-displayS]")    // Seconds first digit Display
    let displaySS = document.querySelector("[data-displaySS]")  // Seconds second digit Display

    // Displays the time on Digital Clock
    function showTime(display, index) {
        let displayField = arrayToQuerySelectorAll(numbers, index)  // Focus on wanted Display
        let selected = display.querySelectorAll(displayField);  // Selects the dots to display the wanted number
        let active = display.querySelectorAll(".active")    // Selects previously active dots in order to turn them off before turning on a new array of dots

        active.forEach(element => { // Removes active class from active dots
            element.classList.remove("active");
        });

        selected.forEach(element => {   // Adds active class to non active dots
            element.classList.add("active");
        });
    }

    // Invoking the function for each digital clock display
    showTime(displayH, h);
    showTime(displayHH, hh);
    showTime(displayM, m);
    showTime(displayMM, mm);
    showTime(displayS, s);
    showTime(displaySS, ss);
    setTimeout(digitalClock, 1000); // Refreshing every 1 second

    // Realtime date and time to see if Digital Clock is working
    var troubleshoot = document.querySelector(".troubleshooter");
    troubleshoot.innerHTML = date;
})();
