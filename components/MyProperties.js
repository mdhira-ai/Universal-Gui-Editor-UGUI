import { MdDone } from "react-icons/md";
import useStore from "./useStore";
import { useState } from "react";
import { Slider } from "./ui/slider";


const MyProperties = () => {

    const selectItem = useStore((state) => state.selectItem)
    const [btntext, setbtntext] = useState(null)

    function itemprop() {
        selectItem.target.innerHTML = btntext
        selectItem.target.style.backgroundColor = 'transparent'

        // make it draggable
        selectItem.target.setAttribute('draggable', true)
        console.log(selectItem)





    }




    return (
        <div
            className=' grid grid-flow-row  gap-3 p-5 '
        >
            Properties

            <div
                className="flex flex-row justify-center items-center"
            >
                <input
                    onChange={(e) => setbtntext(e.target.value)}

                    type="text"
                    className="border-2  bg-transparent h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    placeholder="name"
                />

                <button
                    onClick={itemprop}
                    className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    <MdDone
                        size={20}
                    />

                </button>

            </div>


            <div
                className="flex flex-col justify-center items-start  gap-4"
            >

                <span>
                    width
                </span>

                <Slider defaultValue={[5]} min={5} max={100} step={1}
                    
                    onValueChange={(e) => {
                        selectItem.target.style.width = `${e}%`
                    }}
                />


            </div>   
            
            <div
                className="flex flex-col justify-center items-start  gap-4"
            >

                <span>
                    Height
                </span>

                <Slider defaultValue={[5]} min={5} max={100} step={1}
                    
                    onValueChange={(e) => {
                        selectItem.target.style.height = `${e}%`
                    }}
                />


            </div>



        </div>
    );
}

export default MyProperties;