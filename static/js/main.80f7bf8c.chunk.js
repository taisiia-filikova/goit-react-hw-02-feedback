(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,n){e.exports={statistics:"Statistics_statistics__37GYF",item:"Statistics_item__2VN0C"}},,,function(e,t,n){e.exports={section:"Section_section__2xEZl",title:"Section_title__1DCZx"}},,,,,function(e,t,n){e.exports={container:"Container_container__2Vb3E"}},function(e,t,n){e.exports={button:"FeedbackOptions_button__1WLCL"}},function(e,t,n){e.exports={message:"Notification_message__16V6n"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),s=n.n(c),i=n(5),o=n.n(i),r=(n(19),n(6)),l=n(7),u=n(8),b=n(13),d=n(12),j=n(9),h=n.n(j);var v=function(e){var t=e.children;return Object(a.jsx)("div",{className:h.a.container,children:t})},f=n(1),m=n.n(f);var O=function(e){var t=e.good,n=e.neutral,c=e.bad,s=e.total,i=e.positivePercentage;return Object(a.jsxs)("ul",{className:m.a.statistics,children:[Object(a.jsxs)("li",{className:m.a.item,children:["Good: ",t]}),Object(a.jsxs)("li",{className:m.a.item,children:["Neutral: ",n]}),Object(a.jsxs)("li",{className:m.a.item,children:["Bad: ",c]}),Object(a.jsxs)("li",{className:m.a.item,children:["Total: ",s]}),Object(a.jsxs)("li",{className:m.a.item,children:["Positive reviews: ",i,"%"]})]})},x=n(10),g=n.n(x);var p=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(a.jsx)("button",{type:"button",className:g.a.button,onClick:function(){return n(e)},children:e},e)}))},_=n(4),k=n.n(_);var N=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{className:k.a.section,children:[Object(a.jsx)("h2",{className:k.a.title,children:t}),n]})},F=n(11),P=n.n(F);var S=function(e){var t=e.message;return Object(a.jsx)("p",{className:P.a.message,children:t})},w=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.getFeedback=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.round(t/e.countTotalFeedback()*100)||0},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(a.jsxs)(v,{children:[Object(a.jsx)(N,{title:"Please leave feedback",children:Object(a.jsx)(p,{options:Object.keys(this.state),onLeaveFeedback:this.getFeedback})}),Object(a.jsx)(N,{title:"Statistics",children:this.countTotalFeedback()?Object(a.jsx)(O,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(a.jsx)(S,{message:"No feedback given"})})]})}}]),n}(c.Component);n(20);o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.80f7bf8c.chunk.js.map