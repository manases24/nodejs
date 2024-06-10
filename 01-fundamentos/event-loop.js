// https://www.builder.io/blog/visual-guide-to-nodejs-event-loop
// https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

console.log('Inicio de programa');

setTimeout( () => {
    console.log('Primer Timeout');
}, 3000 );


setTimeout( () => {
    console.log('Segundo Timeout');
}, 0 );


setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );


console.log('Fin de programa');