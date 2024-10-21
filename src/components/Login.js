import { useState } from 'react';
import LOGIN_IMG from '../images/bgCover.jpg';
import SM_LOGO from '../images/streamMaxLogo.jpg';
import SignIn from './SignIn';
import SignUp from './SignUp';


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div id="loginPageContainer" className="w-full h-screen">
      <div id='mainContainer' className="w-full h-full bg-cover bg-left relative flex" style={{backgroundImage: `url(${LOGIN_IMG})`}} >

          <img src={SM_LOGO} alt="smlogo" className='w-16 h-16 bg-white text-center rounded-xl absolute top-10 left-10'></img>

          <div className="bg-black opacity-80 absolute m-auto flex flex-col items-left text-white p-12 text-xs lg:text-base w-full h-full md:w-3/6 md:h-5/6 md:my-14 md:right-20 sm:rounded-2xl lg:w-2/5 lg:h-5/6 lg:my-14 lg:right-20 lg:rounded-2xl">
             
            {isSignInForm ? <SignIn/>:<SignUp/>}
            
            {isSignInForm ? 
              <div id="register" className='w-full mt-12 ml-2 text-center flex gap-2 justify-center text-sm' >
                  <p>New to StreamMax ?</p>
                  <button className='cursor-pointer' onClick={()=>{toggleSignIn()}}>Sign Up now.</button>
              </div>:
              <div id="register" className='w-full mt-8 ml-2 mb-12 text-center flex gap-2 justify-center text-sm' >
              <p>Already Signed Up ?</p>
              <button className='cursor-pointer' onClick={()=>{toggleSignIn()}}>Sign In now.</button>
              </div>
            }
          </div>
      </div>
    </div>
  )
}

export default Login