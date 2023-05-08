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
/* harmony import */ var _components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/snackbar/snackbar.component */ "xeRM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
        _components_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
        _components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
    patch(endpoint, body) {
        return this.http.patch(this.apiUrl + endpoint, body, { headers: this.getHeaders() });
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
/* harmony import */ var _components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/snackbar/snackbar.component */ "xeRM");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/form/form.component */ "x83m");






function RegistrationComponent_main_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dataForm", function RegistrationComponent_main_5_Template_app_form_dataForm_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onSubmit($event); })("showData", function RegistrationComponent_main_5_Template_app_form_showData_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.formTile)("submitTile", ctx_r0.submitTile)("showDataForm", ctx_r0.showDataForm)("btnLoading", ctx_r0.isBtnLoading)("cities", ctx_r0.cities)("states", ctx_r0.states);
} }
class RegistrationComponent {
    constructor(service) {
        this.service = service;
        this.formTile = "Inscrição do canditado";
        this.submitTile = "Salvar inscrição";
        this.isLoading = false;
        this.isCreate = true;
        this.isBtnLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showDataForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showSnacbar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cities = [];
        this.states = [];
    }
    ngOnInit() {
        this.service.getCities().subscribe((value) => {
            this.cities = value.data.cities;
            this.states = value.data.states;
        });
    }
    onSubmit(value) {
        if (this.isCreate) {
            this.onSubmitCreate(value);
        }
        else {
            this.onSubmitUpdate(value);
        }
    }
    onSubmitCreate(value) {
        this.service.postRegistration(value).subscribe((value) => {
            let data = {
                message: value.message,
                color: 'bg-success'
            };
            this.showSnacbar.emit(data);
            this.isBtnLoading.emit(false);
        }, (error) => {
            let data = {
                message: error.error.message,
                color: 'bg-danger'
            };
            this.showSnacbar.emit(data);
            this.isBtnLoading.emit(false);
        });
    }
    onSubmitUpdate(value) {
        this.service.putRegistration(value).subscribe((value) => {
            let data = {
                message: value.message,
                color: 'bg-success'
            };
            this.showSnacbar.emit(data);
            this.isBtnLoading.emit(false);
        }, (error) => {
            let data = {
                message: error.error.message,
                color: 'bg-danger'
            };
            this.showSnacbar.emit(data);
            this.isBtnLoading.emit(false);
        });
    }
    showData(cpf) {
        this.service.getRegistrationByCPF(cpf).subscribe((data) => {
            let value = data.data[0];
            console.log(value);
            this.showDataForm.emit({
                id: value.id,
                personId: value.pessoa_fisica_id,
                name: value.nome,
                job: value.cargo,
                address: value.endereco,
                cityId: value.cidade_id,
                stateId: value.estado_id,
                CPF: value.cpf
            });
            this.isCreate = false;
        }, (error) => {
            let data = {
                message: error.error.message,
                color: 'bg-warning'
            };
            this.showSnacbar.emit(data);
            this.showDataForm.emit({});
        });
    }
    onIsFormLoading(value) {
        this.isLoading = value;
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_registration_service__WEBPACK_IMPORTED_MODULE_1__["RegistrationService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], outputs: { isBtnLoading: "isBtnLoading", showDataForm: "showDataForm", showSnacbar: "showSnacbar" }, decls: 8, vars: 2, consts: [[1, "root"], [1, "container"], [1, "mb-2", "mt-5", "row", "col-12", "text-center"], [1, "col-12", "setTitle"], ["class", "m-3", 4, "ngIf"], [3, "showSnacbar"], [1, "m-3"], [3, "title", "submitTile", "showDataForm", "btnLoading", "cities", "states", "dataForm", "showData"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Concurso P\u00FAblico para Desenvolvedor de Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegistrationComponent_main_5_Template, 2, 6, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-snackbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.states.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSnacbar", ctx.showSnacbar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["SnackbarComponent"], _components_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n.root[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90vh;\n  background-color: var(---color-primary);\n}\n\n.setTitle[_ngcontent-%COMP%] {\n  font-size: 18pt;\n  font-weight: bolder;\n  color: #b904b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLnJvb3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4uc2V0VGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE4cHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6IHJnYigxODUsIDQsIDE4NSk7XHJcbn1cclxuIl19 */"] });


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
    getRegistrationByCPF(cpf) {
        return this.get(`/inscricao/${cpf}`);
    }
    postRegistration(value) {
        return this.post('/inscricao', {
            "nome": value.name,
            "cpf": value.CPF,
            "endereco": value.address,
            "cidade_id": value.cityId,
            "estado_id": value.stateId,
            "cargo": value.job,
            "situacao": "enviado"
        });
    }
    putRegistration(value) {
        return this.patch('/inscricao', {
            "nome": value.name,
            "id": value.id,
            "pessoa_fisica_id": value.personId,
            "cpf": value.CPF,
            "endereco": value.address,
            "cidade_id": value.cityId,
            "estado_id": value.stateId,
            "cargo": value.job,
            "situacao": "enviado"
        });
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




function FormComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.loadData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Carregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r8.estado_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r8.nome);
} }
function FormComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r9.cidade_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r9.nome);
} }
function FormComponent_button_59_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_button_59_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.submitTile);
} }
function FormComponent_button_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormComponent {
    constructor() {
        this.title = '';
        this.submitTile = '';
        this.cities = [];
        this.states = [];
        this.isBtnLoading = false;
        this.isBtnLoadingData = false;
        this.isFielddisabled = false;
        this.dataForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedCities = [];
        this.formData = {};
        this.validadeDefaultMessage = "Ops! Precisa informar";
    }
    ngOnInit() {
        var _a, _b;
        (_a = this.btnLoading) === null || _a === void 0 ? void 0 : _a.subscribe((value) => {
            this.isBtnLoading = value;
            //this.isFielddisabled=value;
        });
        (_b = this.showDataForm) === null || _b === void 0 ? void 0 : _b.subscribe((value) => {
            let s = document.querySelector("#state");
            this.formData = value;
            if (value.stateId && value.cityId) {
                this.submitTile = "Atualizar dados";
                this.isFielddisabled = true;
                s.value = value.stateId.toString();
                let ciity = value.cityId.toString();
                this.selectedState = value.stateId;
                this.selectedCities = this.cities.filter(c => c.estado_id == this.selectedState);
                setTimeout(() => {
                    let c = document.querySelector("#city");
                    c.value = ciity;
                }, 100);
            }
            this.isBtnLoadingData = false;
        });
    }
    cpfFormatClean(cpf) {
        return cpf.replace(/^[\s\uFEFF\xA0]+/g, '').replace(/[\ \/\.\-\\]/g, "").trim();
    }
    formDataAssignValues(key, value) {
        switch (key) {
            case 'CPF':
                this.formData.CPF = this.cpfFormatClean(value);
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
                this.formData.stateId = parseInt(value);
                break;
            case 'Cidade':
                this.formData.cityId = parseInt(value);
                break;
            case 'Endereço':
                this.formData.address = value;
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
    formatCpf(value) {
        let str = value.target.value;
        value.target.value = this.maskCpf(str);
    }
    maskCpf(value) {
        return value.replace(/\D/g, '')
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
        let isCPF = this.validateCpf();
        if (this.validateForm() && isCPF) {
            this.isBtnLoading = true;
            this.isFielddisabled = true;
            this.dataForm.emit(this.formData);
        }
    }
    loadData() {
        let elCpf = document.querySelector(".validate-cpf");
        let isCPF = this.validateCpf();
        if (isCPF) {
            this.isBtnLoadingData = true;
            console.log(this.cpfFormatClean(elCpf.value));
            this.showData.emit(this.cpfFormatClean(elCpf.value));
        }
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], inputs: { title: "title", submitTile: "submitTile", cities: "cities", states: "states", btnLoading: "btnLoading", showDataForm: "showDataForm" }, outputs: { dataForm: "dataForm", showData: "showData" }, decls: 61, vars: 17, consts: [[1, "col-12"], [1, "row"], [1, "mb-5", "mt-5", "text-center", "setTitle"], [1, "col-md-6", "col-sm-12", "row"], [1, "form-group", "mb-3", "col-12"], [1, "col-8", "required"], ["type", "text", "placeholder", "Informe seu CPF...", 1, "form-control", "validate-cpf", 3, "disabled", "value", "input"], ["hidden", "", 1, "text-danger"], [1, "col-4", "d-flex", "align-items-center"], ["class", "btn btn-primary w-100 p-2", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary w-100 p-1", 4, "ngIf"], [1, "text-danger", 2, "visibility", "hidden"], [1, "form-group", "required", "mb-3", "col-12"], ["type", "text", "placeholder", "Digite seu nome...", 1, "form-control", "validate", 3, "value", "disabled", "input"], ["type", "text", "placeholder", "Digite seu e-mail...", 1, "form-control", "validate", 3, "value", "disabled"], [1, "col-md-6", "col-sm-12"], ["type", "text", "placeholder", "Informe seu cargo...", 1, "form-control", "validate", 3, "value", "disabled"], [1, "form-group", "required", "mb-3", "col-6"], ["id", "state", 1, "form-select", "validate", 3, "disabled", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "city", 1, "form-select", "validate", 3, "disabled"], [1, "col-md-8", "col-sm-7"], [1, "col-md-4", "col-sm-5"], ["type", "submit", "class", "btn btn-success w-100 p-2", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success w-100 p-1", 4, "ngIf"], [1, "btn", "btn-primary", "w-100", "p-2", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "p-1"], ["role", "status", 1, "spinner-border", "text-warning", "m-0"], [3, "value"], ["type", "submit", 1, "btn", "btn-success", "w-100", "p-2", 3, "click"], ["type", "submit", 1, "btn", "btn-success", "w-100", "p-1"], ["role", "status", 1, "spinner-border", "text-warning"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CPF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormComponent_Template_input_input_11_listener($event) { return ctx.formatCpf($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ops! Precisa informar o CPF!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormComponent_button_15_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormComponent_button_16_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ops! Precisa informar o CPF!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nome completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormComponent_Template_input_input_22_listener($event) { return ctx.realTimeValidateNameInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ops! Precisa informar o nome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Endere\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ops! Precisa informar o endere\u00E7o!.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ops! Precisa informar o cargo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormComponent_Template_select_change_42_listener($event) { return ctx.onSelectedState($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, FormComponent_option_44_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Ops! Precisa informar um estado!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, FormComponent_option_52_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Ops! Precisa informar uma cidade!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, FormComponent_button_59_Template, 2, 1, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, FormComponent_button_60_Template, 2, 0, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isBtnLoading || ctx.isFielddisabled)("value", ctx.formData.CPF ? ctx.maskCpf(ctx.formData.CPF) : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isBtnLoadingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBtnLoadingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formData.name ? ctx.formData.name : "")("disabled", ctx.isBtnLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formData.address ? ctx.formData.address : "")("disabled", ctx.isBtnLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formData.job ? ctx.formData.job : "")("disabled", ctx.isBtnLoading || ctx.isFielddisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isBtnLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isBtnLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedCities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isBtnLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBtnLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["hr[_ngcontent-%COMP%] {\n  color: var(---color-hr);\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n.setTitle[_ngcontent-%COMP%] {\n  font-size: 16pt;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFFSiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHJ7XHJcbiAgICBjb2xvcjogdmFyKC0tLWNvbG9yLWhyKTtcclxuICAgIFxyXG59XHJcbmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uc2V0VGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE2cHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "xeRM":
/*!***********************************************************!*\
  !*** ./src/app/components/snackbar/snackbar.component.ts ***!
  \***********************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


class SnackbarComponent {
    constructor() {
        this.selectionColor = 'bg-success';
        this.seconds = 3;
        this.isShow = false;
        this.isFade = false;
        this.message = '';
    }
    ngOnInit() {
        var _a;
        if (screen.width <= 768) {
            let el = document.querySelector('.snackbar');
            if (el) {
                el.style.bottom = '20px';
            }
        }
        (_a = this.showSnacbar) === null || _a === void 0 ? void 0 : _a.subscribe((value) => {
            this.message = value.message;
            this.selectionColor = value.color;
            this.show();
        });
    }
    show() {
        this.isShow = true;
        setTimeout(() => {
            this.isShow = false;
            this.isFade = true;
            setTimeout(() => {
                this.isFade = false;
            }, 2000);
        }, this.seconds * 1000);
    }
    getColor() {
    }
}
SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) { return new (t || SnackbarComponent)(); };
SnackbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackbarComponent, selectors: [["app-snackbar"]], inputs: { showSnacbar: "showSnacbar" }, decls: 3, vars: 6, consts: [[1, "snackbar", "bg-success", 3, "ngClass"]], template: function SnackbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isShow)("fade", ctx.isFade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectionColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".snackbar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3000;\n  border-radius: 10px;\n  display: none;\n  left: 200%;\n  bottom: 5;\n  max-width: 300px;\n  width: 60%;\n  height: auto;\n  color: white;\n  padding: 20px;\n  transform: translateX(-50%);\n  justify-content: center;\n  align-items: center;\n}\n\n.snackbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.snackbar.show[_ngcontent-%COMP%] {\n  display: flex;\n  left: 50%;\n  animation: show 1s;\n}\n\n.snackbar.fade[_ngcontent-%COMP%] {\n  display: flex;\n  left: -50%;\n  animation: fade 1s;\n}\n\n@keyframes show {\n  0% {\n    left: -50%;\n  }\n  100% {\n    left: 50%;\n  }\n}\n\n@keyframes fade {\n  0% {\n    left: 50%;\n  }\n  100% {\n    left: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbmFja2Jhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksVUFBQTtFQUNOO0VBQ0U7SUFDSSxTQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBQ0ksU0FBQTtFQUFOO0VBRUU7SUFDSSxTQUFBO0VBQU47QUFDRiIsImZpbGUiOiJzbmFja2Jhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc25hY2tiYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAzMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBsZWZ0OiAyMDAlO1xyXG4gICAgYm90dG9tOiA1O1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHJcbn1cclxuLnNuYWNrYmFyIHB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uc25hY2tiYXIuc2hvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBhbmltYXRpb246IHNob3cgMXM7XHJcbn1cclxuLnNuYWNrYmFyLmZhZGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbGVmdDogLTUwJTtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAxcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaG93IHtcclxuICAgIDAle1xyXG4gICAgICAgIGxlZnQ6IC01MCU7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICAwJXtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIGxlZnQ6IDcwJTtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"] });


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