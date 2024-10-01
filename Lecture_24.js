

// #A
// let a=16, b=56, c= -99;

// console.log(Math.sqrt(a));
// console.log(Math.max(a,b,c));
// console.log(Math.abs(c));
// console.log(Math.round(Math.random()*100));


// #B
// create a Date object
// let now = new Date();

// // Get current year
// let currentYear = now.getFullYear();
// console.log("Năm hiện tại:", currentYear);

// // Get current month
// let currentMonth = now.getMonth(); 
// console.log("Tháng hiện tại:", currentMonth);

// // Get current day
// let currentDay = now.getDate();
// console.log("Ngày hiện tại:", currentDay);

// // Get current hour
// let currentHour = now.getHours();
// console.log("Giờ hiện tại:", currentHour);

// // Get current mins
// let currentMinute = now.getMinutes();
// console.log("Phút hiện tại:", currentMinute);

// // create a Date object with a fixed value
// let specificDate = new Date('2024-12-25');
// console.log("Ngày cụ thể: 2024-12-25 là thứ", specificDate.getDay());

// // Get current timestamp (số mili giây từ 1970-01-01)
// let timestamp = now.getTime();
// console.log("Timestamp hiện tại:", timestamp);


// #C
 // sayHelloIntervalId is the Id used to clear the interval
 const sayHelloIntervalId = setInterval(() => {
    console.log('say hello every 1000 miliseconds')
  }, 1000) // 1000 miliseconds = 1 second
  
  setTimeout(() => {
    clearInterval(sayHelloIntervalId) // clear the periodically called function
    console.log('will not say hello anymore!')
  }, 3500); // 3500 miliseconds = 3.5 seconds

