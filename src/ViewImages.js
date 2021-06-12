import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {Container} from "@material-ui/core";
export default function ViewImages(props)
{

  const {images,space,setViewImages}=props;
  return (
    <Container maxWidth='lg'>
      <Button variant='outlined' style={{margin:"10px 0px 10px 0px"}} onClick={()=>setViewImages(false)}>Go Back</Button>
    <Grid container  spacing={2}>
      {images.map((img,index)=>{
        return <Grid item  key={index}><img src={img} style={{borderRadius:"6px"}} /></Grid>
      })}
    </Grid>
    </Container>
  )
}