(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Wister-Nayara\Documents\PROJETOS_WISTER\concurso-000\resources\assets\concurso\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: "http://localhost:8000/api/v1"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'concurso';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/registration/registration.component */ "n1O7");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form/form.component */ "x83m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
        _components_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();


/***/ }),

/***/ "mNip":
/*!***********************************************!*\
  !*** ./src/app/services/core/base.service.ts ***!
  \***********************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class BaseService {
    constructor(injector) {
        this.injector = injector;
        this.http = this.injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]);
        this.apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl}`;
    }
    get(endpoint) {
        return this.http.get(this.apiUrl + endpoint, { headers: this.getHeaders() });
    }
    post(endpoint, body) {
        return this.http.post(this.apiUrl + endpoint, body, { headers: this.getHeaders() });
    }
    put(endpoint, body) {
        return this.http.put(this.apiUrl + endpoint, body, { headers: this.getHeaders() });
    }
    delete(endpoint) {
        return this.http.delete(this.apiUrl + endpoint, { headers: this.getHeaders() });
    }
    patch(endpoint) {
        return this.http.patch(this.apiUrl + endpoint, { headers: this.getHeaders() });
    }
    getHeaders() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json');
        return headers;
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"])); };
BaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "n1O7":
/*!**************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/registration.service */ "rMDH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form/form.component */ "x83m");




