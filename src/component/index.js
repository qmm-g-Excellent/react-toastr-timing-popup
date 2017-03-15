import React from 'react';
import ReactDom from 'react-dom';
import Example from "./example";
import '../style/animate.less';
import '../style/toastr.less';

ReactDom.render(
  <Example />,
    document.getElementById('app')
);