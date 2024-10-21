import GOOGLE_IMG from '../images/google-line.svg';

const SignUp = () => {
    return (
        <div>
            <h1 className='text-5xl'>Sign Up</h1>
             <form className='flex flex-col gap-2 mt-12'>
                <div id="nameContainer" className=' border border-gray-300 rounded-md'>
                    <input type="text" name="userLoginId" id="name" placeholder='Name' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
                </div>

               <div id="mailMobileContainer" className=' border border-gray-300 rounded-md'>
                 <input type="text" autocomplete="email" name="userLoginId" id="" placeholder='Email' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
               </div>

               <div id="passwordContainer" className='border border-gray-300 rounded-md'>
                 <input type="password" name="password" id="" placeholder='Password' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
               </div>

               <div id="mobileContainer" className=' border border-gray-300 rounded-md'>
                 <input type="text"  name="userMobNo" id="" placeholder='Mobile Number' className='w-full h-full bg-black p-4 text-gray-100 rounded-md'/>
               </div>


               <button type="submit" className='w-5/6 h-full m-auto p-3 border border-gray-300 rounded-md bg-gray-200 text-black font-semibold mt-6'>Sign Up</button>
               
               <p className='text-center'>OR</p>

               <button type="submit" className='w-5/6 h-full m-auto p-3 border border-gray-300 rounded-md bg-black text-white font-normal flex gap-2 items-center justify-center'>
                 <img src={GOOGLE_IMG} alt="gmailImg" className='w-5 h-5 bg-white text-center rounded-xl' />
                 <p>Sign Up With Google</p>
               </button>
             </form>
        </div>
    )
}

export default SignUp;