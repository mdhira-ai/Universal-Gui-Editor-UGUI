import useStore from "./useStore";
import Draggable from 'react-draggable';

const Mycanvas = () => {

    const btn = useStore((state) => state.btn)
    const mydiv = useStore((state) => state.div)
    const myinput = useStore((state) => state.input)



    const Properties = useStore((state) => state.selectItemproperties)
    const selectItem = useStore((state) => state.selectItem)


    function colorchange(e) {

        if (selectItem) { selectItem.target.style.backgroundColor = 'transparent' }
        e.target.style.backgroundColor = 'red'

        // change the inside text

        // change the state
        Properties(e)

    }

    function handleStart() {
        console.log('START')
    }

    function handleDrag() {
        console.log('DRAG')
    }


    function handleStop() {

        console.log('STOP')

    }

    return (
        <div className="h-full bg-slate-900 scroll-auto">




            {
                btn?.map((d, index) => {
                    return (

                        <Draggable
                            key={index}
                            defaultPosition={{ x: 0, y: 0 }}
                            position={null}
                            scale={1}
                            onStart={handleStart}
                            onDrag={handleDrag}
                            onStop={handleStop}

                        >

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

            {
                mydiv?.map((d, index) => {
                    return (

                        <Draggable
                            key={index}
                            defaultPosition={{ x: 0, y: 0 }}
                            position={null}
                            scale={1}
                            onStart={handleStart}
                            onDrag={handleDrag}
                            onStop={handleStop}


                        >
                            <div
                                onClick={colorchange}
                                className=" hover:bg-blue-700 h-72 w-60 bg-slate-500 text-white font-bold py-2 px-4 rounded"
                                key={index}>
                                {d}{`div${index}`}
                            </div>
                        </Draggable>
                    )

                })
            }

            {
                myinput?.map((d, index) => {
                    return (

                        <Draggable
                            key={index}
                            defaultPosition={{ x: 0, y: 0 }}
                            position={null}
                            scale={1}
                            onStart={handleStart}
                            onDrag={handleDrag}
                            onStop={handleStop}


                        >
                            <input

                                onClick={colorchange}
                                className=" hover:bg-blue-700 h-10 w-60 bg-slate-500 text-white font-bold py-2 px-4 rounded"
                                key={`input${index}`}
                                placeholder={`input${index}`}



                            />

                        </Draggable>
                    )

                })

            }
        </div>
    );
}

export default Mycanvas;