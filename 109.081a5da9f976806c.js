"use strict";(self.webpackChunkSOF_S_MA_7_1_DAWA_Project_Bookish_Bookshop=self.webpackChunkSOF_S_MA_7_1_DAWA_Project_Bookish_Bookshop||[]).push([[109],{3109:(H,C,r)=>{r.r(C),r.d(C,{SugerenciasModule:()=>L});var d=r(6895),b=r(3060),e=r(4650),m=r(3546),o=r(4006),g=r(5412),Z=r(4859),p=r(9549),T=r(4144),f=r(9602);function w(t,i){1&t&&(e.TgZ(0,"div",14),e._uU(1," \xa1Has enviado enviado la sugerencia correctamente! "),e.qZA())}let S=(()=>{class t{constructor(n,a){this.editarDatos=n,this.dialogRef=a,this.isRegistered=!1,this.isEdit=!1}onSubmit(){if(this.isEdit){const n={id_sugerencia:this.ingresarSugerencia.value.id,nombreLibro:this.ingresarSugerencia.value.titulo,isbn:this.ingresarSugerencia.value.isbn,autor:this.ingresarSugerencia.value.autor,fecha:this.ingresarSugerencia.value.fecha,ci_solicitante:this.ingresarSugerencia.value.ci_solicitante};return console.log("Sugrencia: "+n),void this.dialogRef.close({data:n})}this.isRegistered=!0,setTimeout(()=>{this.isRegistered=!1},3e3),console.log(this.ingresarSugerencia.value)}ngOnInit(){if(this.ingresarSugerencia=new o.cw({autor:new o.NI("",o.kI.required),titulo:new o.NI("",o.kI.required),ci_solicitante:new o.NI("",o.kI.required),fecha:new o.NI("",o.kI.required),isbn:new o.NI("",o.kI.required),razones:new o.NI("",o.kI.required)}),this.editarDatos)return this.isEdit=!0,this.ingresarSugerencia.controls.titulo.setValue(this.editarDatos.nombreLibro),this.ingresarSugerencia.controls.isbn.setValue(this.editarDatos.isbn),this.ingresarSugerencia.controls.autor.setValue(this.editarDatos.autor),this.ingresarSugerencia.controls.fecha.setValue(new Date(this.editarDatos.fecha)),void this.ingresarSugerencia.controls.ci_solicitante.setValue(this.editarDatos.ci_solicitante);this.isEdit=!1}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.WI),e.Y36(g.so))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-agregar-sugerencia"]],decls:27,vars:5,consts:[[1,"container-form"],[3,"formGroup","ngSubmit"],[1,"subtitulos-form"],[1,"campos-field"],["matInput","","placeholder","Autor","formControlName","autor"],["matInput","","placeholder","Titulo","formControlName","titulo"],["matInput","","placeholder","Solicitante","formControlName","ci_solicitante"],["matInput","","formControlName","fecha","date-format","yyyy-MM-dd",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","maxlength","13","placeholder","ISBN","formControlName","isbn"],["matInput","","placeholder","Razones de recomendaci\xf3n","formControlName","razones"],["mat-raised-button","",3,"disabled","click"],["class","alert alert-primary","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-primary"]],template:function(n,a){if(1&n&&(e.TgZ(0,"div",0)(1,"mat-card")(2,"form",1),e.NdJ("ngSubmit",function(){return a.onSubmit()}),e.TgZ(3,"h2",2),e._uU(4,"Detalles del libro"),e.qZA(),e.TgZ(5,"mat-form-field",3),e._UZ(6,"input",4),e.qZA(),e.TgZ(7,"mat-form-field",3),e._UZ(8,"input",5),e.qZA(),e.TgZ(9,"mat-form-field",3),e._UZ(10,"input",6),e.qZA(),e.TgZ(11,"mat-form-field",3)(12,"mat-label"),e._uU(13,"Fecha de publicacion"),e.qZA(),e._UZ(14,"input",7)(15,"mat-datepicker-toggle",8)(16,"mat-datepicker",null,9),e.qZA(),e.TgZ(18,"mat-form-field",3),e._UZ(19,"input",10),e.qZA(),e.TgZ(20,"h2",2),e._uU(21,"Razones de recomendaci\xf3n"),e.qZA(),e.TgZ(22,"mat-form-field",3),e._UZ(23,"textarea",11),e.qZA(),e.TgZ(24,"button",12),e.NdJ("click",function(){return a.onSubmit()}),e._uU(25,"Enviar"),e.qZA(),e.YNc(26,w,2,0,"div",13),e.qZA()()()),2&n){const s=e.MAs(17);e.xp6(2),e.Q6J("formGroup",a.ingresarSugerencia),e.xp6(12),e.Q6J("matDatepicker",s),e.xp6(1),e.Q6J("for",s),e.xp6(9),e.Q6J("disabled",!a.ingresarSugerencia.valid),e.xp6(2),e.Q6J("ngIf",a.isRegistered)}},dependencies:[d.O5,o._Y,o.Fj,o.JJ,o.JL,o.nD,o.sg,o.u,Z.lW,m.a8,p.KE,p.hX,p.R9,T.Nt,f.Mq,f.hl,f.nW],styles:[".campos-field[_ngcontent-%COMP%]{width:60%;margin-left:20%;margin-right:20%}.subtitulos-form[_ngcontent-%COMP%]{margin-left:15%}.container-form[_ngcontent-%COMP%]{width:80%;margin:auto}"]}),t})();var c=r(7155),A=r(3336),h=r(1561),M=r(6308);function O(t,i){1&t&&(e.TgZ(0,"th",16),e._uU(1," Id"),e.qZA())}function v(t,i){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.id_sugerencia,"")}}function U(t,i){1&t&&(e.TgZ(0,"th",16),e._uU(1," Titulo"),e.qZA())}function P(t,i){if(1&t&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.nombreLibro,"")}}function y(t,i){1&t&&(e.TgZ(0,"th",16),e._uU(1," Autor"),e.qZA())}function D(t,i){if(1&t&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.autor," ")}}function q(t,i){1&t&&(e.TgZ(0,"th",16),e._uU(1," Fecha"),e.qZA())}function N(t,i){if(1&t&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&t){const n=i.$implicit,a=e.oxw();e.xp6(1),e.hij(" ",a.formatDate(n.fecha),"")}}function I(t,i){1&t&&(e.TgZ(0,"th",16),e._uU(1," CI Solicitante"),e.qZA())}function k(t,i){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij("",n.ci_solicitante," ")}}function V(t,i){1&t&&(e.TgZ(0,"th",16),e._uU(1," ISBN"),e.qZA())}function Y(t,i){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.isbn," ")}}function R(t,i){1&t&&e._UZ(0,"th",16)}function B(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"td",17)(1,"button",21)(2,"mat-menu",null,22)(4,"button",23),e.NdJ("click",function(){const l=e.CHM(n).$implicit,u=e.oxw();return e.KtG(u.deleteSuggestions(l.id_sugerencia))}),e.TgZ(5,"mat-icon"),e._uU(6,"delete"),e.qZA(),e.TgZ(7,"span"),e._uU(8,"Eliminar"),e.qZA()(),e.TgZ(9,"button",23),e.NdJ("click",function(){const l=e.CHM(n).$implicit,u=e.oxw();return e.KtG(u.editSuggest(l))}),e.TgZ(10,"mat-icon"),e._uU(11,"edit"),e.qZA(),e.TgZ(12,"span"),e._uU(13,"Editar"),e.qZA()()(),e.TgZ(14,"mat-icon"),e._uU(15,"more_vert"),e.qZA()()()}if(2&t){const n=e.MAs(3);e.xp6(1),e.Q6J("matMenuTriggerFor",n)}}function J(t,i){1&t&&e._UZ(0,"tr",24)}function F(t,i){1&t&&e._UZ(0,"tr",25)}let Q=(()=>{class t{constructor(n,a){this.dialog=n,this.datepipe=a,this.dataSource=[],this.displayedColumns=["id_sugerencia","nombreLibro","autor","fecha","ci_solicitante","isbn","modificar"],this.data=[{id_sugerencia:1,nombreLibro:"El principito",autor:"Una persona",fecha:"2014/02/27",ci_solicitante:"0258974512",isbn:"44-55-5-441"},{id_sugerencia:2,nombreLibro:"DOS",autor:"otra persona",fecha:"2014/02/27",ci_solicitante:"025894444512",isbn:"5515-1515-3565"},{id_sugerencia:3,nombreLibro:" TRES",autor:"Una persona",fecha:"2014/02/27",ci_solicitante:"0258888512",isbn:"5858-12-35-15"}]}ngOnInit(){this.dataSource=new c.by(this.data)}deleteSuggestions(n){const a=this.data.findIndex(s=>s.id_sugerencia===n);a>-1&&this.data.splice(a,1),this.updateDataSource()}updateDataSource(){this.dataSource.data=this.data}editSuggest(n){this.dialog.open(S,{data:n}).afterClosed().subscribe(s=>{const l=s.data,u=this.data.find(_=>_.isbn==l.isbn);if(console.log(u),null!=u){const _=this.data.findIndex($=>$.isbn==l.isbn);this.data[_]=l,this.updateDataSource()}})}padTo2Digits(n){return n.toString().padStart(2,"0")}formatDate(n){const a=new Date(n);return[this.padTo2Digits(a.getDate()),this.padTo2Digits(a.getMonth()+1),a.getFullYear()].join("/")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.uw),e.Y36(d.uU))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-view-sugerencias"]],decls:25,vars:3,consts:[[1,"container"],["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id_sugerencia"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombreLibro"],["mat-cell","","class","m-card-title",4,"matCellDef"],["matColumnDef","autor"],["mat-cell","","class","m-card-sub-title",4,"matCellDef"],["matColumnDef","fecha"],["mat-cell","","class","has_label_on_mobile",4,"matCellDef"],["matColumnDef","ci_solicitante"],["matColumnDef","isbn"],["matColumnDef","modificar"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"m-card-title"],["mat-cell","",1,"m-card-sub-title"],["mat-cell","",1,"has_label_on_mobile"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"table",1),e.ynx(2,2),e.YNc(3,O,2,0,"th",3),e.YNc(4,v,2,1,"td",4),e.BQk(),e.ynx(5,5),e.YNc(6,U,2,0,"th",3),e.YNc(7,P,2,1,"td",6),e.BQk(),e.ynx(8,7),e.YNc(9,y,2,0,"th",3),e.YNc(10,D,2,1,"td",8),e.BQk(),e.ynx(11,9),e.YNc(12,q,2,0,"th",3),e.YNc(13,N,2,1,"td",10),e.BQk(),e.ynx(14,11),e.YNc(15,I,2,0,"th",3),e.YNc(16,k,2,1,"td",4),e.BQk(),e.ynx(17,12),e.YNc(18,V,2,0,"th",3),e.YNc(19,Y,2,1,"td",4),e.BQk(),e.ynx(20,13),e.YNc(21,R,1,0,"th",3),e.YNc(22,B,16,1,"td",4),e.BQk(),e.YNc(23,J,1,0,"tr",14),e.YNc(24,F,1,0,"tr",15),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("dataSource",a.dataSource),e.xp6(22),e.Q6J("matHeaderRowDef",a.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns))},dependencies:[Z.lW,A.Hw,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,h.VK,h.OP,h.p6,M.YE],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.mat-icon[_ngcontent-%COMP%]{color:#3e75ff}@media screen and (max-width: 450px){.mat-elevation-z8[_ngcontent-%COMP%]{background:transparent;box-shadow:none}.mat-header-row[_ngcontent-%COMP%]{display:none}tbody[_ngcontent-%COMP%]{display:block;width:100%}.mat-table[_ngcontent-%COMP%]{background:transparent}.mat-table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{display:block;overflow:hidden;height:auto;position:relative;clear:both;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;background-color:#fff;border-radius:3px}.mat-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] + .mat-row[_ngcontent-%COMP%]{margin-top:24px}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{display:block;width:100%;padding:0 16px;margin:16px 0;border:0 none}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:first-child{padding:0 48px 0 16px}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%]{font-size:20px;color:inherit}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:first-child:before{display:none}.mat-table[_ngcontent-%COMP%]   .mat-cell.m-card-sub-title[_ngcontent-%COMP%]{margin-top:-8px;padding:0 48px 0 16px;color:#0000008a}.mat-table[_ngcontent-%COMP%]   .has_label_on_mobile[_ngcontent-%COMP%]:before{content:attr(data-label);display:inline;font-weight:400}.mat-table[_ngcontent-%COMP%]   .mat-column-star[_ngcontent-%COMP%]{width:auto;padding:8px 0 0!important;margin:0;position:absolute;top:0;right:0}.mat-table[_ngcontent-%COMP%]   .mat-column-star[_ngcontent-%COMP%]:before{display:none}.mat-paginator[_ngcontent-%COMP%]{margin-top:24px}}"]}),t})(),x=(()=>{class t{constructor(){this.recomendaciones=[{titulo:"Consulta",descripcion:"Consulte primero el cat\xe1logo para asegurarse de que a\xfan no tenemos el art\xedculo."},{titulo:"Proceso",descripcion:"Para procesar su solicitud r\xe1pidamente, es \xfatil si puede proporcionar la mayor cantidad de informaci\xf3n posible."},{titulo:"Uso",descripcion:" Utilice un formulario separado para cada art\xedculo sugerido. Todas las sugerencias ser\xe1n consideradas y nos comunicaremos con usted para informarle cuando el art\xedculo est\xe9 disponible."}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sugerencia"]],decls:37,vars:6,consts:[["id","contenedor-principal"],[1,"division"],[1,"linea"],[1,"row"],[1,"col","col-sm-5","m-auto"],[1,"col","col-sm-5","m-auto","mt-sm-1","w-75"],[1,"col","col-sm-11","m-auto","mt-sm-1"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Recomendaciones"),e.qZA(),e._UZ(4,"div",2),e.qZA(),e.TgZ(5,"div",3)(6,"div",4)(7,"mat-card")(8,"mat-card-title"),e._uU(9),e.qZA(),e.TgZ(10,"mat-card-content")(11,"p"),e._uU(12),e.qZA()()()(),e.TgZ(13,"div",5)(14,"mat-card")(15,"mat-card-title"),e._uU(16),e.qZA(),e.TgZ(17,"mat-card-content")(18,"p"),e._uU(19),e.qZA()()()(),e.TgZ(20,"div",6)(21,"mat-card")(22,"mat-card-title"),e._uU(23),e.qZA(),e.TgZ(24,"mat-card-content")(25,"p"),e._uU(26),e.qZA()()()()(),e.TgZ(27,"div",1)(28,"h2"),e._uU(29,"Formulario"),e.qZA(),e._UZ(30,"div",2),e.qZA(),e._UZ(31,"app-agregar-sugerencia"),e.TgZ(32,"div",1)(33,"h2"),e._uU(34,"Sugerencias enviadas"),e.qZA(),e._UZ(35,"div",2),e.qZA(),e._UZ(36,"app-view-sugerencias"),e.qZA()),2&n&&(e.xp6(9),e.Oqu(a.recomendaciones[0].titulo),e.xp6(3),e.Oqu(a.recomendaciones[0].descripcion),e.xp6(4),e.Oqu(a.recomendaciones[1].titulo),e.xp6(3),e.Oqu(a.recomendaciones[1].descripcion),e.xp6(4),e.Oqu(a.recomendaciones[2].titulo),e.xp6(3),e.Oqu(a.recomendaciones[2].descripcion))},dependencies:[m.a8,m.dn,m.n5,S,Q],styles:["#contenedor-principal[_ngcontent-%COMP%]{margin-right:17%;margin-left:17%}@media screen and (max-width: 700px){#contenedor-principal[_ngcontent-%COMP%]{margin-right:0;margin-left:0}}.division[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-top:50px}.linea[_ngcontent-%COMP%]{width:100%;border-top:1px solid black;margin-left:7px}.img-introduccion[_ngcontent-%COMP%]{width:20%;margin-left:10px;margin-right:10px}#contenedor-introduccion[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:center;justify-content:space-between;align-items:center;border:1px solid rgb(169,165,165);background-color:#addad9a9;width:60%;margin:auto;padding:1rem;border-radius:10px;box-shadow:0 0 10px #aaa}"]}),t})();const j=[{path:"",children:[{path:"sugerencia",component:x},{path:"",component:x},{path:"**",redirectTo:""}]}];let z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[b.Bz.forChild(j),b.Bz]}),t})();var E=r(4466);let L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,z,E.m]}),t})()}}]);