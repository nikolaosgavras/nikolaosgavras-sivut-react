import { useControls } from "react-zoom-pan-pinch";


export const ZoomControls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <>
        <div className="space-x-3 mt-2">
          <button className="button text-white bg-sky-600 hover:bg-sky-700 rounded-xl px-4 py-2" onClick={() => zoomIn()}>Zoom In</button>
          <button className="button text-white bg-sky-600 hover:bg-sky-700 rounded-xl px-4 py-2" onClick={() => zoomOut()}>Zoom Out</button>
          <button className="button text-white bg-sky-600 hover:bg-sky-700 rounded-xl px-4 py-2" onClick={() => resetTransform()}>Reset</button>
        </div>
      </>
    );
  };