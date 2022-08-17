# General

### Q) If you had more time, what further improvements or new features would you add?
add some testing code using react testing library

### Q) Which parts (JS/TS) are you most proud of?
validate the card inputs and combine it with antd

### Q) Do you have experience with docker?
NO

### Q) Do you have experience with unit testing and end-to-end testing?
yes I used (Jest, react testing library, cypress, playwright)

### Q) What is the output of the next code, and why?

```
for (var i = 0; i < 5; i++) {
 setTimeout(function() { console.log(i); }, 1000 );
}
```
the output will be : 5 => 5 times
why: as setTimeOut is async function it will take some time to execute it will get out of the call stack and it will be there in the web api area and it will be there until the time is up after that it will go to be in the queue under the control of the event loop waiting in the line to be executed so after all that time it will get out to find that the current value of i now is 5 so all the statement will be executed with the same value

### Q) Is it possible to run mutli task in the same time in javascript? and why?
NO, as JS is a single thread every tab of web browser just have a single interpreter
### Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them
it's good and the description is very clear