function RegistrationComponent_main_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dataForm", function RegistrationComponent_main_4_Template_app_form_dataForm_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.formTile)("submitTile", ctx_r0.submitTile)("isBtnLoading", ctx_r0.isBtnLoading)("cities", ctx_r0.cities)("states", ctx_r0.states);
} }
class RegistrationComponent {
    constructor(service) {
        this.service = service;
        this.formTile = "Inscrição do canditado";
        this.submitTile = "Salvar inscrição";
        this.isLoading = false;
        this.isBtnLoading = false;
        this.cities = [];
        this.states = [];
    }
    ngOnInit() {
        /*  this.service.getRegistration().subscribe(
           (value:any)=>{
             console.log(value);
     
           }
         ); */
        this.service.getCities().subscribe((value) => {
            this.cities = value.data.cities;
            this.states = value.data.states;
            console.log("kd os dados?", this.states);
        });
    }
    onSubmit(value) {
        console.log(value);
        setTimeout(() => {
            this.isBtnLoading = false;
        }, 2000);
    }
    onIsFormLoading(value) {
        this.isLoading = value;
        console.log(value);
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_registration_service__WEBPACK_IMPORTED_MODULE_1__["RegistrationService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 6, vars: 1, consts: [[1, "container"], [1, "mb-5", "mt-5", "row", "col-12", "text-center"], [1, "col-12"], ["class", "m-3", 4, "ngIf"], [1, "m-3"], [3, "title", "submitTile", "isBtnLoading", "cities", "states", "dataForm"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Concurso p\u00FAblico para desenvolvedor de Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegistrationComponent_main_4_Template, 2, 5, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.states.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "rMDH":
/*!**************************************************!*\
  !*** ./src/app/services/registration.service.ts ***!
  \**************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/base.service */ "mNip");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RegistrationService extends _core_base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    getRegistration() {
        return this.get('/inscricao');
    }
    getCities() {
        return this.get('/cidadeuf');
    }
}
RegistrationService.ɵfac = function RegistrationService_Factory(t) { return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegistrationService, factory: RegistrationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/registration/registration.component */ "n1O7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: "", component: _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "x83m":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cpf-cnpj-validator */ "H1qn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function FormComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r4.estado_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r4.nome);
} }
function FormComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r5.cidade_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r5.nome);
} }
function FormComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_button_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.submitTile);
} }
function FormComponent_button_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormComponent {
    constructor() {
        this.title = '';
        this.submitTile = '';
        this.cities = [];
        this.states = [];
        this.isBtnLoading = false;
        this.dataForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedCities = [];
        this.formData = {};
        this.validadeDefaultMessage = "Ops! Precisa informar";
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        console.log('Propriedade "dados" foi atualizada:', this.isBtnLoading);
    }
    changeIsLoading(value) {
        this.isBtnLoading = value;
    }
    formDataAssignValues(key, value) {
        switch (key) {
            case 'CPF':
                this.formData.CPF = value.replace(/[\ \/\.\-\\]/g, "").trimStart().trimEnd();
                break;
            case 'Nome completo':
            case 'Nome':
            case 'Name':
                this.formData.name = value;
                break;
            case 'Cargo':
                this.formData.job = value;
                break;
            case 'Estado':
                this.formData.stateId = value;
                break;
            case 'Cidade':
                this.formData.cityId = value;
                break;
        }
    }
    realTimeValidateNameInput(event) {
        let value = event.target.value;
        value = value.replace(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+([ '-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/, function (match) {
            return match.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
        });
        event.target.value = value;
    }
    maskCpf(value) {
        let str = value.target.value;
        value.target.value = str.replace(/\D/g, '')
            .replace(/([\d]{3})(\d)/, '$1.$2')
            .replace(/([\d]{3})(\d)/, '$1.$2')
            .replace(/([\d]{3})(\d{1,2})/, '$1-$2')
            .replace(/(-[\d]{2})\d+?$/, '$1');
    }
    validateCpf() {
        let elCpf = document.querySelector(".validate-cpf");
        let label = elCpf.parentNode.querySelector('label').innerHTML;
        let isCpf = cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_1__["cpf"].isValid(elCpf.value);
        if (elCpf.value == null || elCpf.value == '') {
            elCpf.parentNode.querySelector('small').innerHTML = `${this.validadeDefaultMessage} ${label}!`;
            elCpf.parentNode.querySelector('small').hidden = false;
        }
        else if (!isCpf) {
            elCpf.parentNode.querySelector('small').innerHTML = `CPF inválido!`;
            elCpf.parentNode.querySelector('small').hidden = false;
        }
        else {
            isCpf = true;
            elCpf.parentNode.querySelector('small').hidden = true;
            this.formDataAssignValues(label, elCpf.value);
        }
        return isCpf;
    }
    validateForm() {
        let isOk = true;
        document.querySelectorAll('.validate').forEach((e) => {
            let el = e.value;
            let label = e.parentNode.querySelector('label').innerHTML;
            if (el == null || el == '') {
                isOk = false;
                e.parentNode.querySelector('small').innerHTML = `${this.validadeDefaultMessage} ${label}!`;
                e.parentNode.querySelector('small').hidden = false;
            }
            else {
                e.parentNode.querySelector('small').hidden = true;
                this.formDataAssignValues(label, el);
            }
        });
        return isOk;
    }
    onSelectedState(event) {
        let value = event.target.value;
        if (value != null) {
            this.selectedState = parseInt(value);
            this.selectedCities = this.cities.filter(c => c.estado_id == this.selectedState);
        }
    }
    submit() {
        if (this.validateForm() && this.validateCpf()) {
            this.emit(true);
            this.dataForm.emit(this.formData);
        }
    }
    emit(value) {
        this.isBtnLoading = value;
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], inputs: { title: "title", submitTile: "submitTile", cities: "cities", states: "states", isBtnLoading: "isBtnLoading" }, outputs: { dataForm: "dataForm" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 52, vars: 11, consts: [[1, "col-12"], [1, "row"], [1, "mb-5", "mt-5", "text-center"], [1, "col-md-6", "col-sm-12", "row"], [1, "form-group", "required", "mb-3", "col-12"], ["for", "exampleInputEmail1"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Digite seu nome...", 1, "form-control", "validate", 3, "disabled", "input"], ["hidden", "", "id", "emailHelp", 1, "text-danger"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Digite seu e-mail...", 1, "form-control", "validate", 3, "disabled"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Informe seu cardo...", 1, "form-control", "validate", 3, "disabled"], [1, "col-md-6", "col-sm-12"], ["type", "text", "placeholder", "Informe seu CPF...", 1, "form-control", "validate-cpf", 3, "disabled", "input"], [1, "form-group", "required", "mb-3", "col-6"], ["id", "", 1, "form-select", "validate", 3, "disabled", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "", 1, "form-select", "validate", 3, "disabled"], [1, "col-8"], [1, "col-4"], ["type", "submit", "class", "btn btn-success w-100 p-2", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success w-100 p-1", 4, "ngIf"], [3, "value"], ["type", "submit", 1, "btn", "btn-success", "w-100", "p-2", 3, "click"], ["type", "submit", 1, "btn", "btn-success", "w-100", "p-1"], ["role", "status", 1, "spinner-border", "text-warning"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nome completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormComponent_Template_input_input_8_listener($event) { return ctx.realTimeValidateNameInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ops! Precisa informar o nome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Endere\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ops! Precisa informar o endere\u00E7o!.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ops! Precisa informar o cargo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CPF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormComponent_Template_input_input_27_listener($event) { return ctx.maskCpf($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ops! Precisa informar o CPF!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormComponent_Template_select_change_34_listener($event) { return ctx.onSelectedState($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, FormComponent_option_36_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ops! Precisa informar um estado!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, FormComponent_option_44_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Ops! Precisa informar uma cidade!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, FormComponent_button_50_Template, 2, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, FormComponent_button_51_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isBtnLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isBtnLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isBtnLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isBtnLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isBtnLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isBtnLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedCities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isBtnLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBtnLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map