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
import { useNavigate } from "react-router-dom";

export const QRScanner = forwardRef((props, ref) => {


console.log('hi am in QRSCAner');
  const [showScanner, setShowScanner] = useState(false);
  const [result, setResult] = useState("");
  const inputElement = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  // useEffect(() => {
  //   if (result) {
  //     console.log('result in useeffect',result);
     
  //   }
  // }, [result, dispatch]);

const closeScanner =()=>{
  // window.location.reload();
  setShowScanner(false)
} 
  const handleScan = (data) => {
    if (data) {
      console.log('result in handle is ',data.text)
      setResult(data.text);
      scanQRCode(data.text)
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
        <div style={{width:'50%'}}>
          <button onClick={closeScanner}>Close Scanner</button>
          <QrReader
            delay={300}
            onError={handleError}
            onResult={handleScan}
            style={{ width: "50%",height:'40%' }}
            videoId="qr"
          />
        </div>
      ) : (
        <button onClick={handleOpenScanner}>Open Scanner</button>
      )}
    </div>
  );
});
