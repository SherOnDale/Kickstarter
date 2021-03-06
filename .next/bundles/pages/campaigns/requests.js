module.exports=__NEXT_REGISTER_PAGE("/campaigns/requests",function(){var e=webpackJsonp([4],{861:function(e,t,r){e.exports=r(862)},862:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(41);var a=r.n(n);var o=r(0);var u=r.n(o);var i=r(50);var s=r(60);var l=r.n(s);var c=r(106);var p=r(107);var f=r(61);var d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function v(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var u=t[a](o);var i=u.value}catch(e){r(e);return}if(!u.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=function(e){y(t,e);function t(){var e,r=this;var n,o,u;m(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return u=(n=(o=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o),o.state={approveLoading:false,finalizeLoading:false},o.onAprove=v(a.a.mark(function e(){var t,n;return a.a.wrap(function e(r){while(1)switch(r.prev=r.next){case 0:o.setState({approveLoading:true});r.next=3;return f["a"].eth.getAccounts();case 3:t=r.sent;n=Object(p["a"])(o.props.address);r.next=7;return n.methods.approveRequest(o.props.id).send({from:t[0]});case 7:o.setState({approveLoading:false});s["Router"].replaceRoute("/campaigns/"+o.props.address+"/requests");case 9:case"end":return r.stop()}},e,r)})),o.onFinalize=v(a.a.mark(function e(){var t,n;return a.a.wrap(function e(r){while(1)switch(r.prev=r.next){case 0:o.setState({finalizeLoading:true});r.next=3;return f["a"].eth.getAccounts();case 3:t=r.sent;n=Object(p["a"])(o.props.address);r.next=7;return n.methods.finalizeRequest(o.props.id).send({from:t[0]});case 7:o.setState({finalizeLoading:false});s["Router"].replaceRoute("/campaigns/"+o.props.address+"/requests");case 9:case"end":return r.stop()}},e,r)})),n),h(o,u)}d(t,[{key:"render",value:function e(){var t=i["i"].Row,r=i["i"].Cell;var n=this.props,a=n.id,o=n.request,s=n.contributorsCount;var l=o.approvalCount>s/2;return u.a.createElement(t,{disabled:o.complete,positive:l&&!o.complete},u.a.createElement(r,null,a),u.a.createElement(r,null,o.description),u.a.createElement(r,null,f["a"].utils.fromWei(o.value,"ether")),u.a.createElement(r,null,o.recipient),u.a.createElement(r,null,o.approvalCount,"/",s),u.a.createElement(r,null,o.complete?null:u.a.createElement(i["a"],{loading:this.state.approveLoading,positive:true,basic:true,onClick:this.onAprove},"Approve")),u.a.createElement(r,null,o.complete?null:u.a.createElement(i["a"],{loading:this.state.finalizeLoading,secondary:true,basic:true,onClick:this.onFinalize},"Finalize")))}}]);return t}(o["Component"]);var E=b;var w=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function g(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var u=t[a](o);var i=u.value}catch(e){r(e);return}if(!u.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function C(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var q=function(e){C(t,e);function t(){_(this,t);return O(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}w(t,[{key:"renderRow",value:function e(){var t=this;return this.props.requests.map(function(e,r){return u.a.createElement(E,{key:r,id:r,request:e,address:t.props.address,contributorsCount:t.props.contributorsCount})})}},{key:"render",value:function e(){var t=i["i"].Header,r=i["i"].Row,n=i["i"].HeaderCell,a=i["i"].Body;return u.a.createElement(c["a"],null,u.a.createElement("h3",null,"Requests"),u.a.createElement(s["Link"],{route:"/campaigns/"+this.props.address+"/requests/new"},u.a.createElement("a",null,u.a.createElement(i["a"],{primary:true,floated:"right",style:{marginBottom:10}},"Add Request"))),u.a.createElement(i["i"],null,u.a.createElement(t,null,u.a.createElement(r,null,u.a.createElement(n,null,"ID"),u.a.createElement(n,null,"Description"),u.a.createElement(n,null,"Amount"),u.a.createElement(n,null,"Recipient"),u.a.createElement(n,null,"Approval Count"),u.a.createElement(n,null,"Approve"),u.a.createElement(n,null,"Finalize"))),u.a.createElement(a,null,this.renderRow())),u.a.createElement("div",null,"Found ",this.props.requestCount," requests."))}}],[{key:"getInitialProps",value:function(){var e=g(a.a.mark(function e(t){var r,n,o,u,i;return a.a.wrap(function e(a){while(1)switch(a.prev=a.next){case 0:r=t.query.address;n=Object(p["a"])(r);a.next=4;return n.methods.getRequestCount().call();case 4:o=a.sent;a.next=7;return n.methods.contributorsCount().call();case 7:u=a.sent;a.next=10;return Promise.all(Array(parseInt(o)).fill().map(function(e,t){return n.methods.requests(t).call()}));case 10:i=a.sent;return a.abrupt("return",{address:r,requests:i,contributorsCount:u,requestCount:o});case 12:case"end":return a.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]);return t}(o["Component"]);var x=t["default"]=q}},[861]);return{page:e.default}});