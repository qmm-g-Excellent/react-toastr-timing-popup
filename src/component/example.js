import React, {Component} from 'react';
var ReactToastr = require("react-toastr");
var {ToastContainer} = ReactToastr; // This is a React Element.
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);


class PopupExample extends Component {

//弹框的分类请参考toastr.less的157~169行
  //弹框的动画效果请参考animate.less　２８行
  //弹框的显示位置请参考toastr.less 的　63 ~ 102

  addAlert() {
    this.container.success(
        "Welcome welcome welcome!!",
        "You are now home my friend. Welcome home my friend.", {
          timeOut: 3000,//自动关闭超时时间
          extendedTimeOut: 1000,//显示动作时间
          showAnimation: 'animated bounceIn', //or other animations from animate.css
          hideAnimation: 'animated bounceOut',
          transition: null,//some examples defined in index.scss (scale, fadeInOut, rotate)
        });
    window.open("http://youtu.be/3SR75k7Oggg");
  }

  render() {
    return (
        <div>
          <ToastContainer ref={(ref)=> {
            this.container = ref;
          }}
                          toastMessageFactory={ToastMessageFactory}
                          className="toast-top-center"/>
          <button onClick={this.addAlert.bind(this)}>success</button>
        </div>
    )
  }

}

export default PopupExample;