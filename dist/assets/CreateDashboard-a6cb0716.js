import{r as v,o as f,f as d,g as _,j as o,m as p,u as r,F as y,y as n,z as b,k as s,A as x,B as V,C as i}from"./index-2ad15a8c.js";import{_ as U}from"./HeaderAccions-a0cacfd7.js";import{F as N,_ as u}from"./FormGroup-994f33db.js";import{u as C}from"./personStore-e6ee95fb.js";import{u as P}from"./typePersonStore-4d6d8898.js";/* empty css                                                      */import"./Button-c85adebd.js";const A=s("option",{value:""},"Seleccione",-1),D=["value"],$={__name:"CreateDashboard",setup(F){const t=C(),m=P(),a=v({per_name:"",per_lastname:"",per_email:"",per_phone:"",per_address:"",per_nit:"",per_issue_nit:"",per_num_ministry:"",per_num_dispaych:"",per_radicated:"",per_authority:"",per_number:"",per_type_person_id:""});return f(()=>{m.getTypePersonsAll()}),(S,l)=>(d(),_(y,null,[o(U,{title:"Crear Persona",to:"PersonDashboard"}),o(N,{create:r(t).createPerson,form:a.value,"button-text":"Crear"},{default:p(()=>[o(u,{label:"Tipo de persona",error:r(t).errors?r(t).errors.per_type_person_id:[]},{default:p(()=>[n(s("select",{class:"select",id:"per_type_person_id","onUpdate:modelValue":l[0]||(l[0]=e=>a.value.per_type_person_id=e)},[A,(d(!0),_(y,null,x(r(m).typePersonsAll,e=>(d(),_("option",{key:e.id,value:e.id},V(e.type_person_name),9,D))),128))],512),[[b,a.value.per_type_person_id]])]),_:1},8,["error"]),o(u,{label:"Nombre",error:r(t).errors?r(t).errors.per_name:[]},{default:p(()=>[n(s("input",{class:"input",type:"text",id:"per_name","onUpdate:modelValue":l[1]||(l[1]=e=>a.value.per_name=e)},null,512),[[i,a.value.per_name]])]),_:1},8,["error"]),o(u,{label:"Apellido",error:r(t).errors?r(t).errors.per_lastname:[]},{default:p(()=>[n(s("input",{class:"input",type:"text",id:"per_lastname","onUpdate:modelValue":l[2]||(l[2]=e=>a.value.per_lastname=e)},null,512),[[i,a.value.per_lastname]])]),_:1},8,["error"]),o(u,{label:"Correo",error:r(t).errors?r(t).errors.per_email:[]},{default:p(()=>[n(s("input",{class:"email",type:"text",id:"per_email","onUpdate:modelValue":l[3]||(l[3]=e=>a.value.per_email=e)},null,512),[[i,a.value.per_email]])]),_:1},8,["error"]),o(u,{label:"Telefono",error:r(t).errors?r(t).errors.per_phone:[]},{default:p(()=>[n(s("input",{class:"input",type:"text",id:"per_phone","onUpdate:modelValue":l[4]||(l[4]=e=>a.value.per_phone=e)},null,512),[[i,a.value.per_phone]])]),_:1},8,["error"]),o(u,{label:"Direccion",error:r(t).errors?r(t).errors.per_address:[]},{default:p(()=>[n(s("input",{class:"input",type:"text",id:"per_address","onUpdate:modelValue":l[5]||(l[5]=e=>a.value.per_address=e)},null,512),[[i,a.value.per_address]])]),_:1},8,["error"]),o(u,{label:"Nit",error:r(t).errors?r(t).errors.per_nit:[]},{default:p(()=>[n(s("input",{class:"input",type:"text",id:"per_nit","onUpdate:modelValue":l[6]||(l[6]=e=>a.value.per_nit=e)},null,512),[[i,a.value.per_nit]])]),_:1},8,["error"]),o(u,{label:"Fecha de expedicion",error:r(t).errors?r(t).errors.per_issue_nit:[]},{default:p(()=>[n(s("input",{class:"date",type:"date",id:"per_issue_nit","onUpdate:modelValue":l[7]||(l[7]=e=>a.value.per_issue_nit=e)},null,512),[[i,a.value.per_issue_nit]])]),_:1},8,["error"]),o(u,{label:"Numero de ministerio",error:r(t).errors?r(t).errors.per_num_ministry:[]},{default:p(()=>[n(s("input",{class:"number",type:"text",id:"per_num_ministry","onUpdate:modelValue":l[8]||(l[8]=e=>a.value.per_num_ministry=e)},null,512),[[i,a.value.per_num_ministry]])]),_:1},8,["error"]),o(u,{label:"Numero de despacho",error:r(t).errors?r(t).errors.per_num_dispaych:[]},{default:p(()=>[n(s("input",{class:"number",type:"text",id:"per_num_dispaych","onUpdate:modelValue":l[9]||(l[9]=e=>a.value.per_num_dispaych=e)},null,512),[[i,a.value.per_num_dispaych]])]),_:1},8,["error"]),o(u,{label:"Radicado",error:r(t).errors?r(t).errors.per_radicated:[]},{default:p(()=>[n(s("input",{class:"input",type:"text",id:"per_radicated","onUpdate:modelValue":l[10]||(l[10]=e=>a.value.per_radicated=e)},null,512),[[i,a.value.per_radicated]])]),_:1},8,["error"]),o(u,{label:"Autoridad",error:r(t).errors?r(t).errors.per_authority:[]},{default:p(()=>[n(s("input",{class:"input",type:"text",id:"per_authority","onUpdate:modelValue":l[11]||(l[11]=e=>a.value.per_authority=e)},null,512),[[i,a.value.per_authority]])]),_:1},8,["error"]),o(u,{label:"Numero",error:r(t).errors?r(t).errors.per_number:[]},{default:p(()=>[n(s("input",{class:"number",type:"text",id:"per_number","onUpdate:modelValue":l[12]||(l[12]=e=>a.value.per_number=e)},null,512),[[i,a.value.per_number]])]),_:1},8,["error"])]),_:1},8,["create","form"])],64))}};export{$ as default};
