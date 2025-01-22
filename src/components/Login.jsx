import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
  let apiUrl = process.env.REACT_APP_BASE_URL;

  const navigate = useNavigate()
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  const [dataError, setDataError] = useState({
    username: '',
    password: ''
  })
  const [errMsg, seterrMsg] = useState()

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
    setDataError({ ...dataError, [e.target.id]: '' })
    seterrMsg('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = {
      username: '',
      password: ''
    }
    let validated = true;
    if (data.username.trim() === "") {
      err.username = 'Please Enter Username!'
      validated = false;
    }
    if (data.password.trim() === "") {
      err.password = 'Please Enter Password!'
      validated = false;
    }
    setDataError({...err})
    if(validated){
      axios.post(apiUrl+'validation/login',data)
      .then((res)=>{
        // console.log(res.data);
        if(res.data.status==='success'){
          localStorage.setItem('userType','admin')
          localStorage.setItem('user',res.data.data.name)
          localStorage.setItem('username',res.data.data.username)
          navigate('/admin')
        }
        else{
          seterrMsg(res.data.data)
        }
      })
    }
  }

  useEffect(() => {
    let userType = localStorage.getItem('userType')
    if(userType){
      navigate('/admin')
    }
  }, [])
  return (
    <main>
      <div class="container">

        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div class="d-flex justify-content-center py-4">
                  <a href="index.html" class="logo d-flex align-items-center w-auto">
                    <img src="assets/img/logo.png" alt="" />
                    <span class="d-none d-lg-block">NiceAdmin</span>
                  </a>
                </div>
                <div class="card mb-3">
                  <div class="card-body">

                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p class="text-center small text-danger">{errMsg}</p>
                    </div>


                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Username</label>
                      <div class="text-danger">{dataError.username}</div>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="username" onChange={handleChange} />
                      </div>
                    </div>

                    <div class="col-12 mt-2">
                      <label for="yourPassword" class="form-label">Password</label>
                      <div class="text-danger">{dataError.password}</div>
                      <input type="password" class="form-control" id="password" onChange={handleChange} />
                    </div>
                    <div class="col-12 mt-2">
                      <button class="btn btn-primary w-100" onClick={handleSubmit}>Login</button>
                    </div>
                  </div>
                </div>

                <div class="credits">
                  Designed by <a href="https://igaptechnologies.com/">iGAP Technologies</a>
                </div>

              </div>
            </div>
          </div>

        </section>

      </div>
    </main>
  )
}

export default Login