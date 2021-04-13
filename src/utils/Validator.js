
export function emailValidator  (email){
    //const re=/\S+@\S+\.\S+/;
    if(!email)return 'Field  cannot be empty!!!';
   // if(!re.test(email)) return 'Invalid Email id';
    return true;
};
export function passwordValidator (password){
    if(!password) return 'Password field is empty'
    return true;
};