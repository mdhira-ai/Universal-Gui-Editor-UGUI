import { RxButton } from "react-icons/rx";
import { PiTextbox } from "react-icons/pi";
import { useEffect, useState } from "react";
import useStore from "./useStore";



const Toolsbar = () => {

    const addbtn = useStore((state) => state.addbtn)




    function _addbtn(){
        addbtn()
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

            <button className=" hover:bg-blue-700  font-bold py-2 px-4 rounded">
                <PiTextbox
                    size={20}
                />
            </button>
            <button className=" hover:bg-blue-700  font-bold py-2 px-4 rounded">
                B
            </button>

            <button className=" hover:bg-blue-700  font-bold py-2 px-4 rounded">
                B
            </button>


        </div>
    );
}

export default Toolsbar;