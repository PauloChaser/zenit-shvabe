import Validator from './classes/Validator';
import datepicker from 'js-datepicker'
import IMask from "imask";

export function initForms() {
    const forms = document.querySelectorAll('form');

    if (forms.length === 0) {
        return;
    }

    forms.forEach((form) => {
        form.validator = new Validator(form);
        form.addEventListener('submit', handleFormSubmit);
    });

    initDatepicker()
    initInputMask()
}

function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);
    const submit = form.querySelector('input[type="submit"]');
    const url = form.getAttribute('action')

    if (
        !form ||
        !url ||
        !form.validator.validate()
    ) {
        return;
    }

    fetch(url, {
        method: 'POST',
        body: fd,
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.success) {
                submit.value = 'Отправлено';
                submit.setAttribute('disabled', 'disabled');
            }
        });
}


function initDatepicker() {
    const datepickerEl = document.querySelectorAll('.js-datepicker')

    if (!datepickerEl) {
        return
    }

    datepickerEl.forEach(function (datepickerItem) {
        datepicker(datepickerItem, {
            formatter: (input, date, instance) => {
                input.value = date.toLocaleDateString()
            },
            minDate: new Date,
            startDay: 1,
        })
    })
}

function initInputMask() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    const timeInputs = document.querySelectorAll('.js-time-input');
    const dateInputs = document.querySelectorAll('.js-input-date');

    [...phoneInputs].forEach((input) => {
        IMask(input, {
            mask: '+{7} (000) 000-00-00',
        });
    });
    [...timeInputs].forEach((input) => {
        IMask(input, {
            mask: '00:00',
        });
    });

    [...dateInputs].forEach((input) => {
        IMask(input, {
            mask: Date,
            min: new Date(1930, 0, 1),
            max: new Date(2022, 0, 1),
            lazy: true
        });
    });



}
