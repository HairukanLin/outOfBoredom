module.exports = [
"[project]/src/components/background-image.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundImageComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])((callback)=>{
        const mql = window.matchMedia(query);
        mql.addEventListener("change", callback);
        return ()=>mql.removeEventListener("change", callback);
    }, ()=>window.matchMedia(query).matches, ()=>false);
}
function BackgroundImageComponent({ albumIndex }) {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const list = isMobile ? mobileBackgrounds : backgrounds;
    const image = list[albumIndex] ?? list[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: -1,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/background-image.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_components_background-image_tsx_0x622ik._.js.map