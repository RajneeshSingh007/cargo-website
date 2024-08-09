const translations = {
    en: {
        customerCode: 'Customer Code',
        password: 'Password',
        chooseLanguage: 'Choose Language',
        login: 'Login',
        customerLogin: 'Customer Login'
    },
    tr: {
        customerCode: 'Müşteri Kodu',
        password: 'Şifre',
        chooseLanguage: 'Dil Seçin',
        login: 'Giriş',
        customerLogin: 'Müşteri Girişi'
    },
    ru: {
        customerCode: 'Код клиента',
        password: 'Пароль',
        chooseLanguage: 'Выберите язык',
        login: 'Войти',
        customerLogin: 'Вход клиента'
    }
};

function validateNumberInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

function updateLabels(language) {
    $('#customer-login-title').text(translations[language].customerLogin);
    $('#label-customerCode').text(translations[language].customerCode);
    $('#label-password').text(translations[language].password);
    $('#label-language').text(translations[language].chooseLanguage);
    $('.thm-btn').text(translations[language].login);
}

function showToast(message, type = 'failure') {
    Toastify({
        text: message,
        duration: 3000,
        close: false,
        gravity: "top", 
        position: "right",
        backgroundColor: type === 'success' ? "green" : "red",
        stopOnFocus: true
    }).showToast();
}


$(document).ready(function () {

    $('input[name="language"]').change(function () {
        const selectedLanguage = $(this).val();
        updateLabels(selectedLanguage);
    });

    updateLabels("en");

    $('#loginForm').on('submit', function (event) {
        event.preventDefault();

        const formData = $(this).serialize();

        $.ajax({
            url: "script/tracking.php",
            type: 'GET',
            data: formData,
            dataType: 'json',
            success: function (response) {
                if (response.error) {
                    showToast(response.error)
                } else {
                    // TODO:
                }
            },
            error: function () {
                showToast("An error occurred while fetching the data.")
            }
        });
    });
});