import React,{Component} from 'react'
import Util from '../../utils/utils'
import './header.less'
class Header extends Component{
  state={
    userName:'HDD',
    sysTime:''
  }
  componentWillMount() {
    //时间
    setInterval(()=>{
      let sysTime=Util.formateDate(new Date(),'yyyy-MM-dd hh:mm:ss')
      this.setState({
        sysTime
      })
    },1000)
  }

  render() {
    return(
      <div className='header'>
        <div className='header-top'>
          <span>欢迎，{this.state.userName}</span>
          <a href="#">退出</a>
        </div>
        <div className='breadcrumb'>
          <div className='breadcrumb-title'>首页</div>
          <div className='weather'>
            <span className='date'>{this.state.sysTime}</span>
            <span className='weather-detail'>晴转多云</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header