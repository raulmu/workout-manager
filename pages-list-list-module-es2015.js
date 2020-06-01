(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Workout Manager</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n  <ion-fab horizontal=\"center\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"showAddModal()\" color=\"primary\" size=\"small\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-item>\r\n    <ion-button fill=\"clear\" slot=\"end\" (click)=\"demoWorkouts()\">demo</ion-button>\r\n    <ion-button *ngIf=\"workouts.length\" fill=\"clear\" slot=\"end\" (click)=\"clearWorkouts()\">limpar</ion-button>\r\n  </ion-item>\r\n  <ion-grid class=\"ion-margin-bottom\">\r\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\r\n      <ion-col class=\"ion-text-center ion-margin-bottom\" size=\"12\" size-lg=\"6\" offset-lg=\"3\">\r\n        <ion-list>\r\n          <ion-item id=\"item-add\" *ngIf=\"!workouts.length\" (click)=\"showAddModal()\">\r\n            <ion-label><a>adicione um exercício</a></ion-label>\r\n          </ion-item>\r\n          <ion-item *ngFor=\"let workout of workouts\">\r\n            <ion-grid>\r\n              <ion-row class=\"ion-align-items-center\">\r\n                <ion-col size=\"5\">\r\n                    <ion-row>\r\n                      <ion-col id=\"done-col\" size=\"12\">\r\n                        <ion-button [disabled]=\"workout.done == 0\" (click)=\"updateWorkout(workout,-1)\">-</ion-button>\r\n                        <ion-label>{{workout.done}}</ion-label>\r\n                        <ion-button [disabled]=\"workout.done == workout.setsNum\" (click)=\"updateWorkout(workout,1)\">+</ion-button>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col id=\"play-col\" size=\"12\">\r\n                        <ion-button [disabled]=\"!isPlayingWorkout.length || isPlayingWorkout!=workout.id || workoutPaused.length\" fill=\"clear\" rounded (click)=\"pauseWorkout(workout)\">\r\n                          <ion-icon name=\"pause\"></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button [disabled]=\"!workout.seconds || (isPlayingWorkout.length && workoutPaused!=workout.id)\" fill=\"clear\" rounded (click)=\"playWorkout(workout)\">\r\n                          <ion-icon name=\"play\"></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button [disabled]=\"!isPlayingWorkout.length || isPlayingWorkout!=workout.id\" fill=\"clear\" rounded (click)=\"stopWorkout(workout)\">\r\n                          <ion-icon name=\"stop\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                </ion-col>\r\n                <ion-col size=\"5\">\r\n                  <ion-label>\r\n                    <h2>{{workout.summary}}</h2>\r\n                    <h3>séries: {{ workout.setsNum ? workout.done +'/'+ workout.setsNum : '-'}} <ion-icon *ngIf=\"workout.done === workout.setsNum\" color=\"primary\" name=\"checkmark-circle\" slot=\"end\"></ion-icon></h3>\r\n                    <h3>repetições: {{workout.repeatsNum ? workout.repeatsNum : '-'}}</h3>\r\n                    <h3 *ngIf=\"!isPlayingWorkout.length || isPlayingWorkout!==workout.id; else elseSeconds\">segundos: {{workout.seconds ? workout.seconds : '-'}}</h3>\r\n                    <ng-template #elseSeconds>\r\n                      <h3 class=\"seconds-play\">segundos: {{workout.seconds}}</h3>\r\n                    </ng-template>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <ion-button fill=\"clear\" rounded (click)=\"showWorkout(workout)\">\r\n                    <ion-icon name=\"create\"></ion-icon>\r\n                  </ion-button>\r\n                  <ion-button fill=\"clear\" rounded (click)=\"removeWorkout(workout)\">\r\n                    <ion-icon name=\"trash\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/list/list-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/list/list-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/list/list.page.ts");




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"],
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/list/list.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.module.ts ***!
  \*******************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/list/list.page.ts");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/pages/list/list-routing.module.ts");







