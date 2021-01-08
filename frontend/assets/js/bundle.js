/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/019.wepack-exercício/index.ts":
/*!*******************************************!*\
  !*** ./src/019.wepack-exercício/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// import './form-controls';
__webpack_require__(/*! ../034.exercicio-video/index */ "./src/034.exercicio-video/index.ts");


/***/ }),

/***/ "./src/034.exercicio-video/index.ts":
/*!******************************************!*\
  !*** ./src/034.exercicio-video/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    VideoPlayer.prototype.iniciarEventos = function () {
        var _this = this;
        this.playButton.addEventListener('click', function () {
            _this.playToggle();
        });
        this.stopButton.addEventListener('click', function () {
            _this.videoPlayer.pause();
            _this.videoPlayer.currentTime = 0;
            _this.playButton.innerText = 'Play';
        });
    };
    VideoPlayer.prototype.playToggle = function () {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    };
    VideoPlayer.prototype.stop = function () {
        //
    };
    return VideoPlayer;
}());
exports.default = VideoPlayer;
var videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
});
videoPlayer.iniciarEventos();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/019.wepack-exercício/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map