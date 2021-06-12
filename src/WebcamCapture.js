import React, {useLayoutEffect, useState} from "react";
import Webcam from "react-webcam";
import {makeStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ViewImages from "./ViewImages";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user"
};
const useStyles=makeStyles((theme)=>({
  box:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  },
  space:{
    margin:"15px"
  }
}))
export default  function WebcamCapture ()  {
  const webcamRef = React.useRef(null);
  const [images,setImages]= useState([]);
  const [viewImages,setViewImages]=useState(false);
  function capture()
  {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    const temp=[...images];
    temp.push(imageSrc);
    setImages(temp);
  }
  const classes=useStyles();
    if(viewImages) {
     return <ViewImages images={images} space={classes.space} setViewImages={setViewImages}/>
    }
    else{
      return (
    <div className={classes.box}>
      <Webcam
        audio={false}
        height={400}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        videoConstraints={videoConstraints}
        style={{borderRadius:"8px"}}
      />
      <div>
      <Button variant='outlined' className={classes.space}
        onClick={(e)=>{e.preventDefault();capture();}}>
          Capture Image</Button>
      <Button variant='outlined' onClick={()=>setViewImages(true)}>View Captured Images</Button>
          </div>
    </div>
      );
    }

        }
