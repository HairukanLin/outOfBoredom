module.exports = [
"[project]/src/app/music/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MusicPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$music$2d$player$2f$music$2d$player$2d$component$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/music-player/music-player-component.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function MusicPage() {
    const [currentAlbumIndex, setCurrentAlbumIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$music$2d$player$2f$music$2d$player$2d$component$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        albumIndex: currentAlbumIndex,
        setAlbumIndex: setCurrentAlbumIndex
    }, void 0, false, {
        fileName: "[project]/src/app/music/page.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components-style/music-player-component.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottomLeft": "music-player-component-module__sMAq8q__bottomLeft",
  "bottomLeftFont": "music-player-component-module__sMAq8q__bottomLeftFont",
  "divAlbumSwitcherHeader": "music-player-component-module__sMAq8q__divAlbumSwitcherHeader",
  "divMusicPlayer": "music-player-component-module__sMAq8q__divMusicPlayer",
  "notSelectedTrackList": "music-player-component-module__sMAq8q__notSelectedTrackList",
  "playButton": "music-player-component-module__sMAq8q__playButton",
  "selectedTrackList": "music-player-component-module__sMAq8q__selectedTrackList",
  "title": "music-player-component-module__sMAq8q__title",
  "trackList": "music-player-component-module__sMAq8q__trackList",
});
}),
"[project]/src/components/icon-button-component.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IConButtonComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function IConButtonComponent({ iconConfig }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: iconConfig.iconURL,
        onClick: iconConfig.onPressed,
        alt: "",
        role: "button",
        style: {
            cursor: "pointer",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/icon-button-component.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/music-player/music-player-component.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MusicPlayerComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/MusicPlayerConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$music$2d$player$2d$component$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components-style/music-player-component.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$MusicAlbumService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/MusicAlbumService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$music$2d$player$2f$music$2d$player$2d$header$2d$component$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/music-player/music-player-header-component.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$music$2d$player$2f$music$2d$player$2d$track$2d$list$2d$component$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/music-player/music-player-track-list-component.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const albumService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$MusicAlbumService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OfflineMusicAlbumService"]();
function MusicPlayerComponent({ albumIndex, setAlbumIndex }) {
    const [currentTrackIndex, setCurrentTrackIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const albumConfig = albumService.getAlbum((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["albumIdToName"])(albumIndex));
    const headerColor = albumConfig.headerPlayerMainColor ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].DARK_RED;
    const tracksColor = albumConfig.tracksPlayerColor ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].LIGHT_PINK;
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // undefined (not "") when there's no track — an empty src makes the
    // browser try to reload the page itself as audio.
    const currentTrackPath = albumConfig.tracks.at(currentTrackIndex)?.url;
    // Keep the <audio> element in sync with React state.
    // Re-runs whenever play/pause is toggled or the current track (src) changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying && currentTrackPath) {
            // play() returns a promise that rejects if the browser blocks autoplay
            audio.play().catch(()=>setIsPlaying(false));
        } else {
            audio.pause();
        }
    }, [
        isPlaying,
        currentTrackPath
    ]);
    const switchAlbum = (step)=>{
        setCurrentTrackIndex(0);
        setAlbumIndex((prev)=>(prev + step + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["albumCount"])()) % (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["albumCount"])());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$music$2d$player$2d$component$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divMusicPlayer} `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$music$2d$player$2f$music$2d$player$2d$header$2d$component$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    albumTitle: albumConfig.albumTitle,
                    currentTrackName: albumConfig.tracks.at(currentTrackIndex)?.trackName,
                    headerColor: headerColor,
                    onPrevious: ()=>switchAlbum(-1),
                    onNext: ()=>switchAlbum(1)
                }, void 0, false, {
                    fileName: "[project]/src/components/music-player/music-player-component.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$music$2d$player$2d$component$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playButton,
                    style: {
                        color: headerColor
                    },
                    onClick: ()=>setIsPlaying((prev)=>!prev),
                    children: isPlaying ? "STOP" : "PLAY"
                }, void 0, false, {
                    fileName: "[project]/src/components/music-player/music-player-component.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                    ref: audioRef,
                    src: currentTrackPath,
                    preload: "none",
                    onEnded: ()=>setIsPlaying(false)
                }, void 0, false, {
                    fileName: "[project]/src/components/music-player/music-player-component.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$music$2d$player$2f$music$2d$player$2d$track$2d$list$2d$component$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    tracks: albumConfig.tracks,
                    trackColors: tracksColor,
                    currentIndex: currentTrackIndex,
                    setAlbumIndex: setCurrentTrackIndex
                }, void 0, false, {
                    fileName: "[project]/src/components/music-player/music-player-component.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/music-player/music-player-component.tsx",
            lineNumber: 57,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/music-player/music-player-component.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/music-player/music-player-header-component.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MusicPlayerHeaderComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$music$2d$player$2d$component$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components-style/music-player-component.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icon$2d$button$2d$component$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icon-button-component.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/MusicPlayerConfig.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Pick the colored SVG pair that matches the header color
function playerIcons(headerColor) {
    switch(headerColor){
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].LIGHT_PINK:
            return {
                back: "/backPlayerPink.svg",
                forward: "/forwardPlayerPink.svg"
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].DARK_RED:
            return {
                back: "/backPlayerDarkRed.svg",
                forward: "/forwardPlayerDarkRed.svg"
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].LIGHT_GREEN:
            return {
                back: "/backPlayerGreen.svg",
                forward: "/forwardPlayerGreen.svg"
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].LIGHT_BLACK:
            return {
                back: "/backPlayerBlack.svg",
                forward: "/forwardPlayerBlack.svg"
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].WHITE:
            return {
                back: "/backPlayerWhite.svg",
                forward: "/forwardPlayerWhite.svg"
            };
        default:
            return {
                back: "/backPlayer.svg",
                forward: "/forwardPlayer.svg"
            };
    }
}
function MusicPlayerHeaderComponent({ albumTitle, currentTrackName, headerColor, onPrevious, onNext }) {
    const icons = playerIcons(headerColor);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$music$2d$player$2d$component$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divAlbumSwitcherHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icon$2d$button$2d$component$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        iconConfig: {
                            iconURL: icons.back,
                            onPressed: onPrevious
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/music-player/music-player-header-component.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$music$2d$player$2d$component$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        style: {
                            color: headerColor
                        },
                        children: albumTitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/music-player/music-player-header-component.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icon$2d$button$2d$component$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        iconConfig: {
                            iconURL: icons.forward,
                            onPressed: onNext
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/music-player/music-player-header-component.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/music-player/music-player-header-component.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: headerColor
                },
                children: currentTrackName
            }, void 0, false, {
                fileName: "[project]/src/components/music-player/music-player-header-component.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/music-player/music-player-header-component.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/music-player/music-player-track-list-component.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MusicPlayerTrackListComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$music$2d$player$2d$component$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components-style/music-player-component.module.css [app-ssr] (css module)");
;
;
function MusicPlayerTrackListComponent({ tracks, trackColors, currentIndex, setAlbumIndex }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$music$2d$player$2d$component$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomLeft,
        style: {
            color: trackColors
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$music$2d$player$2d$component$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].trackList,
            children: tracks.map((track, index)=>{
                if (currentIndex === index) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$music$2d$player$2d$component$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedTrackList,
                        onClick: ()=>setAlbumIndex(index),
                        children: track.trackName
                    }, index, false, {
                        fileName: "[project]/src/components/music-player/music-player-track-list-component.tsx",
                        lineNumber: 18,
                        columnNumber: 33
                    }, this);
                } else {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2d$style$2f$music$2d$player$2d$component$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notSelectedTrackList,
                        onClick: ()=>setAlbumIndex(index),
                        children: [
                            "  ",
                            track.trackName,
                            " "
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/music-player/music-player-track-list-component.tsx",
                        lineNumber: 22,
                        columnNumber: 33
                    }, this);
                }
            })
        }, void 0, false, {
            fileName: "[project]/src/components/music-player/music-player-track-list-component.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/music-player/music-player-track-list-component.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/services/MusicAlbumService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OfflineMusicAlbumService",
    ()=>OfflineMusicAlbumService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/MusicPlayerConfig.ts [app-ssr] (ecmascript)");
;
const noAmbWhatTracks = [
    {
        trackName: "It started",
        url: ""
    },
    {
        trackName: "Nicest girl out there",
        url: ""
    },
    {
        trackName: "Still going",
        url: ""
    },
    {
        trackName: "Maybe now",
        url: ""
    },
    {
        trackName: "Undecided and one sided",
        url: ""
    },
    {
        trackName: "You and me",
        url: ""
    },
    {
        trackName: "Hate",
        url: ""
    },
    {
        trackName: "Home",
        url: ""
    },
    {
        trackName: "I think, its summer",
        url: ""
    },
    {
        trackName: "No ambition whatsoever",
        url: ""
    }
];
const trulySorryTracks = [
    {
        trackName: "an opening an ending",
        url: ""
    },
    {
        trackName: "red flags (Pia)",
        url: ""
    },
    {
        trackName: "sailing (Kim)",
        url: ""
    },
    {
        trackName: "vogelfrei (Beatrix)",
        url: ""
    },
    {
        trackName: "flowers (Anna)",
        url: ""
    },
    {
        trackName: "the king (Eve)",
        url: ""
    },
    {
        trackName: "doubt (Mia)",
        url: ""
    },
    {
        trackName: "burning (Xenia)",
        url: ""
    },
    {
        trackName: "trying to be truly sorry",
        url: ""
    },
    {
        trackName: "an ending an opening (Dream)",
        url: ""
    }
];
const noAmbWhatReduxTracks = [
    {
        trackName: "It started - Redux",
        url: ""
    },
    {
        trackName: "Nicest girl out there - Redux",
        url: ""
    },
    {
        trackName: "Still going - Redux",
        url: ""
    },
    {
        trackName: "Maybe now - Redux",
        url: ""
    },
    {
        trackName: "Tidal wave - Redux",
        url: ""
    },
    {
        trackName: "You and me - Redux",
        url: ""
    },
    {
        trackName: "Hate - Redux",
        url: ""
    },
    {
        trackName: "Home - Redux",
        url: ""
    },
    {
        trackName: "Summer - Redux",
        url: ""
    },
    {
        trackName: "No ambition whatsoever - Redux",
        url: ""
    }
];
class OfflineMusicAlbumService {
    getAlbum(albumName) {
        switch(albumName){
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlbumName"].NO_AMB_WHAT:
                return {
                    albumTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["albumNameToString"])(albumName),
                    tracks: this.populateTrackPaths(albumName, noAmbWhatTracks),
                    headerPlayerMainColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].LIGHT_BLACK,
                    tracksPlayerColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].LIGHT_GREEN
                };
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlbumName"].TRULY_SORRY:
                return {
                    albumTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["albumNameToString"])(albumName),
                    tracks: this.populateTrackPaths(albumName, trulySorryTracks),
                    headerPlayerMainColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].LIGHT_GREEN,
                    tracksPlayerColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].LIGHT_BLUE
                };
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlbumName"].NO_AMB_WHAT_REDUX:
                return {
                    albumTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["albumNameToString"])(albumName),
                    tracks: this.populateTrackPaths(albumName, noAmbWhatTracks),
                    headerPlayerMainColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].LIGHT_BLACK,
                    tracksPlayerColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"].LIGHT_GREEN
                };
            case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlbumName"].FALLING_FOR_U:
                return {
                    albumTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["albumNameToString"])(albumName),
                    tracks: []
                };
        }
    }
    // Files live in public/music/<AlbumName>/<n>.mp3, numbered 1..N in track order.
    // encodeURIComponent handles the spaces in the folder name.
    populateTrackPaths(albumName, tracks) {
        const folder = encodeURIComponent((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$MusicPlayerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["albumNameToString"])(albumName));
        return tracks.map((track, index)=>({
                ...track,
                url: `/music/${folder}/${index + 1}.mp3`
            }));
    }
}
}),
"[project]/src/types/MusicPlayerConfig.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlbumId",
    ()=>AlbumId,
    "AlbumName",
    ()=>AlbumName,
    "Color",
    ()=>Color,
    "albumCount",
    ()=>albumCount,
    "albumIdToName",
    ()=>albumIdToName,
    "albumNameToId",
    ()=>albumNameToId,
    "albumNameToString",
    ()=>albumNameToString
]);
var Color = /*#__PURE__*/ function(Color) {
    Color["LIGHT_PINK"] = "var(--color-light-pink)";
    Color["DARK_RED"] = "var(--color-dark-red)";
    Color["LIGHT_GREEN"] = "var(--color-light-green)";
    Color["LIGHT_BLACK"] = "var(--color-light-black)";
    Color["LIGHT_BLUE"] = "var(--color-light-blue)";
    Color["WHITE"] = "var(--color-white)";
    return Color;
}({});
var AlbumName = /*#__PURE__*/ function(AlbumName) {
    AlbumName["NO_AMB_WHAT"] = "No ambition whatsoever";
    AlbumName["TRULY_SORRY"] = "Trying to be truly sorry";
    AlbumName["NO_AMB_WHAT_REDUX"] = "No ambition whatsoever - Redux";
    AlbumName["FALLING_FOR_U"] = "Falling for you";
    return AlbumName;
}({});
var AlbumId = /*#__PURE__*/ function(AlbumId) {
    AlbumId[AlbumId["NO_AMB_WHAT"] = 0] = "NO_AMB_WHAT";
    AlbumId[AlbumId["TRULY_SORRY"] = 1] = "TRULY_SORRY";
    AlbumId[AlbumId["NO_AMB_WHAT_REDUX"] = 2] = "NO_AMB_WHAT_REDUX";
    AlbumId[AlbumId["FALLING_FOR_U"] = 3] = "FALLING_FOR_U";
    return AlbumId;
}({});
function albumNameToString(album) {
    return album;
}
function albumCount() {
    return Object.keys(AlbumName).length;
}
function albumNameToId(album) {
    return albumIndex[album];
}
function albumIdToName(id) {
    return Object.values(AlbumName)[id];
}
const albumIndex = {
    ["No ambition whatsoever"]: 0,
    ["Trying to be truly sorry"]: 1,
    ["No ambition whatsoever - Redux"]: 2,
    ["Falling for you"]: 3
};
}),
];

//# sourceMappingURL=src_0oz-9ze._.js.map