/*function validate() {
    let usernameRegex = /^[A-Za-z0-9]{3,20}$/g;
    let passwordRegex = /^\w{5,15}$/g;
    let emailRegex = /\w*@\w*\.\w*!/g;
    let companyNumberRegex = /^[1-9][0-9]{3}$/g;

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyNumber = $('#companyNumber');

    let companyCheckbox = $('#company');
    companyCheckbox.on('change', showCompanyInfo);

    function showCompanyInfo() {
        let companyInfoDisplay = companyCheckbox.is(':checked') ? 'block' : 'none';
        $('#companyInfo').css('display', companyInfoDisplay);
    }

    $('#submit').on('click', validateProperties);

    function validateProperties(ev) {
        ev.preventDefault();

        check(username, usernameRegex);
        check(email, emailRegex);

        if (password.val() === confirmPassword.val()) {
            check(password, passwordRegex);
            check(confirmPassword, passwordRegex);
        } else {
            password.css('border', 'solid red');
            confirmPassword.css('border', 'solid red');
        }
    }

    function check(input, regex) {
        if (regex.test(input.val())) {
            input.css('border', 'none');
        } else {
            input.css('border', 'solid red');
        }
    }
}*/

function validate() {
    let usernameRegex = /^[A-Za-z0-9]{3,20}$/g;
    let passwordRegex = /^\w{5,15}$/g;
    let emailRegex = /\w*@\w*\.\w*/g;
    let companyNumberRegex = /^[1-9][0-9]{3}$/g;

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyNumber = $('#companyNumber');

    let companyCheckbox = $('#company');
    companyCheckbox.on('change', showCompanyInfo);

    function showCompanyInfo() {
        let companyInfoDisplay = companyCheckbox.is(':checked') ? 'block' : 'none';
        $('#companyInfo').css('display', companyInfoDisplay);
    }

    $('#submit').on('click', validateProperties);

    function validateProperties(ev) {
        ev.preventDefault();

        check(username, usernameRegex);
        check(email, emailRegex);

        if (password.val() === confirmPassword.val()) {
            check(password, passwordRegex);
            check(confirmPassword, passwordRegex);
        } else {
            password.css('border', 'solid red');
            confirmPassword.css('border', 'solid red');
        }
    }

    function check(input, regex) {
        if (regex.test(input.val())) {
            input.css('border', 'none');
        } else {
            input.css('border', 'solid red');
        }
    }
}
