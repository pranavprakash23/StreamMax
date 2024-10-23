export const checkValidData = (name, email, password, phoneNo, isSignIn) =>{

    if(!isSignIn){
        const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
        const isPhoneNoValid = /^[789]\d{9}$/.test(phoneNo);

        if(!isNameValid) return "Name is not valid";    
        if(!isPhoneNoValid) return "Phone Number is not valid";
    }
    
    const isEmailIDValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const isPasswordValid = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
    
    if(!isEmailIDValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    

    return null;

}