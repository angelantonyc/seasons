(this.webpackJsonpseasons=this.webpackJsonpseasons||[]).push([[0],{12:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s(4),r=s(7),i=s(6),o=s(1),c=s.n(o),l=s(5),u=s.n(l),m=(s(12),s(0)),h={summer:{text:"Let's hit the beach",iconName:"sun"},winter:{text:"Burr, Its cold",iconName:"snowflake"}},d=function(e){var t,s,n=(t=e.lat,(s=(new Date).getMonth())>2&&s<9?t>0?"summer":"winter":t>0?"winter":"summer"),a=h[n],r=a.text,i=a.iconName;return console.log(e.time),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h3",{className:"rightAlign",children:["Current time is:",e.time]}),Object(m.jsxs)("div",{className:"season-display ".concat(n),children:[Object(m.jsx)("i",{className:"icon-left massive ".concat(i," icon")}),Object(m.jsx)("h1",{children:r}),Object(m.jsx)("i",{className:"icon-right massive ".concat(i," icon")})]})]})},j=(s(14),function(e){return Object(m.jsx)("div",{className:"ui active dimmer",children:Object(m.jsx)("div",{className:"ui big text loader",children:e.message})})});j.defaultProps={message:"Loading..."};var g=j,b=function(e){Object(r.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(n.a)(this,s);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={lat:null,time:(new Date).toLocaleTimeString(),errorMessage:""},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log("My component was rendered to the screen"),window.navigator.geolocation.getCurrentPosition((function(t){return e.setState({lat:t.coords.latitude})}),(function(t){return e.setState({errorMessage:t.message})})),setInterval((function(){e.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"renderContent",value:function(){return this.state.errorMessage&&!this.state.lat?Object(m.jsxs)("div",{children:["Error: ",this.state.errorMessage]}):!this.state.errorMessage&&this.state.lat?Object(m.jsx)(d,{lat:this.state.lat,time:this.state.time}):Object(m.jsx)(g,{message:"Please accept location request"})}},{key:"render",value:function(){return console.log(this.state.lat),console.log(this.state.time),Object(m.jsx)("div",{className:"fontSize",children:this.renderContent()})}}]),s}(c.a.Component);u.a.render(Object(m.jsx)(b,{}),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.944a7715.chunk.js.map