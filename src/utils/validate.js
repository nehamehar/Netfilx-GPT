// Regex (short for Regular Expression) is a sequence of characters used to match patterns in text. It’s powerful for:
// Validating inputs (like emails, phone numbers)
// Searching or replacing text
// Parsing structured text

export const CheckErrormsg = (email, password, name = null)=>{
    //testing for email 
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    // testing for passord
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid"; 
    if (name!==null) {
        const isNameValid = /^[A-Za-z\s\-.']+$/.test(name);
        if (!isNameValid) return "Please enter a valid name";
    }
    return null;

}