let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_6__["ListPageRoutingModule"]
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_5__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/pages/list/list.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#item-add {\n  cursor: pointer;\n}\n\n#done-col {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: space-between;\n}\n\n#play-col {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.seconds-play {\n  color: var(--ion-color-primary-shade);\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC9DOlxcVXNlcnNcXHJhdWxcXFByaXZhdGVQcm9qZWN0c1xcd29ya291dC1tYW5hZ2VyL3NyY1xcYXBwXFxwYWdlc1xcbGlzdFxcbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNpdGVtLWFkZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jZG9uZS1jb2wge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNwbGF5LWNvbCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc2Vjb25kcy1wbGF5IHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2l0ZW0tYWRkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZG9uZS1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3BsYXktY29sIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlY29uZHMtcGxheSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/list/list.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/list/list.page.ts ***!
  \*****************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _add_add_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add/add.page */ "./src/app/pages/add/add.page.ts");
/* harmony import */ var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local.service */ "./src/app/services/local.service.ts");






let ListPage = class ListPage {
    constructor(modalController, dataService) {
        this.modalController = modalController;
        this.dataService = dataService;
        this.JSON = JSON;
        this.workouts = [];
        this.isPlayingWorkout = '';
        this.workoutPaused = '';
        this.secondsTotal = 0;
        this.subscritions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ngOnInit() {
        this.subscritions.add(this.dataService.workoutsSubject.subscribe((workouts) => {
            this.workouts = workouts;
        }));
        this.dataService.workoutsFetch();
    }
    ngOnDestroy() {
        this.subscritions.unsubscribe();
    }
    showAddModal(workout) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_add_page__WEBPACK_IMPORTED_MODULE_4__["AddPage"],
                componentProps: {
                    'workout': workout
                }
            });
            return yield modal.present();
        });
    }
    updateWorkout(workout, value) {
        workout.done += value;
        workout.done = workout.done < 0 ? 0 : workout.done;
        workout.done = workout.done > workout.setsNum ? workout.setsNum : workout.done;
        this.dataService.updateWorkout(workout);
    }
    removeWorkout(workout) {
        this.dataService.deleteWorkout(workout);
    }
    clearWorkouts() {
        this.dataService.clearWorkouts();
    }
    demoWorkouts() {
        this.dataService.demonstrationsValue();
    }
    showWorkout(workout) {
        this.showAddModal(workout);
    }
    playWorkout(workout) {
        const audio = new Audio();
        const source = document.createElement("source");
        this.isPlayingWorkout = workout.id;
        this.workoutPaused = '';
        source.setAttribute('src', 'assets/sounds/beep-start.mp3');
        source.setAttribute("type", "audio/mpeg");
        audio.append(source);
        audio.load();
        audio.play();
        this.secondsTotal = workout.seconds;
        window.setTimeout(() => {
            this.isPlayingWorkout = workout.id;
            this.workoutPaused = '';
            this.interval = window.setInterval(() => this.toDo(workout), 1000);
        }, 3500);
    }
    stopWorkout(workout) {
        if (this.isPlayingWorkout === workout.id) {
            this.isPlayingWorkout = '';
            window.clearInterval(this.interval);
            workout.seconds = this.secondsTotal;
        }
    }
    pauseWorkout(workout) {
        if (this.isPlayingWorkout === workout.id) {
            this.workoutPaused = workout.id;
            window.clearInterval(this.interval);
        }
    }
    toDo(workout) {
        if (!workout.seconds) {
            const audio = new Audio();
            const source = document.createElement("source");
            source.setAttribute("src", "assets/sounds/trim-stop.mp3");
            source.setAttribute("type", "audio/mpeg");
            audio.append(source);
            audio.load();
            audio.play();
            window.clearInterval(this.interval);
            this.isPlayingWorkout = '';
            workout.seconds = this.secondsTotal;
            if (workout.done < workout.setsNum) {
                this.updateWorkout(workout, 1);
            }
        }
        else {
            workout.seconds = workout.seconds - 1;
        }
    }
};
ListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_5__["LocalService"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/list/list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_local_service__WEBPACK_IMPORTED_MODULE_5__["LocalService"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=pages-list-list-module-es2015.js.map