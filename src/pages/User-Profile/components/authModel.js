import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { register, login } from '../../../store/auth/actions'

const AuthModel = ({closeModelHandler, showModel}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const submitRegisterForm = (e) => {
    e.preventDefault();
    const reqPacket = {
      name,
      email,
      password
    }
    dispatch(register(reqPacket));
  }

  const submitLoginForm = (e) => {
    e.preventDefault();
    const reqPacket = {
      email,
      password
    }
    dispatch(login(reqPacket, history));
  }

    return (
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={closeModelHandler}
        show={showModel}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            { isRegister ? 'Register' : 'Login'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="widget tour-list-widget">
            <div className="widget-tour-list-meta">
              { isRegister ?
                <form onSubmit={submitRegisterForm} >
                <div className="single-widget-search-input-title"><i className="fa fa-envelope" /> NAME</div>
                  <div className="single-widget-search-input">
                    <input type="text" 
                    placeholder="Enter full name" 
                    name="name"  
                    value={name} 
                    required
                    onChange={(e)=>setName(e.target.value)} />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-envelope" /> EMAIL</div>
                  <div className="single-widget-search-input">
                    <input type="text" 
                    placeholder="Email" 
                    name="email"  
                    value={email} 
                    required
                    onChange={(e)=>setEmail(e.target.value)} 
                    />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-key" /> PASSWORD</div>
                  <div className="single-widget-search-input">
                    <input type="password" 
                    placeholder="password" 
                    name="password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                  <div className="single-widget-search-input-title" 
                  onClick={()=>setIsRegister(false)}
                  style={{
                    fontSize: "14px",
                    fontWeight: "300",
                    cursor: 'pointer'
                  }}> Already have an account?</div>

                  <div className="text-lg-center text-left">
                    <button type="submit" className="btn btn-yellow"  >Register <i className="fa fa-paper-plane" /></button>
                </div>
                </form>
                :
                <form onSubmit={submitLoginForm} >
                  <div className="single-widget-search-input-title"><i className="fa fa-envelope" /> EMAIL</div>
                  <div className="single-widget-search-input">
                    <input type="text" 
                    placeholder="Email" 
                    name="email"  
                    value={email} 
                    required
                    onChange={(e)=>setEmail(e.target.value)} 
                    />
                  </div>
                  <div className="single-widget-search-input-title"><i className="fa fa-key" /> PASSWORD</div>
                  <div className="single-widget-search-input">
                    <input type="password" 
                    placeholder="password" 
                    name="password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                  <div className="single-widget-search-input-title" 
                  onClick={()=>setIsRegister(true)}
                  style={{
                    fontSize: "14px",
                    fontWeight: "300",
                    cursor: 'pointer'
                  }}> Click here to signup!</div>

                  <div className="text-lg-center text-left">
                    <button type="submit" className="btn btn-yellow"  >Login <i className="fa fa-paper-plane" /></button>
                </div>
                </form>
              }
                
              </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  
export default AuthModel;