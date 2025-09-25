import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact" style={{textAlign:'center'}}>
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Contactez-moi pour toute information complémentaire ou pour discuter de votre projet.
              </p>
            </div>
          </div>
          <div className="row" style={{justifyContent:'center'}}>
            <aside className="eigth columns footer-widgets">
              <div className="widget contact-widget">
                <h4 className="contact-title">Retrouvez-moi</h4>
                <div className="contact-label-container">
                  <label className="contact-label">Réseaux sociaux :</label>
                </div>
                <div className="social-links">
                  <a href={resumeData.socialLinks[0].url} target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn">
                    <i className="fa fa-linkedin"></i>LinkedIn
                  </a>
                  <a href={resumeData.socialLinks[1].url} target="_blank" rel="noopener noreferrer" className="social-btn github-btn">
                    <i className="fa fa-github"></i>GitHub
                  </a>
                </div>
                <div className="contact-label-container">
                  <label className="contact-label">Contact direct :</label>
                </div>
                <div className="contact-buttons">
                  <button className="contact-btn phone-btn" onClick={()=>window.open(`tel:${resumeData.phone}`)}>
                    <i className="fa fa-phone"></i>{resumeData.phone}
                  </button>
                  <button className="contact-btn email-btn" onClick={()=>window.open(`mailto:${resumeData.email}`)}>
                    <i className="fa fa-envelope"></i>{resumeData.email}
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}