function Switch() {
    return true
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Switch() === true) {
            resolve();
        } else {
            reject();
        }
    }, 0)
});

promise.then(() => {
        console.log(0);
    },
    () => {
        console.log(0);
        return Promise.reject();
    }
)
    .then(() => {
            console.log(1);
            return Promise.resolve(true);
        },
        () => {
            console.log(2);
        }
    )
    .then((value) => {
            console.log(3);
            if (value === true) {
                return Promise.reject(true)
            } else {
                return Promise.reject()
            }
        },
        () => {
            console.log(4);
        }
    )
    .then(() => {
            console.log(5);
        },
        (value) => {
            console.log(6);
            if (value === true) {
                return Promise.reject()
            } else {
                return Promise.resolve()
            }
        }
    )
    .then(() => {
            console.log(7);
        },
        () => {
            console.log(8);
        }
    )
    .then(() => {
            console.log(9);
            return Promise.reject()
        },
        () => {
            console.log(10);
        }
    )
    .then(() => {
            console.log(11);
        },
        () => {
            console.log(12);
        }
    )
