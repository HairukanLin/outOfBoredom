(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components-style/popUps/redirect-link.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "redirectPopUp": "redirect-link-module__Mtl64W__redirectPopUp",
});
}),
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
    "/naw_web.jpeg",
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
    if ($[0] !== "e476211194622d47e2d8500c175838c170b7eec53f75c4913aabb9ea864f46ce") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e476211194622d47e2d8500c175838c170b7eec53f75c4913aabb9ea864f46ce";
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
    if ($[0] !== "e476211194622d47e2d8500c175838c170b7eec53f75c4913aabb9ea864f46ce") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e476211194622d47e2d8500c175838c170b7eec53f75c4913aabb9ea864f46ce";
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
"[project]/src/components/link-tree-component.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LinkTreeComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$popUps$2f$redirect$2d$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/popUps/redirect-link.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LinkTreeComponent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "3605fb68f29126b16a5fbacbae3c31fd27f5322f48dbeb7d325e099c662bdb80") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3605fb68f29126b16a5fbacbae3c31fd27f5322f48dbeb7d325e099c662bdb80";
    }
    const [redirectPopUp, setRedirectPopUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [platform, setPlatform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = function openRedirectPopUp(event) {
            setPlatform(event.currentTarget.className);
            setRedirectPopUp(true);
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const openRedirectPopUp = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "link-elem",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "spotify",
                    onClick: openRedirectPopUp,
                    children: "spotify"
                }, void 0, false, {
                    fileName: "[project]/src/components/link-tree-component.tsx",
                    lineNumber: 30,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "youtube",
                    onClick: openRedirectPopUp,
                    children: "youtube"
                }, void 0, false, {
                    fileName: "[project]/src/components/link-tree-component.tsx",
                    lineNumber: 30,
                    columnNumber: 100
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "apple music",
                    onClick: openRedirectPopUp,
                    children: "apple music"
                }, void 0, false, {
                    fileName: "[project]/src/components/link-tree-component.tsx",
                    lineNumber: 30,
                    columnNumber: 164
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "instagram",
                    onClick: openRedirectPopUp,
                    children: "instagram"
                }, void 0, false, {
                    fileName: "[project]/src/components/link-tree-component.tsx",
                    lineNumber: 30,
                    columnNumber: 236
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/link-tree-component.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== platform || $[4] !== redirectPopUp) {
        t2 = redirectPopUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$popUps$2f$redirect$2d$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            platform: platform,
            setRedirectPopUp: setRedirectPopUp
        }, void 0, false, {
            fileName: "[project]/src/components/link-tree-component.tsx",
            lineNumber: 37,
            columnNumber: 27
        }, this);
        $[3] = platform;
        $[4] = redirectPopUp;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/link-tree-component.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_s(LinkTreeComponent, "ZooqYp7B8v0kIpsLYBUTm1jwy5c=");
_c = LinkTreeComponent;
var _c;
__turbopack_context__.k.register(_c, "LinkTreeComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/popUps/redirect-link.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RedirectComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$popUps$2f$redirect$2d$link$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components-style/popUps/redirect-link.module.css [app-client] (css module)");
;
;
;
function RedirectComponent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "51adfa8f1ad50b303b6bcfd165879d3c4b37e638e1c4427615ba0c77a50efece") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51adfa8f1ad50b303b6bcfd165879d3c4b37e638e1c4427615ba0c77a50efece";
    }
    const { platform, setRedirectPopUp } = t0;
    let link;
    if ($[1] !== platform) {
        link = "";
        bb0: switch(platform){
            case "spotify":
                {
                    link = "https://open.spotify.com/artist/6sUckbLOVyPwApRpE9NBST";
                    break bb0;
                }
            case "youtube":
                {
                    link = "https://www.youtube.com/channel/UCZkHS49pt0gL8fkIiCFDexA";
                    break bb0;
                }
            case "apple music":
                {
                    link = "https://music.apple.com/de/artist/out-of-boredom/1611638736";
                    break bb0;
                }
            case "instagram":
                {
                    link = "https://www.instagram.com/out_of_boredem/";
                    break bb0;
                }
            default:
                {
                    link = "https://open.spotify.com/artist/6sUckbLOVyPwApRpE9NBST";
                }
        }
        $[1] = platform;
        $[2] = link;
    } else {
        link = $[2];
    }
    let t1;
    if ($[3] !== platform) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "open ",
                platform,
                "?"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/popUps/redirect-link.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[3] = platform;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== setRedirectPopUp) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            onClick: {
                "RedirectComponent[<span>.onClick]": ()=>setRedirectPopUp(false)
            }["RedirectComponent[<span>.onClick]"],
            children: "no"
        }, void 0, false, {
            fileName: "[project]/src/components/popUps/redirect-link.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[5] = setRedirectPopUp;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== link) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            onClick: {
                "RedirectComponent[<span>.onClick]": ()=>window.open(link)
            }["RedirectComponent[<span>.onClick]"],
            children: "yes"
        }, void 0, false, {
            fileName: "[project]/src/components/popUps/redirect-link.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[7] = link;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t2 || $[10] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t2,
                " ",
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/popUps/redirect-link.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t1 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$popUps$2f$redirect$2d$link$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].redirectPopUp,
            children: [
                t1,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/popUps/redirect-link.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[12] = t1;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_c = RedirectComponent;
var _c;
__turbopack_context__.k.register(_c, "RedirectComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1ash9mf._.js.map