
const timer = (start, end) => {
    let currentTime = start;
    return function timerCounter () {
        if (currentTime !== end) {
            console.log(currentTime);
            setTimeout (()=> {
                currentTime -= 1;
                timerCounter ();
            }, 1000);
        }
    };
};

const firstTimer = timer (15, 10);

firstTimer ();