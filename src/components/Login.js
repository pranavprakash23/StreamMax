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
      <div id='imgContainer' className="w-full h-full bg-cover bg-left relative flex" style={{backgroundImage: `url(${LOGIN_IMG})`}} >

          <img src={SM_LOGO} alt="smlogo" className='w-16 h-16 bg-white text-center rounded-xl absolute top-10 left-10'></img>

          <div className="bg-black opacity-80 w-2/6 h-5/6 m-auto my-14 absolute right-20 flex flex-col items-left text-white p-12 rounded-2xl">
             
            {isSignInForm ? <SignIn/>:<SignUp/>}
            
            {isSignInForm ? 
              <div id="register" className='w-full mt-12 ml-2 text-center flex gap-2 justify-center' >
                  <p>New to StreamMax ?</p>
                  <button className='cursor-pointer' onClick={()=>{toggleSignIn()}}>Sign Up now.</button>
              </div>:
              <div id="register" className='w-full mt-8 ml-2 mb-12 text-center flex gap-2 justify-center' >
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