"use strict";(self.webpackChunktnb_market=self.webpackChunktnb_market||[]).push([[522],{522:(x,m,a)=>{a.r(m),a.d(m,{AdminModule:()=>J});var l=a(6814),c=a(8589),t=a(4946),g=a(5993);const f=function(e){return["/admin","product-save",e]};function C(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"tr",10)(1,"td",11),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td")(9,"a",12),t._uU(10,"G\xfcncelle"),t.qZA(),t.TgZ(11,"button",13),t.NdJ("click",function(){const d=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.remove(d.id))}),t._uU(12,"Sil"),t.qZA()()()}if(2&e){const n=s.$implicit;t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(t.lcZ(5,4,n.price)),t.xp6(3),t.Oqu(n.description),t.xp6(2),t.Q6J("routerLink",t.VKq(6,f,n.id))}}let v=(()=>{class e{constructor(n){this.productService=n,this.products=[]}ngOnInit(){this.getProducts()}getProducts(){this.productService.getProducts().subscribe(n=>{this.products=n})}remove(n){confirm("Bu \xfcr\xfcn\xfc silmek istedi\u011finize emin misiniz?")&&this.productService.deleteProduct(n).subscribe(o=>{this.getProducts()})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(g.M))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product"]],decls:25,vars:2,consts:[[1,"border-bottom","pb-2"],[1,"card"],[1,"card-header"],["routerLink","/admin/product-save",1,"btn","btn-sm","btn-primary","float-end"],[1,"card-body"],[1,"table-responsive"],[1,"table"],["scope","col"],["class","",4,"ngFor","ngForOf"],[1,"card-footer","text-muted"],[1,""],["scope","row"],["role","button",1,"btn","btn-primary",3,"routerLink"],["type","button",1,"btn","btn-danger","ms-2",3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"h4",0),t._uU(1,"\xdcr\xfcnler"),t.qZA(),t.TgZ(2,"div",1)(3,"div",2),t._uU(4," \xdcr\xfcnler "),t.TgZ(5,"a",3),t._uU(6,"Yeni \xdcr\xfcn Ekle"),t.qZA()(),t.TgZ(7,"div",4)(8,"div",5)(9,"table",6)(10,"thead")(11,"tr")(12,"th",7),t._uU(13,"\xdcr\xfcn Ad\u0131"),t.qZA(),t.TgZ(14,"th",7),t._uU(15,"\xdcr\xfcn\xfcn Birim Fiyat\u0131"),t.qZA(),t.TgZ(16,"th",7),t._uU(17,"\xdcr\xfcn A\xe7\u0131klamas\u0131"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,C,13,8,"tr",8),t.qZA()()()(),t.TgZ(20,"div",9),t._uU(21," Toplam "),t.TgZ(22,"b"),t._uU(23),t.qZA(),t._uU(24," Adet \xfcr\xfcn bulunmu\u015ftur. "),t.qZA()()),2&o&&(t.xp6(19),t.Q6J("ngForOf",r.products),t.xp6(4),t.Oqu(r.products.length))},dependencies:[l.sg,c.rH,l.H9]})}return e})(),A=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-layout"]],decls:12,vars:0,consts:[[1,"navbar","navbar-expand","navbar-dark","bg-dark"],[1,"nav","navbar-nav"],["routerLink","/","aria-current","page",1,"nav-item","nav-link","active"],[1,"visually-hidden"],["href","#",1,"nav-item","nav-link"],[1,"container"],[1,"row"],[1,"col"]],template:function(o,r){1&o&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._uU(3,"Anasayfa"),t.TgZ(4,"span",3),t._uU(5,"(current)"),t.qZA()(),t.TgZ(6,"a",4),t._uU(7,"Home"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t._UZ(11,"router-outlet"),t.qZA()()())},dependencies:[c.lC,c.rH]})}return e})();var b=a(450),i=a(95);function T(e,s){1&e&&(t.TgZ(0,"div",18),t._uU(1,"\xdcr\xfcn ad\u0131 zorunludur!"),t.qZA())}function y(e,s){if(1&e&&(t.TgZ(0,"option",19),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.Q6J("value",n.categoryId),t.xp6(1),t.hij(" ",n.categoryName," ")}}function q(e,s){1&e&&(t.TgZ(0,"div",18),t._uU(1,"Kategori zorunludur!"),t.qZA())}function M(e,s){1&e&&(t.TgZ(0,"div",18),t._uU(1,"Fiyat bilgisi zorunludur!"),t.qZA())}function F(e,s){1&e&&(t.TgZ(0,"div",18),t._uU(1,"A\xe7\u0131klama alan\u0131 zorunludur!"),t.qZA())}let p=(()=>{class e{constructor(n,o,r,d){this.categoryService=n,this.productService=o,this.router=r,this.route=d,this.categories=[],this.model={}}ngOnInit(){this.getCategories(),this.getProduct(this.route.snapshot.params.id)}getCategories(){this.categoryService.getCategories().subscribe(n=>{this.categories=n})}save(){(this.model.id?this.productService.updateProduct(this.model):this.productService.createProduct(this.model)).subscribe(o=>{this.router.navigateByUrl("/admin/product")})}getProduct(n){n&&this.productService.getProduct(n).subscribe(o=>{this.model=o})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(b.H),t.Y36(g.M),t.Y36(c.F0),t.Y36(c.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-save"]],decls:33,vars:10,consts:[[1,"card","mt-4"],[1,"card-header"],[1,"card-body"],["ngForm","",3,"submit"],["frm","ngForm"],[1,"mb-3"],[1,"form-label"],["required","","name","name","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],["class","form-text text-danger",4,"ngIf"],["required","","name","categoryId",1,"form-select",3,"ngModel","ngModelChange"],["categoryId","ngModel"],[3,"value",4,"ngFor","ngForOf"],["required","","name","price","type","number","min","0",1,"form-control",3,"ngModel","ngModelChange"],["price","ngModel"],["required","","name","description","rows","3",1,"form-control",3,"ngModel","ngModelChange"],["description","ngModel"],["type","submit","required","",1,"btn","btn-primary","float-end",3,"disabled"],[1,"form-text","text-danger"],[3,"value"]],template:function(o,r){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2," \xdcr\xfcn Kay\u0131t "),t.qZA(),t.TgZ(3,"div",2)(4,"form",3,4),t.NdJ("submit",function(){return r.save()}),t.TgZ(6,"div",5)(7,"label",6),t._uU(8,"\xdcr\xfcn Ad\u0131"),t.qZA(),t.TgZ(9,"input",7,8),t.NdJ("ngModelChange",function(u){return r.model.name=u}),t.qZA(),t.YNc(11,T,2,0,"div",9),t.qZA(),t.TgZ(12,"div",5)(13,"label",6),t._uU(14,"Kategori"),t.qZA(),t.TgZ(15,"select",10,11),t.NdJ("ngModelChange",function(u){return r.model.categoryId=u}),t.YNc(17,y,2,2,"option",12),t.qZA(),t.YNc(18,q,2,0,"div",9),t.qZA(),t.TgZ(19,"div",5)(20,"label",6),t._uU(21,"Fiyat"),t.qZA(),t.TgZ(22,"input",13,14),t.NdJ("ngModelChange",function(u){return r.model.price=u}),t.qZA(),t.YNc(24,M,2,0,"div",9),t.qZA(),t.TgZ(25,"div",5)(26,"label",6),t._uU(27,"A\xe7\u0131klama"),t.qZA(),t.TgZ(28,"textarea",15,16),t.NdJ("ngModelChange",function(u){return r.model.description=u}),t.qZA(),t.YNc(30,F,2,0,"div",9),t.qZA(),t.TgZ(31,"button",17),t._uU(32,"Kaydet"),t.qZA()()()()),2&o){const d=t.MAs(5),u=t.MAs(10),h=t.MAs(16),_=t.MAs(23),Z=t.MAs(29);t.xp6(9),t.Q6J("ngModel",r.model.name),t.xp6(2),t.Q6J("ngIf",u.invalid&&u.dirty),t.xp6(4),t.Q6J("ngModel",r.model.categoryId),t.xp6(2),t.Q6J("ngForOf",r.categories),t.xp6(1),t.Q6J("ngIf",h.invalid&&h.dirty),t.xp6(4),t.Q6J("ngModel",r.model.price),t.xp6(2),t.Q6J("ngIf",_.invalid&&_.dirty),t.xp6(4),t.Q6J("ngModel",r.model.description),t.xp6(2),t.Q6J("ngIf",Z.invalid&&Z.dirty),t.xp6(1),t.Q6J("disabled",d.invalid)}},dependencies:[l.sg,l.O5,i._Y,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.JL,i.Q7,i.qQ,i.On,i.F]})}return e})();const U=[{path:"",component:A,children:[{path:"",component:v},{path:"product",component:v},{path:"product-save",component:p},{path:"product-save/:id",component:p},{path:"product-delete/:id",component:p}]}];let P=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(U),c.Bz]})}return e})(),J=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[l.ez,P,i.u5]})}return e})()}}]);