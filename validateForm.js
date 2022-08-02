function onSubmit(token) {
    const checkArray = []
    const requiredInputs = document.querySelectorAll('[required]');

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    requiredInputs.forEach(input => {
        if (input.value === '') {
            checkArray.push({name: input.name, error: 'This field is required!'})
        }
        else if (input.name === 'Email'){
            if (!validateEmail(input.value)) {
                checkArray.push({name: input.name, error: 'Invalid email!'})
            }
        } else checkArray.push({name: input.name, error: false})
    });

    if (checkArray.every(item => item.error === false)) {
        document.querySelector(".contact-form").submit();
    } else {
        checkArray.forEach(element => {
            const errorMessage = document.querySelector(`.${element.name}.error-message`);

            if (errorMessage) {
                if (element.error === false) errorMessage.remove();
                else errorMessage.innerHTML = element.error;
            } else {
                if (element.error === false) return
                const errorMessage = document.createElement('p');
                errorMessage.classList.add(element.name, 'error-message');
                errorMessage.innerHTML = element.error;
                document.querySelector(`[name="${element.name}"]`).insertAdjacentElement('beforebegin', errorMessage);
            }
        })
    }
};