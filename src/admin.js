import React,{Component} from "react";
import Header from "./components/header/header"
import NavLeft from "./components/navLeft/navLeft"
import Footer from "./components/footer/footer"
import "./admin.less"

class Admin extends Component{
  render() {
    return(
        <div className='container'>
          <div className='navLeft'>
            <NavLeft></NavLeft>
          </div>
          <div className='main'>
            <Header></Header>
            <div className='content'>
              {this.props.children}
            </div>
            <Footer></Footer>
          </div>
        </div>
    )
  }
}
export default Admin