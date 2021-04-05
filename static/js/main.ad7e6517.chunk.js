(this.webpackJsonpapi_all_in_one=this.webpackJsonpapi_all_in_one||[]).push([[0],{44:function(e,n,t){"use strict";t.r(n);var r,i,c,a,o,s,l=t(1),j=t.n(l),d=t(28),b=t.n(d),u=t(13),h=t(0),p=Object(l.createContext)(),m=function(e){var n=e.children,t=Object(l.useRef)(),r={sidebarRef:t,openSidebar:function(){return t.current.style.setProperty("transform","translateX(0)")},closeSidebar:function(){return t.current.style.setProperty("transform","translateX(100%)")}};return Object(h.jsx)(p.Provider,{value:r,children:n})},x=t(2),O=t(3),f=Object(O.a)(r||(r=Object(x.a)(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  :root {\n    --body-background: #dcdde1;\n    --custom-yellow: #fbc531;\n    --dark-blue: #192a56;\n    --light-blue: #273c75;\n    --light-gray: #f5f6fa;\n    --main-font: 'Red Hat Text', sans-serif;\n    font-family: var(--main-font);\n    font-size: 62.5%;\n  }\n\n  body {\n    background-color: var(--body-background);\n    font-size: 1.6rem;\n  }\n\n"]))),v=t(7),g=t(5),w=Object(l.createContext)(),y="https://api.lyrics.ovh";function S(e){var n=e.children,t=Object(l.useState)(""),r=Object(g.a)(t,2),i=r[0],c=r[1],a=Object(l.useState)(""),o=Object(g.a)(a,2),s=o[0],j=o[1],d=Object(l.useState)(!1),b=Object(g.a)(d,2),u={response:i,setResponse:c,songInfo:s,setSongInfo:j,shouldShowLoader:b[0],setShouldShowLoader:b[1]};return Object(h.jsx)(w.Provider,{value:u,children:n})}var k,C,D,P,R,z=O.b.button(i||(i=Object(x.a)(["\n  display: block;\n  padding: 0.8rem 2rem;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  background-color: var(--dark-blue);\n  color: var(--light-gray);\n  font-family: var(--main-font);\n  font-size: 1.5rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: background-color 0.3s ease;\n  cursor: pointer;\n\n  &:active {\n    transform: scale(0.98);\n  }\n\n  &:hover {\n    background-color: var(--light-blue);\n  }\n\n  @media (min-width: 360px) {\n    font-size: 1.6rem;\n  }\n"]))),N=O.b.ul(c||(c=Object(x.a)(["\n  list-style-type: none;\n"]))),A=O.b.p(a||(a=Object(x.a)(["\n  margin: 0 0 1rem;\n  font-size: 1.5rem;\n  line-height: 1.4;\n\n  @media (min-width: 360px) {\n    font-size: 1.6rem;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 1.8rem;\n  }\n"]))),K=O.b.h1(o||(o=Object(x.a)(["\n  margin: 0 0 1rem;\n  font-size: 1.8rem;\n\n  @media (min-width: 360px) {\n    font-size: 2rem;\n  }\n\n  @media (min-width: 768px) {\n    margin: 0 0 1.5rem;\n    font-size: 2.4rem;\n    text-align: center;\n  }\n"]))),U=O.b.main(s||(s=Object(x.a)(["\n  width: 100%;\n  max-width: 500px;\n  padding: 1rem 1.5rem 3rem;\n  margin: 0 auto;\n\n  @media (min-width: 360px) {\n    padding: 1.5rem 2rem 3rem;\n  }\n\n  @media (min-width: 768px) {\n    padding: 3rem 2rem 3rem;\n  }\n"])));function H(){var e=Object(l.useState)("USD"),n=Object(g.a)(e,2),t=n[0],r=n[1],i=Object(l.useState)("EUR"),c=Object(g.a)(i,2),a=c[0],o=c[1],s=Object(l.useState)(),j=Object(g.a)(s,2),d=j[0],b=j[1],u=Object(l.useState)(1),p=Object(g.a)(u,2),m=p[0],x=p[1],O=Object(l.useState)(""),f=Object(g.a)(O,2),v=f[0],w=f[1];Object(l.useEffect)((function(){y()}),[t,a,m]);var y=function(){var e="https://v6.exchangerate-api.com/v6/".concat("65ae7a288dd355c89554072f","/latest/").concat(t);fetch(e).then((function(e){return e.json()})).then((function(e){if("success"===e.result){var n=e.conversion_rates[a],t=+(m*n).toFixed(2);b(n),w(t)}})).catch((function(e){return console.error(e)}))};return Object(h.jsxs)(U,{children:[Object(h.jsx)(K,{children:"Exchange Rate Calculator \ud83d\udcb0"}),Object(h.jsx)(A,{children:"Choose the currency and provide the amout to get the exchange rate!"}),Object(h.jsxs)(M,{children:[Object(h.jsxs)(B,{children:[Object(h.jsxs)(G,{value:t,onChange:function(e){return r(e.target.value)},children:[Object(h.jsx)("option",{value:"AED",children:"AED"}),Object(h.jsx)("option",{value:"ARS",children:"ARS"}),Object(h.jsx)("option",{value:"AUD",children:"AUD"}),Object(h.jsx)("option",{value:"BGN",children:"BGN"}),Object(h.jsx)("option",{value:"BRL",children:"BRL"}),Object(h.jsx)("option",{value:"BSD",children:"BSD"}),Object(h.jsx)("option",{value:"CAD",children:"CAD"}),Object(h.jsx)("option",{value:"CHF",children:"CHF"}),Object(h.jsx)("option",{value:"CLP",children:"CLP"}),Object(h.jsx)("option",{value:"CNY",children:"CNY"}),Object(h.jsx)("option",{value:"COP",children:"COP"}),Object(h.jsx)("option",{value:"CZK",children:"CZK"}),Object(h.jsx)("option",{value:"DKK",children:"DKK"}),Object(h.jsx)("option",{value:"DOP",children:"DOP"}),Object(h.jsx)("option",{value:"EGP",children:"EGP"}),Object(h.jsx)("option",{value:"EUR",children:"EUR"}),Object(h.jsx)("option",{value:"FJD",children:"FJD"}),Object(h.jsx)("option",{value:"GBP",children:"GBP"}),Object(h.jsx)("option",{value:"GTQ",children:"GTQ"}),Object(h.jsx)("option",{value:"HKD",children:"HKD"}),Object(h.jsx)("option",{value:"HRK",children:"HRK"}),Object(h.jsx)("option",{value:"HUF",children:"HUF"}),Object(h.jsx)("option",{value:"IDR",children:"IDR"}),Object(h.jsx)("option",{value:"ILS",children:"ILS"}),Object(h.jsx)("option",{value:"INR",children:"INR"}),Object(h.jsx)("option",{value:"ISK",children:"ISK"}),Object(h.jsx)("option",{value:"JPY",children:"JPY"}),Object(h.jsx)("option",{value:"KRW",children:"KRW"}),Object(h.jsx)("option",{value:"KZT",children:"KZT"}),Object(h.jsx)("option",{value:"MXN",children:"MXN"}),Object(h.jsx)("option",{value:"MYR",children:"MYR"}),Object(h.jsx)("option",{value:"NOK",children:"NOK"}),Object(h.jsx)("option",{value:"NZD",children:"NZD"}),Object(h.jsx)("option",{value:"PAB",children:"PAB"}),Object(h.jsx)("option",{value:"PEN",children:"PEN"}),Object(h.jsx)("option",{value:"PHP",children:"PHP"}),Object(h.jsx)("option",{value:"PKR",children:"PKR"}),Object(h.jsx)("option",{value:"PLN",children:"PLN"}),Object(h.jsx)("option",{value:"PYG",children:"PYG"}),Object(h.jsx)("option",{value:"RON",children:"RON"}),Object(h.jsx)("option",{value:"RUB",children:"RUB"}),Object(h.jsx)("option",{value:"SAR",children:"SAR"}),Object(h.jsx)("option",{value:"SEK",children:"SEK"}),Object(h.jsx)("option",{value:"SGD",children:"SGD"}),Object(h.jsx)("option",{value:"THB",children:"THB"}),Object(h.jsx)("option",{value:"TRY",children:"TRY"}),Object(h.jsx)("option",{value:"TWD",children:"TWD"}),Object(h.jsx)("option",{value:"UAH",children:"UAH"}),Object(h.jsx)("option",{value:"USD",children:"USD"}),Object(h.jsx)("option",{value:"UYU",children:"UYU"}),Object(h.jsx)("option",{value:"VND",children:"VND"}),Object(h.jsx)("option",{value:"ZAR",children:"ZAR"})]}),Object(h.jsx)(T,{type:"number",value:m,onChange:function(e){return x(e.target.valueAsNumber)},placeholder:"0"})]}),Object(h.jsxs)(B,{children:[Object(h.jsx)(z,{onClick:function(){r(a),o(t)},children:"Swap"}),Object(h.jsx)(L,{children:d&&"1 ".concat(t," = ").concat(d," ").concat(a)})]}),Object(h.jsxs)(B,{children:[Object(h.jsxs)(G,{value:a,onChange:function(e){return o(e.target.value)},children:[Object(h.jsx)("option",{value:"AED",children:"AED"}),Object(h.jsx)("option",{value:"ARS",children:"ARS"}),Object(h.jsx)("option",{value:"AUD",children:"AUD"}),Object(h.jsx)("option",{value:"BGN",children:"BGN"}),Object(h.jsx)("option",{value:"BRL",children:"BRL"}),Object(h.jsx)("option",{value:"BSD",children:"BSD"}),Object(h.jsx)("option",{value:"CAD",children:"CAD"}),Object(h.jsx)("option",{value:"CHF",children:"CHF"}),Object(h.jsx)("option",{value:"CLP",children:"CLP"}),Object(h.jsx)("option",{value:"CNY",children:"CNY"}),Object(h.jsx)("option",{value:"COP",children:"COP"}),Object(h.jsx)("option",{value:"CZK",children:"CZK"}),Object(h.jsx)("option",{value:"DKK",children:"DKK"}),Object(h.jsx)("option",{value:"DOP",children:"DOP"}),Object(h.jsx)("option",{value:"EGP",children:"EGP"}),Object(h.jsx)("option",{value:"EUR",children:"EUR"}),Object(h.jsx)("option",{value:"FJD",children:"FJD"}),Object(h.jsx)("option",{value:"GBP",children:"GBP"}),Object(h.jsx)("option",{value:"GTQ",children:"GTQ"}),Object(h.jsx)("option",{value:"HKD",children:"HKD"}),Object(h.jsx)("option",{value:"HRK",children:"HRK"}),Object(h.jsx)("option",{value:"HUF",children:"HUF"}),Object(h.jsx)("option",{value:"IDR",children:"IDR"}),Object(h.jsx)("option",{value:"ILS",children:"ILS"}),Object(h.jsx)("option",{value:"INR",children:"INR"}),Object(h.jsx)("option",{value:"ISK",children:"ISK"}),Object(h.jsx)("option",{value:"JPY",children:"JPY"}),Object(h.jsx)("option",{value:"KRW",children:"KRW"}),Object(h.jsx)("option",{value:"KZT",children:"KZT"}),Object(h.jsx)("option",{value:"MXN",children:"MXN"}),Object(h.jsx)("option",{value:"MYR",children:"MYR"}),Object(h.jsx)("option",{value:"NOK",children:"NOK"}),Object(h.jsx)("option",{value:"NZD",children:"NZD"}),Object(h.jsx)("option",{value:"PAB",children:"PAB"}),Object(h.jsx)("option",{value:"PEN",children:"PEN"}),Object(h.jsx)("option",{value:"PHP",children:"PHP"}),Object(h.jsx)("option",{value:"PKR",children:"PKR"}),Object(h.jsx)("option",{value:"PLN",children:"PLN"}),Object(h.jsx)("option",{value:"PYG",children:"PYG"}),Object(h.jsx)("option",{value:"RON",children:"RON"}),Object(h.jsx)("option",{value:"RUB",children:"RUB"}),Object(h.jsx)("option",{value:"SAR",children:"SAR"}),Object(h.jsx)("option",{value:"SEK",children:"SEK"}),Object(h.jsx)("option",{value:"SGD",children:"SGD"}),Object(h.jsx)("option",{value:"THB",children:"THB"}),Object(h.jsx)("option",{value:"TRY",children:"TRY"}),Object(h.jsx)("option",{value:"TWD",children:"TWD"}),Object(h.jsx)("option",{value:"UAH",children:"UAH"}),Object(h.jsx)("option",{value:"USD",children:"USD"}),Object(h.jsx)("option",{value:"UYU",children:"UYU"}),Object(h.jsx)("option",{value:"VND",children:"VND"}),Object(h.jsx)("option",{value:"ZAR",children:"ZAR"})]}),Object(h.jsx)(T,{type:"number",value:v,onChange:function(e){return w(e.target.valueAsNumber)},placeholder:"0"})]})]})]})}var I,E,M=O.b.section(k||(k=Object(x.a)(["\n  display: grid;\n  place-items: center;\n  margin: 2rem auto 0;\n  max-width: 400px;\n"]))),B=O.b.div(C||(C=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin: 0 0 2rem;\n"]))),G=O.b.select(D||(D=Object(x.a)(["\n  margin: 0 1rem 0 0;\n  padding: 0.5rem;\n  border: 1px solid #fff;\n  border-radius: 3px;\n  outline: none;\n  background-color: #fff;\n  font-family: var(--main-font);\n  font-size: 1.5rem;\n  transition: border 0.3s ease;\n  cursor: pointer;\n\n  &:focus {\n    border: 1px solid #888;\n  }\n"]))),T=O.b.input(P||(P=Object(x.a)(["\n  flex-basis: 60%;\n  padding: 0.5rem;\n  border: 1px solid #fff;\n  border-radius: 3px;\n  outline: none;\n  background-color: #fff;\n  font-family: var(--main-font);\n  font-size: 1.5rem;\n  text-align: right;\n  transition: border 0.3s ease;\n\n  &:focus {\n    border: 1px solid #888;\n  }\n"]))),L=Object(O.b)(A)(R||(R=Object(x.a)(["\n  margin: 0;\n"])));function Y(){return Object(h.jsxs)(U,{children:[Object(h.jsx)(K,{children:"About this project"}),Object(h.jsx)(A,{children:"This website aims to group few small API-related projects into one. My goal was to create one large project which includes many API services instead of creating a small project for each API service I found interesting. Using the sidebar you can choose between multiple API-based services. \ud83d\udd25"}),Object(h.jsx)(A,{children:"Available options include:"}),Object(h.jsxs)(Z,{children:[Object(h.jsx)("li",{children:"Quotes for daily inspiration \ud83e\udde0"}),Object(h.jsx)("li",{children:"Current weather \ud83c\udf25\ufe0f"}),Object(h.jsx)("li",{children:"Exchange rates \ud83d\udcb5"}),Object(h.jsx)("li",{children:"Song lyrics \ud83c\udfb5"}),Object(h.jsx)("li",{children:"Meal Finder \ud83c\udf56"})]}),Object(h.jsx)(J,{children:"Enjoy! \ud83d\ude03"})]})}var F,_,Z=O.b.ul(I||(I=Object(x.a)(["\n  margin: 0 0 2rem;\n  padding: 0 0 0 3rem;\n  list-style-type: disc;\n\n  & li {\n    margin: 0 0 0.5rem;\n    font-size: 1.5rem;\n\n    @media (min-width: 360px) {\n      font-size: 1.6rem;\n    }\n\n    @media (min-width: 768px) {\n      font-size: 1.8rem;\n    }\n  }\n"]))),J=O.b.h4(E||(E=Object(x.a)(["\n  font-size: 1.5rem;\n\n  @media (min-width: 360px) {\n    font-size: 1.6rem;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 1.8rem;\n  }\n"]))),W=t(10),q=t.n(W),Q=t(15);function X(){return Object(h.jsxs)(te,{children:[Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{})]})}var V,$,ee,ne=Object(O.c)(F||(F=Object(x.a)(["\n  0%, 100% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-10px);\n  }\n"]))),te=O.b.div(_||(_=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 3rem auto;\n\n  & > span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    margin: 0 0.3rem;\n    background-color: var(--dark-blue);\n    animation: "," 0.5s linear infinite;\n\n    &:nth-of-type(2) {\n      animation-delay: 0.1s;\n    }\n\n    &:nth-of-type(3) {\n      animation-delay: 0.2s;\n    }\n  }\n"])),ne);function re(e){var n=e.handleChange,t=e.handleSubmit,r=e.term;return Object(l.useEffect)((function(){document.querySelector("input").focus()}),[]),Object(h.jsxs)(ae,{onSubmit:t,children:[Object(h.jsx)(oe,{type:"text",value:r,onChange:n,placeholder:"Enter artist or song name..."}),Object(h.jsx)(se,{children:"Search"})]})}var ie,ce,ae=O.b.form(V||(V=Object(x.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 500px;\n  margin: 0 auto 1rem;\n\n  @media (min-width: 360px) {\n    margin: 0 auto 2rem;\n  }\n\n  @media (min-width: 768px) {\n    margin: 0 auto 3rem;\n  }\n"]))),oe=O.b.input($||($=Object(x.a)(["\n  width: 100%;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 50px;\n  outline: none;\n  background-color: #fff;\n  font-family: var(--main-font);\n  font-size: 1.5rem;\n\n  @media (min-width: 360px) {\n    font-size: 1.6rem;\n  }\n"]))),se=Object(O.b)(z)(ee||(ee=Object(x.a)(["\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  padding: 0.8rem 1.5rem;\n  border-radius: 50px;\n"])));function le(e){var n=e.artist,t=e.cover,r=e.preview,i=e.title,c=Object(l.useContext)(w).setSongInfo,a=Object(v.f)(),o={pathname:"/lyrics-app/lyrics-panel"};return Object(h.jsxs)(je,{children:[Object(h.jsxs)("span",{children:[n," - ",i]}),Object(h.jsx)(de,{onClick:function(){a.push(o),c({artist:n,cover:t,preview:r,title:i})},children:"Get Lyrics"})]})}var je=O.b.li(ie||(ie=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem;\n  border-bottom: 1px solid var(--dark-blue);\n  font-size: 1.5rem;\n\n  & > span {\n    flex-basis: 60%;\n  }\n"]))),de=Object(O.b)(z)(ce||(ce=Object(x.a)(["\n  padding: 0.5rem 1.5rem;\n  border-radius: 15px;\n  font-size: 1.2rem;\n"])));function be(){var e=Object(l.useContext)(w).response;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(N,{children:e.data.map((function(e){return Object(h.jsx)(le,{artist:e.artist.name,title:e.title,cover:e.album.cover_medium,preview:e.preview},e.id)}))})})}var ue,he,pe,me,xe,Oe=t(6),fe=t(8);function ve(){var e=Object(l.useState)(""),n=Object(g.a)(e,2),t=n[0],r=n[1],i=Object(l.useContext)(w),c=i.setShouldShowLoader,a=i.songInfo;function o(){return(o=Object(Q.a)(q.a.mark((function e(){var n,t,i,o;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.artist,t=a.title,e.next=3,fetch("".concat(y,"/v1/").concat(n,"/").concat(t));case 3:return i=e.sent,e.next=6,i.json();case 6:o=e.sent,r(o.lyrics),c(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){c(!0),function(){o.apply(this,arguments)}()}),[]),Object(h.jsx)(h.Fragment,{children:t&&function(){var e=a.artist,n=a.cover,r=a.preview,i=a.title;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(ge,{children:[Object(h.jsx)(we,{children:Object(h.jsx)("img",{src:n,alt:"album cover"})}),Object(h.jsxs)(ye,{children:[Object(h.jsx)("h2",{children:i}),Object(h.jsx)("h3",{children:e}),Object(h.jsxs)(Se,{as:"a",href:r,target:"_blank",rel:"noreferrer",children:[Object(h.jsx)(Oe.a,{icon:fe.h})," Song Preview"]})]})]}),Object(h.jsx)(ke,{children:t})]})}()})}var ge=O.b.section(ue||(ue=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 0 3rem;\n"]))),we=O.b.section(he||(he=Object(x.a)(["\n  & img {\n    width: 200px;\n\n    @media (min-width: 768px) {\n      width: 250px;\n    }\n  }\n"]))),ye=O.b.section(pe||(pe=Object(x.a)(["\n  flex-grow: 1;\n  padding: 1rem 2rem;\n  text-align: center;\n\n  & h2 {\n    margin: 0 0 0.5rem;\n    font-size: 2.4rem;\n  }\n\n  & h3 {\n    margin: 0 0 1.5rem;\n    font-size: 1.8rem;\n    font-weight: 500;\n  }\n"]))),Se=Object(O.b)(z)(me||(me=Object(x.a)(["\n  display: inline-block;\n  padding: 0.5rem 1.2rem;\n  border-radius: 15px;\n  font-size: 1.4rem;\n"]))),ke=O.b.section(xe||(xe=Object(x.a)(["\n  padding: 0 0 3rem;\n  white-space: pre-wrap;\n"])));function Ce(){var e=Object(l.useState)(""),n=Object(g.a)(e,2),t=n[0],r=n[1],i=Object(l.useContext)(w),c=i.response,a=i.setResponse,o=i.setShouldShowLoader,s=i.shouldShowLoader;function j(){return(j=Object(Q.a)(q.a.mark((function e(n){var t,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/suggest/").concat(n.trim()));case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,a(r),o(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsx)(u.a,{basename:"/API-Hub",children:Object(h.jsxs)(U,{children:[Object(h.jsx)(K,{children:"Find the lyrics for your favorite song! \ud83c\udfb5"}),Object(h.jsx)(re,{handleChange:function(e){r(e.target.value)},handleSubmit:function(e){e.preventDefault(),t&&(!function(e){j.apply(this,arguments)}(t),r(""),o(!0))},term:t}),s&&Object(h.jsx)(X,{}),Object(h.jsx)(v.a,{path:"/lyrics-app",exact:!0,children:c&&Object(h.jsx)(be,{})}),Object(h.jsx)(v.a,{path:"/lyrics-app/lyrics-panel",exact:!0,children:Object(h.jsx)(ve,{})})]})})}var De,Pe,Re=t.p+"static/media/404.f20cfb66.png";function ze(){return Object(h.jsxs)(U,{children:[Object(h.jsx)(K,{children:"Oops...!"}),Object(h.jsx)(A,{children:"We can't seem to find the page you're looking for..."}),Object(h.jsxs)(Ke,{to:"/",children:["Go back home ",Object(h.jsx)(Oe.a,{icon:fe.f})]}),Object(h.jsx)(Ue,{src:Re,alt:"Page not found"})]})}var Ne,Ae,Ke=Object(O.b)(u.b)(De||(De=Object(x.a)(["\n  display: inline-block;\n  margin: 0 auto 1.5rem;\n  padding: 0.5rem 2rem;\n  outline: none;\n  border: none;\n  border-radius: 3px;\n  background: var(--dark-blue);\n  color: var(--light-gray);\n  font-size: 1.5rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n\n  @media (min-width: 360px) {\n    margin: 2rem auto 3rem;\n    padding: 1rem 2rem;\n    font-size: 1.6rem;\n  }\n"]))),Ue=O.b.img(Pe||(Pe=Object(x.a)(["\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 450px;\n  border-radius: 3px;\n\n  @media (min-width: 768px) {\n    margin: 3rem auto 0;\n  }\n"])));function He(){var e=Object(l.useState)(""),n=Object(g.a)(e,2),t=n[0],r=n[1],i=Object(l.useState)(""),c=Object(g.a)(i,2),a=c[0],o=c[1],s=Object(l.useCallback)(Object(Q.a)(q.a.mark((function e(){var n,t,i,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:n=e.sent,t=n.length,i=~~(Math.random()*t),c=n[i],r('"'.concat(c.text,'"')),o(c.author);case 8:case"end":return e.stop()}}),e)}))),[]),j=function(){var e=Object(Q.a)(q.a.mark((function e(){var n,t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://type.fit/api/quotes");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){s()}),[s]),Object(h.jsxs)(U,{children:[Object(h.jsx)(K,{children:"Get inspired with our quotes! \ud83e\udde0"}),Object(h.jsx)(A,{children:t}),Object(h.jsx)(Te,{children:null!==a&&void 0!==a?a:"Author Unknown"}),Object(h.jsx)(Le,{onClick:s,children:"Get New Quote"})]})}var Ie,Ee,Me,Be,Ge,Te=Object(O.b)(A)(Ne||(Ne=Object(x.a)(["\n  font-size: 1.4rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-align: right;\n"]))),Le=Object(O.b)(z)(Ae||(Ae=Object(x.a)(["\n  margin: 2rem 0 0;\n  padding: 1rem 2rem;\n"])));function Ye(){var e=Object(l.useState)(""),n=Object(g.a)(e,2),t=n[0],r=n[1],i=Object(l.useState)(!0),c=Object(g.a)(i,2),a=c[0],o=c[1],s=Object(l.useState)(""),j=Object(g.a)(s,2),d=j[0],b=j[1],u=Object(l.useState)(!1),p=Object(g.a)(u,2),m=p[0],x=p[1];Object(l.useEffect)((function(){document.querySelector("input").focus()}),[]);var O=function(e){var n="".concat("https://cors-anywhere.herokuapp.com/","http://api.openweathermap.org/data/2.5/weather?q=").concat(e.trim(),"&appid=").concat("d8bda41b14ee677c9b19adfc045f9b2b","&units=metric");fetch(n).then((function(e){return e.json()})).then((function(e){if(200!==e.cod)throw o(!1),new Error("City not found...");o(!0),f(e)})).catch((function(e){return console.error(e)}))},f=function(e){var n={cityName:e.name,temperature:Math.round(e.main.temp),feelsLike:Math.round(e.main.feels_like),humidity:e.main.humidity,pressure:e.main.pressure,wind:Math.round(3.6*e.wind.speed),condition:e.weather[0].main,conditionDescription:e.weather[0].description,sunrise:new Date(1e3*e.sys.sunrise).toLocaleTimeString(),sunset:new Date(1e3*e.sys.sunset).toLocaleTimeString(),hasSunSet:(new Date).getTime()>=1e3*e.sys.sunset};b(n),x(!1)},v=function(e,n){return"Clear"===e?n?Object(h.jsx)(Oe.a,{icon:fe.g}):Object(h.jsx)(Oe.a,{icon:fe.l}):"Clouds"===e?Object(h.jsx)(Oe.a,{icon:fe.c}):"Rain"===e?Object(h.jsx)(Oe.a,{icon:fe.e}):"Snow"===e?Object(h.jsx)(Oe.a,{icon:fe.k}):"Drizzle"===e?Object(h.jsx)(Oe.a,{icon:fe.d}):"Thunderstorm"===e?Object(h.jsx)(Oe.a,{icon:fe.b}):null};return Object(h.jsxs)(U,{children:[Object(h.jsx)(K,{children:"Get current weather for a given location \ud83c\udf24\ufe0f"}),Object(h.jsxs)(We,{children:[Object(h.jsx)(qe,{type:"text",id:"city",value:t,onChange:function(e){return r(e.target.value)},placeholder:"Search city",autoComplete:"off"}),Object(h.jsx)(Qe,{onClick:function(e){e.preventDefault(),t&&(x(!0),O(t),r(""))},children:"Search"})]}),m&&Object(h.jsx)(X,{}),d&&function(){var e=d.cityName,n=d.condition,t=d.conditionDescription,r=d.feelsLike,i=d.hasSunSet,c=d.humidity,a=d.pressure,o=d.sunrise,s=d.sunset,l=d.temperature,j=d.wind,b=t.slice(0,1).toUpperCase()+t.slice(1);return Object(h.jsxs)("section",{children:[Object(h.jsxs)(Xe,{children:[Object(h.jsx)("p",{className:"city",children:e}),Object(h.jsxs)("p",{className:"temperature",children:[l,"\xb0"]}),Object(h.jsxs)("small",{className:"feels_like",children:["Feels like ",r,"\xb0"]}),Object(h.jsxs)("p",{className:"condition",children:[b," ",v(n,i)]})]}),Object(h.jsxs)(Ve,{children:[Object(h.jsxs)("li",{children:["Wind ",Object(h.jsxs)("span",{children:[j," km/h"]})]}),Object(h.jsxs)("li",{children:["Humidity ",Object(h.jsxs)("span",{children:[c,"%"]})]}),Object(h.jsxs)("li",{children:["Pressure ",Object(h.jsxs)("span",{children:[a," hPa"]})]}),Object(h.jsxs)("li",{children:["Sunrise ",Object(h.jsx)("span",{children:o})]}),Object(h.jsxs)("li",{children:["Sunset ",Object(h.jsx)("span",{children:s})]})]})]})}(),!a&&Object(h.jsx)(A,{children:"City not found...Please try again."})]})}var Fe,_e,Ze,Je,We=O.b.form(Ie||(Ie=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 0 1rem;\n\n  @media (min-width: 360px) {\n    margin: 0 0 2rem;\n  }\n\n  @media (min-width: 768px) {\n    margin: 0 0 3rem;\n  }\n"]))),qe=O.b.input(Ee||(Ee=Object(x.a)(["\n  flex-grow: 1;\n  padding: 0.5rem 1rem;\n  border: 1px solid #fff;\n  border-radius: 3px 0 0 3px;\n  outline: none;\n  background-color: #fff;\n  font-family: var(--main-font);\n  font-size: 1.5rem;\n  transition: border 0.3s ease;\n\n  &:focus {\n    border: 1px solid var(--dark-blue);\n  }\n\n  @media (min-width: 360px) {\n    font-size: 1.6rem;\n  }\n"]))),Qe=Object(O.b)(z)(Me||(Me=Object(x.a)(["\n  padding: 0.5rem 2rem;\n  border: 1px solid var(--dark-blue);\n  border-radius: 0 3px 3px 0;\n"]))),Xe=O.b.section(Be||(Be=Object(x.a)(["\n  margin: 0 auto 1rem;\n  text-align: center;\n\n  & p {\n    margin: 0;\n  }\n\n  & p.city {\n    font-size: 1.8rem;\n    letter-spacing: 1px;\n  }\n\n  & p.temperature {\n    font-size: 3.4rem;\n  }\n\n  & small.feels_like {\n    font-size: 1.2rem;\n  }\n\n  @media (min-width: 360px) {\n    margin: 0 auto 2rem;\n  }\n\n  @media (min-width: 360px) {\n    & p.city {\n      font-size: 2.2rem;\n    }\n\n    & p.temperature {\n      font-size: 4rem;\n    }\n\n    & small.feels_like {\n      font-size: 1.4rem;\n    }\n  }\n"]))),Ve=O.b.ul(Ge||(Ge=Object(x.a)(["\n  list-style-type: none;\n\n  & li {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.5rem;\n    border-bottom: 1px solid #888;\n    font-size: 1.5rem;\n\n    @media (min-width: 360px) {\n      font-size: 1.6rem;\n    }\n\n    @media (min-width: 768px) {\n      font-size: 1.8rem;\n    }\n  }\n\n  & li:first-child {\n    border-top: 1px solid #888;\n  }\n"])));function $e(e){var n=e.handleChange,t=e.handleRandomClick,r=e.handleSubmit,i=e.term;return Object(h.jsxs)(tn,{onSubmit:r,children:[Object(h.jsx)(rn,{type:"text",placeholder:"Search for meals...",value:i,onChange:n}),Object(h.jsx)(cn,{children:Object(h.jsx)(Oe.a,{icon:fe.j})}),Object(h.jsx)(an,{onClick:t,children:Object(h.jsx)(Oe.a,{icon:fe.i})})]})}var en,nn,tn=O.b.form(Fe||(Fe=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto 2rem;\n  text-align: center;\n\n  @media (min-width: 768px) {\n    margin: 0 auto 3rem;\n  }\n"]))),rn=O.b.input(_e||(_e=Object(x.a)(["\n  flex-grow: 1;\n  padding: 0.5rem 1rem;\n  border: 1px solid #fff;\n  border-radius: 5px 0 0 5px;\n  outline: none;\n  background-color: #fff;\n  font-family: var(--main-font);\n  font-size: 1.5rem;\n  transition: border 0.3s ease;\n  caret-color: var(--dark-blue);\n\n  &:focus {\n    border: 1px solid #999;\n  }\n\n  @media (min-width: 360px) {\n    font-size: 1.6rem;\n  }\n"]))),cn=Object(O.b)(z)(Ze||(Ze=Object(x.a)(["\n  padding: 0.5rem 1rem;\n  border-radius: 0 5px 5px 0;\n"]))),an=Object(O.b)(z)(Je||(Je=Object(x.a)(["\n  position: relative;\n  padding: 0.5rem 1rem;\n  margin: 0 0 0 1rem;\n"])));function on(e){var n=e.foundMeals,t=e.getMealDetails,r=(e.term,n.map((function(e){return Object(h.jsxs)(un,{onClick:function(){return t(e.idMeal)},children:[Object(h.jsx)("img",{src:e.strMealThumb,alt:e.strMeal}),Object(h.jsx)("h2",{children:e.strMeal})]},e.idMeal)})));return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(bn,{children:r})})}var sn,ln,jn,dn,bn=O.b.section(en||(en=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1rem;\n\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"]))),un=O.b.div(nn||(nn=Object(x.a)(["\n  position: relative;\n  overflow: hidden;\n  height: 14rem;\n  border: 3px solid var(--light-gray);\n  border-radius: 3px;\n  cursor: pointer;\n\n  & img {\n    width: 100%;\n    object-fit: cover;\n    transition: transform 0.3s ease;\n  }\n\n  & h2 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: grid;\n    place-items: center;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    color: var(--light-gray);\n    font-size: 1.6rem;\n    text-align: center;\n    transition: opacity 0.3s ease;\n  }\n\n  &:hover img {\n    transform: scale(1.1);\n  }\n\n  &:hover h2 {\n    opacity: 1;\n  }\n"])));function hn(e){var n=e.mealDetails;return Object(h.jsxs)(vn,{children:[Object(h.jsx)("h2",{children:n.strMeal}),Object(h.jsx)("img",{src:n.strMealThumb,alt:n.strMeal}),Object(h.jsxs)(gn,{children:["Category: ",n.strCategory]}),Object(h.jsxs)(gn,{children:["Origin: ",n.strArea]}),Object(h.jsx)("h3",{children:"Ingredients:"}),Object(h.jsx)("ul",{children:function(){for(var e=[],t=1;t<=20&&n["strIngredient".concat(t)];t++)e.push("".concat(n["strIngredient".concat(t)]," - ").concat(n["strMeasure".concat(t)]));return e.map((function(e){return Object(h.jsx)("li",{children:e.slice(0,1).toUpperCase()+e.slice(1)},e)}))}()}),Object(h.jsx)("h3",{children:"Instructions:"}),Object(h.jsx)(wn,{children:n.strInstructions}),Object(h.jsx)(yn,{children:function(){var e=n.strYoutube.replace("watch?v=","embed/");return Object(h.jsx)("iframe",{src:e,title:n.strMeal,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}()})]})}var pn,mn,xn,On,fn,vn=O.b.section(sn||(sn=Object(x.a)(["\n  & h2 {\n    margin: 0 0 1rem;\n    font-size: 2rem;\n    text-align: center;\n  }\n\n  & img {\n    display: block;\n    width: 20rem;\n    margin: 0 auto 1rem;\n    border-radius: 3px;\n  }\n\n  & h3 {\n    margin: 2rem 0 1rem;\n    font-size: 1.8rem;\n  }\n\n  & ul {\n    padding: 0 0 0 2rem;\n    list-style-type: disc;\n  }\n\n  & li {\n    margin: 0 0 0.5rem;\n    font-size: 1.5rem;\n  }\n"]))),gn=Object(O.b)(A)(ln||(ln=Object(x.a)(["\n  text-align: center;\n"]))),wn=Object(O.b)(A)(jn||(jn=Object(x.a)(["\n  white-space: pre-wrap;\n"]))),yn=O.b.div(dn||(dn=Object(x.a)(["\n  margin: 2rem auto;\n\n  & iframe {\n    width: 100%;\n    min-height: 180px;\n\n    @media (min-width: 768px) {\n      height: 281px;\n    }\n  }\n"])));function Sn(){var e=Object(l.useState)(""),n=Object(g.a)(e,2),t=n[0],r=n[1],i=Object(l.useState)(""),c=Object(g.a)(i,2),a=c[0],o=c[1],s=Object(l.useState)(!1),j=Object(g.a)(s,2),d=j[0],b=j[1],u=Object(l.useState)(""),p=Object(g.a)(u,2),m=p[0],x=p[1],O=Object(l.useState)(!1),f=Object(g.a)(O,2),v=f[0],w=f[1];function y(){return(y=Object(Q.a)(q.a.mark((function e(n){var t,r,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(n.trim()),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:if(i=e.sent,o(i.meals),b(!1),i.meals){e.next=12;break}return w(!0),e.abrupt("return");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(Q.a)(q.a.mark((function e(){var n,t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!1),"https://www.themealdb.com/api/json/v1/1/random.php",e.next=4,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,x(t.meals[0]),b(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(Q.a)(q.a.mark((function e(n){var t,r,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),t="https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(n),e.next=4,fetch(t);case 4:return r=e.sent,e.next=7,r.json();case 7:i=e.sent,x(i.meals[0]),b(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)(U,{children:[Object(h.jsx)(K,{children:"Find recipes for your favorite meals! \ud83d\ude0b"}),Object(h.jsx)($e,{term:t,handleChange:function(e){r(e.target.value)},handleRandomClick:function(e){e.preventDefault(),function(){S.apply(this,arguments)}(),b(!0)},handleSubmit:function(e){e.preventDefault(),t&&(b(!0),function(e){y.apply(this,arguments)}(t),r(""),x(""),w(!1))}}),d&&Object(h.jsx)(X,{}),v&&Object(h.jsx)("p",{children:"No results. Try a different keyword."}),a&&!m&&Object(h.jsx)(on,{foundMeals:a,getMealDetails:function(e){return k.apply(this,arguments)},term:t}),m&&Object(h.jsx)(hn,{mealDetails:m})]})}function kn(){var e=Object(l.useContext)(p),n=e.closeSidebar,t=e.sidebarRef;return Object(h.jsxs)(Nn,{ref:t,children:[Object(h.jsx)(An,{onClick:n,children:Object(h.jsx)(Oe.a,{icon:fe.m})}),Object(h.jsxs)(Kn,{children:[Object(h.jsx)(Un,{children:Object(h.jsx)(Hn,{to:"/",exact:!0,activeClassName:"active-link",onClick:n,children:"Home"})}),Object(h.jsx)(Un,{children:Object(h.jsx)(Hn,{to:"/quotes",activeClassName:"active-link",onClick:n,children:"Quotes"})}),Object(h.jsx)(Un,{children:Object(h.jsx)(Hn,{to:"/weather",activeClassName:"active-link",onClick:n,children:"Weather"})}),Object(h.jsx)(Un,{children:Object(h.jsx)(Hn,{to:"/exchange-rates",activeClassName:"active-link",onClick:n,children:"Exchange Rates"})}),Object(h.jsx)(Un,{children:Object(h.jsx)(Hn,{to:"/lyrics-app",exact:!0,activeClassName:"active-link",onClick:n,children:"Song Lyrics"})}),Object(h.jsx)(Un,{children:Object(h.jsx)(Hn,{to:"/meal-finder",exact:!0,activeClassName:"active-link",onClick:n,children:"Meal Finder"})})]})]})}var Cn,Dn,Pn,Rn,zn,Nn=O.b.nav(pn||(pn=Object(x.a)(["\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  height: 100vh;\n  background-color: var(--light-blue);\n  transform: translateX(100%);\n  transition: transform 0.3s ease;\n\n  @media (min-width: 360px) {\n    width: 250px;\n  }\n\n  @media (min-width: 768px) {\n    width: 300px;\n  }\n"]))),An=O.b.button(mn||(mn=Object(x.a)(["\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--light-gray);\n  font-size: 2rem;\n  cursor: pointer;\n\n  &:active {\n    transform: scale(0.9);\n  }\n\n  @media (min-width: 360px) {\n    font-size: 2.4rem;\n  }\n\n  @media (min-width: 768px) {\n    top: 2rem;\n    right: 2rem;\n  }\n\n  @media (min-width: 1024px) {\n    right: 4rem;\n  }\n"]))),Kn=O.b.ul(xn||(xn=Object(x.a)(["\n  list-style-type: none;\n"]))),Un=O.b.li(On||(On=Object(x.a)(["\n  margin: 0 0 2rem;\n  text-align: center;\n\n  @media (min-width: 360px) {\n    margin: 0 0 3rem;\n  }\n"]))),Hn=Object(O.b)(u.c)(fn||(fn=Object(x.a)(["\n  position: relative;\n  color: var(--light-gray);\n  font-size: 1.5rem;\n  text-decoration: none;\n\n  &.active-link {\n    font-weight: bold;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 2px 0 0;\n    border-bottom: 1px solid var(--light-gray);\n    transform: scale(0, 1);\n    transition: transform 0.3s ease;\n  }\n\n  &:hover::after,\n  &:focus::after {\n    transform: scale(1, 1);\n  }\n\n  @media (min-width: 360px) {\n    font-size: 1.8rem;\n  }\n"]))),In=t(21);function En(){var e=Object(l.useContext)(p).openSidebar;return Object(h.jsxs)(Mn,{children:[Object(h.jsx)(Gn,{to:"/",children:"API Hub"}),Object(h.jsxs)(Bn,{children:[Object(h.jsx)(Ln,{as:"a",href:"https://github.com/JalalMallah",target:"_blank",children:Object(h.jsx)(Oe.a,{icon:In.a})}),Object(h.jsx)(Ln,{as:"a",href:"https://www.linkedin.com/in/jalal-mallah",target:"_blank",children:Object(h.jsx)(Oe.a,{icon:In.b})}),Object(h.jsx)(Ln,{as:"a",href:"https://twitter.com/jalal_mallah_",target:"_blank",children:Object(h.jsx)(Oe.a,{icon:In.c})}),Object(h.jsx)(Tn,{onClick:e,children:Object(h.jsx)(Oe.a,{icon:fe.a})})]}),Object(h.jsx)(kn,{})]})}var Mn=O.b.header(Cn||(Cn=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background-color: var(--dark-blue);\n  color: var(--light-gray);\n\n  @media (min-height: 700px) {\n    position: sticky;\n    z-index: 2;\n    top: 0;\n  }\n\n  @media (min-width: 768px) {\n    padding: 2rem;\n  }\n\n  @media (min-width: 1024px) {\n    padding: 2rem 4rem;\n  }\n"]))),Bn=O.b.div(Dn||(Dn=Object(x.a)(["\n  margin: 0;\n"]))),Gn=Object(O.b)(u.b)(Pn||(Pn=Object(x.a)(["\n  color: var(--light-gray);\n  font-size: 1.8rem;\n  font-weight: 500;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  transition: color 0.3s ease;\n  cursor: pointer;\n\n  &:hover {\n    color: var(--custom-yellow);\n  }\n\n  @media (min-width: 768px) {\n    font-size: 2rem;\n  }\n"]))),Tn=O.b.button(Rn||(Rn=Object(x.a)(["\n  margin: 0 0 0 2rem;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  color: var(--light-gray);\n  font-size: 2.2rem;\n  transition: color 0.3s ease;\n  cursor: pointer;\n\n  &:hover {\n    color: var(--custom-yellow);\n  }\n\n  @media (min-width: 360px) {\n    margin: 0 0 0 2.5rem;\n  }\n\n  @media (min-width: 768px) {\n    margin: 0 0 0 4rem;\n  }\n"]))),Ln=Object(O.b)(Tn)(zn||(zn=Object(x.a)(["\n  margin: 0 0 0 1.2rem;\n  font-size: 1.4rem;\n\n  @media (min-width: 360px) {\n    margin: 0 0 0 1.5rem;\n    font-size: 1.6rem;\n  }\n\n  @media (min-width: 768px) {\n    margin: 0 0 0 2rem;\n    font-size: 1.8rem;\n  }\n"]))),Yn=function(){return Object(h.jsxs)(S,{children:[Object(h.jsx)(En,{}),Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{path:"/",exact:!0,component:Y}),Object(h.jsx)(v.a,{path:"/quotes",component:He}),Object(h.jsx)(v.a,{path:"/weather",component:Ye}),Object(h.jsx)(v.a,{path:"/exchange-rates",component:H}),Object(h.jsx)(v.a,{path:"/lyrics-app",exact:!0,component:Ce}),Object(h.jsx)(v.a,{path:"/meal-finder",exact:!0,component:Sn}),Object(h.jsx)(v.a,{component:ze})]})]})};b.a.render(Object(h.jsx)(j.a.StrictMode,{children:Object(h.jsxs)(u.a,{basename:"/API-Hub",children:[Object(h.jsx)(f,{}),Object(h.jsx)(m,{children:Object(h.jsx)(Yn,{})})]})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ad7e6517.chunk.js.map