import{E as l,r as n,f as i,H as c,m,k as e,y as _,C as d,L as u,u as o,g as p,B as v,I as f,J as y}from"./index-2ad15a8c.js";import{E as h}from"./Entry-e3919bc9.js";const g=e("p",{class:"text__entry"},"¿Olvidaste tu contraseña?",-1),b=e("p",{class:"text__entry"},"No hay problema. Simplemente háganos saber su dirección de correo electrónico y le enviaremos un enlace de restablecimiento de contraseña que le permitirá elegir una nueva.",-1),x={class:"form-group-entry"},w={key:0},E={class:"error"},k=e("button",{type:"submit",class:"btn"},"Enviar",-1),B=e("div",{class:"circles"},[e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li")],-1),P={__name:"ForgotPassword",setup(C){const t=l(),r=n({email:""});return(S,s)=>(i(),c(h,{class:"entryforgot"},{default:m(()=>[g,b,e("form",{class:"form-entry",onSubmit:s[1]||(s[1]=y(a=>o(t).handleForgotPassword(r.value),["prevent"]))},[e("div",x,[_(e("input",{type:"email",class:u(["form-control",{error_input:o(t).errors.email}]),id:"email","onUpdate:modelValue":s[0]||(s[0]=a=>r.value.email=a),placeholder:"Correo Electronico"},null,2),[[d,r.value.email]])]),o(t).errors.email?(i(),p("div",w,[e("p",E,v(o(t).errors.email[0]),1)])):f("",!0),k],32),B]),_:1}))}};export{P as default};
