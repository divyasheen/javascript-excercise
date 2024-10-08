
function hideEmail(email) {
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    const username = email.substring(0, atIndex);
    const domain = email.substring(atIndex + 1, dotIndex);
    const extension = email.substring(dotIndex + 1);
    const hiddenUsername = username.substring(0, 3) + '...';
    return hiddenUsername + extension + '@' + domain;
}

const givenEmail = 'natalia.banz.1988@gmail.com';
const hiddenEmail = hideEmail(givenEmail);
console.log(hiddenEmail);