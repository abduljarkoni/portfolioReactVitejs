import React, {useState} from "react"
import { FiMenu } from "react-icons/fi"
import {Link} from "react-router-dom"


export default function ModalMenu ()

{

    // buat statusnya rendering kondisonal dengan status awalnya flase/hilang
    const [ show, setShow ] = useState( false )
    
    // membuat fungtion dengan tambilkan !/not show hilangkan dan ketika di klik maka tampilakan yang tadi false menjadi true dan yang tadinya true menjadi false
    const handleShowModal = () =>
    {
        setShow(!show)
    }


    return (
        <>
            
            {/* untuk menampilkan menu dengan usestate conditional rendering */}
            { show && (
                <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#212121]/90 fixed top-0 left-0 z-[200]">
                    {/*membuat opacity dengan tailwind yaitu dengan memberikan /80 setelah warna (bg-[#212121]/90) */ }
                    
                    {/* di link ini juga kita taro fungsi oncick handleshowmodal agar ketika diklik menunya ilang lagi atau ngumpet */}
                    <Link to={'/'} className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Home
                    </Link>

                    <Link to={ '/biodata' } className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={ handleShowModal }>
                        Profile
                    </Link>

                    <Link to={ '/skill' } className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Skill
                    </Link>

                    <a href={'tel:+628996203974'} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Contact
                    </a>

                    <a href={'https://linkedin.com/in/abdul-jarkoni-51871b13b'} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Linkedin
                    </a>

                    <a href={'https://github.com/abduljarkoni'} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Github
                    </a>

                    <a href={'https://stackblitz.com/@abduljarkoni'} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Stackblitz
                    </a>
                    
                </div>

            ) }

            {/* taro fungnya di onclick untuk fungsi handleshowmodal menunya  */}
            <button className="w-[80px] h-[80px] bg-orange-400 text-[25px] text-gray-800 rounded-full fixed -bottom-4 -right-4 flex justify-center items-center z-[250]" onClick={handleShowModal}>
                    <FiMenu />
            </button>
            
        </>
    )
}