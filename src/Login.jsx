import React from 'react';
import "./App.css";

function App() {
  return (
    <body className="my-5 gradient-form" style={{minHeight:'100%',position:'relative'}}>
        
          <div className="d-flex flex-column ms-5" style={{ justifyContent:'center', textAlign:'center', margin:'0 auto'}}>
            <h1 style={{fontSize:'50px',color:'#af191b',fontFamily:'Lato',fontWeight:'bold'}}>Toyota VALUE</h1>
            <div className="text-center" style={{ justifyContent:'center', textAlign:'center', margin:'0 auto'}}>
              <img src="/logo.png"
                style={{ justifyContent:'center', textAlign:'center', margin:'0 auto'}} alt="logo" />
            </div>

            <p style={{textAlign:'center', marginBottom:'15px',color:'#5d5d61'}}>Por favor complete los campos</p>


            <input wrapperClass='mb-4' placeholder='Email address' id='form1' type='email' required style={{textAlign:'center',borderWidth:'2px', marginBlock:'5px'}}/>
            <input wrapperClass='mb-4' placeholder='Password' id='form2' type='contraseña' required style={{textAlign:'center', borderWidth:'2px', marginBlock:'5px'}}/>


            <div className="text-center pt-1 mb-5 pb-1">
              <button style={{borderStyle:'solid',borderWidth:'2px', color:'white', padding:'7px',backgroundColor:'#af191b',marginTop:'10px'}}>
                Ingresar</button><br></br><br></br>
              <a className="text-muted" href="#!" style={{color:'#5d5d61', marginTop:'47px',borderWidth:'2px'}}>¿Has olvidado tu contraseña?</a>
            </div><br></br>

            <div className="pb-4 mb-4" style={{textAlign:'center'}}>
              <p className="mb-0" style={{color:'#5d5d61'}}>¿No tienes una cuenta?</p><br></br>
              <button  style={{borderStyle:'solid',borderWidth:'2px', color:'white', padding:'7px',backgroundColor:'#af191b'}}>
                Crear
              </button>
            </div>

        </div>

        <div >
            <div className="text-wel">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
          </div>
        </div>
    </body>
  );
}

export default App;