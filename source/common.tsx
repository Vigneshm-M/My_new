export const isStrongPassword = (password:any) => {
    const strongPasswordRegex =
      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&^_+='"|/:;(){},-])[A-Za-z\d@$!%*?&^_+='"|/:;(){},-]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  export const validateEmailAddress = (text:any) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) return false;
    else return true;
}

export const validateMobileNumber =(number:any)=>{
  var regPattern = '^([0|+[0-9]{1,5})?([6-9][0-9]{9})$';
  var regPatternForMob = new RegExp(regPattern);
  if (regPatternForMob.test(number)) return true;
  else return false;
}