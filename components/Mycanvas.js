import useStore from "./useStore";
import Draggable from 'react-draggable';

const Mycanvas = () => {

    const btn = useStore((state) => state.btn)
    const Properties = useStore((state) => state.selectItemproperties)
    const selectItem = useStore((state) => state.selectItem)


    function colorchange(e) {

        if (selectItem) { selectItem.target.style.backgroundColor = 'transparent' }
        e.target.style.backgroundColor = 'red'

        // change the inside text

        // change the state
        Properties(e)

    }

    return (
        <div className="h-screen">




            {
                btn?.map((d, index) => {
                    return (

                        <Draggable>

                            <button
                                onClick={colorchange}
                                className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                key={index}>
                                {d}{`btn${index}`}
                            </button>
                        </Draggable>
                    )

                })
            }
        </div>
    );
}

export default Mycanvas;