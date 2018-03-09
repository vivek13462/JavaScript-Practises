//Promise(Async calls to avoid waiting)
const delay = seconds => {
return new Promise(resolve => {
setTimeout(resolve, seconds * 1000)
});
};
delay(2).then(() => alert("Delay of 2 seconds"));
