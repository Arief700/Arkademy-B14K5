const is_username_valid = username =>
    /^[a-z][a-z0-9]{8,12}/.test(username);

const is_password_valid = password =>
    /{9,}/.test(password) && password.includes("!@#$%^&*_=.,+?");

console.log(is_username_valid("hellobrow"));
console.log(is_username_valid("he11obr0w"));
console.log(is_password_valid("h31!obr0w"));
console.log(is_password_valid("1E4b@00ww"));
