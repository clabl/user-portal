const _0x16e9cf = _0x547f;
(function (_0x5ec4b7, _0x30c965) {
    const _0x317ee6 = _0x547f,
        _0x4a9f7f = _0x5ec4b7();
    while (!![]) {
        try {
            const _0x269ba1 =
                (-parseInt(_0x317ee6(0x8b)) / 0x1) *
                    (-parseInt(_0x317ee6(0x85)) / 0x2) +
                (parseInt(_0x317ee6(0x8d)) / 0x3) *
                    (parseInt(_0x317ee6(0x93)) / 0x4) +
                parseInt(_0x317ee6(0x80)) / 0x5 +
                parseInt(_0x317ee6(0x86)) / 0x6 +
                (-parseInt(_0x317ee6(0x83)) / 0x7) *
                    (parseInt(_0x317ee6(0x95)) / 0x8) +
                (parseInt(_0x317ee6(0x81)) / 0x9) *
                    (parseInt(_0x317ee6(0x94)) / 0xa) +
                (parseInt(_0x317ee6(0x8e)) / 0xb) *
                    (-parseInt(_0x317ee6(0x7d)) / 0xc);
            if (_0x269ba1 === _0x30c965) break;
            else _0x4a9f7f["push"](_0x4a9f7f["shift"]());
        } catch (_0x2d7990) {
            _0x4a9f7f["push"](_0x4a9f7f["shift"]());
        }
    }
})(_0x2099, 0xe5c31);
function _0x547f(_0x5a43af, _0x4aadf4) {
    const _0x2099c6 = _0x2099();
    return (
        (_0x547f = function (_0x547f44, _0x4a57ff) {
            _0x547f44 = _0x547f44 - 0x7c;
            let _0x232a55 = _0x2099c6[_0x547f44];
            return _0x232a55;
        }),
        _0x547f(_0x5a43af, _0x4aadf4)
    );
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
    initializeAppCheck,
    ReCaptchaV3Provider,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-check.js";
function _0x2099() {
    const _0x36a5ec = [
        "514lRBbds",
        "2881386OcGOEx",
        "505542059942",
        "signout",
        "1:505542059942:web:ae9bcd9ee38963b4d75167",
        "replace",
        "7323leYlDU",
        "6LcoM-AdAAAAAM56DEGFcz-mQrOOCv0vtUlVoVYC",
        "244158weHbHU",
        "11TvXPWa",
        "login.html",
        "getElementById",
        "location",
        "Sign\x20Out\x20Failed",
        "40FJjjmH",
        "1460JGujaE",
        "4743520MoyjAP",
        "Successfully\x20Signed\x20Out",
        "34886868tvTfax",
        "then",
        "report-system-3d014.firebaseapp.com",
        "7289120rkgPCh",
        "61227CuCdhx",
        "catch",
        "21nkfWnW",
        "AIzaSyDgAgZC6W-lzEc8XACE01trwXYLypaTrfM",
    ];
    _0x2099 = function () {
        return _0x36a5ec;
    };
    return _0x2099();
}
import {
    getAuth,
    onAuthStateChanged,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
const app = initializeApp({
        apiKey: _0x16e9cf(0x84),
        authDomain: _0x16e9cf(0x7f),
        projectId: "report-system-3d014",
        storageBucket: "report-system-3d014.appspot.com",
        messagingSenderId: _0x16e9cf(0x87),
        appId: _0x16e9cf(0x89),
    }),
    appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(_0x16e9cf(0x8c)),
        isTokenAutoRefreshEnabled: !![],
    }),
    auth = getAuth();
onAuthStateChanged(auth, (_0x1a2e14) => {
    const _0x7a201c = _0x16e9cf;
    if (_0x1a2e14) {
    } else window[_0x7a201c(0x91)][_0x7a201c(0x8a)](_0x7a201c(0x8f));
}),
    document[_0x16e9cf(0x90)](_0x16e9cf(0x88))["addEventListener"](
        "click",
        () => {
            const _0x5eee6f = _0x16e9cf;
            signOut(auth)
                [_0x5eee6f(0x7e)](() => {
                    const _0x32c9e0 = _0x5eee6f;
                    alert(_0x32c9e0(0x7c));
                })
                [_0x5eee6f(0x82)]((_0x1e6ab6) => {
                    const _0x5a173a = _0x5eee6f;
                    alert(_0x5a173a(0x92));
                });
        }
    );
