import{D as b,G as x,r as A,o as V,f as _,g as n,j as o,m as u,u as a,F as g,y as i,C as f,k as l,z as v,A as S,B as y}from"./index-2ad15a8c.js";import{_ as C}from"./HeaderAccions-a0cacfd7.js";import{F as D,_ as d}from"./FormGroup-994f33db.js";import{u as U}from"./stageStore-4de5703d.js";import{u as B}from"./typeStageStore-0f639441.js";/* empty css                                                      */import"./Button-c85adebd.js";const F=l("option",{value:""},"Seleccione",-1),N=["value"],T=l("option",{value:""},"Seleccione",-1),k=["value"],R={__name:"UpdateDashboard",setup(w){const t=U(),p=B(),m=b(),c=x(),s=A({id:c.params.id,stage_name:"",stage_type_stage_id:"",stage_case_id:"",stage_notes:""});return V(async()=>{p.getTypeStagesAll(),m.getCasesAll(),await t.getStage(c.params.id),s.value=t.stage}),(z,r)=>(_(),n(g,null,[o(C,{title:"Actualizar Etapa",to:"StageDashboard"}),o(D,{create:a(t).updateStage,form:s.value,"button-text":"Actualizar"},{default:u(()=>[o(d,{label:"Nombre",error:a(t).errors?a(t).errors.stage_name:[]},{default:u(()=>[i(l("input",{type:"text",id:"stage_name","onUpdate:modelValue":r[0]||(r[0]=e=>s.value.stage_name=e)},null,512),[[f,s.value.stage_name]])]),_:1},8,["error"]),o(d,{label:"Tipo de Etapa",error:a(t).errors?a(t).errors.stage_type_stage_id:[]},{default:u(()=>[i(l("select",{id:"stage_type_stage_id","onUpdate:modelValue":r[1]||(r[1]=e=>s.value.stage_type_stage_id=e)},[F,(_(!0),n(g,null,S(a(p).typeStagesAll,e=>(_(),n("option",{value:e.id},y(e.type_stage_name),9,N))),256))],512),[[v,s.value.stage_type_stage_id]])]),_:1},8,["error"]),o(d,{label:"Caso",error:a(t).errors?a(t).errors.stage_case_id:[]},{default:u(()=>[i(l("select",{id:"stage_case_id","onUpdate:modelValue":r[2]||(r[2]=e=>s.value.stage_case_id=e)},[T,(_(!0),n(g,null,S(a(m).casesAll,e=>(_(),n("option",{value:e.id},y(e.case_name),9,k))),256))],512),[[v,s.value.stage_case_id]])]),_:1},8,["error"]),o(d,{label:"Notas",error:a(t).errors?a(t).errors.stage_notes:[]},{default:u(()=>[i(l("textarea",{id:"stage_notes","onUpdate:modelValue":r[3]||(r[3]=e=>s.value.stage_notes=e)},null,512),[[f,s.value.stage_notes]])]),_:1},8,["error"])]),_:1},8,["create","form"])],64))}};export{R as default};
