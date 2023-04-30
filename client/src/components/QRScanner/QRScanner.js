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
import { Link } from "react-router-dom";
import { Button, Box, Grid } from "@mui/material";

export const QRScanner = forwardRef((props, ref) => {
  console.log("hi am in QRSCAner");
  const [showScanner, setShowScanner] = useState(false);
  const [result, setResult] = useState("");
  const inputElement = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const closeScanner = () => {

    setShowScanner(false);
  };
  const handleScan = async (data) => {
    // setResult(data.text);
    // console.log('hello');
    if (data) {
      console.log("result in handle is ", data.text);
      console.log('scanning happens one time ')
      setShowScanner(false);
      // await new Promise(r => setTimeout(r, 2000));
      await scanQRCode(data.text);
      setShowScanner(true);
      console.log("pp");
      setResult('')
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
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            sx={{
              margin: 3,
              flex: 1,
              justifyContent: "center",
              backgroundColor: "coral",
            }}
          >
            <Button variant="contained" onClick={closeScanner} color="error">
              Close Scanner
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              height: "400px",
              width: "400px",
            }}
          >
            <QrReader
              scanDelay={400}
              constraints={{ facingMode: 'user' }}
              onError={handleError}
              onResult={handleScan}
              videoId="qr"
            />
          </Grid>
        </Grid>
      ) : (
        <Box
          sx={{
            margin: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={handleOpenScanner}
            color="success"
          >
            Open QR Scanner
          </Button>
        </Box>
      )}
    </div>
  );
});
