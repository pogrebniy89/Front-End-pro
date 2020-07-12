function Switch() {
    return true
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Switch() === true) {
            resolve(0);
        } else {
            reject(0);
        }
    }, 0)
});

promise.then((number) => {
        console.log(number);
        return 1;
    },
    (number) => {
        console.log(number);
        return 2;
    }
)
    .then((number) => {
            console.log(number);
            return Promise.resolve(number);
        },
        (number) => {
            console.log(number);
            return Promise.resolve(number);
        }
    )
    .then((number) => {
            console.log(3);
            if (number === 1) {
                return Promise.reject(number)
            } else {
                return Promise.reject(number)
            }
        },
        () => {
        }
    )
    .then(() => {
        },
        (number) => {
            console.log(6);
            if (number === 1) {
                return Promise.reject(8)
            } else {
                return Promise.resolve(7)
            }
        }
    )
    .then((number) => {
            console.log(number);
            return Promise.resolve(number)
        },
        (number) => {
            console.log(number);
            return Promise.resolve(number)
        }
    )
    .then(() => {
            console.log(9);
            return Promise.reject(12)
        },
        () => {

        }
    )
    .then(() => {
        },
        (number) => {
            console.log(number);
        }
    )
