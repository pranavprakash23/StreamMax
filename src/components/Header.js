import SM_LOGO from '../images/streamMaxLogo.jpg';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        signOut(auth).then(() => {
            navigate("/");
            }).catch((error) => {
            navigate("/error")
        });
    }

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, displayName, email, photoURL} = user;
            dispatch(addUser({uid:uid, displayName:displayName, email: email, photoURL: photoURL}));
            navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
        });

        return subscribe; // unscribing the function by returning the function when the components unmounts
    }, []);

    return (
            <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">

                <img src={SM_LOGO} alt="smlogo" className='w-12 h-12 bg-white text-center rounded-xl '></img>

                <button onClick={()=>{
                handleButtonClick()
               }} className="font-bold text-white ">Sign Out</button>

            </div>
    )
}

export default Header;