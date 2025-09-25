import React, { Component } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: null,
      activeImage: 0
    };
  }

  setBodyOverflow(hidden) {
    document.body.style.overflow = hidden ? 'hidden' : '';
  }

  openModal(idx) {
    this.setBodyOverflow(true);
    this.setState({ activeModal: idx, activeImage: 0 });
  }

  closeModal() {
    this.setBodyOverflow(false);
    this.setState({ activeModal: null, activeImage: 0 });
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Projets réalisés.</h1>
          <div
  id="portfolio-wrapper"
  className="bgrid-quarters s-bgrid-thirds cf"
  style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
>
          {
            resumeData.portfolio && resumeData.portfolio.map((item, idx)=>{
              return(
                <div className="columns portfolio-item" key={idx}>
                  <div className="item-wrap">
                    <a href="#" onClick={() => this.openModal(idx)}>
                      <img src={`${item.imgurl}`} className="item-img" alt={item.name}/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  {this.state && this.state.activeModal === idx && (
                    <div className="modal" style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(17,171,176,0.12)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:999}}>
                      <div style={{background:'linear-gradient(135deg, #fff 80%, #11ABB0 100%)',padding:'48px 32px',borderRadius:'18px',maxWidth:'1000px',width:'98%',minHeight:'420px',position:'relative',boxShadow:'0 12px 48px rgba(17,171,176,0.18)',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <button style={{position:'absolute',top:24,right:24,fontSize:'1.7rem',background:'#11ABB0',color:'#fff',border:'none',borderRadius:'50%',width:'44px',height:'44px',cursor:'pointer',boxShadow:'0 2px 8px rgba(17,171,176,0.15)',display:'flex',alignItems:'center',justifyContent:'center'}} onClick={() => this.closeModal()}>
                          <i className="bi bi-x-lg" style={{fontSize:'1.5rem',lineHeight:'44px'}}></i>
                        </button>
                        <h2 style={{fontSize:'2.2rem',marginBottom:'24px',color:'#11ABB0',fontWeight:'bold',letterSpacing:'1px',textAlign:'center'}}>{item.name}</h2>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
                          <button onClick={() => this.setState(state => ({ activeImage: Math.max((state.activeImage||0)-1, 0) }))} disabled={!(item.images && (this.state.activeImage||0) > 0)} style={{marginRight:'24px',fontSize:'2.2rem',background:'none',border:'none',color:'#11ABB0',cursor:'pointer',opacity: (item.images && (this.state.activeImage||0) > 0) ? 1 : 0.3}}>&#x276E;</button>
                          <img src={[item.imgurl, ...(item.images ? item.images.filter(img => img !== item.imgurl) : [])][this.state.activeImage||0]} alt={item.name} style={{width:'65%',maxHeight:'520px',borderRadius:'12px',objectFit:'cover',boxShadow:'0 2px 24px rgba(17,171,176,0.12)',border:'3px solid #11ABB0'}}/>
                          <button onClick={() => this.setState(state => ({ activeImage: Math.min((state.activeImage||0)+1, [item.imgurl, ...(item.images ? item.images.filter(img => img !== item.imgurl) : [])].length-1) }))} disabled={!(item.images && (this.state.activeImage||0) < ([item.imgurl, ...(item.images ? item.images.filter(img => img !== item.imgurl) : [])].length-1))} style={{marginLeft:'24px',fontSize:'2.2rem',background:'none',border:'none',color:'#11ABB0',cursor:'pointer',opacity: (item.images && (this.state.activeImage||0) < ([item.imgurl, ...(item.images ? item.images.filter(img => img !== item.imgurl) : [])].length-1)) ? 1 : 0.3}}>&#x276F;</button>
                        </div>
                        <div style={{display:'flex',justifyContent:'center',marginTop:'22px',flexWrap:'wrap'}}>
                          {[item.imgurl, ...(item.images ? item.images.filter(img => img !== item.imgurl) : [])].map((img, i) => (
                            <img key={i} src={img} alt={item.name+"-miniature"} style={{width:'64px',height:'64px',objectFit:'cover',borderRadius:'8px',margin:'0 8px 8px 0',border: this.state.activeImage===i?'3px solid #11ABB0':'2px solid #eee',cursor:'pointer',boxShadow: this.state.activeImage===i?'0 2px 12px #11ABB0':'none'}} onClick={() => this.setState({activeImage:i})}/>
                          ))}
                        </div>
                        <p style={{marginTop:'32px',fontSize:'1.25rem',color:'#313131',textAlign:'center',lineHeight:'1.7'}}>{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}