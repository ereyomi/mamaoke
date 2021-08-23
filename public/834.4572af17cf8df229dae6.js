(self.webpackChunkclient=self.webpackChunkclient||[]).push([[834],{1834:(t,i,e)=>{"use strict";e.r(i),e.d(i,{DashboardModule:()=>j});var n=e(1116),o=e(8468),s=e(8384),a=e(1462),c=e(8619),p=e(8512);let r=(()=>{class t{constructor(){this.isDisplayProductModal=new p.X(!1),this.isDisplayBagModal=new p.X(!1)}getProductModalDisplayStatus(){return this.isDisplayProductModal.asObservable()}getBagModalDisplayStatus(){return this.isDisplayBagModal.asObservable()}openProductModal(){this.isDisplayProductModal.next(!0)}closeProductModal(){this.isDisplayProductModal.next(!1)}openBagModal(){this.isDisplayBagModal.next(!0)}closeBagModal(){this.isDisplayBagModal.next(!1)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=e(5285),u=e(5291),g=e(4150),d=e(1608),Z=e(1966);function m(t,i){if(1&t){const t=c.EpF();c.TgZ(0,"div",11),c.NdJ("click",function(){return c.CHM(t),c.oxw().toggleSearched()}),c._UZ(1,"fa-icon",9),c.qZA()}if(2&t){const t=c.oxw();c.xp6(1),c.Q6J("icon",t.icons.search)}}function h(t,i){if(1&t&&(c.TgZ(0,"div",12),c._UZ(1,"app-inputs",13),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("config",t.searchConfig)}}let f=(()=>{class t{constructor(t,i){this.eRef=t,this.pS=i,this.searchConfig=(0,g.x)("","search","Search by food name","search"),this.icons={cart:u.sq$,search:u.wn1},this.searchStatus=!0}ngOnInit(){}toggleSearched(){this.searchStatus=!this.searchStatus}get isToSearch(){return this.searchStatus}eventChecker(t){"div"!==t.target.localName&&this.toggleSearched()}openModal(){this.pS.openBagModal()}}return t.\u0275fac=function(i){return new(i||t)(c.Y36(c.SBq),c.Y36(r))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-dashboard-header"]],decls:15,vars:3,consts:[[1,"dash-header"],[1,"user-avatar"],[1,"image-holder"],["src","assets/img/user.png","alt",""],[1,"dash-name"],["class","search-icon dash-bg-icon",3,"click",4,"ngIf"],["class","search-input",4,"ngIf"],[1,"cart-icon",3,"click"],[1,"dash-bg-icon"],[3,"icon"],[1,"cart-icon-number"],[1,"search-icon","dash-bg-icon",3,"click"],[1,"search-input"],[3,"config"]],template:function(t,i){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c._UZ(3,"img",3),c.qZA(),c.qZA(),c.TgZ(4,"div",4),c.TgZ(5,"p"),c._uU(6," Welcome "),c.qZA(),c.qZA(),c.YNc(7,m,2,1,"div",5),c.YNc(8,h,2,1,"div",6),c.TgZ(9,"div",7),c.NdJ("click",function(){return i.openModal()}),c.TgZ(10,"div",8),c._UZ(11,"fa-icon",9),c.qZA(),c.TgZ(12,"div",10),c.TgZ(13,"span"),c._uU(14,"20"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(7),c.Q6J("ngIf",!i.isToSearch),c.xp6(1),c.Q6J("ngIf",i.isToSearch),c.xp6(3),c.Q6J("icon",i.icons.cart))},directives:[n.O5,d.BN,Z.S],styles:[""]}),t})();function q(t,i){if(1&t&&(c.TgZ(0,"div",2),c.TgZ(1,"div",3),c.TgZ(2,"div",4),c._UZ(3,"img",5),c.qZA(),c.qZA(),c.TgZ(4,"div",6),c.TgZ(5,"p"),c._uU(6),c.qZA(),c.qZA(),c.qZA()),2&t){const t=i.$implicit;c.xp6(3),c.Q6J("src","assets/categories/"+t.icon,c.LSH)("alt",t.name),c.xp6(3),c.Oqu(t.name)}}let v=(()=>{class t{constructor(){this.categories=[{name:"Doughnutt",icon:"doughnut.svg"},{name:"Food",icon:"rice.svg"},{name:"Soup",icon:"soup.svg"},{name:"Soda",icon:"soda-coke.svg"},{name:"Hot Drinks",icon:"hot-drinks-coffee-cup.svg"},{name:"Hot Drinks",icon:"drink-cola-coke.svg"},{name:"Hot Drinks",icon:"drinks-b.svg"}]}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-dashboard-categories"]],decls:2,vars:1,consts:[[1,"dash-categories-component"],["class","cat-list-sm",4,"ngFor","ngForOf"],[1,"cat-list-sm"],[1,"cat-icon"],[1,"cat-icon-holder"],[3,"src","alt"],[1,"cat-text"]],template:function(t,i){1&t&&(c.TgZ(0,"div",0),c.YNc(1,q,7,3,"div",1),c.qZA()),2&t&&(c.xp6(1),c.Q6J("ngForOf",i.categories))},directives:[n.sg],styles:[""]}),t})();function A(t,i){if(1&t){const t=c.EpF();c.TgZ(0,"div",2),c.TgZ(1,"div",3),c.NdJ("click",function(){return c.CHM(t),c.oxw().cart()}),c.TgZ(2,"div",4),c._UZ(3,"img",5),c.qZA(),c.qZA(),c.TgZ(4,"div",6),c.TgZ(5,"p"),c._uU(6),c.qZA(),c.TgZ(7,"p"),c._uU(8),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=i.$implicit,e=c.oxw();c.xp6(3),c.Q6J("src","assets/food/"+t.image,c.LSH)("alt",t.name),c.xp6(3),c.hij(" ",t.name," "),c.xp6(2),c.hij(" ",e.formatPrice(t.amount)," ")}}let T=(()=>{class t{constructor(t){this.pS=t,this.products=[{name:"Pepper soup",image:"pepper-soup-goat-meat.jpg",amount:1500},{name:"Egusi soup",image:"egusi-soup.jpg",amount:2e3},{name:"cat pepper soup",image:"catfish-pepper-soup.jpg",amount:3700},{name:"Water leaf",image:"water-leave-soup.jpg",amount:1200},{name:"Fried Rice",image:"fried-rice.jpg",amount:1500},{name:"Jollof Rice",image:"jollof-rice.webp",amount:1500},{name:"Afang soup",image:"nigerian-afang-soup.jpg",amount:800},{name:"Pepper soup b",image:"pepper-soup.jpg",amount:15500}],this.formatPrice=t=>new Intl.NumberFormat("en-Us",{style:"currency",currency:"NGN"}).format(t)}ngOnInit(){}cart(){console.log("clicked"),this.pS.openProductModal()}}return t.\u0275fac=function(i){return new(i||t)(c.Y36(r))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-dashboard-product"]],decls:2,vars:1,consts:[[1,"dash-product-component"],["class","dash-product",4,"ngFor","ngForOf"],[1,"dash-product"],[1,"dash-product-image",3,"click"],[1,"dash-product-image-holder"],[3,"src","alt"],[1,"dash-product-short-details"]],template:function(t,i){1&t&&(c.TgZ(0,"div",0),c.YNc(1,A,9,4,"div",1),c.qZA()),2&t&&(c.xp6(1),c.Q6J("ngForOf",i.products))},directives:[n.sg],styles:[""]}),t})();function b(t,i){if(1&t){const t=c.EpF();c.TgZ(0,"div",3),c.TgZ(1,"button",4),c.NdJ("click",function(i){return c.CHM(t),c.oxw().decrement(i)}),c._UZ(2,"img",5),c.qZA(),c._UZ(3,"input",6),c.TgZ(4,"button",4),c.NdJ("click",function(i){return c.CHM(t),c.oxw().increment(i)}),c._UZ(5,"img",7),c.qZA(),c.qZA()}}function y(t,i){if(1&t&&(c.TgZ(0,"div",8),c._UZ(1,"input",9,10),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Tol(null==t.config?null:t.config.inputClasses),c.Q6J("type",null==t.config?null:t.config.type)("placeholder",null==t.config?null:t.config.placeholder)("autocomplete",null==t.config?null:t.config.autoComplete)("autocapitalize",""!==(null==t.config?null:t.config.autoCapitalize)?null==t.config?null:t.config.autoCapitalize:"none")}}let w=(()=>{class t{constructor(t){this.fb=t,this.componentFormGroup=this.fb.group({input:this.fb.control(null)})}writeValue(t){this.value=t,this.componentFormGroup.setValue({input:t}),this.componentFormGroup.updateValueAndValidity()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){t?this.componentFormGroup.disable({emitEvent:!0}):this.componentFormGroup.enable({emitEvent:!0})}getFieldValue(){const t=this.componentFormGroup.get("input");return t?t.value:null}ngOnInit(){this.componentFormGroup.valueChanges.subscribe(t=>{this.onChange&&this.onChange(this.getFieldValue())}),this.isDisable&&this.componentFormGroup.disable()}get isDisable(){var t,i;return(null===(i=null===(t=this.config)||void 0===t?void 0:t.formStatus)||void 0===i?void 0:i.isDisabled)||!1}increment(t){t.stopPropagation();let i=this.getFieldValue();i=null!=i&&""!==i?parseInt(i,10):0;const e=i+1;this.writeValue(null!==i&&e>=99?99:e)}decrement(t){t.stopPropagation();let i=this.getFieldValue();i=null!=i&&""!==i?parseInt(i,10):0;const e=i-1;this.writeValue(null!==i&&e<=0?0:e)}}return t.\u0275fac=function(i){return new(i||t)(c.Y36(a.qu))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-inputs-type-b"]],inputs:{config:"config",class:"class",type:"type"},features:[c._Bn([{provide:a.JU,useExisting:(0,c.Gpc)(()=>t),multi:!0}])],decls:3,vars:3,consts:[[3,"formGroup"],["class","quantity",4,"ngIf"],["class","input",4,"ngIf"],[1,"quantity"],[3,"click"],["src","assets/svg/minus-icon.svg","alt","minus-icon"],["type","number","min","0","formControlName","input","value","0"],["src","assets/svg/plus-icon.svg","alt","minus-icon"],[1,"input"],["formControlName","input",3,"type","placeholder","autocomplete","autocapitalize"],["input",""]],template:function(t,i){1&t&&(c.ynx(0,0),c.YNc(1,b,6,0,"div",1),c.YNc(2,y,3,6,"div",2),c.BQk()),2&t&&(c.Q6J("formGroup",i.componentFormGroup),c.xp6(1),c.Q6J("ngIf","quantity"===i.type),c.xp6(1),c.Q6J("ngIf","input"===i.type))},directives:[a.JL,a.sg,n.O5,a.qQ,a.wV,a.Fj,a.JJ,a.u],encapsulation:2}),t})();var x=e(3368);function U(t,i){1&t&&c.GkF(0)}function _(t,i){if(1&t&&(c.ynx(0),c.YNc(1,U,1,0,"ng-container",8),c.BQk()),2&t){c.oxw();const t=c.MAs(9);c.xp6(1),c.Q6J("ngTemplateOutlet",t)}}function k(t,i){1&t&&c.GkF(0)}function N(t,i){if(1&t&&(c.ynx(0),c.YNc(1,k,1,0,"ng-container",8),c.BQk()),2&t){c.oxw();const t=c.MAs(11);c.xp6(1),c.Q6J("ngTemplateOutlet",t)}}function J(t,i){1&t&&c.GkF(0)}function M(t,i){if(1&t&&(c.ynx(0),c.YNc(1,J,1,0,"ng-container",8),c.BQk()),2&t){c.oxw();const t=c.MAs(13);c.xp6(1),c.Q6J("ngTemplateOutlet",t)}}function S(t,i){1&t&&c.GkF(0)}function C(t,i){if(1&t&&(c.ynx(0),c.YNc(1,S,1,0,"ng-container",8),c.BQk()),2&t){c.oxw();const t=c.MAs(9);c.xp6(1),c.Q6J("ngTemplateOutlet",t)}}function D(t,i){if(1&t){const t=c.EpF();c.TgZ(0,"div"),c.TgZ(1,"div",9),c.TgZ(2,"div",10),c.NdJ("click",function(){return c.CHM(t),c.oxw().closeModal()}),c._UZ(3,"fa-icon",11),c.TgZ(4,"span",12),c._uU(5,"15"),c.qZA(),c.qZA(),c.TgZ(6,"div",13),c.TgZ(7,"p",14),c.TgZ(8,"b"),c._uU(9,"NGN"),c.qZA(),c._uU(10," 20,000"),c.qZA(),c.TgZ(11,"p",14),c.TgZ(12,"b"),c._uU(13,"Shipping:"),c.qZA(),c._uU(14," NGN 1,000"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(15,"div",15),c.TgZ(16,"div",16),c.TgZ(17,"div"),c.TgZ(18,"div",17),c._UZ(19,"img",18),c.qZA(),c.TgZ(20,"div"),c.TgZ(21,"p",19),c._uU(22,"Product Name"),c.qZA(),c.TgZ(23,"p",19),c._uU(24,"NGN 5,000"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(25,"div"),c.TgZ(26,"div",20),c._UZ(27,"app-inputs-type-b",21),c.qZA(),c.TgZ(28,"div",22),c.TgZ(29,"button",23),c._UZ(30,"img",24),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(31,"div",25),c.TgZ(32,"app-button",26),c.NdJ("click",function(){return c.CHM(t),c.oxw().closeModal()}),c._uU(33," Keep shopping "),c.qZA(),c.TgZ(34,"app-button",27),c.NdJ("click",function(){return c.CHM(t),c.oxw().switchBagView("bagFormA")}),c._uU(35," Checkout "),c.qZA(),c.qZA()}if(2&t){const t=c.oxw();c.xp6(3),c.Q6J("icon",t.faShoppingCart),c.xp6(23),c.Q6J("formGroup",t.componentForm)}}function F(t,i){if(1&t){const t=c.EpF();c.TgZ(0,"div"),c.TgZ(1,"div",9),c.TgZ(2,"div",28),c.TgZ(3,"p",29),c._uU(4,"Mama Oke"),c.qZA(),c.TgZ(5,"p",30),c._uU(6,"Shipping"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"div",15),c.TgZ(8,"div",31),c.TgZ(9,"div",32),c.TgZ(10,"label",33),c._uU(11,"Your Name"),c.qZA(),c.qZA(),c.TgZ(12,"div",34),c.TgZ(13,"div",35),c.TgZ(14,"div"),c._UZ(15,"app-inputs-type-b",36),c.qZA(),c.qZA(),c.TgZ(16,"div",35),c.TgZ(17,"div"),c._UZ(18,"app-inputs-type-b",36),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(19,"div",31),c.TgZ(20,"div",37),c.TgZ(21,"div"),c.TgZ(22,"label",33),c._uU(23,"Your Email"),c.qZA(),c._UZ(24,"app-inputs-type-b",36),c.qZA(),c.qZA(),c.qZA(),c.TgZ(25,"div",38),c.TgZ(26,"div",32),c.TgZ(27,"label",33),c._uU(28,"Phone Number"),c.qZA(),c.qZA(),c.TgZ(29,"div",39),c.TgZ(30,"p",40),c._uU(31," +234 "),c.qZA(),c._UZ(32,"app-inputs-type-b",36),c.qZA(),c.qZA(),c.TgZ(33,"div",31),c.TgZ(34,"div",37),c.TgZ(35,"div"),c.TgZ(36,"label",33),c._uU(37,"Delivery Address"),c.qZA(),c._UZ(38,"app-inputs-type-b",36),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(39,"div",41),c.TgZ(40,"app-button",26),c.NdJ("click",function(){return c.CHM(t),c.oxw().switchBagView("bag")}),c._uU(41," Back "),c.qZA(),c.TgZ(42,"app-button",27),c.NdJ("click",function(){return c.CHM(t),c.oxw().switchBagView("bagReview")}),c._uU(43," Review "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(44,"div",25),c.TgZ(45,"div",10),c.NdJ("click",function(){return c.CHM(t),c.oxw().closeModal()}),c._UZ(46,"fa-icon",11),c.TgZ(47,"span",12),c._uU(48,"5"),c.qZA(),c.qZA(),c.TgZ(49,"div",13),c.TgZ(50,"p",14),c.TgZ(51,"b"),c._uU(52,"NGN"),c.qZA(),c._uU(53," 20,000"),c.qZA(),c.TgZ(54,"p",14),c.TgZ(55,"b"),c._uU(56,"Shipping:"),c.qZA(),c._uU(57," NGN 1,000"),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=c.oxw();c.xp6(15),c.Q6J("config",t.inputConfig("First Name")),c.xp6(3),c.Q6J("config",t.inputConfig("Last Name")),c.xp6(6),c.Q6J("config",t.inputConfig("Email","email")),c.xp6(8),c.Q6J("config",t.inputConfig("Number","tel")),c.xp6(6),c.Q6J("config",t.inputConfig("Full Address")),c.xp6(8),c.Q6J("icon",t.faShoppingCart)}}function Q(t,i){if(1&t){const t=c.EpF();c.TgZ(0,"div"),c.TgZ(1,"div",9),c.TgZ(2,"div",42),c.TgZ(3,"p",29),c._uU(4,"Orders Details"),c.qZA(),c.qZA(),c.TgZ(5,"div",42),c._UZ(6,"img",43),c.TgZ(7,"span",12),c._uU(8,"5"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(9,"div",15),c.TgZ(10,"div"),c.TgZ(11,"div",44),c.TgZ(12,"p",45),c._uU(13,"Chapele Tega"),c.qZA(),c.qZA(),c.TgZ(14,"div",44),c.TgZ(15,"p",46),c._uU(16,"chapele@gmail.com"),c.qZA(),c.qZA(),c.TgZ(17,"div",47),c.TgZ(18,"p",46),c._uU(19,"+2347035432921"),c.qZA(),c.qZA(),c.TgZ(20,"div",48),c.TgZ(21,"p",49),c._uU(22,"Delivery Address"),c.qZA(),c.TgZ(23,"p",50),c._uU(24,"1000, loram is playing street, surulere, Delta State, Nigeria"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(25,"div",51),c.TgZ(26,"div",16),c.TgZ(27,"p",33),c._uU(28,"I phone6 "),c.TgZ(29,"span",52),c._uU(30,"x3"),c.qZA(),c.qZA(),c.TgZ(31,"p",33),c._uU(32,"NGN "),c.TgZ(33,"span",52),c._uU(34,"5,000"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(35,"div",16),c.TgZ(36,"p",33),c._uU(37,"I phone7 "),c.TgZ(38,"span",52),c._uU(39,"x3"),c.qZA(),c.qZA(),c.TgZ(40,"p",33),c._uU(41,"NGN "),c.TgZ(42,"span",52),c._uU(43,"5,000"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(44,"div",16),c.TgZ(45,"p",33),c._uU(46,"Total"),c.qZA(),c.TgZ(47,"p",33),c._uU(48,"NGN "),c.TgZ(49,"span",52),c._uU(50,"10,000"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(51,"div",25),c.TgZ(52,"app-button",26),c.NdJ("click",function(){return c.CHM(t),c.oxw().switchBagView("bagFormA")}),c._uU(53," Back "),c.qZA(),c.TgZ(54,"app-button",27),c.NdJ("click",function(){return c.CHM(t),c.oxw().closeModal()}),c._uU(55," Done "),c.qZA(),c.qZA()}}const B=function(t){return{display:t}};let I=(()=>{class t{constructor(t,i){this.fb=t,this.pS=i,this.faShoppingCart=u.sq$,this.switchIt="bag",this.isDisplay=!1,this.componentForm=this.fb.group({quantity:["12",[a.kI.required]]})}inputConfig(t="Placeholder",i="text"){return{type:i,placeholder:t}}ngOnInit(){console.log(this.isDisplay),this.isDisplay$=this.pS.getBagModalDisplayStatus().subscribe(t=>this.isDisplay=t)}closeModal(){this.pS.closeBagModal(),this.switchIt="bag"}stopModalPropagation(t){t.stopPropagation()}switchBagView(t){this.switchIt=t}ngOnDestroy(){this.isDisplay$.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(c.Y36(a.qu),c.Y36(r))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-cart"]],decls:14,vars:7,consts:[[1,"app-bag-overlay",3,"ngStyle","click"],[1,"bag-view",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["bag",""],["bagFormA",""],["bagReview",""],[4,"ngTemplateOutlet"],[1,"bag-header"],[1,"bag-section","cursor-pointer",3,"click"],[3,"icon"],[1,"m-0","p-0","s15-h24","ml-6"],[1,"price-section"],[1,"m-0","s15-h24"],[1,"bag-contents"],[1,"bag-content"],[1,"bag-product-img"],["src","assets/food/egusi-soup.jpg","alt",""],[1,"m-0","s12-h16","s15-md-h24"],[1,"ml-6","ml-md-0",3,"formGroup"],["type","quantity","formControlName","quantity"],[1,"ml-6"],[1,"btn-none"],["src","assets/svg/delete-icon.svg","alt","",1,"icon-20"],[1,"bag-footer"],["color","secondary",3,"click"],[3,"click"],[1,""],[1,"m-0","p-0","s22-h32","text-weight-bold"],[1,"m-0","p-0","text-weight-medium","s15-h24"],[1,"row"],[1,"col-12"],[1,"m-0","s12-h16","text-weight-bold"],[1,"col","p-0","d-flex","justify-content-between","align-items-center"],[1,"col-5"],["type","input",3,"config"],[1,"col-12","mt-20"],[1,"row","mt-20"],[1,"col-12","d-flex","justify-content-start","align-items-center"],[1,"m-0","mr-16"],[1,"bag-footer","mt-40"],[1,"bag-section"],["src","assets/svg/shopping-bag-icon.svg","alt","",1,"icon-25"],[1,"d-flex","flex-row","justify-content-start","align-items-center","mb-14"],[1,"m-0","ml-16","text-weight-bold","s14-h16"],[1,"m-0","ml-16","s14-h16"],[1,"d-flex","flex-row","justify-content-start","align-items-center","mb-30"],[1,"col-10","p-0"],[1,"m-0","s12-h16","text-weight-bold","mb-10"],[1,"m-0","s14-h16"],[1,"mt-60"],[1,"m-0","ml-6"]],template:function(t,i){1&t&&(c.ynx(0),c.TgZ(1,"div",0),c.NdJ("click",function(){return i.closeModal()}),c.TgZ(2,"div",1),c.NdJ("click",function(t){return i.stopModalPropagation(t)}),c.ynx(3,2),c.YNc(4,_,2,1,"ng-container",3),c.YNc(5,N,2,1,"ng-container",3),c.YNc(6,M,2,1,"ng-container",3),c.YNc(7,C,2,1,"ng-container",4),c.BQk(),c.qZA(),c.qZA(),c.BQk(),c.YNc(8,D,36,2,"ng-template",null,5,c.W1O),c.YNc(10,F,58,6,"ng-template",null,6,c.W1O),c.YNc(12,Q,56,0,"ng-template",null,7,c.W1O)),2&t&&(c.xp6(1),c.Q6J("ngStyle",c.VKq(5,B,i.isDisplay?"flex":"none")),c.xp6(2),c.Q6J("ngSwitch",i.switchIt),c.xp6(1),c.Q6J("ngSwitchCase","bag"),c.xp6(1),c.Q6J("ngSwitchCase","bagFormA"),c.xp6(1),c.Q6J("ngSwitchCase","bagReview"))},directives:[n.PC,n.RF,n.n9,n.ED,n.tP,d.BN,a.JL,a.sg,w,a.JJ,a.u,x.r],styles:[""]}),t})();const O=function(t){return{display:t}};let P=(()=>{class t{constructor(t,i){this.fb=t,this.pS=i,this.name="mock name",this.isDisplay=!0,this.isDisplay$=this.pS.getProductModalDisplayStatus().subscribe(t=>this.isDisplay=t),this.componentForm=this.fb.group({quantity:["0",[a.kI.required]]})}onClick(t){}ngOnInit(){}closeModal(){this.pS.closeProductModal()}openBag(){this.closeModal(),this.pS.openBagModal()}stopModalPropagation(t){t.stopPropagation()}ngOnDestroy(){this.isDisplay$.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(c.Y36(a.qu),c.Y36(r))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-dashboard-details-modal"]],hostBindings:function(t,i){1&t&&c.NdJ("click",function(t){return i.onClick(t)})},decls:26,vars:6,consts:[[1,"app-modal-overlay",3,"ngStyle","click"],[1,"app-modal-body",3,"click"],[1,"app-modal-header"],[1,"modal-name"],[1,"modal-close-icon",3,"click"],["src","assets/svg/close-icon.svg","alt",""],[1,"modal-desc"],[1,"modal-img"],["src","assets/food/egusi-soup.jpg","alt","egusi-soup.jpg"],[1,"modal-name-b"],[1,"modal-desc-text"],[1,"modal-buttons"],[1,"my-3",3,"formGroup"],["type","quantity","formControlName","quantity"],[1,"my-32","modal-buttons-group"],[1,"btn-div"],["color","primary","type","button",3,"click"],["color","secondary"],[1,"app-primary-color"]],template:function(t,i){1&t&&(c.TgZ(0,"div",0),c.NdJ("click",function(){return i.closeModal()}),c.TgZ(1,"div",1),c.NdJ("click",function(t){return i.stopModalPropagation(t)}),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c._uU(4),c.qZA(),c.TgZ(5,"div",4),c.NdJ("click",function(){return i.closeModal()}),c._UZ(6,"img",5),c.qZA(),c.qZA(),c.TgZ(7,"div",6),c.TgZ(8,"div",7),c._UZ(9,"img",8),c.qZA(),c.TgZ(10,"div"),c.TgZ(11,"h2",9),c._uU(12),c.qZA(),c.TgZ(13,"p",10),c._uU(14," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "),c.qZA(),c.TgZ(15,"div",11),c.TgZ(16,"div",12),c._UZ(17,"app-inputs-type-b",13),c.qZA(),c.TgZ(18,"div",14),c.TgZ(19,"div",15),c.TgZ(20,"app-button",16),c.NdJ("click",function(){return i.openBag()}),c._uU(21," Add to cart "),c.qZA(),c.qZA(),c.TgZ(22,"div",15),c.TgZ(23,"app-button",17),c.TgZ(24,"span",18),c._uU(25,"Cancel"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.Q6J("ngStyle",c.VKq(4,O,i.isDisplay?"flex":"none")),c.xp6(4),c.hij(" ",i.name," "),c.xp6(8),c.hij(" ",i.name," "),c.xp6(4),c.Q6J("formGroup",i.componentForm))},directives:[n.PC,a.JL,a.sg,w,a.JJ,a.u,x.r],styles:[""]}),t})();const Y=[{path:"",component:(()=>{class t{constructor(t,i){this.fb=t,this.pS=i,this.switchIt="bag",this.isDisplay=!0,this.isDisplay$=this.pS.getBagModalDisplayStatus().subscribe(t=>this.isDisplay=t),this.componentForm=this.fb.group({quantity:["12",[a.kI.required]]})}inputConfig(t="Placeholder",i="text"){return{type:i,placeholder:t}}ngOnInit(){}closeModal(){this.pS.closeBagModal()}stopModalPropagation(t){t.stopPropagation()}switchBagView(t){this.switchIt=t}ngOnDestroy(){this.isDisplay$.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(c.Y36(a.qu),c.Y36(r))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-dashboard"]],decls:11,vars:0,consts:[[1,"dashboard"],[1,"dashboard-view"],[1,"dashboard-view-header"],[1,"dash-body"],[1,"dash-products"]],template:function(t,i){1&t&&(c.TgZ(0,"div",0),c._UZ(1,"app-navigation"),c.TgZ(2,"div",1),c.TgZ(3,"div",2),c._UZ(4,"app-dashboard-header"),c._UZ(5,"app-dashboard-categories"),c.qZA(),c.TgZ(6,"div",3),c.TgZ(7,"div",4),c._UZ(8,"app-dashboard-product"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(9,"app-cart"),c._UZ(10,"app-dashboard-details-modal"))},directives:[l.J,f,v,T,I,P],styles:[""]}),t})()}];let G=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[s.Bz.forChild(Y)],s.Bz]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[n.ez,o.m,G,d.uH,a.UX]]}),t})()}}]);