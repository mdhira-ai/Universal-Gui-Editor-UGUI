import { RxButton } from "react-icons/rx";
import { PiTextbox } from "react-icons/pi";
import { useEffect, useState } from "react";
import useStore from "./useStore";
import { TbContainer } from "react-icons/tb";




const Toolsbar = () => {

    const addbtn = useStore((state) => state.addbtn)
    const adddiv = useStore((state) => state.adddiv)
    const addinput = useStore((state) => state.addinput)




    function _addbtn(){
        addbtn()
    }


    function _adddiv(){
        adddiv()
    }


    function _addinput(){
        addinput()
    }

    




    return (
        <div
            className='grid  grid-cols-2 '
        >


            



            <button  onClick={_addbtn} className=" hover:bg-blue-700 font-bold py-2 px-4 rounded">
                <RxButton
                    size={20}
                />
            </button>

            <button onClick={_addinput} className=" hover:bg-blue-700  font-bold py-2 px-4 rounded">
                <PiTextbox
                    size={20}
                />
            </button>
            <button onClick={_adddiv} className=" hover:bg-blue-700  font-bold py-2 px-4 rounded">
            <TbContainer />

            </button>

            <button className=" hover:bg-blue-700  font-bold py-2 px-4 rounded">
                B
            </button>


        </div>
    );
}

export default Toolsbar;