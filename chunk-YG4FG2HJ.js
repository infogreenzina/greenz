import{b as Ot}from"./chunk-CMT3TY6L.js";import{a as Ft,d as kt}from"./chunk-QHAW44H6.js";import{b as Pt}from"./chunk-KIMQSLNC.js";import{$ as V,$a as q,Aa as Fe,Ad as At,Bb as pe,Bc as bt,Cb as pt,Dc as Ct,Eb as S,Ec as Y,Fb as p,Gb as fe,Hb as he,Hd as Et,Ib as ft,Ja as st,Jb as ht,Jd as It,Ka as ue,Kb as H,Kd as St,Lb as L,Lc as xt,Ld as Tt,Mb as mt,Nc as Dt,Nd as Nt,Oa as s,Ob as oe,Qb as x,Rb as u,Sb as P,Tb as gt,V as ce,Va as Ie,Wa as _,X as ie,Y as k,Z as F,Zb as me,_b as E,a as v,ab as I,ac as vt,b as w,ba as f,bb as b,cb as z,cc as yt,db as g,eb as G,ec as B,f as Ke,fc as T,gb as at,ia as it,ja as ot,jc as O,k as et,ka as rt,kb as D,lb as lt,mb as dt,nb as h,nc as $,ob as m,od as Vt,p as tt,pa as U,pd as R,qb as ct,rb as ut,rc as Se,rd as Q,sb as d,tb as a,td as X,ua as A,ub as l,ud as Z,v as nt,va as Ae,vb as y,vd as M,wd as Mt,xa as Ee,ya as C,yd as wt,zc as _t}from"./chunk-HQLFRHNX.js";var $t=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||n)(_(Ie),_(Fe))};static \u0275dir=b({type:n})}return n})(),Wt=(()=>{class n extends $t{static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(n)))(o||n)}})();static \u0275dir=b({type:n,features:[g]})}return n})(),Pe=new V("");var Pn={provide:Pe,useExisting:ie(()=>Me),multi:!0};function Bn(){let n=Se()?Se().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Rn=new V(""),Me=(()=>{class n extends $t{_compositionMode;_composing=!1;constructor(e,i,o){super(e,i),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Bn())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||n)(_(Ie),_(Fe),_(Rn,8))};static \u0275dir=b({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&S("input",function(c){return o._handleInput(c.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(c){return o._compositionEnd(c.target.value)})},standalone:!1,features:[E([Pn]),g]})}return n})();function Be(n){return n==null||Re(n)===0}function Re(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var qt=new V(""),Yt=new V(""),jn=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,N=class{static min(t){return Un(t)}static max(t){return zn(t)}static required(t){return Gn(t)}static requiredTrue(t){return Hn(t)}static email(t){return Ln(t)}static minLength(t){return $n(t)}static maxLength(t){return Wn(t)}static pattern(t){return qn(t)}static nullValidator(t){return Qt()}static compose(t){return tn(t)}static composeAsync(t){return on(t)}};function Un(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function zn(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function Gn(n){return Be(n.value)?{required:!0}:null}function Hn(n){return n.value===!0?null:{required:!0}}function Ln(n){return Be(n.value)||jn.test(n.value)?null:{email:!0}}function $n(n){return t=>{let e=t.value?.length??Re(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Wn(n){return t=>{let e=t.value?.length??Re(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function qn(n){if(!n)return Qt;let t,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),i=>{if(Be(i.value))return null;let o=i.value;return t.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function Qt(n){return null}function Xt(n){return n!=null}function Zt(n){return at(n)?et(n):n}function Jt(n){let t={};return n.forEach(e=>{t=e!=null?v(v({},t),e):t}),Object.keys(t).length===0?null:t}function Kt(n,t){return t.map(e=>e(n))}function Yn(n){return!n.validate}function en(n){return n.map(t=>Yn(t)?t:e=>t.validate(e))}function tn(n){if(!n)return null;let t=n.filter(Xt);return t.length==0?null:function(e){return Jt(Kt(e,t))}}function nn(n){return n!=null?tn(en(n)):null}function on(n){if(!n)return null;let t=n.filter(Xt);return t.length==0?null:function(e){let i=Kt(e,t).map(Zt);return nt(i).pipe(tt(Jt))}}function rn(n){return n!=null?on(en(n)):null}function Bt(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function sn(n){return n._rawValidators}function an(n){return n._rawAsyncValidators}function Te(n){return n?Array.isArray(n)?n:[n]:[]}function ye(n,t){return Array.isArray(n)?n.includes(t):n===t}function Rt(n,t){let e=Te(t);return Te(n).forEach(o=>{ye(e,o)||e.push(o)}),e}function jt(n,t){return Te(t).filter(e=>!ye(n,e))}var _e=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=nn(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=rn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},ee=class extends _e{name;get formDirective(){return null}get path(){return null}},W=class extends _e{_parent=null;name=null;valueAccessor=null},be=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var ln=(()=>{class n extends be{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(_(W,2))};static \u0275dir=b({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&oe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[g]})}return n})(),dn=(()=>{class n extends be{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(_(ee,10))};static \u0275dir=b({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&oe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[g]})}return n})();var re="VALID",ge="INVALID",J="PENDING",se="DISABLED",j=class{},Ce=class extends j{value;source;constructor(t,e){super(),this.value=t,this.source=e}},ae=class extends j{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},le=class extends j{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},K=class extends j{status;source;constructor(t,e){super(),this.status=t,this.source=e}},Ne=class extends j{source;constructor(t){super(),this.source=t}},de=class extends j{source;constructor(t){super(),this.source=t}};function je(n){return(we(n)?n.validators:n)||null}function Qn(n){return Array.isArray(n)?nn(n):n||null}function Ue(n,t){return(we(t)?t.asyncValidators:n)||null}function Xn(n){return Array.isArray(n)?rn(n):n||null}function we(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function cn(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new ce(1e3,"");if(!i[e])throw new ce(1001,"")}function un(n,t,e){n._forEachChild((i,o)=>{if(e[o]===void 0)throw new ce(-1002,"")})}var te=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return B(this.statusReactive)}set status(t){B(()=>this.statusReactive.set(t))}_status=T(()=>this.statusReactive());statusReactive=A(void 0);get valid(){return this.status===re}get invalid(){return this.status===ge}get pending(){return this.status===J}get disabled(){return this.status===se}get enabled(){return this.status!==se}errors;get pristine(){return B(this.pristineReactive)}set pristine(t){B(()=>this.pristineReactive.set(t))}_pristine=T(()=>this.pristineReactive());pristineReactive=A(!0);get dirty(){return!this.pristine}get touched(){return B(this.touchedReactive)}set touched(t){B(()=>this.touchedReactive.set(t))}_touched=T(()=>this.touchedReactive());touchedReactive=A(!1);get untouched(){return!this.touched}_events=new Ke;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Rt(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Rt(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(jt(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(jt(t,this._rawAsyncValidators))}hasValidator(t){return ye(this._rawValidators,t)}hasAsyncValidator(t){return ye(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(w(v({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new le(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new le(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(w(v({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new ae(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new ae(!0,i))}markAsPending(t={}){this.status=J;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new K(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(w(v({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=se,this.errors=null,this._forEachChild(o=>{o.disable(w(v({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ce(this.value,i)),this._events.next(new K(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(w(v({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=re,this._forEachChild(i=>{i.enable(w(v({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(w(v({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===re||this.status===J)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ce(this.value,e)),this._events.next(new K(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(w(v({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?se:re}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=J,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let i=Zt(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,o)=>i&&i._find(o),this)}getError(t,e){let i=e?this.get(e):this;return i?.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new K(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new U,this.statusChanges=new U}_calculateStatus(){return this._allControlsDisabled()?se:this.errors?ge:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(J)?J:this._anyControlsHaveStatus(ge)?ge:re}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,e),o&&this._events.next(new ae(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new le(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){we(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Qn(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Xn(this._rawAsyncValidators)}},xe=class extends te{constructor(t,e,i){super(je(e),Ue(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){un(this,!0,t),Object.keys(t).forEach(i=>{cn(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let o=this.controls[i];o&&o.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,o)=>{i.reset(t?t[o]:null,w(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new de(this))}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,i,o)=>((i.enabled||this.disabled)&&(e[o]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((o,r)=>{i=e(i,o,r)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var ke=class extends xe{};var pn=new V("",{factory:()=>ze}),ze="always";function Zn(n,t){return[...t.path,n]}function Ut(n,t,e=ze){Ge(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),Kn(n,t),ti(n,t),ei(n,t),Jn(n,t)}function zt(n,t,e=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),Ve(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function De(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Jn(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Ge(n,t){let e=sn(n);t.validator!==null?n.setValidators(Bt(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let i=an(n);t.asyncValidator!==null?n.setAsyncValidators(Bt(i,t.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let o=()=>n.updateValueAndValidity();De(t._rawValidators,o),De(t._rawAsyncValidators,o)}function Ve(n,t){let e=!1;if(n!==null){if(t.validator!==null){let o=sn(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(c=>c!==t.validator);r.length!==o.length&&(e=!0,n.setValidators(r))}}if(t.asyncValidator!==null){let o=an(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(c=>c!==t.asyncValidator);r.length!==o.length&&(e=!0,n.setAsyncValidators(r))}}}let i=()=>{};return De(t._rawValidators,i),De(t._rawAsyncValidators,i),e}function Kn(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&fn(n,t)})}function ei(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&fn(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function fn(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ti(n,t){let e=(i,o)=>{t.valueAccessor.writeValue(i),o&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function ni(n,t){n==null,Ge(n,t)}function ii(n,t){return Ve(n,t)}function oi(n,t){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function ri(n){return Object.getPrototypeOf(n.constructor)===Wt}function si(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ai(n,t){if(!t)return null;Array.isArray(t);let e,i,o;return t.forEach(r=>{r.constructor===Me?e=r:ri(r)?i=r:o=r}),o||i||e||null}function li(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function Gt(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function Ht(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var ve=class extends te{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(je(e),Ue(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),we(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ht(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new de(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Gt(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Gt(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Ht(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var di=n=>n instanceof ve;var hn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=b({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),ci={provide:Pe,useExisting:ie(()=>He),multi:!0},He=(()=>{class n extends Wt{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(n)))(o||n)}})();static \u0275dir=b({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,o){i&1&&S("input",function(c){return o.onChange(c.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[E([ci]),g]})}return n})();var Oe=class extends te{constructor(t,e,i){super(je(e),Ue(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){Array.isArray(t)?t.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,i={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(t,e={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,i={}){let o=this._adjustIndex(t);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){un(this,!1,t),t.forEach((i,o)=>{cn(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(t.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((i,o)=>{i.reset(t[o],w(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new de(this))}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,i)=>{t(e,i)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(let t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}};var ui=(()=>{class n extends ee{callSetDisabledState;get submitted(){return B(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=T(()=>this._submittedReactive());_submittedReactive=A(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ve(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Ut(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){zt(e.control||null,e,!1),li(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,si(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ne(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,o=this.form.get(e.path);i!==o&&(zt(i||null,e),di(o)&&(Ut(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);ni(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&ii(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Ge(this.form,this),this._oldForm&&Ve(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(_(qt,10),_(Yt,10),_(pn,8))};static \u0275dir=b({type:n,features:[g,Ee]})}return n})();var mn=new V("");var pi={provide:W,useExisting:ie(()=>Le)},Le=(()=>{class n extends W{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new U;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,o,r,c){super(),this._ngModelWarningConfig=c,this._parent=e,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=ai(this,r)}ngOnChanges(e){this._added||this._setUpControl(),oi(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Zn(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||n)(_(ee,13),_(qt,10),_(Yt,10),_(Pe,10),_(mn,8))};static \u0275dir=b({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[E([pi]),g,Ee]})}return n})();var fi={provide:ee,useExisting:ie(()=>$e)},$e=(()=>{class n extends ui{form=null;ngSubmit=new U;get control(){return this.form}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(n)))(o||n)}})();static \u0275dir=b({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,o){i&1&&S("submit",function(c){return o.onSubmit(c)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[E([fi]),g]})}return n})();var hi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=I({type:n});static \u0275inj=F({})}return n})();function Lt(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var gn=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,i=null){let o=this._reduceControls(e),r={};return Lt(i)?r=i:i!==null&&(r.validators=i.validator,r.asyncValidators=i.asyncValidator),new xe(o,r)}record(e,i=null){let o=this._reduceControls(e);return new ke(o,i)}control(e,i,o){let r={};return this.useNonNullable?(Lt(i)?r=i:(r.validators=i,r.asyncValidators=o),new ve(e,w(v({},r),{nonNullable:!0}))):new ve(e,i,o)}array(e,i,o){let r=e.map(c=>this._createControl(c));return new Oe(r,i,o)}_reduceControls(e){let i={};return Object.keys(e).forEach(o=>{i[o]=this._createControl(e[o])}),i}_createControl(e){if(e instanceof ve)return e;if(e instanceof te)return e;if(Array.isArray(e)){let i=e[0],o=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(i,o,r)}else return this.control(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:mn,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:pn,useValue:e.callSetDisabledState??ze}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=I({type:n});static \u0275inj=F({imports:[hi]})}return n})();var yn=(()=>{class n extends Z{modelValue=A(void 0);$filled=T(()=>Dt(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(n)))(o||n)}})();static \u0275dir=b({type:n,features:[g]})}return n})();var _n=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var gi=`
    ${_n}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,vi={root:({instance:n})=>["p-inputtext p-component",{"p-filled":n.$filled(),"p-inputtext-sm":n.pSize==="small","p-inputtext-lg":n.pSize==="large","p-invalid":n.invalid(),"p-variant-filled":n.$variant()==="filled","p-inputtext-fluid":n.hasFluid}]},bn=(()=>{class n extends Q{name="inputtext";style=gi;classes=vi;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(n)))(o||n)}})();static \u0275prov=k({token:n,factory:n.\u0275fac})}return n})();var Cn=new V("INPUTTEXT_INSTANCE"),Dn=(()=>{class n extends yn{componentName="InputText";hostName="";ptInputText=O();pInputTextPT=O();pInputTextUnstyled=O();bindDirectiveInstance=f(M,{self:!0});$pcInputText=f(Cn,{optional:!0,skipSelf:!0})??void 0;ngControl=f(W,{optional:!0,self:!0});pcFluid=f(Et,{optional:!0,host:!0,skipSelf:!0});pSize;variant=O();fluid=O(void 0,{transform:$});invalid=O(void 0,{transform:$});$variant=T(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=f(bn);constructor(){super(),Ae(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),Ae(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=b({type:n,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(i,o){i&1&&S("input",function(){return o.onInput()}),i&2&&(D("data-p",o.dataP),x(o.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[E([bn,{provide:Cn,useExisting:n},{provide:X,useExisting:n}]),z([M]),g]})}return n})(),Vn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=I({type:n});static \u0275inj=F({})}return n})();var Mn=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var _i=["container"],bi=["icon"],Ci=["closeicon"],xi=["*"],Di=n=>({closeCallback:n});function Vi(n,t){n&1&&pe(0)}function Mi(n,t){if(n&1&&G(0,Vi,1,0,"ng-container",4),n&2){let e=p();d("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}function wi(n,t){if(n&1&&y(0,"i",1),n&2){let e=p();x(e.cn(e.cx("icon"),e.icon)),d("pBind",e.ptm("icon")),D("data-p",e.dataP)}}function Ai(n,t){n&1&&pe(0)}function Ei(n,t){if(n&1&&G(0,Ai,1,0,"ng-container",5),n&2){let e=p();d("ngTemplateOutlet",e.containerTemplate||e._containerTemplate)("ngTemplateOutletContext",vt(2,Di,e.closeCallback))}}function Fi(n,t){if(n&1&&y(0,"span",9),n&2){let e=p(3);d("pBind",e.ptm("text"))("ngClass",e.cx("text"))("innerHTML",e.text,st),D("data-p",e.dataP)}}function Ii(n,t){if(n&1&&(a(0,"div"),G(1,Fi,1,4,"span",8),l()),n&2){let e=p(2);s(),d("ngIf",!e.escape)}}function Si(n,t){if(n&1&&(a(0,"span",7),u(1),l()),n&2){let e=p(3);d("pBind",e.ptm("text"))("ngClass",e.cx("text")),D("data-p",e.dataP),s(),P(e.text)}}function Ti(n,t){if(n&1&&G(0,Si,2,4,"span",10),n&2){let e=p(2);d("ngIf",e.escape&&e.text)}}function Ni(n,t){if(n&1&&(G(0,Ii,2,1,"div",6)(1,Ti,1,1,"ng-template",null,0,yt),a(3,"span",7),he(4),l()),n&2){let e=mt(2),i=p();d("ngIf",!i.escape)("ngIfElse",e),s(3),d("pBind",i.ptm("text"))("ngClass",i.cx("text")),D("data-p",i.dataP)}}function ki(n,t){if(n&1&&y(0,"i",7),n&2){let e=p(2);x(e.cn(e.cx("closeIcon"),e.closeIcon)),d("pBind",e.ptm("closeIcon"))("ngClass",e.closeIcon),D("data-p",e.dataP)}}function Oi(n,t){n&1&&pe(0)}function Pi(n,t){if(n&1&&G(0,Oi,1,0,"ng-container",4),n&2){let e=p(2);d("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Bi(n,t){if(n&1&&(rt(),y(0,"svg",14)),n&2){let e=p(2);x(e.cx("closeIcon")),d("pBind",e.ptm("closeIcon")),D("data-p",e.dataP)}}function Ri(n,t){if(n&1){let e=pt();a(0,"button",11),S("click",function(o){it(e);let r=p();return ot(r.close(o))}),h(1,ki,1,5,"i",12),h(2,Pi,1,1,"ng-container"),h(3,Bi,1,4,":svg:svg",13),l()}if(n&2){let e=p();x(e.cx("closeButton")),d("pBind",e.ptm("closeButton")),D("aria-label",e.closeAriaLabel)("data-p",e.dataP),s(),m(e.closeIcon?1:-1),s(),m(e.closeIconTemplate||e._closeIconTemplate?2:-1),s(),m(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var ji={root:({instance:n})=>["p-message p-component p-message-"+n.severity,n.variant&&"p-message-"+n.variant,{"p-message-sm":n.size==="small","p-message-lg":n.size==="large"}],contentWrapper:"p-message-content-wrapper",content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},wn=(()=>{class n extends Q{name="message";style=Mn;classes=ji;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(n)))(o||n)}})();static \u0275prov=k({token:n,factory:n.\u0275fac})}return n})();var An=new V("MESSAGE_INSTANCE"),We=(()=>{class n extends Z{componentName="Message";_componentStyle=f(wn);bindDirectiveInstance=f(M,{self:!0});$pcMessage=f(An,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;motionOptions=O(void 0);computedMotionOptions=T(()=>v(v({},this.ptm("motion")),this.motionOptions()));onClose=new U;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=A(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant==="outlined",simple:this.variant==="simple",[this.severity]:this.severity,[this.size]:this.size})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(n)))(o||n)}})();static \u0275cmp=q({type:n,selectors:[["p-message"]],contentQueries:function(i,o,r){if(i&1&&ft(r,_i,4)(r,bi,4)(r,Ci,4)(r,Vt,4),i&2){let c;H(c=L())&&(o.containerTemplate=c.first),H(c=L())&&(o.iconTemplate=c.first),H(c=L())&&(o.closeIconTemplate=c.first),H(c=L())&&(o.templates=c)}},hostAttrs:["role","alert","aria-live","polite"],hostVars:5,hostBindings:function(i,o){i&1&&(lt(function(){return"p-message-enter-active"}),dt(function(){return"p-message-leave-active"})),i&2&&(D("data-p",o.dataP),x(o.cn(o.cx("root"),o.styleClass)),oe("p-message-leave-active",!o.visible()))},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",$],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",$],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant",motionOptions:[1,"motionOptions"]},outputs:{onClose:"onClose"},features:[E([wn,{provide:An,useExisting:n},{provide:X,useExisting:n}]),z([M]),g],ngContentSelectors:xi,decls:7,vars:12,consts:[["escapeOut",""],[3,"pBind"],[3,"pBind","class"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(i,o){i&1&&(fe(),a(0,"div",1)(1,"div",1),h(2,Mi,1,1,"ng-container"),h(3,wi,1,4,"i",2),h(4,Ei,1,4,"ng-container")(5,Ni,5,5),h(6,Ri,4,8,"button",3),l()()),i&2&&(x(o.cx("contentWrapper")),d("pBind",o.ptm("contentWrapper")),D("data-p",o.dataP),s(),x(o.cx("content")),d("pBind",o.ptm("content")),D("data-p",o.dataP),s(),m(o.iconTemplate||o._iconTemplate?2:-1),s(),m(o.icon?3:-1),s(),m(o.containerTemplate||o._containerTemplate?4:5),s(2),m(o.closable?6:-1))},dependencies:[Y,_t,bt,Ct,Ft,It,R,M,kt],encapsulation:2,changeDetection:0})}return n})(),En=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=I({type:n});static \u0275inj=F({imports:[We,R,R]})}return n})();var Fn=`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label,
    .p-floatlabel:has(input[placeholder]) label,
    .p-floatlabel:has(textarea[placeholder]) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-multiselect-label:has(.p-chip),
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label,
    .p-floatlabel-in:has(input[placeholder]) label,
    .p-floatlabel-in:has(textarea[placeholder]) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label,
    .p-floatlabel-on:has(input[placeholder]) label,
    .p-floatlabel-on:has(textarea[placeholder]) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }

    .p-floatlabel:has([class^='p-'][class$='-fluid']) {
        width: 100%;
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }
`;var zi=["*"],Gi=`
    ${Fn}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,Hi={root:({instance:n})=>["p-floatlabel",{"p-floatlabel-over":n.variant==="over","p-floatlabel-on":n.variant==="on","p-floatlabel-in":n.variant==="in"}]},In=(()=>{class n extends Q{name="floatlabel";style=Gi;classes=Hi;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(n)))(o||n)}})();static \u0275prov=k({token:n,factory:n.\u0275fac})}return n})();var Sn=new V("FLOATLABEL_INSTANCE"),qe=(()=>{class n extends Z{componentName="FloatLabel";_componentStyle=f(In);$pcFloatLabel=f(Sn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(M,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}variant="over";static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(n)))(o||n)}})();static \u0275cmp=q({type:n,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(i,o){i&2&&x(o.cx("root"))},inputs:{variant:"variant"},features:[E([In,{provide:Sn,useExisting:n},{provide:X,useExisting:n}]),z([M]),g],ngContentSelectors:zi,decls:1,vars:0,template:function(i,o){i&1&&(fe(),he(0))},dependencies:[Y,R,Mt],encapsulation:2,changeDetection:0})}return n})(),Tn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=I({type:n});static \u0275inj=F({imports:[qe,R,R]})}return n})();var Nn=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var Nr=`
    ${Nn}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`;var kn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=I({type:n});static \u0275inj=F({})}return n})();var $i=["googleForm"],Wi=(n,t)=>t.id;function qi(n,t){if(n&1&&(a(0,"div",42),y(1,"span"),l()),n&2){let e=p().$implicit;s(),x(me(" pi ",e.icon))}}function Yi(n,t){if(n&1&&(a(0,"a",44),u(1),l()),n&2){let e=p().$implicit,i=p();d("href",me("tel:",i.langService.lablels()[e.label]),ue),s(),P(i.langService.lablels()[e.label])}}function Qi(n,t){if(n&1&&(a(0,"a",44),u(1),l()),n&2){let e=p().$implicit,i=p();d("href",me("mailto:",i.langService.lablels()[e.label]),ue),s(),P(i.langService.lablels()[e.label])}}function Xi(n,t){if(n&1&&u(0),n&2){let e=p().$implicit,i=p();gt(" ",i.langService.lablels()[e.label]," ")}}function Zi(n,t){if(n&1&&(a(0,"div",9),h(1,qi,2,3,"div",42),a(2,"div",43),h(3,Yi,2,3,"a",44)(4,Qi,2,3,"a",44)(5,Xi,1,1),l()()),n&2){let e=t.$implicit;s(),m(e.icon?1:-1),s(2),m(e.phone?3:e.mail?4:5)}}function Ji(n,t){n&1&&(a(0,"p-message",19),u(1,"Your Name is required."),l())}function Ki(n,t){n&1&&(a(0,"p-message",19),u(1,"Organization Name is required."),l())}function eo(n,t){n&1&&(a(0,"p-message",19),u(1,"Your phone number is required."),l())}function to(n,t){n&1&&(a(0,"p-message",19),u(1,"Email is required."),l())}function no(n,t){n&1&&(a(0,"p-message",19),u(1,"Please enter a valid email."),l())}function io(n,t){if(n&1&&(h(0,to,2,0,"p-message",19),h(1,no,2,0,"p-message",19)),n&2){let e,i,o=p();m(!((e=o.contactUsForm.get("email"))==null||e.errors==null)&&e.errors.required?0:-1),s(),m(!((i=o.contactUsForm.get("email"))==null||i.errors==null)&&i.errors.email?1:-1)}}function oo(n,t){n&1&&(a(0,"p-message",19),u(1,"Subject is required."),l())}function ro(n,t){n&1&&(a(0,"p-message",19),u(1,"Some message is required."),l())}var On=class n{langService=f(xt);formBuilder=f(gn);webService=f(At);contactUs=A(null);contactUsForm;formSubmitted=!1;googleScriptUrl="";dataToSubmit=A(null);googleForm;ngOnInit(){this.webService.loadJson("assets/JSON/footer.json").subscribe(t=>{console.log("resp=",t),t.items.forEach(e=>{e.label=="contactUs"&&this.contactUs.set(e)})}),this.initForm(),this.googleScriptUrl=this.langService.lablels().captureDataUrl}initForm(){this.contactUsForm=this.formBuilder.group({name:["",N.required],organization:["",N.required],subject:["",N.required],message:["",N.required],email:["",[N.required,N.email]],phone:["",[N.required]]})}onSubmit(){if(this.formSubmitted=!0,this.contactUsForm.valid){this.formSubmitted=!1;let t=this.contactUsForm.value;this.contactUsForm.reset(),console.log("formValue = ",t),this.langService.showMessage("Thank you for connecting with us. We will get in touch with you very soon."),this.dataToSubmit.set(t),setTimeout(()=>{this.googleForm.nativeElement.submit()},500)}}isInvalid(t){let e=this.contactUsForm.get(t);return e?.invalid&&(e.touched||this.formSubmitted)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=q({type:n,selectors:[["app-contact-us"]],viewQuery:function(e,i){if(e&1&&ht($i,5),e&2){let o;H(o=L())&&(i.googleForm=o.first)}},decls:69,vars:23,consts:[["googleForm",""],[1,"row"],[1,"col-12","px-1","px-sm-1","px-md-1","row","gx-4","home-page"],[1,"offset-sm-1","offset-md-1","col-12","col-sm-5","col-md-4","px-1","px-sm-2","px-md-4",2,"border-right","var(--bs-border-width) solid var(--bs-border-color)"],[1,"py-1","py-sm-1","py-md-2","green"],[1,"note"],[1,"py-1","py-sm-2","py-md-4"],[1,"col-12"],[1,"green"],[1,"col-12","col-sm-10","col-md-8","gap-2","d-flex","align-items-center"],[1,"col-12","col-sm-5","col-md-6","px-1","px-sm-1","px-md-1","py-1","py-sm-1","py-md-2"],[1,"col-12","px-1","px-sm-1","px-md-1","row"],[1,"green","px-1","px-sm-1","px-md-2"],[1,"flex","flex-col","gap-4","w-full","sm:w-56",3,"ngSubmit","formGroup"],[1,"col-12","row"],[1,"col-6","py-1","py-sm-1","py-md-2","px-1","px-sm-1","px-md-2"],["variant","in"],["pInputText","","type","text","id","name","formControlName","name","aria-label","Enter your name. Input is Mandatory.",3,"invalid"],["for","name"],["severity","error","size","small","variant","simple"],["pInputText","","type","text","id","organization","formControlName","organization","aria-label","Enter your organization name. Input is Mandatory.",3,"invalid"],["for","organization"],["pInputText","","type","number","id","phone","formControlName","phone","aria-label","Enter your phone number. Input is Mandatory.",3,"invalid"],["for","phone"],["pInputText","","type","text","id","email","formControlName","email","aria-label","Enter your email. Input is Mandatory.",3,"invalid"],["for","email"],[1,"col-12","py-1","py-sm-1","py-md-2","px-1","px-sm-1","px-md-2"],["pInputText","","type","text","id","subject","formControlName","subject","aria-label","Enter subject for which you want to contact us. Input is Mandatory.",3,"invalid"],["for","subject"],["rows","4","pInputText","","type","text","id","message","formControlName","message","aria-label","Enter message for which you want to contact us. Input is Mandatory.",3,"invalid"],[1,"col-12","py-1","py-sm-1","py-md-2","px-1","px-sm-1","px-md-2","text-center"],["pButton","","type","submit",2,"width","fit-content"],["pButtonLabel",""],[1,"col-12","py-1","py-sm-2","py-md-4"],["method","POST","target","googleResponse",2,"display","none",3,"action"],["type","hidden","name","name",3,"value"],["type","hidden","name","organization",3,"value"],["type","hidden","name","subject",3,"value"],["type","hidden","name","message",3,"value"],["type","hidden","name","email",3,"value"],["type","hidden","name","phone",3,"value"],["name","googleResponse",2,"display","none"],[1,"col-auto"],[1,"col"],[2,"color","#000","text-decoration","none",3,"href"]],template:function(e,i){if(e&1&&(a(0,"div",1)(1,"div",2)(2,"div",3)(3,"h2",4),u(4),l(),a(5,"div",5),u(6),l(),y(7,"div",6),a(8,"div",7)(9,"h4",8),u(10),l(),ct(11,Zi,6,2,"div",9,Wi),l()(),a(13,"div",10)(14,"div",11)(15,"h2",12),u(16,"Send Us A Message"),l(),a(17,"form",13),S("ngSubmit",function(){return i.onSubmit()}),a(18,"div",14)(19,"div",15)(20,"p-floatLabel",16),y(21,"input",17),a(22,"label",18),u(23,"Your Name *"),l()(),h(24,Ji,2,0,"p-message",19),l(),a(25,"div",15)(26,"p-floatLabel",16),y(27,"input",20),a(28,"label",21),u(29,"Your Organization Name *"),l()(),h(30,Ki,2,0,"p-message",19),l(),a(31,"div",15)(32,"p-floatLabel",16),y(33,"input",22),a(34,"label",23),u(35,"Phone Number *"),l()(),h(36,eo,2,0,"p-message",19),l(),a(37,"div",15)(38,"p-floatLabel",16),y(39,"input",24),a(40,"label",25),u(41,"Email *"),l()(),h(42,io,2,2),l(),a(43,"div",26)(44,"p-floatLabel",16),y(45,"input",27),a(46,"label",28),u(47,"Subject *"),l()(),h(48,oo,2,0,"p-message",19),l(),a(49,"div",26)(50,"p-floatLabel",16),y(51,"textarea",29),a(52,"label",28),u(53,"Message *"),l()(),h(54,ro,2,0,"p-message",19),l(),a(55,"div",30)(56,"button",31)(57,"span",32),u(58,"Submit Enquiry"),l()()()()()()()(),y(59,"div",33),l(),a(60,"form",34,0),y(62,"input",35)(63,"input",36)(64,"input",37)(65,"input",38)(66,"input",39)(67,"input",40),l(),y(68,"iframe",41)),e&2){let o,r,c,Ye,Qe,Xe,Ze,Je;s(4),P(i.langService.lablels().contactUsTouch),s(2),P(i.langService.lablels().contactUsTouchDesc),s(4),P(i.langService.lablels()[(o=i.contactUs())==null?null:o.label]),s(),ut((r=i.contactUs())==null?null:r.items),s(6),d("formGroup",i.contactUsForm),s(4),d("invalid",i.isInvalid("name")),s(3),m(i.isInvalid("name")?24:-1),s(3),d("invalid",i.isInvalid("organization")),s(3),m(i.isInvalid("organization")?30:-1),s(3),d("invalid",i.isInvalid("phone")),s(3),m(i.isInvalid("phone")?36:-1),s(3),d("invalid",i.isInvalid("email")),s(3),m(i.isInvalid("email")?42:-1),s(3),d("invalid",i.isInvalid("subject")),s(3),m(i.isInvalid("subject")?48:-1),s(3),d("invalid",i.isInvalid("message")),s(3),m(i.isInvalid("message")?54:-1),s(6),d("action",i.googleScriptUrl,ue),s(2),d("value",(c=i.dataToSubmit())==null?null:c.name),s(),d("value",(Ye=i.dataToSubmit())==null?null:Ye.organization),s(),d("value",(Qe=i.dataToSubmit())==null?null:Qe.subject),s(),d("value",(Xe=i.dataToSubmit())==null?null:Xe.message),s(),d("value",(Ze=i.dataToSubmit())==null?null:Ze.email),s(),d("value",(Je=i.dataToSubmit())==null?null:Je.phone)}},dependencies:[Y,Nt,Tt,St,Pt,wt,vn,hn,Me,He,ln,dn,$e,Le,Vn,Dn,kn,Tn,qe,En,We,Ot],encapsulation:2})};export{On as ContactUs};
