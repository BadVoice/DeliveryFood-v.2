/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_secondMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/secondMenu */ \"./src/modules/secondMenu.js\");\n\r\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_secondMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBaUM7QUFDWTtBQUM3QztBQUNBO0FBQ0EseURBQUk7QUFDSixnRUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5Zm9vZC8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGggZnJvbSBcIi4vbW9kdWxlcy9hdXRoXCJcclxuaW1wb3J0IHNlY29uZE1lbnUgZnJvbSBcIi4vbW9kdWxlcy9zZWNvbmRNZW51XCJcclxuXHJcblxyXG5hdXRoKClcclxuc2Vjb25kTWVudSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n    const btnAuth = document.querySelector('.button-auth');\r\n    const modalAuth = document.querySelector('.modal-auth')\r\n    const closeAuthModal = document.querySelector('.close-auth')\r\n    const logInForm = document.getElementById('logInForm')\r\n    const modalDialogAuth = document.querySelector('.modal-dialog-auth')\r\n    const btnLogin = document.querySelector('.button-login')\r\n    const loginInput = document.getElementById('login')\r\n    const passwordInput = document.getElementById('password')\r\n    const btnOut = document.querySelector('.button-out')\r\n    const userName = document.querySelector('.user-name')\r\n    const cartBtn = document.getElementById('cart-button')\r\n    const cartModal = document.querySelector('.modal-cart')\r\n    const cartClose = document.querySelector('.close')\r\n\r\n\r\n    cartBtn.addEventListener('click', () => {\r\n        cartModal.style.display = 'flex'\r\n    })\r\n\r\n    cartClose.addEventListener('click', () => {\r\n        cartModal.style.display = 'none'\r\n    })\r\n\r\n    btnAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'flex'\r\n    })\r\n\r\n    closeAuthModal.addEventListener('click', () => {\r\n        modalAuth.style.display = 'none'\r\n    })\r\n\r\n    btnOut.addEventListener('click', () => {\r\n        logout()\r\n    })\r\n\r\n    const login = (user) => {\r\n        btnAuth.style.display = 'none'\r\n        btnOut.style.display = 'flex'\r\n        userName.style.display = 'flex'\r\n        userName.textContent = user.login\r\n        modalAuth.style.display = 'none'\r\n\r\n        if (user.login === \"\") {\r\n            alert('введите логин')\r\n            userName.textContent = \"\"\r\n            btnAuth.style.display = 'flex';\r\n            btnOut.style.display = 'none';\r\n            modalAuth.style.display = 'flex';\r\n            localStorage.removeItem(\"user\");\r\n        }\r\n    }\r\n\r\n    const logout = () => {\r\n        btnAuth.style.display = 'flex'\r\n        btnOut.style.display = 'none'\r\n        userName.style.display = 'none'\r\n        userName.textContent = ' ';\r\n        localStorage.removeItem('user')\r\n    }\r\n\r\n    logInForm.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n        const user = {\r\n            login: loginInput.value,\r\n            password: passwordInput.value,\r\n        }\r\n\r\n        localStorage.setItem('user', JSON.stringify(user))\r\n        login(user)\r\n    })\r\n\r\n    if (localStorage.getItem('user')) {\r\n        login(JSON.parse(localStorage.getItem('user')))\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeWZvb2QvLi9zcmMvbW9kdWxlcy9hdXRoLmpzP2U3YjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXV0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ0bkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWF1dGgnKTtcclxuICAgIGNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdXRoJylcclxuICAgIGNvbnN0IGNsb3NlQXV0aE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWF1dGgnKVxyXG4gICAgY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ0luRm9ybScpXHJcbiAgICBjb25zdCBtb2RhbERpYWxvZ0F1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nLWF1dGgnKVxyXG4gICAgY29uc3QgYnRuTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWxvZ2luJylcclxuICAgIGNvbnN0IGxvZ2luSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKVxyXG4gICAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpXHJcbiAgICBjb25zdCBidG5PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW91dCcpXHJcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKVxyXG4gICAgY29uc3QgY2FydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWJ1dHRvbicpXHJcbiAgICBjb25zdCBjYXJ0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FydCcpXHJcbiAgICBjb25zdCBjYXJ0Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKVxyXG5cclxuXHJcbiAgICBjYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNhcnRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9KVxyXG5cclxuICAgIGNhcnRDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjYXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfSlcclxuXHJcbiAgICBidG5BdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9KVxyXG5cclxuICAgIGNsb3NlQXV0aE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9KVxyXG5cclxuICAgIGJ0bk91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2dvdXQoKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgICAgICAgYnRuQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgYnRuT3V0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyLmxvZ2luXHJcbiAgICAgICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcbiAgICAgICAgaWYgKHVzZXIubG9naW4gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ9Cy0LLQtdC00LjRgtC1INC70L7Qs9C40L0nKVxyXG4gICAgICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IFwiXCJcclxuICAgICAgICAgICAgYnRuQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICBidG5PdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGJ0bkF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIGJ0bk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gJyAnO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcclxuICAgIH1cclxuXHJcbiAgICBsb2dJbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgICAgICBsb2dpbjogbG9naW5JbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkSW5wdXQudmFsdWUsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxyXG4gICAgICAgIGxvZ2luKHVzZXIpXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XHJcbiAgICAgICAgbG9naW4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/secondMenu.js":
/*!***********************************!*\
  !*** ./src/modules/secondMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst secondMenu = () => {\r\n    const menuHeadin = document.querySelector('.section-heading')\r\n    const cardMenuInfo = document.querySelector('.card-info')\r\n\r\n    console.log(cardMenuInfo)\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (secondMenu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zZWNvbmRNZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeWZvb2QvLi9zcmMvbW9kdWxlcy9zZWNvbmRNZW51LmpzPzFlNGEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2Vjb25kTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVIZWFkaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1oZWFkaW5nJylcclxuICAgIGNvbnN0IGNhcmRNZW51SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWluZm8nKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGNhcmRNZW51SW5mbylcclxuXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNlY29uZE1lbnUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/secondMenu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;