import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { QrReader } from "react-qr-reader";
import { useDispatch } from "react-redux";
import { scanQRCode } from "../../actions/qr";

export const QRScanner = forwardRef((props, ref) => {


console.log('hi am in QRSCAner');
  const [showScanner, setShowScanner] = useState(false);
  const [result, setResult] = useState("");
  const inputElement = useRef();
  const dispatch = useDispatch();
  // const qrReaderRef = useRef(null);

  // var playPromise = video.play();

  // if (playPromise !== undefined) {
  //   playPromise.then(_ => {
  //     // Automatic playback started!
  //     // Show playing UI.
  //   })
  //   .catch(error => {
  //     // Auto-play was prevented
  //     // Show paused UI.
  //   });
  // }

  // console.log(ele)
  // useEffect(()=>{

  //   return ()=>{
  //     if(document.getElementById('qr')){
  //       document.getElementById('qr').remove()
  //     }

  //     // console.log(document.getElementById('qr'));
  //   }

  // },[])
  useEffect(() => {
    if (result) {
     scanQRCode(result)
    }
  }, [result, dispatch]);


  const handleScan = (data) => {
    if (data) {
      setResult(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleOpenScanner = () => {
    setShowScanner(true);
  };

  return (
    <div>
      {showScanner ? (
        <div>
          <button onClick={props.closeScanner}>Close Scanner</button>
          <QrReader
            delay={300}
            onError={handleError}
            onResult={handleScan}
            style={{ width: "100%" }}
            videoId="qr"
          />
        </div>
      ) : (
        <button onClick={handleOpenScanner}>Open Scanner</button>
      )}
    </div>
  );
});
