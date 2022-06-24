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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDRDtBQUNqQztBQUNBO0FBQ0EseURBQUk7QUFDSiwwREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5Zm9vZC8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGggZnJvbSBcIi4vbW9kdWxlcy9hdXRoXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudVwiXHJcblxyXG5cclxuYXV0aCgpXHJcbm1lbnUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n    const btnAuth = document.querySelector('.button-auth');\r\n    const modalAuth = document.querySelector('.modal-auth')\r\n    const closeAuthModal = document.querySelector('.close-auth')\r\n    const logInForm = document.getElementById('logInForm')\r\n    const modalDialogAuth = document.querySelector('.modal-dialog-auth')\r\n    const btnLogin = document.querySelector('.button-login')\r\n    const loginInput = document.getElementById('login')\r\n    const passwordInput = document.getElementById('password')\r\n    const btnOut = document.querySelector('.button-out')\r\n    const userName = document.querySelector('.user-name')\r\n    const cartBtn = document.getElementById('cart-button')\r\n    const cartModal = document.querySelector('.modal-cart')\r\n    const cartClose = document.querySelector('.close')\r\n\r\n\r\n    cartBtn.addEventListener('click', () => {\r\n        cartModal.style.display = 'flex'\r\n    })\r\n\r\n    cartClose.addEventListener('click', () => {\r\n        cartModal.style.display = 'none'\r\n    })\r\n\r\n    btnAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'flex'\r\n    })\r\n\r\n    closeAuthModal.addEventListener('click', () => {\r\n        modalAuth.style.display = 'none'\r\n    })\r\n\r\n    btnOut.addEventListener('click', () => {\r\n        logout()\r\n    })\r\n\r\n    const login = (user) => {\r\n        btnAuth.style.display = 'none'\r\n        btnOut.style.display = 'flex'\r\n        userName.style.display = 'flex'\r\n        userName.textContent = user.login\r\n        modalAuth.style.display = 'none'\r\n\r\n        if (user.login === \"\") {\r\n            alert('введите логин')\r\n            userName.textContent = \"\"\r\n            btnAuth.style.display = 'flex';\r\n            btnOut.style.display = 'none';\r\n            modalAuth.style.display = 'flex';\r\n            localStorage.removeItem(\"user\");\r\n        }\r\n    }\r\n\r\n    const logout = () => {\r\n        btnAuth.style.display = 'flex'\r\n        btnOut.style.display = 'none'\r\n        userName.style.display = 'none'\r\n        userName.textContent = ' ';\r\n        localStorage.removeItem('user')\r\n    }\r\n\r\n    logInForm.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n        const user = {\r\n            login: loginInput.value,\r\n            password: passwordInput.value,\r\n        }\r\n\r\n        localStorage.setItem('user', JSON.stringify(user))\r\n        login(user)\r\n    })\r\n\r\n    if (localStorage.getItem('user')) {\r\n        login(JSON.parse(localStorage.getItem('user')))\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5Zm9vZC8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYnRuQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYXV0aCcpO1xyXG4gICAgY29uc3QgbW9kYWxBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWF1dGgnKVxyXG4gICAgY29uc3QgY2xvc2VBdXRoTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXV0aCcpXHJcbiAgICBjb25zdCBsb2dJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nSW5Gb3JtJylcclxuICAgIGNvbnN0IG1vZGFsRGlhbG9nQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2ctYXV0aCcpXHJcbiAgICBjb25zdCBidG5Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tbG9naW4nKVxyXG4gICAgY29uc3QgbG9naW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpXHJcbiAgICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJylcclxuICAgIGNvbnN0IGJ0bk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tb3V0JylcclxuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpXHJcbiAgICBjb25zdCBjYXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtYnV0dG9uJylcclxuICAgIGNvbnN0IGNhcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJ0JylcclxuICAgIGNvbnN0IGNhcnRDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpXHJcblxyXG5cclxuICAgIGNhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY2FydE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIH0pXHJcblxyXG4gICAgY2FydENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNhcnRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9KVxyXG5cclxuICAgIGJ0bkF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIH0pXHJcblxyXG4gICAgY2xvc2VBdXRoTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH0pXHJcblxyXG4gICAgYnRuT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvZ291dCgpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICAgICAgICBidG5BdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBidG5PdXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubG9naW5cclxuICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuICAgICAgICBpZiAodXNlci5sb2dpbiA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydCgn0LLQstC10LTQuNGC0LUg0LvQvtCz0LjQvScpXHJcbiAgICAgICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gXCJcIlxyXG4gICAgICAgICAgICBidG5BdXRoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgIGJ0bk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgYnRuQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgYnRuT3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSAnICc7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ0luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgICAgIGxvZ2luOiBsb2dpbklucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRJbnB1dC52YWx1ZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXHJcbiAgICAgICAgbG9naW4odXNlcilcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcclxuICAgICAgICBsb2dpbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\r\n\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5Zm9vZC8uL3NyYy9tb2R1bGVzL21lbnUuanM/MmZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gKCkgPT4ge1xyXG5cclxuXHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBtZW51Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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