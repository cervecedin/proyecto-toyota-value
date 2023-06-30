import React from 'react';
import "./App.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center" style={{alignItems:'center'}}>
              <img src="/logo.png"
                style={{width: '385px', alignItems: 'center'}} alt="logo" />
            </div>

            <p style={{textAlign:'center', marginBottom:'15px',color:'#5d5d61'}}>Por favor complete los campos</p>


            <MDBInput wrapperClass='mb-4' placeholder='Email address' id='form1' type='email' required style={{textAlign:'center', borderWidth:'2px', marginBlock:'5px', 
            marginLeft:'45%'}}/>
            <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='contraseña' required style={{textAlign:'center', borderWidth:'2px', marginBlock:'5px', 
            marginLeft:'45%'}}/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="" style={{borderColor:'#d8363a',color:'#5d5d61',borderStyle:'solid',borderWidth:'1px', padding:'7px',backgroundColor:'#efff'}}>
                Ingresar</MDBBtn><br></br><br></br>
              <a className="text-muted" href="#!" style={{color:'#5d5d61', marginTop:'47px',borderWidth:'2px'}}>¿Has olvidado tu contraseña?</a>
            </div><br></br>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4" style={{textAlign:'center'}}>
              <p className="mb-0" style={{color:'#5d5d61'}}>¿No tienes una cuenta?</p><br></br>
              <MDBBtn outline className='mx-2' color='danger' style={{borderColor:'#ee7724, #d8363a, #dd3675, #b44593',borderStyle:'solid',borderWidth:'2px', color:'#5d5d61', 
              padding:'7px'}}>
                Crear
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-wel">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;