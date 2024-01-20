/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function waitPromiseFunc(n) {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(n);
        }, n * 1000);
    });
}

async function wait(n) {
    const value = await waitPromiseFunc(n);
}

module.exports = wait;
