export const checkValidDataSignIn= (email, password) =>{

    const isEmailIDValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const isPasswordValid = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
    
    if(!isEmailIDValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;

}


export const checkValidDataSignUp= (name, email, password) =>{

    const isEmailIDValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const isPasswordValid = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
    const isNameValid = /^[0-9A-Za-z]{6,16}$/.test(name);
    
    if(!isNameValid) return "Name is not valid";    
    if(!isEmailIDValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;

}