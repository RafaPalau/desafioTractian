(this.webpackJsonptractian=this.webpackJsonptractian||[]).push([[0],{114:function(e,n,t){"use strict";t.r(n);var i,c=t(1),r=t.n(c),a=t(18),o=t.n(a),l=t(3),s=t(4),d=Object(l.b)(i||(i=Object(s.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml, border-style, #root{\n  height: 100%;\n}\n* , button, input{\n  font-family: 'Poppins', sans-serif;\n  border: 0;\n  outline: 0;\n }\nbutton {\n   cursor: pointer;\n }\n"]))),j=t(11),b={title:"dark",colors:{primary:"#00132B",secondary:"#051738",tertiary:"#1E3B8D",white:"#ffffff",black:"#000000",gray:"#BFBFBF",sucess:"#0086FF",info:"#F98216",warning:"#FF2F3A"}},x={title:"light",colors:{primary:"#DCDCDC",secondary:"#F2F4F8",tertiary:"#FFFFFF",white:"#000000",black:"#FFFFFF",gray:"#BFBFBF",sucess:"#6CD85D",info:"#1E63ED",warning:"#E13C6C"}},u=t(2),f=Object(c.createContext)({}),A=function(e){var n=e.children,t=Object(c.useState)((function(){var e=localStorage.getItem("@tractian:theme");return e?JSON.parse(e):b})),i=Object(j.a)(t,2),r=i[0],a=i[1];return Object(u.jsx)(f.Provider,{value:{toggleTheme:function(){"dark"===r.title?(a(x),localStorage.setItem("@tractian:theme",JSON.stringify(x))):(a(b),localStorage.setItem("@tractian:theme",JSON.stringify(b)))},theme:r},children:n})};function p(){return Object(c.useContext)(f)}var h=t(38),O=Object(c.createContext)({}),v=function(e){var n=e.children,t=Object(c.useState)((function(){return!!localStorage.getItem("@tractian:logged")})),i=Object(j.a)(t,2),r=i[0],a=i[1];return Object(u.jsx)(O.Provider,{value:{logged:r,signIn:function(e,n){"teste1@tractian.com"===e&&"1234"===n?(localStorage.setItem("@tractian:logged","true"),a(!0)):alert("Senha ou usu\xe1rio inv\xe1lido")},signOut:function(){localStorage.removeItem("@tractian:logged"),a(!1)}},children:n})};function m(){return Object(c.useContext)(O)}var g,w,y,P,X,C,F,D,B,S,z,E,H,J,K,W,T,M,k,I,Z,V,G,L,N,R,Q,q,U,Y,$,_,ee,ne,te,ie,ce,re,ae,oe,le,se,de,je,be,xe,ue,fe,Ae=t(10),pe=l.d.div(g||(g=Object(s.a)(["\n  grid-area: AS;\n  background-color: ",";\n  color: ",";\n  padding: 20px;\n  border-right: 1px solid ",";\n  position: relative;\n\n  @media (max-width: 600px) {\n    padding-left: 7px;\n    position: fixed;\n    z-index: 2;\n    width: 200px;\n\n    height: ",";\n    overflow: hidden;\n\n    ",";\n  }\n"])),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.gray}),(function(e){return e.menuIsOpen?"100vh":"70px"}),(function(e){return!e.menuIsOpen&&Object(l.c)(w||(w=Object(s.a)(["\n        border: none;\n        border-bottom: 1px solid ",";\n      "])),(function(e){return e.theme.colors.gray}))})),he=l.d.header(y||(y=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  height: 40px;\n"]))),Oe=l.d.img(P||(P=Object(s.a)(["\n  width: 100%;\n\n  @media (max-width: 600px) {\n    display: none;\n  }\n"]))),ve=l.d.nav(X||(X=Object(s.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n"]))),me=l.d.a(C||(C=Object(s.a)(["\n  color: ",";\n  text-decoration: none;\n  transition: opacity 0.3s;\n  margin: 7px 0;\n  display: flex;\n  align-items: center;\n  &:hover {\n    opacity: 0.5;\n  }\n\n  > svg {\n    font-size: 20px;\n    margin-right: 7px;\n  }\n"])),(function(e){return e.theme.colors.info})),ge=l.d.button(F||(F=Object(s.a)(["\n  font-size: 16px;\n  color: ",";\n  border: none;\n  background: none;\n  transition: opacity 0.3s;\n  margin: 7px 0;\n  display: flex;\n  align-items: center;\n  &:hover {\n    opacity: 0.5;\n  }\n\n  > svg {\n    font-size: 20px;\n    margin-right: 7px;\n  }\n"])),(function(e){return e.theme.colors.info})),we=l.d.button(D||(D=Object(s.a)(["\n  display: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  font-size: 22px;\n  background-color: ",";\n  color: ",";\n\n  transition: opacity 0.3s;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    opacity: 0.7;\n  }\n  @media (max-width: 600px) {\n    display: flex;\n  }\n"])),(function(e){return e.theme.colors.warning}),(function(e){return e.theme.colors.white})),ye=l.d.footer(B||(B=Object(s.a)(["\n  display: none;\n  position: absolute;\n  bottom: 30px;\n  @media (max-width: 470px) {\n    display: ",";\n  }\n"])),(function(e){return e.menuIsOpen?"flex":"none"})),Pe=t(47),Xe=t(44),Ce=t(68),Fe=t(69),De="data:image/jpeg;base64,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",Be=t(67),Se=t.n(Be),ze=l.d.div(S||(S=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]))),Ee=l.d.span(z||(z=Object(s.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.white})),He=Object(l.d)(Se.a).attrs((function(e){var n=e.theme;return{onColor:n.colors.info,offColor:n.colors.warning}}))(E||(E=Object(s.a)(["\n  margin: 0 7px;\n"]))),Je=function(e){var n=e.labelLeft,t=e.labelRight,i=e.checked,c=e.onChange;return Object(u.jsxs)(ze,{children:[Object(u.jsx)(Ee,{children:n}),Object(u.jsx)(He,{checked:i,uncheckedIcon:!1,checkedIcon:!1,onChange:c}),Object(u.jsx)(Ee,{children:t})]})},Ke=function(){var e=m().signOut,n=p(),t=n.toggleTheme,i=n.theme,r=Object(c.useState)(!1),a=Object(j.a)(r,2),o=a[0],l=a[1],s=Object(c.useState)((function(){return"dark"===i.title})),d=Object(j.a)(s,2),b=d[0],x=d[1];return Object(u.jsxs)(pe,{menuIsOpen:o,children:[Object(u.jsxs)(he,{children:[Object(u.jsx)(we,{onClick:function(){l(!o)},children:o?Object(u.jsx)(Xe.a,{}):Object(u.jsx)(Xe.c,{})}),Object(u.jsx)(Oe,{src:De,alt:"Logo Tractian"})]}),Object(u.jsxs)(ve,{children:[Object(u.jsxs)(me,{href:"/",children:[Object(u.jsx)(Pe.a,{}),"Ativos"]}),Object(u.jsxs)(me,{href:"units",children:[Object(u.jsx)(Ce.a,{})," Unidades"]}),Object(u.jsxs)(me,{href:"empresas",children:[Object(u.jsx)(Fe.a,{}),"Empresas"]}),Object(u.jsxs)(me,{href:"users",children:[Object(u.jsx)(Pe.b,{})," Usu\xe1rios"]}),Object(u.jsxs)(ge,{onClick:e,children:[Object(u.jsx)(Xe.b,{}),"Sair"]})]}),Object(u.jsx)(ye,{menuIsOpen:o,children:Object(u.jsx)(Je,{checked:b,labelLeft:"Light",labelRight:"Right",onChange:function(){x(!b),t()}})})]})},We=l.d.div(H||(H=Object(s.a)(["\n  grid-area: CT;\n  background-color: ",";\n  color: ",";\n  padding: 25px;\n\n  height: calc(100vh -70px);\n  overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n  ::-webkit-scrollbar-thumb {\n    width: 10px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: ",";\n    border-radius: 10px;\n  }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.tertiary})),Te=function(e){var n=e.children;return Object(u.jsx)(We,{children:n})},Me=l.d.div(J||(J=Object(s.a)(["\n  grid-area: MH;\n  background-color: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.gray})),ke=l.d.div(K||(K=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n\n  img {\n    margin: 0 auto;\n    border-radius: 50%;\n    width: 25px;\n  }\n\n  color: ",";\n"])),(function(e){return e.theme.colors.white})),Ie=(l.d.h3(W||(W=Object(s.a)([""]))),l.d.span(T||(T=Object(s.a)([""])))),Ze=t(118),Ve=t(119),Ge=function(){var e=p(),n=e.toggleTheme,t=e.theme,i=Object(c.useState)((function(){return"dark"===t.title})),r=Object(j.a)(i,2),a=r[0],o=r[1];return Object(u.jsxs)(Me,{children:[Object(u.jsx)(Je,{checked:a,labelLeft:"Light",labelRight:"Right",onChange:function(){o(!a),n()}}),Object(u.jsxs)(ke,{children:[Object(u.jsx)(Ze.a,{style:{margin:"auto"},size:40,icon:Object(u.jsx)(Ve.a,{})}),Object(u.jsx)(Ie,{children:"Testador um"})]})]})},Le=l.d.div(M||(M=Object(s.a)(['\n  display: grid;\n  grid-template-columns: 250px auto;\n  grid-template-rows: 70px auto;\n\n  grid-template-areas:\n    "AS MH"\n    "AS CT";\n  height: 100vh;\n\n  @media(max-width: 600px){\n    grid-template-columns: 100%;\n  grid-template-rows: 70px auto;\n  \n  grid-template-areas:\n    "MH"\n    "CT";\n  }\n  \n']))),Ne=function(e){var n=e.children;return Object(u.jsxs)(Le,{children:[Object(u.jsx)(Ge,{}),Object(u.jsx)(Ke,{}),Object(u.jsx)(Te,{children:n})]})},Re=l.d.div(k||(k=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]))),Qe=l.d.div(I||(I=Object(s.a)(["\n  > h1 {\n    color: ",';\n    &::after {\n      content: "";\n      display: block;\n      width: 55px;\n      border-bottom: 10px solid ',";\n    }\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.lineColor})),qe=l.d.div(Z||(Z=Object(s.a)(["\n  display: flex;\n"]))),Ue=function(e){var n=e.lineColor,t=e.title,i=e.children;return Object(u.jsxs)(Re,{children:[Object(u.jsx)(Qe,{lineColor:n,children:Object(u.jsxs)("h1",{children:[" ",t]})}),Object(u.jsx)(qe,{children:i})]})},Ye=l.d.div(V||(V=Object(s.a)(["\n\n> select {\n  padding: 7px 10px ;\n  border-radius: 5px;\n\n  margin-left: 7px;\n}\n"]))),$e=function(e){var n=e.options,t=e.onChange,i=e.defaultValue;return Object(u.jsx)(Ye,{children:Object(u.jsx)("select",{onChange:t,defaultValue:i,children:n.map((function(e){return Object(u.jsxs)("option",{value:e.value,children:[" ",e.label]})}))})})},_e=t(27),en=t.n(_e),nn=l.d.div(G||(G=Object(s.a)(["\ndisplay: flex;\nflex-direction: column;\n\njustify-content: center;\n\n@media (max-width: 1200px)\n{\n  flex-direction: column;\n}\n ul {\n  list-style: none;\n}\n"]))),tn=l.d.section(L||(L=Object(s.a)(["\nwidth: 100%;\n\n\n"]))),cn=t(81),rn=t.n(cn),an=Object(l.d)("div")(N||(N=Object(s.a)(["\nwidth: 100%;\nheight: 100vh;\n"]))),on=l.d.div(R||(R=Object(s.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\n"]))),ln=Object(l.d)("h3")(Q||(Q=Object(s.a)(["\n"]))),sn=(Object(l.d)("h1")(q||(q=Object(s.a)(["\n"]))),[{prop:"spinningBubbles",name:"Carregando..."}]),dn=function(e){return Object(u.jsx)(an,{children:sn.map((function(e){return Object(u.jsxs)(on,{children:[Object(u.jsx)(rn.a,{type:e.prop,color:"#0086FF"}),Object(u.jsx)(ln,{children:e.name})]},e.prop)}))})},jn=l.d.div(U||(U=Object(s.a)(["\n\n"]))),bn=l.d.img(Y||(Y=Object(s.a)(["\nmax-width: 50%;\n"]))),xn=function(e){var n=e.src,t=e.alt;return Object(u.jsx)(jn,{children:Object(u.jsx)(bn,{src:n,alt:t})})},un=l.d.div($||($=Object(s.a)(["\n\ndisplay: flex;\njustify-content: space-between\n"]))),fn=function(e){var n=e.title,t=e.subtitle;return Object(u.jsxs)(un,{children:[Object(u.jsx)("p",{children:n}),Object(u.jsx)("span",{children:t})]})},An=l.d.div(_||(_=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),pn=function(e){var n=e.title,t=e.subtitle;return Object(u.jsxs)(An,{children:[Object(u.jsx)("p",{children:n}),Object(u.jsx)("span",{children:t})]})},hn=l.d.div(ee||(ee=Object(s.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\nmax-width: 300px;\nline-height: 2;\nbackground-color: ",";\nbox-shadow: 2px 0px 10px 0px rgba(0,0,0, .5);\npadding: 25px;\nborder-radius: 10px;\nmargin: 10px;\n"])),(function(e){return e.theme.colors.tertiary})),On=l.d.h3(ne||(ne=Object(s.a)(["\ntext-align: center;\n"]))),vn=function(e){var n=e.title,t=e.children;return Object(u.jsxs)(hn,{children:[Object(u.jsx)(On,{children:n}),t]})},mn=function(e){var n=Object(c.useState)(),t=Object(j.a)(n,2),i=t[0],r=t[1],a=Object(c.useState)("1"),o=Object(j.a)(a,2),l=o[0],s=o[1];return Object(c.useEffect)((function(){en.a.get("https://my-json-server.typicode.com/tractian/fake-api/assets/".concat(l)).then((function(e){r(e.data)}))}),[l]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(Ue,{title:"Ativos",lineColor:"#72B3F2",children:Object(u.jsx)($e,{options:[{value:"1",label:"GSJ1535"},{value:"2",label:"IBS1636"},{value:"3",label:"JVC1134"},{value:"4",label:"LZY5230"},{value:"5",label:"NBX2120"},{value:"6",label:"MOE1378"},{value:"7",label:"MYS2173"},{value:"8",label:"HPO6412"},{value:"9",label:"BMS9149"},{value:"10",label:"KBJ1010"}],onChange:function(e){return s(e.target.value)}})}),i?Object(u.jsxs)(nn,{children:[Object(u.jsx)("div",{children:[i].map((function(e){return Object(u.jsx)("h1",{children:null===e||void 0===e?void 0:e.name})}))}),Object(u.jsx)(vn,{title:"M\xe9tricas",children:[i].map((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(xn,{src:null===e||void 0===e?void 0:e.image,alt:"Imagem da ".concat(e.name," ")}),Object(u.jsxs)("p",{children:["Nome Sensor: ",null===e||void 0===e?void 0:e.sensors]}),Object(u.jsxs)("p",{children:["modelo: ",null===e||void 0===e?void 0:e.model]}),Object(u.jsx)(fn,{title:"Data da Ultima Coleta:",subtitle:e.metrics.lastUptimeAt}),Object(u.jsx)(fn,{title:"Total de Coletas:",subtitle:e.metrics.totalCollectsUptime}),Object(u.jsx)(fn,{title:"Total de Horas de Coletas:",subtitle:e.metrics.totalUptime.toFixed(2)})]})}))}),Object(u.jsx)(tn,{children:[i].map((function(e){return Object(u.jsxs)(vn,{title:"Condi\xe7\xe3o",children:[Object(u.jsxs)("p",{children:[" Sa\xfade: ",null===e||void 0===e?void 0:e.healthscore]}),Object(u.jsxs)("p",{children:[" Estado: ",null===e||void 0===e?void 0:e.status," "]})]})}))}),Object(u.jsx)(tn,{children:[i].map((function(e){return Object(u.jsxs)(vn,{title:"Especifica\xe7\xf5es t\xe9cnicas",children:[Object(u.jsx)(pn,{title:"maxTemp:",subtitle:null===e||void 0===e?void 0:e.specifications.maxTemp}),Object(u.jsx)(pn,{title:"Power:",subtitle:null===e||void 0===e?void 0:e.specifications.power}),Object(u.jsx)(pn,{title:"RPM:",subtitle:null===e||void 0===e?void 0:e.specifications.rpm})]})}))})]}):Object(u.jsx)(dn,{},e)]})},gn=l.d.div(te||(te=Object(s.a)(["\n\n"]))),wn=l.d.div(ie||(ie=Object(s.a)(["\nwidth: 300px;\nheight: 100px;\nmargin: 5px 7px;\ntext-align: center;\npadding: 15px;\nborder-radius: 10px;\nbackground-color: ",";\n\n"])),(function(e){return e.theme.colors.tertiary})),yn=l.d.div(ce||(ce=Object(s.a)(["\ndisplay:flex;\nflex-wrap: wrap;\n"]))),Pn=function(e){var n=Object(c.useState)([]),t=Object(j.a)(n,2),i=t[0],r=t[1];return Object(c.useEffect)((function(){en.a.get("https://my-json-server.typicode.com/tractian/fake-api/units/").then((function(e){r(e.data)}))}),[]),Object(u.jsxs)(gn,{children:[Object(u.jsx)(Ue,{title:"Unidades",lineColor:"#f3c52e",children:Object(u.jsx)("span",{})}),i?Object(u.jsx)(yn,{children:i.map((function(e){return Object(u.jsx)(wn,{children:null===e||void 0===e?void 0:e.name},e.id)}))}):Object(u.jsx)(dn,{},e)]})},Xn=l.d.div(re||(re=Object(s.a)(["\n\n"]))),Cn=l.d.div(ae||(ae=Object(s.a)(["\nwidth: 300px;\nheight: 100px;\ntext-align: center;\npadding: 15px;\nborder-radius: 10px;\nbackground-color: ",";\n"])),(function(e){return e.theme.colors.tertiary})),Fn=function(e){var n=Object(c.useState)([]),t=Object(j.a)(n,2),i=t[0],r=t[1];return Object(c.useEffect)((function(){en.a.get("https://my-json-server.typicode.com/tractian/fake-api/companies/").then((function(e){r(e.data)}))}),[]),Object(u.jsxs)(Xn,{children:[Object(u.jsx)(Ue,{title:"Empresas",lineColor:"#48d648",children:Object(u.jsx)("span",{})}),i?Object(u.jsxs)("div",{children:[console.log(i),i.map((function(e){return Object(u.jsxs)(Cn,{children:[Object(u.jsxs)("p",{children:["Nome: ",null===e||void 0===e?void 0:e.name]}),Object(u.jsxs)("p",{children:["Identifica\xe7\xe3o: ",null===e||void 0===e?void 0:e.id]})]})}))," "]}):Object(u.jsx)(dn,{})]})},Dn=l.d.div(oe||(oe=Object(s.a)(["\n\n"]))),Bn=l.d.div(le||(le=Object(s.a)(["\nwidth: 300px;\nheight: 100px;\nmargin: 5px 7px;\ntext-align: center;\npadding: 15px;\nborder-radius: 10px;\nbackground-color: ",";\n\n"])),(function(e){return e.theme.colors.tertiary})),Sn=l.d.div(se||(se=Object(s.a)(["\ndisplay: flex;\nflex: 1;\nflex-wrap: wrap;\n"]))),zn=function(){var e=Object(c.useState)([]),n=Object(j.a)(e,2),t=n[0],i=n[1];return Object(c.useEffect)((function(){en.a.get("https://my-json-server.typicode.com/tractian/fake-api/users/").then((function(e){i(e.data)}))}),[]),Object(u.jsxs)(Dn,{children:[Object(u.jsx)(Ue,{title:"Usu\xe1rios",lineColor:"#f74747"}),t?Object(u.jsxs)(Sn,{children:[t.map((function(e){return Object(u.jsxs)(Bn,{children:[Object(u.jsxs)("p",{children:["Nome: ",null===e||void 0===e?void 0:e.name]}),Object(u.jsxs)("p",{children:["Email: ",null===e||void 0===e?void 0:e.email]}),1===(null===e||void 0===e?void 0:e.companyId)?Object(u.jsx)("p",{children:"Empresa Teste"}):Object(u.jsx)("h1",{children:"Empresa"})]})}))," "]}):Object(u.jsx)(dn,{})]})},En=function(){return Object(u.jsx)(Ne,{children:Object(u.jsxs)(Ae.c,{children:[Object(u.jsx)(Ae.a,{path:"/",exact:!0,component:mn}),Object(u.jsx)(Ae.a,{path:"/actives",exact:!0,component:mn}),Object(u.jsx)(Ae.a,{path:"/units",exact:!0,component:Pn}),Object(u.jsx)(Ae.a,{path:"/empresas",exact:!0,component:Fn}),Object(u.jsx)(Ae.a,{path:"/users",exact:!0,component:zn})]})})},Hn=l.d.div(de||(de=Object(s.a)(["\n  height: 100vh;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.primary})),Jn=l.d.img(je||(je=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n  border-radius: 5px;\n"]))),Kn=l.d.form(be||(be=Object(s.a)(["\nwidth: 300px;\nheight: 300px;\npadding: 30px;\nborder-radius: 10px;\nbackground-color: ",";\n"])),(function(e){return e.theme.colors.tertiary})),Wn=l.d.h1(xe||(xe=Object(s.a)(["\n  color: ",';\n  content: "";\n  display: block;\n  width: 55px;\n  margin-bottom: 20px;\n  border-bottom: 10px solid ',";\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.sucess})),Tn=t(37),Mn=l.d.input(ue||(ue=Object(s.a)(["\n  width: 100%;\n  margin: 7px 0;\n  padding: 10px;\n  border-radius: 5px;\n"]))),kn=function(e){var n=Object.assign({},e);return Object(u.jsx)(Mn,Object(Tn.a)({},n))},In=t(85),Zn=l.d.button(fe||(fe=Object(s.a)(["\n  width: 100%;\n  margin: 7px 0;\n  padding: 10px;\n  border-radius: 5px;\n\n  font-weight: bold;\n  color: ",";\n  background-color: ",";\n\n  transition: opacity 0.3s;\n\n  &:hover {\n    opacity: 0.7;\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.warning})),Vn=function(e){var n=e.children,t=Object(In.a)(e,["children"]);return Object(u.jsx)(Zn,Object(Tn.a)(Object(Tn.a)({},t),{},{children:n}))},Gn=function(){var e=Object(c.useState)(""),n=Object(j.a)(e,2),t=n[0],i=n[1],r=Object(c.useState)(""),a=Object(j.a)(r,2),o=a[0],l=a[1],s=m().signIn;return Object(u.jsxs)(Hn,{children:[Object(u.jsx)(Jn,{src:De}),Object(u.jsxs)(Kn,{onSubmit:function(){return s(t,o)},children:[Object(u.jsx)(Wn,{children:"Entrar"}),Object(u.jsx)(kn,{type:"email",required:!0,placeholder:"Email",onChange:function(e){return i(e.target.value)}}),Object(u.jsx)(kn,{placeholder:"Senha",type:"password",required:!0,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)(Vn,{type:"submit",children:"Acessar"})]})]})},Ln=function(){return Object(u.jsx)(Ae.c,{children:Object(u.jsx)(Ae.a,{path:"/",component:Gn})})},Nn=function(){var e=m().logged;return Object(u.jsx)(h.a,{children:e?Object(u.jsx)(En,{}):Object(u.jsx)(Ln,{})})},Rn=function(){var e=p().theme;return Object(u.jsxs)(l.a,{theme:e,children:[Object(u.jsx)(d,{}),Object(u.jsx)(Nn,{})]})};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(A,{children:Object(u.jsx)(v,{children:Object(u.jsx)(Rn,{})})})}),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.a38a44f6.chunk.js.map