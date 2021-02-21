import React, { Component } from 'react';



class Comments extends Component {
  render() {
    return (
      <div className="comment-area">
	          <h2 className="comment-title">Client’s Comments</h2>
	          <ul className="comment-list">
	            <li>
	              <div className="comment-autor">
	                <img src={require("../../assets/img/blog-details/04.jpg")} alt="Comment" />
	              </div>
	              <div className="comment-desc">
	                <h6>Alexzeder Alex <span className="comment-date"> 25 Feb 2020</span></h6>
	                <p>But I must explain to you how all this mistaken idea of denouncing pleasure
	                  and praising pain was born and I will give you a complete account</p>
	                <Link to="#" className="reply-comment">Reply Commets <i className="far fa-long-arrow-right" /></Link>
	              </div>
	              <ul className="children">
	                <li>
	                  <div className="comment-autor">
	                    <img src={require("../../assets/img/blog-details/05.jpg")} alt="Comment" />
	                  </div>
	                  <div className="comment-desc">
	                    <h6>Alexzeder Alex <span className="comment-date"> 25 Feb 2020</span></h6>
	                    <p>But I must explain to you how all this mistaken idea of denouncing
	                      pleasure and praising pain was born and I will give you a complete
	                      account</p>
	                    <Link to="#" className="reply-comment">Reply Commets <i className="far fa-long-arrow-right" /></Link>
	                  </div>
	                </li>
	              </ul>
	            </li>
	            <li>
	              <div className="comment-autor">
	                <img src={require("../../assets/img/blog-details/06.jpg")} alt="Comment" />
	              </div>
	              <div className="comment-desc">
	                <h6>Alexzeder Alex <span className="comment-date"> 25 Feb 2020</span></h6>
	                <p>But I must explain to you how all this mistaken idea of denouncing pleasure
	                  and praising pain was born and I will give you a complete account</p>
	                <Link to="#" className="reply-comment">Reply Commets <i className="far fa-long-arrow-right" /></Link>
	              </div>
	            </li>
	          </ul>
	        </div>
    )
  }
}

export default Comments;
