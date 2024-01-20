Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

<!-- function waitCalcSecond(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      sec++;
      resolve(sec);
    }, 1000);
  });
}

async function calculateSec(hr, min, sec) {
  while (sec < 60) {
    console.log(
      `${hr < 10 ? `0${hr}` : hr} : ${min < 10 ? `0${min}` : min} : ${
        sec < 10 ? `0${sec}` : sec
      } ${hr > 11 ? "PM" : "AM"}`
    );
    let second = await waitCalcSecond(sec);
    sec = second;
  }
}

async function calculateMin(hr, min, sec) {
  while (min < 60) {
    await calculateSec(hr, min, sec);
    min++;
    sec = 0;
  }
}

async function calculateHour(hr, min, sec) {
  while (hr < 24) {
    await calculateMin(hr, min, sec);
    hr++;
    min = sec = 0;
  }
}

async function main() {
  await calculateHour(11, 0, 30);
}

main(); -->
