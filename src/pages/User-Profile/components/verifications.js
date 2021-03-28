import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { verifyUser } from '../../../store/auth/actions'


const Verifications = ({active}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
    return (
    <div className={`tab-pane fade ${ active === 2 ? "show active" : "" }`} id="tabs_2">
        <div className="user-verification">
          <div className="row">
            <div className="col-lg-7">
                <h3 className="user-details-title">Verification</h3>
                { user && user.isVerified ? 
                  <div className="notice" style={{
                    border: "1px solid green"
                  }} ><i className="fas fa-checked" /> Your email is verified.</div>
                  :
                  <div className="notice"><i className="fa fa-exclamation-triangle" /> Your email hasn't been verified.</div>
                 }
                <span>{user && user.email}</span>
                { user && !user.isVerified &&
                <div className="col-12">
                  <button className="btn btn-yellow mt-3 text-center" onClick={()=>
                    dispatch(verifyUser({
                      email: user.email
                    }))
                  } type="button" >Verify</button>
                </div>
              }
            </div>
          </div>
        </div>
    </div>
      
    )
}
export default Verifications;