'use client'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Toolsbar from "@/components/Toolsbar";
import Mycanvas from "@/components/Mycanvas";
import MyProperties from "@/components/MyProperties";




const page = () => {


    return (
        <div className='h-screen'>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel
                    minSize={5}
                    maxSize={5}

                >

                    <Toolsbar />





                </ResizablePanel>
                <ResizableHandle  />
                <ResizablePanel>
                    <Mycanvas/>

                </ResizablePanel>

                <ResizableHandle  />

                <ResizablePanel
                    minSize={20}
                    maxSize={20}
                >

                    <MyProperties/>

                </ResizablePanel>




            </ResizablePanelGroup>
        </div>
    );
}

export default page;