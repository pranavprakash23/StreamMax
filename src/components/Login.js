import LOGIN_IMG from '../images/bgCover.jpg';
import GOOGLE_IMG from '../images/google-line.svg';
import {useState, useRef } from 'react';

import {createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from '../utils/firebase.js';
import {checkValidData} from '../utils/validation.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import Header from './Header.js';


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const phoneNo = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignIn = () =>{
    setIsSignInForm(!isSignInForm);
  }

  // const isSignIn = true;
  const handleButtonClick = () => {
      const message = checkValidData(name?.current?.value, email?.current?.value, password?.current?.value, phoneNo?.current?.value, isSignInForm);
      
      setErrorMsg(null);
      setErrorMsg(message);
      if(message)return;

      if(!isSignInForm){
        //Sign Up
        createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name?.current?.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(() => {
              const {uid, displayName, email, photoURL} = auth.currentUser;
              dispatch(addUser(
                {
                  uid:uid, 
                  displayName:displayName, 
                  email: email,
                  photoURL: photoURL,
                }));
            }).catch((error) => {
              setErrorMsg(error.message);
            });
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode+" - "+errorMessage);
          });
      }else{
        signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode+" - "+errorMessage);
          });
      }
  }

  return (
    <div id="loginPageContainer" className="w-full h-screen">
      <div id='mainContainer' className="w-full h-full bg-cover bg-left relative flex" style={{backgroundImage: `url(${LOGIN_IMG})`}} >

          <Header/>

          <div className="bg-black opacity-80 absolute m-auto flex flex-col items-left text-white p-12 text-xs lg:text-base w-full h-full md:w-3/6 md:h-5/6 md:my-14 md:right-20 sm:rounded-2xl lg:w-2/5 lg:h-5/6 lg:my-14 lg:right-20 lg:rounded-2xl">
             
            <header>
              <h1 className='text-3xl md:text-4xl lg:text-5xl mt-24 md:mt-2'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
            </header>
             <form onSubmit = {(e)=>{e.preventDefault()}} className='flex flex-col gap-2 mt-8'>

                {!isSignInForm && 
                <div id="nameContainer" className=' border border-gray-300 rounded-md'>
                    <input ref = {name} type="text" name="userLoginId" id="name" placeholder='Name' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
                </div>
                }

               <div id="mailMobileContainer" className=' border border-gray-300 rounded-md'>
                 <input ref = {email} type="text" name="userLoginId" id="userLoginId" placeholder='Email or Mobile Number' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
               </div>

               <div id="passwordContainer" className='border border-gray-300 rounded-md mt-2'>
                 <input ref = {password} type="password" name="password" id="password" placeholder='Password' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
               </div>

               {!isSignInForm && 
                <div id="mobileContainer" className=' border border-gray-300 rounded-md'>
                  <input ref = {phoneNo} type="text"  name="userMobNo" id="" placeholder='Mobile Number' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
                </div>
              }

               <p className='text-sm text-red-500 font-semibold'>{errorMsg}</p>

               <div className='w-full flex justify-between p-2 text-xs'>
                 <div className='flex gap-2'>
                   <input type="checkbox" name="rememberMe" id="rememberMe" className='cursor-pointer'/>
                   <p className="items-center">Remember Me</p>
                 </div>
                 <p className='cursor-pointer hover:underline'>Forgot Password ?</p>
               </div>

               <button type="submit" onClick={()=>{
                handleButtonClick()
               }} className='w-5/6 h-full m-auto p-3 border border-gray-300 rounded-md bg-gray-200 text-black font-semibold mt-6'>{isSignInForm ? "Sign In": "Sign Up"}</button>
               
               {/* <p className='text-center'>OR</p>

               <button type="submit" className='w-5/6 h-full m-auto p-3 border border-gray-300 rounded-md bg-black text-white font-normal flex gap-2 items-center justify-center'>
                 <img src={GOOGLE_IMG} alt="gmailImg" className='w-5 h-5 bg-white text-center rounded-xl' />
                 <p>Sign In With Google</p>
               </button> */}
             </form>
            
              <footer>
                <div id="register" className='w-full mt-12 ml-2 text-center flex gap-2 justify-center text-sm' >
                    <p>{isSignInForm ? "New to StreamMax ?": "Already Signed Up ?"}</p>
                    <button className='cursor-pointer' onClick={()=>{toggleSignIn();}}>{isSignInForm ? "Sign Up now.": "Sign In now."}</button>
                </div>             
              </footer>
          </div>
      </div>
    </div>
  )
}

export default Login