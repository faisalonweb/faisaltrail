
const checkValidEmail = (email:string) => {
    //eslint-disable-next-line
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    return validEmailRegex.test(email);
  };
  const checkValidPassword = (password:string) => {
    const validPasswordRegex = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    return validPasswordRegex.test(password);
  };
  const checkValidUser = (email:string,password:string) => {
    if(email === localStorage.getItem('useremail') && password === localStorage.getItem('userpassword')) {
      return true;
    }
    return false;
  };


  export {
    checkValidEmail,
    checkValidPassword,
    checkValidUser
  };
  