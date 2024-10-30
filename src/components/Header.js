import SM_LOGO from '../images/streamMaxLogo.jpg';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTSearchView } from '../utils/gptSlice';
import {SUPPORTED_LANGUAGE} from "../utils/constants";
import {changeLanguage} from "../utils/configSlice";


const Header = () =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGPTSearch = useSelector((store)=>store?.gpt?.showGPTSearch);

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

    const handleGPTSearchClick = () =>{
        dispatch(toggleGPTSearchView())
    }

    const languageSelected = (e) => {
        dispatch(changeLanguage(e?.target?.value));
    }

    return (
            <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex flex-row justify-between gap-6">

                <img src={SM_LOGO} alt="smlogo" className='w-12 h-12 bg-white text-center rounded-xl'></img>

                {user && 
                    (
                        <div className='flex gap-2 justify-evenly'>
                            {showGPTSearch && (<select className='p-2 m-2 rounded-md bg-slate-800 text-white' onChange={(e)=>languageSelected(e)}>
                                {
                                    SUPPORTED_LANGUAGE.map((lang) => {
                                        return (
                                            <option key ={lang.identifier} value={lang.identifier} > {lang.name}</option>
                                        )
                                    })
                                }

                            </select>)}
                            <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={()=>{handleGPTSearchClick()}}>{showGPTSearch ? "Home" : "GPT Search"}</button>
                            <button onClick={()=>{
                            handleButtonClick()
                            }} className="font-bold text-white ">Sign Out</button>
                        </div>
                    )
                }
                

            </div>
    )
}

export default Header;