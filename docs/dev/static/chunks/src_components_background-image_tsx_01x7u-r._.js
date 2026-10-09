(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/background-image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundImageComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const backgrounds = [
    "/naw_web.png",
    "/maomao.jpeg",
    "/nawr_web.jpeg",
    "/ffy_web.jpeg"
];
const mobileBackgrounds = [
    "/naw_mobile.png",
    "/maomao_mobile.jpeg",
    "/nawr_web.jpeg",
    "/ffy_mobile.jpg"
];
function useMediaQuery(query) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "3c7ff1d4435c967f0348f1351e6ddb3b4055be001635b566f28035a01a082d4a") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3c7ff1d4435c967f0348f1351e6ddb3b4055be001635b566f28035a01a082d4a";
    }
    let t0;
    let t1;
    if ($[1] !== query) {
        t0 = ({
            "useMediaQuery[useSyncExternalStore(arg0)]": (callback)=>{
                const mql = window.matchMedia(query);
                mql.addEventListener("change", callback);
                return ()=>mql.removeEventListener("change", callback);
            }
        })["useMediaQuery[useSyncExternalStore(arg0)]"];
        t1 = ({
            "useMediaQuery[useSyncExternalStore(arg1)]": ()=>window.matchMedia(query).matches
        })["useMediaQuery[useSyncExternalStore(arg1)]"];
        $[1] = query;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(t0, t1, _useMediaQueryUseSyncExternalStoreArg);
}
_s(useMediaQuery, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
function _useMediaQueryUseSyncExternalStoreArg() {
    return false;
}
function BackgroundImageComponent(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "3c7ff1d4435c967f0348f1351e6ddb3b4055be001635b566f28035a01a082d4a") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3c7ff1d4435c967f0348f1351e6ddb3b4055be001635b566f28035a01a082d4a";
    }
    const { albumIndex } = t0;
    const isMobile = useMediaQuery("(max-width: 768px)");
    const list = isMobile ? mobileBackgrounds : backgrounds;
    const image = list[albumIndex] ?? list[0];
    const t1 = `url(${image})`;
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "fixed",
                inset: 0,
                zIndex: -1,
                backgroundImage: t1,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/background-image.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    return t2;
}
_s1(BackgroundImageComponent, "7khsyUHgctuHIPa2/KlDS6LcnT0=", false, function() {
    return [
        useMediaQuery
    ];
});
_c = BackgroundImageComponent;
var _c;
__turbopack_context__.k.register(_c, "BackgroundImageComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_background-image_tsx_01x7u-r._.js.map