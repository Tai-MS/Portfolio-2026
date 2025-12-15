module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-ssr] (ecmascript) <export default as Languages>");
"use client";
;
;
;
function Header({ language, setLanguage }) {
    const scrollToSection = (id)=>{
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: "smooth"
        });
    };
    const nav = {
        es: [
            "Inicio",
            "Sobre Mí",
            "Experiencia",
            "Educación",
            "Proyectos",
            "Certificados",
            "Contacto"
        ],
        en: [
            "Home",
            "About",
            "Experience",
            "Education",
            "Projects",
            "Certificates",
            "Contact"
        ]
    };
    const ids = [
        "hero",
        "about",
        "experience",
        "education",
        "projects",
        "certificates",
        "contact"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-bold font-mono text-primary cursor-pointer",
                        children: "<Dev />"
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-6",
                        children: nav[language].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToSection(ids[index]),
                                className: "text-sm text-foreground/80 hover:text-primary transition-colors hover:scale-105 cursor-pointer",
                                children: item
                            }, item, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: ()=>setLanguage(language === "es" ? "en" : "es"),
                        className: "gap-2 hover:scale-105 transition-transform hover:bg-primary hover:text-primary-foreground cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            language === "es" ? "EN" : "ES"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/header.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
"use client";
;
;
;
function Hero({ language }) {
    const content = {
        es: {
            greeting: "Hola, soy",
            name: "Taiel Sagretti",
            title: "Desarrollador Web Backend",
            description: "Especializado en crear APIs robustas, escalables y seguras. Experiencia en Node.js, bases de datos y arquitectura de sistemas.",
            cta: "Ver Proyectos",
            downloadCV: "Descargar CV",
            cvUrl: "/downloads/CV_TAIEL-SAGRETTI_ES.pdf"
        },
        en: {
            greeting: "Hi, I am",
            name: "Taiel Sagretti",
            title: "Backend Web Developer",
            description: "Specialized in building robust, scalable, and secure APIs. Experience in Node.js, databases, and system architecture.",
            cta: "View Projects",
            downloadCV: "Download CV",
            cvUrl: "/downloads/CV_TAIEL-SAGRETTI_EN.pdf"
        }
    };
    const scrollToProjects = ()=>{
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "min-h-[90vh] flex items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-primary mb-2 font-mono",
                        children: content[language].greeting
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-7xl font-bold mb-4 text-balance",
                        children: content[language].name
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl md:text-3xl text-muted-foreground mb-6",
                        children: content[language].title
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-foreground/80 mb-8 leading-relaxed text-pretty",
                        children: content[language].description
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: scrollToProjects,
                                size: "lg",
                                className: "gap-2 hover:scale-105 transition-transform cursor-pointer",
                                children: content[language].cta
                            }, void 0, false, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "lg",
                                variant: "outline",
                                className: "gap-2 hover:scale-105 transition-transform hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer",
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: content[language].cvUrl,
                                    download: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        content[language].downloadCV
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/Tai-MS/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "icon",
                                            className: "hover:scale-110 transition-transform hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/in/taiel-sagretti/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "icon",
                                            className: "hover:scale-110 transition-transform hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:taiels94@gmail.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "icon",
                                            className: "hover:scale-110 transition-transform hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3",
                        children: [
                            "Javascript",
                            "Typescript",
                            "Node.js",
                            "Java",
                            "Spring Boot",
                            "REST API",
                            "MySQL",
                            "MongoDB",
                            "SQLite"
                        ].map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm font-mono cursor-pointer",
                                children: tech
                            }, tech, false, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/hero.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/hero.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/about.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function About({ language }) {
    const content = {
        es: {
            title: "Sobre Mí",
            paragraphs: [
                "Soy Técnico Superior en Desarrollo de Software, con foco en desarrollo backend y creación de APIs robustas y escalables. Cuento con una sólida base en programación, bases de datos y arquitectura de software, adquirida durante mi formación académica y proyectos prácticos.",
                "Participé en simulaciones laborales en No-Country, trabajando en equipos de desarrollo bajo dinámicas similares a entornos reales, donde fui uno de los responsables del backend. Disfruto diseñar soluciones claras, aplicar buenas prácticas y seguir aprendiendo constantemente nuevas tecnologías.",
                "Actualmente busco mi primera oportunidad profesional como desarrollador backend, donde pueda aportar valor, crecer técnicamente y seguir formándome como profesional."
            ]
        },
        en: {
            title: "About Me",
            paragraphs: [
                "I am a Higher Technical Degree graduate in Software Development, focused on backend development and building robust and scalable APIs. I have a strong foundation in programming, databases, and software architecture, gained through academic training and hands-on projects.",
                "I participated in work simulation projects at No-Country, collaborating in development teams under real-world dynamics, where I was one of the developers responsible for the backend. I enjoy designing clean solutions, applying best practices, and continuously learning new technologies.",
                "I am currently seeking my first professional opportunity as a backend developer, aiming to contribute, grow technically, and continue developing my skills."
            ]
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-20 bg-card/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-12 text-center",
                    children: content[language].title
                }, void 0, false, {
                    fileName: "[project]/components/about.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto space-y-6",
                    children: content[language].paragraphs.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-foreground/80 leading-relaxed",
                            children: paragraph
                        }, index, false, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/about.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/about.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/about.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Experience",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Experience({ language }) {
    const content = {
        es: {
            title: "Experiencia",
            experiences: [
                {
                    position: "Backend Junior",
                    company: "No-Country",
                    period: "Febrero 2024 - Mayo 2024",
                    description: `Participé de 2 simulaciones laborales en No-Country, en ellas forme parte de dos equipos de desarrollo distintos con el objetivo de crear de cero sitios web.
            En el primero (Febrero - Marzo) creamos una newsletter. 
            En la segunda simulación (Abril - Mayo), con un nuevo equipo, desarrollamos un sitio web para contratar servicios para el hogar. 
            En ambos casos, fui uno de los responsables del backend.`,
                    technologies: [
                        "Node.js",
                        "MySQL",
                        "MongoDB",
                        "Typescript",
                        "Express",
                        "Rest API"
                    ]
                }
            ]
        },
        en: {
            title: "Experience",
            experiences: [
                {
                    position: "Backend Junior",
                    company: "No-Country",
                    period: "February 2024 - May 2024",
                    description: `Participated in two work simulation projects at No-Country, collaborating with different development teams to build web applications from scratch. 
In the first project (February–March), we developed a newsletter platform. 
In the second simulation (April–May), with a new team, we built a website for hiring home services. 
In both projects, I was one of the developers responsible for the backend.`,
                    technologies: [
                        "Node.js",
                        "MySQL",
                        "MongoDB",
                        "Typescript",
                        "Express",
                        "Rest API"
                    ]
                }
            ]
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-12 text-center",
                    children: content[language].title
                }, void 0, false, {
                    fileName: "[project]/components/experience.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto space-y-6",
                    children: content[language].experiences.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                            className: "h-5 w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experience.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experience.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                className: "text-xl",
                                                                children: exp.position
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/experience.tsx",
                                                                lineNumber: 60,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                className: "text-base mt-1",
                                                                children: exp.company
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/experience.tsx",
                                                                lineNumber: 61,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experience.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experience.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experience.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, this),
                                                    exp.period
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experience.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experience.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/experience.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground/80 mb-4 leading-relaxed",
                                            children: exp.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/experience.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: exp.technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-mono",
                                                    children: tech
                                                }, tech, false, {
                                                    fileName: "[project]/components/experience.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/experience.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experience.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/experience.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/experience.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/experience.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/experience.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/education.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Education",
    ()=>Education
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Education({ language }) {
    const content = {
        es: {
            title: "Educación",
            education: [
                {
                    degree: "Técnico Superior en Desarollo de Software",
                    institution: "Instituto Superior  Urquiza",
                    period: "2023 - 2025",
                    aclaration: "Finalizada",
                    description: "Formación terciaria orientada al desarrollo de software, con base sólida en programación, estructuras de datos, bases de datos, ingeniería de software y desarrollo de proyectos. Enfoque práctico en la creación de soluciones, trabajo con APIs y buenas prácticas."
                },
                {
                    degree: "Técnico Superior en Infraestructura de Tecnología de la Información",
                    institution: "Instituto Superior  Urquiza",
                    aclaration: "Primer año completo – carrera no finalizada",
                    period: "2022 - 2022",
                    description: "Formación en infraestructura IT con base en arquitectura de computadoras, redes, sistemas operativos y fundamentos de programación. Desarrollo de conocimientos en administración de sistemas, bases de datos y conceptos clave de seguridad, complementando el perfil de desarrollo backend."
                }
            ]
        },
        en: {
            title: "Education",
            education: [
                {
                    degree: "Higher Technical Degree in Software Development",
                    institution: "Superior Institute Urquiza",
                    period: "2023 - 2025",
                    aclaration: "Finished",
                    description: "Tertiary-level degree focused on software development, with a strong foundation in programming, data structures, databases, software engineering, and project development. Practical approach to building solutions, working with APIs, and applying best practices."
                },
                {
                    degree: "Higher Technical Degree in Software Development",
                    institution: "Superior Institute Urquiza",
                    aclaration: "First year completed – program not completed",
                    period: "2022 - 2022",
                    description: "Training in IT infrastructure with a foundation in computer architecture, networking, operating systems, and programming fundamentals. Gained knowledge in systems administration, databases, and basic security concepts, complementing a backend development profile."
                }
            ]
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "education",
        className: "py-20 bg-card/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-12 text-center",
                    children: content[language].title
                }, void 0, false, {
                    fileName: "[project]/components/education.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto space-y-6",
                    children: content[language].education.map((edu, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                            className: "h-5 w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/education.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/education.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                className: "text-xl",
                                                                children: edu.degree
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/education.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                className: "text-base mt-1 flex flex-wrap items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: edu.institution
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/education.tsx",
                                                                        lineNumber: 76,
                                                                        columnNumber: 3
                                                                    }, this),
                                                                    edu.aclaration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm italic text-muted-foreground",
                                                                        children: [
                                                                            "• ",
                                                                            edu.aclaration
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/education.tsx",
                                                                        lineNumber: 78,
                                                                        columnNumber: 5
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/education.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/education.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/education.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/education.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 21
                                                    }, this),
                                                    edu.period
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/education.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/education.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/education.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground/80 leading-relaxed",
                                        children: edu.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/education.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/education.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/education.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/education.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/education.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/education.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/projects.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Projects({ language }) {
    const content = {
        es: {
            title: "Proyectos",
            projects: [
                {
                    name: "SVE - Sistema Virtual Escolar",
                    description: `Sistema para instituciones educativas con el objetivo de concentrar todas las necesidades que puedan tener organismos de nivel tericario. 
            Cuenta con sistema de asistencias, subida de tareas y trabajos prácticos (así cómo sus calificaciones), subida de archivos, comunicados, entre otros.
            Este proyecto comenzó su desarrollo para la unidad curricular de mi carrera terciaria llamada "Práctica Profesionalizante II". 
            Además de desarrollar el software, también se realizó la correspondiente documentación.
            Aún se encuentra en desarrollo para ya cuenta con un frontend y backend funcional.`,
                    technologies: [
                        "Typescript",
                        "Express",
                        "Node.js",
                        "MySQL",
                        "Sequelize",
                        "Rest API",
                        "JWT",
                        "React",
                        "Tailwind"
                    ],
                    url: "https://github.com/Tai-MS/SVE-System",
                    downloadUrl: null
                },
                {
                    name: "Wotech",
                    description: `Wotech es un proyecto diseñado para mejorar una carpintería familiar. 
          Se trata de un software de gestión con el objetivo de optimizar tiempos, controlar materiales, controlar pedidos, entre muchas otras cosas.
          Me uní al proyecto a mediados de año. Mi tarea fue finalizar, mejorar y corregir endpoints en el backend.`,
                    technologies: [
                        "Javascrip",
                        "Express",
                        "Node.js",
                        "MySQL",
                        "Sequelize",
                        "React"
                    ],
                    url: "https://github.com/tai-ms/WOTECH/",
                    downloadUrl: null
                },
                {
                    name: "E-Commerce API",
                    description: `ECommerce API es un proyecto backend propio enfocado en el desarrollo de una API REST para un sistema de comercio electrónico. 
            Permite gestionar productos, usuarios y operaciones básicas del dominio e-commerce, siguiendo una estructura organizada y escalable.
             El backend fue desarrollado con Node.js y Express, aplicando buenas prácticas de diseño de APIs, manejo de rutas y lógica de negocio. 
             Este proyecto refleja mi capacidad para diseñar y construir soluciones backend completas, orientadas a casos de uso reales.`,
                    technologies: [
                        "Javascrip",
                        "Express",
                        "Node.js",
                        "MongoDB",
                        "Mongoose"
                    ],
                    url: "https://github.com/Tai-MS/ECommerce-API",
                    downloadUrl: null
                },
                {
                    name: "ServiHogar (No-Country Abril - Mayo)",
                    description: `ServiHogar es una página web diseñada para facilitar la contratación de servicios para el hogar. 
            Con ServiHogar, los usuarios pueden encontrar y pactar citas con los proveedores de servicios de manera conveniente y eficiente. 
            A diferencia de otras plataformas similares, ServiHogar es una solución genérica, lo que significa que no está limitada a un solo tipo de trabajo. 
            Los usuarios tienen la flexibilidad de cargar su propio servicio en la plataforma, ofreciendo así un amplio espectro de opciones para los clientes.`,
                    technologies: [
                        "Typescrip",
                        "Express",
                        "Node.js",
                        "MySQL",
                        "Sequelize",
                        "React"
                    ],
                    url: "https://github.com/Tai-MS/s14-06-t-node-react",
                    downloadUrl: null
                },
                ,
                {
                    name: "ITNoticias (No-Country Febrero - Marzo)",
                    description: `ITNoticias es una aplicación web full-stack desarrollada durante una simulación laboral en No-Country, orientada a la visualización de noticias y artículos de actualidad. 
            El proyecto cuenta con un backend en Node.js y Express y un frontend en React, organizados en una arquitectura separada por capas.
            Mi rol fue desarrollador backend, encargándome de la lógica del servidor y la implementación de la API REST que provee los datos al frontend. 
            El proyecto refleja experiencia en desarrollo backend, trabajo colaborativo y buenas prácticas de organización de código y control de versiones.`,
                    technologies: [
                        "Javascrip",
                        "Express",
                        "Node.js",
                        "MongoDB",
                        "Mongoose",
                        "React"
                    ],
                    url: "https://github.com/Tai-MS/C16-13-t-node-react",
                    downloadUrl: null
                }
            ]
        },
        en: {
            title: "Projects",
            projects: [
                {
                    name: "SVE - Virtual School System",
                    description: `System for educational institutions aimed at centralizing all the needs of tertiary-level organizations.
    It includes attendance tracking, assignment and practical work submission (along with grading), file uploads, announcements, and more.
    This project started as part of the curricular unit of my technical degree called "Professional Practice II".
    In addition to software development, the corresponding technical documentation was also produced.
    The project is still under development, but it already has a functional frontend and backend.`,
                    technologies: [
                        "Typescript",
                        "Express",
                        "Node.js",
                        "MySQL",
                        "Sequelize",
                        "Rest API",
                        "JWT",
                        "React",
                        "Tailwind"
                    ],
                    url: "https://github.com/Tai-MS/SVE-System",
                    downloadUrl: null
                },
                {
                    name: "Wotech",
                    description: `Wotech is a project designed to improve the management of a family-owned carpentry business.
    It is a management software aimed at optimizing time, controlling materials, managing orders, and more.
    I joined the project mid-year, where my role was to finalize, improve, and fix backend endpoints.`,
                    technologies: [
                        "Javascript",
                        "Express",
                        "Node.js",
                        "MySQL",
                        "Sequelize",
                        "React"
                    ],
                    url: "https://github.com/tai-ms/WOTECH/",
                    downloadUrl: null
                },
                {
                    name: "E-Commerce API",
                    description: `ECommerce API is a personal backend project focused on developing a REST API for an e-commerce system.
    It allows managing products, users, and core e-commerce domain operations, following an organized and scalable structure.
    The backend was built with Node.js and Express, applying best practices in API design, routing, and business logic.
    This project demonstrates my ability to design and build complete backend solutions for real-world use cases.`,
                    technologies: [
                        "Javascript",
                        "Express",
                        "Node.js",
                        "MongoDB",
                        "Mongoose"
                    ],
                    url: "https://github.com/Tai-MS/ECommerce-API",
                    downloadUrl: null
                },
                {
                    name: "ServiHogar (No-Country April – May)",
                    description: `ServiHogar is a web platform designed to facilitate the hiring of home services.
    Through ServiHogar, users can find service providers and schedule appointments in a convenient and efficient way.
    Unlike other similar platforms, ServiHogar is a generic solution, meaning it is not limited to a single type of service.
    Users have the flexibility to publish their own services on the platform, offering a wide range of options for clients.`,
                    technologies: [
                        "Typescript",
                        "Express",
                        "Node.js",
                        "MySQL",
                        "Sequelize",
                        "React"
                    ],
                    url: "https://github.com/Tai-MS/s14-06-t-node-react",
                    downloadUrl: null
                },
                {
                    name: "ITNoticias (No-Country February – March)",
                    description: `ITNoticias is a full-stack web application developed during a No-Country work simulation, focused on displaying news and current affairs articles.
    The project features a backend built with Node.js and Express and a frontend developed with React, organized using a layered architecture.
    My role was backend developer, responsible for server-side logic and implementing the REST API that provides data to the frontend.
    The project reflects experience in backend development, collaborative teamwork, and best practices in code organization and version control.`,
                    technologies: [
                        "Javascript",
                        "Express",
                        "Node.js",
                        "MongoDB",
                        "Mongoose",
                        "React"
                    ],
                    url: "https://github.com/Tai-MS/C16-13-t-node-react",
                    downloadUrl: null
                }
            ]
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-12 text-center",
                    children: content[language].title
                }, void 0, false, {
                    fileName: "[project]/components/projects.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-6 max-w-6xl mx-auto",
                    children: content[language].projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "border-border flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-xl",
                                            children: project.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/projects.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            className: "text-base leading-relaxed",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/projects.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/projects.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "flex-grow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: project.technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-mono",
                                                children: tech
                                            }, tech, false, {
                                                fileName: "[project]/components/projects.tsx",
                                                lineNumber: 151,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/projects.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                                    className: "gap-3",
                                    children: [
                                        project.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "gap-2 bg-transparent",
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: project.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/projects.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 23
                                                    }, this),
                                                    language === "es" ? "Ver Código" : "View Code"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/projects.tsx",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/projects.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this),
                                        project.downloadUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "gap-2 bg-transparent",
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: project.downloadUrl,
                                                download: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/projects.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 23
                                                    }, this),
                                                    language === "es" ? "Descargar" : "Download"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/projects.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/projects.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/projects.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/projects.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/projects.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/projects.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/projects.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/certificates.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Certificates",
    ()=>Certificates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Certificates({ language }) {
    const content = {
        es: {
            title: "Certificados",
            certificates: [
                {
                    name: "Curso de Programación Backend",
                    issuer: "Coderhouse",
                    date: "Junio 2024",
                    description: "Formación avanzada en desarrollo backend, enfocada en la creación de APIs REST utilizando Node.js, Express y MongoDB.",
                    url: "",
                    downloadUrl: "/downloads/6699aa48534aed212db906d3.png"
                },
                {
                    name: "Desarrollo con Node",
                    issuer: "Centro de e-Learning UTN FRBA",
                    date: "Septiembre 2023",
                    description: "Introducción al desarrollo de APIs con Node.js, Express y MongoDB, aplicando conceptos fundamentales de backend.",
                    id: "Credencial ID: CER-2Y0OJTDA-1083676",
                    url: "https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado",
                    downloadUrl: ""
                },
                {
                    name: "EF Set Certificado de Inglés",
                    issuer: "EF Set",
                    date: "Marzo 2023",
                    description: "Certificación de nivel de inglés obtenida mediante examen estandarizado EF SET.",
                    url: null,
                    downloadUrl: "/downloads/EF SET Certificate.pdf"
                },
                {
                    name: "Bootcamp QA",
                    issuer: "Bolsa de Comercio de Rosario",
                    date: "Septiembre 2023",
                    description: "Capacitación en testing manual, enfocada en detección de errores, casos de prueba y control de calidad de software.",
                    url: null,
                    downloadUrl: null
                }
            ]
        },
        en: {
            title: "Certificates",
            certificates: [
                {
                    name: "Course of Backend Programming",
                    issuer: "Coderhouse",
                    date: "June  2024",
                    description: "Advanced backend training focused on building REST APIs using Node.js, Express, and MongoDB.",
                    url: "",
                    downloadUrl: "/downloads/6699aa48534aed212db906d3.png"
                },
                {
                    name: "Development with Node",
                    issuer: "Centro de e-Learning UTN FRBA",
                    date: "September 2023",
                    description: "Introductory course on API development with Node.js, Express, and MongoDB, covering core backend concepts.",
                    id: "Credential ID: CER-2Y0OJTDA-1083676",
                    url: "https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado",
                    downloadUrl: null
                },
                {
                    name: "EF Set English Certificate",
                    issuer: "EF Set",
                    date: "March 2023",
                    description: "English proficiency certification obtained through the standardized EF SET exam.",
                    url: null,
                    downloadUrl: "/downloads/EF SET Certificate.pdf"
                },
                {
                    name: "Bootcamp QA",
                    issuer: "Bolsa de Comercio de Rosario",
                    date: "September 2023",
                    description: "Training in manual software testing, focused on bug detection, test cases, and quality assurance processes.",
                    url: null,
                    downloadUrl: null
                }
            ]
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "certificates",
        className: "py-20 bg-card/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-12 text-center",
                    children: content[language].title
                }, void 0, false, {
                    fileName: "[project]/components/certificates.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-6 max-w-6xl mx-auto",
                    children: content[language].certificates.map((cert, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "border-border flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                    className: "h-5 w-5 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/certificates.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/certificates.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-lg",
                                                        children: cert.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/certificates.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                        className: "text-sm mt-1",
                                                        children: [
                                                            cert.issuer,
                                                            " • ",
                                                            cert.date,
                                                            " ",
                                                            cert.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    " • ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-xs",
                                                                        children: [
                                                                            " ",
                                                                            cert.id
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/certificates.tsx",
                                                                        lineNumber: 109,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/certificates.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/certificates.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/certificates.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/certificates.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "grow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground/80 text-sm leading-relaxed",
                                        children: cert.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/certificates.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/certificates.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                                    className: "gap-3",
                                    children: [
                                        cert.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "gap-2 bg-transparent",
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: cert.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/certificates.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 23
                                                    }, this),
                                                    language === "es" ? "Verificar" : "Verify"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/certificates.tsx",
                                                lineNumber: 122,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/certificates.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this),
                                        cert.downloadUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "gap-2 bg-transparent",
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: cert.downloadUrl,
                                                download: true,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/certificates.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, this),
                                                    language === "es" ? "Descargar" : "Download"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/certificates.tsx",
                                                lineNumber: 130,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/certificates.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/certificates.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/certificates.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/certificates.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/certificates.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/certificates.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
;
;
function Contact({ language }) {
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    const content = {
        es: {
            title: "Contacto",
            subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
            form: {
                name: "Nombre",
                email: "Email",
                message: "Mensaje",
                send: "Enviar Mensaje"
            },
            info: {
                email: "taiels94@gmail.com",
                phone: "+54 9 3402 505110",
                location: "Rosario, Argentina"
            }
        },
        en: {
            title: "Contact",
            subtitle: "Have a project in mind? Let's talk!",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send Message"
            },
            info: {
                email: "taiels94@gmail.com",
                phone: "+54 9 3402 505110",
                location: "Rosario, Argentina"
            }
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!formRef.current) return;
        try {
            /* eslint-disable */ console.log(...oo_oo(`1806870116_64_6_64_39_4`, process.env.EMAIL_ID));
            /* eslint-disable */ console.log(...oo_oo(`1806870116_65_6_65_45_4`, process.env.EMAIL_SERVICE));
            /* eslint-disable */ console.log(...oo_oo(`1806870116_66_6_66_47_4`, process.env.EMAIL_TEMPLATE));
            /* eslint-disable */ console.log(...oo_oo(`1806870116_67_6_71_2_4`, {
                service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            }));
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].sendForm(process.env.EMAIL_SERVICE, process.env.EMAIL_TEMPLATE, formRef.current, process.env.EMAIL_ID);
            alert("Mensaje enviado correctamente ✔️");
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            /* eslint-disable */ console.error(...oo_tx(`1806870116_83_6_83_44_11`, "EmailJS error:", error));
            alert("Hubo un error al enviar el mensaje ❌");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-4 text-center",
                    children: content[language].title
                }, void 0, false, {
                    fileName: "[project]/components/contact.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-muted-foreground mb-12 text-center",
                    children: content[language].subtitle
                }, void 0, false, {
                    fileName: "[project]/components/contact.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: content[language].form.send
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        ref: formRef,
                                        onSubmit: handleSubmit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    name: "name",
                                                    placeholder: content[language].form.name,
                                                    value: formData.name,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            name: e.target.value
                                                        }),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "email",
                                                    name: "email",
                                                    placeholder: content[language].form.email,
                                                    value: formData.email,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            email: e.target.value
                                                        }),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    name: "message",
                                                    placeholder: content[language].form.message,
                                                    value: formData.message,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            message: e.target.value
                                                        }),
                                                    rows: 5,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                className: "w-full",
                                                children: content[language].form.send
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/contact.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-lg",
                                                children: language === "es" ? "Información de Contacto" : "Contact Information"
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "h-5 w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-foreground/80",
                                                            children: content[language].info.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            className: "h-5 w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-foreground/80",
                                                            children: content[language].info.phone
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "h-5 w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-foreground/80",
                                                            children: content[language].info.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-lg",
                                                children: language === "es" ? "Redes Sociales" : "Social Media"
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "w-full justify-start gap-3 bg-transparent",
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://github.com/Tai-MS",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/contact.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 21
                                                            }, this),
                                                            "GitHub"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/contact.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "w-full justify-start gap-3 bg-transparent",
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://www.linkedin.com/in/taiel-sagretti",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/contact.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 21
                                                            }, this),
                                                            "LinkedIn"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/contact.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/contact.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/contact.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/contact.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/contact.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x3bb860=_0x1415;(function(_0x56f424,_0x281bb7){var _0x578595=_0x1415,_0x2349f8=_0x56f424();while(!![]){try{var _0x3a5c11=-parseInt(_0x578595(0x177))/0x1+parseInt(_0x578595(0xce))/0x2*(parseInt(_0x578595(0xab))/0x3)+-parseInt(_0x578595(0xe0))/0x4+-parseInt(_0x578595(0xa3))/0x5+parseInt(_0x578595(0x138))/0x6+parseInt(_0x578595(0x70))/0x7*(parseInt(_0x578595(0x123))/0x8)+parseInt(_0x578595(0x131))/0x9;if(_0x3a5c11===_0x281bb7)break;else _0x2349f8['push'](_0x2349f8['shift']());}catch(_0x1e619a){_0x2349f8['push'](_0x2349f8['shift']());}}}(_0x4e1d,0xdeb8a));function _0x1415(_0x47fe6b,_0x151885){var _0x4e1d5f=_0x4e1d();return _0x1415=function(_0x14150b,_0x79b2a3){_0x14150b=_0x14150b-0x6a;var _0x3e24b4=_0x4e1d5f[_0x14150b];return _0x3e24b4;},_0x1415(_0x47fe6b,_0x151885);}function z(_0x24a155,_0x4b4c5c,_0x5910f9,_0x1b7610,_0x103ee4,_0x1467ae){var _0x51301a=_0x1415,_0x33e993,_0x5b9a4b,_0x5d3157,_0x1fc7d9;this[_0x51301a(0x102)]=_0x24a155,this[_0x51301a(0x88)]=_0x4b4c5c,this[_0x51301a(0xe4)]=_0x5910f9,this[_0x51301a(0xfd)]=_0x1b7610,this[_0x51301a(0x10f)]=_0x103ee4,this[_0x51301a(0x76)]=_0x1467ae,this[_0x51301a(0x99)]=!0x0,this[_0x51301a(0x125)]=!0x0,this[_0x51301a(0x126)]=!0x1,this[_0x51301a(0xf5)]=!0x1,this[_0x51301a(0xc6)]=((_0x5b9a4b=(_0x33e993=_0x24a155[_0x51301a(0x167)])==null?void 0x0:_0x33e993[_0x51301a(0x11b)])==null?void 0x0:_0x5b9a4b[_0x51301a(0xe8)])===_0x51301a(0xd2),this['_inBrowser']=!((_0x1fc7d9=(_0x5d3157=this['global'][_0x51301a(0x167)])==null?void 0x0:_0x5d3157[_0x51301a(0x149)])!=null&&_0x1fc7d9['node'])&&!this[_0x51301a(0xc6)],this['_WebSocketClass']=null,this[_0x51301a(0x6a)]=0x0,this[_0x51301a(0x89)]=0x14,this['_webSocketErrorDocsLink']=_0x51301a(0x111),this[_0x51301a(0x73)]=(this[_0x51301a(0xee)]?_0x51301a(0x9e):_0x51301a(0x12e))+this[_0x51301a(0x16b)];}z[_0x3bb860(0x166)][_0x3bb860(0xba)]=async function(){var _0x4e59d7=_0x3bb860,_0x4597cb,_0xd38ba8;if(this[_0x4e59d7(0x176)])return this[_0x4e59d7(0x176)];let _0x4fce50;if(this[_0x4e59d7(0xee)]||this[_0x4e59d7(0xc6)])_0x4fce50=this['global'][_0x4e59d7(0x8b)];else{if((_0x4597cb=this['global'][_0x4e59d7(0x167)])!=null&&_0x4597cb[_0x4e59d7(0x158)])_0x4fce50=(_0xd38ba8=this[_0x4e59d7(0x102)][_0x4e59d7(0x167)])==null?void 0x0:_0xd38ba8[_0x4e59d7(0x158)];else try{_0x4fce50=(await new Function(_0x4e59d7(0xbf),_0x4e59d7(0x78),_0x4e59d7(0xfd),_0x4e59d7(0x15a))(await(0x0,eval)(_0x4e59d7(0x85)),await(0x0,eval)(_0x4e59d7(0xb5)),this[_0x4e59d7(0xfd)]))['default'];}catch{try{_0x4fce50=require(require(_0x4e59d7(0xbf))['join'](this[_0x4e59d7(0xfd)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x4e59d7(0x176)]=_0x4fce50,_0x4fce50;},z[_0x3bb860(0x166)][_0x3bb860(0x6c)]=function(){var _0x238fd3=_0x3bb860;this[_0x238fd3(0xf5)]||this[_0x238fd3(0x126)]||this[_0x238fd3(0x6a)]>=this[_0x238fd3(0x89)]||(this[_0x238fd3(0x125)]=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x238fd3(0x11d)]=new Promise((_0x13a915,_0x21b0d7)=>{var _0x525468=_0x238fd3;this[_0x525468(0xba)]()['then'](_0x5b01ba=>{var _0x22c3de=_0x525468;let _0x2d3688=new _0x5b01ba(_0x22c3de(0xc2)+(!this[_0x22c3de(0xee)]&&this[_0x22c3de(0x10f)]?_0x22c3de(0x143):this['host'])+':'+this[_0x22c3de(0xe4)]);_0x2d3688[_0x22c3de(0x8d)]=()=>{var _0x225989=_0x22c3de;this[_0x225989(0x99)]=!0x1,this[_0x225989(0xc7)](_0x2d3688),this[_0x225989(0x161)](),_0x21b0d7(new Error(_0x225989(0x137)));},_0x2d3688['onopen']=()=>{var _0x5c704f=_0x22c3de;this[_0x5c704f(0xee)]||_0x2d3688[_0x5c704f(0xdb)]&&_0x2d3688[_0x5c704f(0xdb)]['unref']&&_0x2d3688[_0x5c704f(0xdb)][_0x5c704f(0x151)](),_0x13a915(_0x2d3688);},_0x2d3688[_0x22c3de(0x121)]=()=>{var _0x4945c9=_0x22c3de;this[_0x4945c9(0x125)]=!0x0,this['_disposeWebsocket'](_0x2d3688),this['_attemptToReconnectShortly']();},_0x2d3688[_0x22c3de(0x113)]=_0x2053ed=>{var _0x47d471=_0x22c3de;try{if(!(_0x2053ed!=null&&_0x2053ed[_0x47d471(0xfc)])||!this[_0x47d471(0x76)])return;let _0x455e7c=JSON[_0x47d471(0x175)](_0x2053ed['data']);this[_0x47d471(0x76)](_0x455e7c[_0x47d471(0xd3)],_0x455e7c[_0x47d471(0x115)],this[_0x47d471(0x102)],this[_0x47d471(0xee)]);}catch{}};})['then'](_0x162101=>(this[_0x525468(0x126)]=!0x0,this[_0x525468(0xf5)]=!0x1,this[_0x525468(0x125)]=!0x1,this['_allowedToSend']=!0x0,this[_0x525468(0x6a)]=0x0,_0x162101))['catch'](_0xa697f4=>(this[_0x525468(0x126)]=!0x1,this[_0x525468(0xf5)]=!0x1,console[_0x525468(0xf7)](_0x525468(0x95)+this[_0x525468(0x16b)]),_0x21b0d7(new Error(_0x525468(0xd6)+(_0xa697f4&&_0xa697f4[_0x525468(0x146)])))));}));},z[_0x3bb860(0x166)][_0x3bb860(0xc7)]=function(_0x310b79){var _0xc4bfe7=_0x3bb860;this[_0xc4bfe7(0x126)]=!0x1,this[_0xc4bfe7(0xf5)]=!0x1;try{_0x310b79[_0xc4bfe7(0x121)]=null,_0x310b79['onerror']=null,_0x310b79['onopen']=null;}catch{}try{_0x310b79[_0xc4bfe7(0xa0)]<0x2&&_0x310b79[_0xc4bfe7(0xb9)]();}catch{}},z[_0x3bb860(0x166)][_0x3bb860(0x161)]=function(){var _0xeb4151=_0x3bb860;clearTimeout(this[_0xeb4151(0x98)]),!(this[_0xeb4151(0x6a)]>=this[_0xeb4151(0x89)])&&(this[_0xeb4151(0x98)]=setTimeout(()=>{var _0x1946d6=_0xeb4151,_0x4e1390;this[_0x1946d6(0x126)]||this[_0x1946d6(0xf5)]||(this['_connectToHostNow'](),(_0x4e1390=this['_ws'])==null||_0x4e1390['catch'](()=>this[_0x1946d6(0x161)]()));},0x1f4),this[_0xeb4151(0x98)][_0xeb4151(0x151)]&&this[_0xeb4151(0x98)][_0xeb4151(0x151)]());},z[_0x3bb860(0x166)][_0x3bb860(0x172)]=async function(_0xe28174){var _0x17b86c=_0x3bb860;try{if(!this[_0x17b86c(0x99)])return;this[_0x17b86c(0x125)]&&this[_0x17b86c(0x6c)](),(await this['_ws'])['send'](JSON[_0x17b86c(0xb6)](_0xe28174));}catch(_0x382eee){this['_extendedWarning']?console[_0x17b86c(0xf7)](this[_0x17b86c(0x73)]+':\\x20'+(_0x382eee&&_0x382eee['message'])):(this[_0x17b86c(0x9b)]=!0x0,console[_0x17b86c(0xf7)](this[_0x17b86c(0x73)]+':\\x20'+(_0x382eee&&_0x382eee[_0x17b86c(0x146)]),_0xe28174)),this[_0x17b86c(0x99)]=!0x1,this[_0x17b86c(0x161)]();}};function H(_0x4007a6,_0x7f3615,_0x44871c,_0x3fda34,_0x42d82c,_0x255a3e,_0x1ac7c5,_0x253dd4=ne){var _0x3da3a8=_0x3bb860;let _0x24dfae=_0x44871c[_0x3da3a8(0x11e)](',')[_0x3da3a8(0xd5)](_0x453732=>{var _0x41af42=_0x3da3a8,_0x253dbd,_0x1fcf43,_0x44930f,_0x299886,_0x5d734b,_0x482ba2,_0x14c56a;try{if(!_0x4007a6[_0x41af42(0x14a)]){let _0x2b832b=((_0x1fcf43=(_0x253dbd=_0x4007a6['process'])==null?void 0x0:_0x253dbd[_0x41af42(0x149)])==null?void 0x0:_0x1fcf43[_0x41af42(0x153)])||((_0x299886=(_0x44930f=_0x4007a6[_0x41af42(0x167)])==null?void 0x0:_0x44930f['env'])==null?void 0x0:_0x299886[_0x41af42(0xe8)])===_0x41af42(0xd2);(_0x42d82c==='next.js'||_0x42d82c===_0x41af42(0xa9)||_0x42d82c===_0x41af42(0xcc)||_0x42d82c==='angular')&&(_0x42d82c+=_0x2b832b?_0x41af42(0x156):_0x41af42(0x11f));let _0x4bd77b='';_0x42d82c===_0x41af42(0xaa)&&(_0x4bd77b=(((_0x14c56a=(_0x482ba2=(_0x5d734b=_0x4007a6[_0x41af42(0x74)])==null?void 0x0:_0x5d734b[_0x41af42(0x6f)])==null?void 0x0:_0x482ba2[_0x41af42(0x72)])==null?void 0x0:_0x14c56a['osName'])||'')[_0x41af42(0x130)](),_0x4bd77b&&(_0x42d82c+='\\x20'+_0x4bd77b,_0x4bd77b===_0x41af42(0xd0)&&(_0x7f3615='10.0.2.2'))),_0x4007a6[_0x41af42(0x14a)]={'id':+new Date(),'tool':_0x42d82c},_0x1ac7c5&&_0x42d82c&&!_0x2b832b&&(_0x4bd77b?console[_0x41af42(0x119)](_0x41af42(0xcf)+_0x4bd77b+_0x41af42(0x6e)):console[_0x41af42(0x119)](_0x41af42(0xaf)+(_0x42d82c[_0x41af42(0x162)](0x0)[_0x41af42(0xad)]()+_0x42d82c[_0x41af42(0xd4)](0x1))+',',_0x41af42(0xbc),'see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.'));}let _0x4de09c=new z(_0x4007a6,_0x7f3615,_0x453732,_0x3fda34,_0x255a3e,_0x253dd4);return _0x4de09c[_0x41af42(0x172)][_0x41af42(0xc0)](_0x4de09c);}catch(_0x17909b){return console['warn'](_0x41af42(0x84),_0x17909b&&_0x17909b[_0x41af42(0x146)]),()=>{};}});return _0x22ddfa=>_0x24dfae[_0x3da3a8(0x11a)](_0x3bc35e=>_0x3bc35e(_0x22ddfa));}function ne(_0x1fd219,_0x333fdc,_0x47d769,_0x45bbd3){var _0x6922c2=_0x3bb860;_0x45bbd3&&_0x1fd219===_0x6922c2(0x16e)&&_0x47d769[_0x6922c2(0x170)][_0x6922c2(0x16e)]();}function b(_0x1be91c){var _0x168b8c=_0x3bb860,_0x2c3d08,_0x8f1a04;let _0x2f7b8f=function(_0x19089c,_0x523e04){return _0x523e04-_0x19089c;},_0x204928;if(_0x1be91c[_0x168b8c(0x9c)])_0x204928=function(){var _0x4c8584=_0x168b8c;return _0x1be91c[_0x4c8584(0x9c)][_0x4c8584(0xe6)]();};else{if(_0x1be91c[_0x168b8c(0x167)]&&_0x1be91c['process'][_0x168b8c(0x15d)]&&((_0x8f1a04=(_0x2c3d08=_0x1be91c['process'])==null?void 0x0:_0x2c3d08['env'])==null?void 0x0:_0x8f1a04[_0x168b8c(0xe8)])!==_0x168b8c(0xd2))_0x204928=function(){var _0x10f78d=_0x168b8c;return _0x1be91c['process'][_0x10f78d(0x15d)]();},_0x2f7b8f=function(_0x1a41e2,_0x4523ee){return 0x3e8*(_0x4523ee[0x0]-_0x1a41e2[0x0])+(_0x4523ee[0x1]-_0x1a41e2[0x1])/0xf4240;};else try{let {performance:_0x5b1c98}=require('perf_hooks');_0x204928=function(){var _0x4f0b5b=_0x168b8c;return _0x5b1c98[_0x4f0b5b(0xe6)]();};}catch{_0x204928=function(){return+new Date();};}}return{'elapsed':_0x2f7b8f,'timeStamp':_0x204928,'now':()=>Date[_0x168b8c(0xe6)]()};}function _0x4e1d(){var _0x55c7b0=['_isNegativeZero','[object\\x20Set]','_connecting','pop','warn','_property','constructor','_console_ninja','level','data','nodeModules','_getOwnPropertyDescriptor','_setNodePermissions','parent','_getOwnPropertyNames','global','_setNodeQueryPath','_addFunctionsNode','time','POSITIVE_INFINITY','object','_isSet','[object\\x20Date]','negativeInfinity','elements','timeStamp','_numberRegExp','osName','dockerizedApp','_dateToString','https://tinyurl.com/37x8b79t','valueOf','onmessage','_capIfString','args','resolveGetters','resetWhenQuietMs','Number','log','forEach','env','cappedElements','_ws','split','\\x20browser','_undefined','onclose','_propertyName','19480KjoQTx','root_exp_id','_allowedToConnectOnSend','_connected','_quotedRegExp','nan','funcName','_getOwnPropertySymbols','_sortProps','_Symbol','_setNodeId','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','Map','toLowerCase','13103964QpnQvW','String','array','_cleanNode','push','_processTreeNodeResult','logger\\x20websocket\\x20error','1870254SUWmxz','_addProperty','_objectToString','_isPrimitiveType','strLength','serialize','_isPrimitiveWrapperType','_addObjectProperty','elapsed','boolean','trace','gateway.docker.internal','Symbol','autoExpand','message','_p_length','reduceLimits','versions','_console_ninja_session','_isUndefined','Set','sortProps','1.0.0','props','autoExpandPropertyCount','unref','getter','node','autoExpandPreviousObjects','Error','\\x20server','perLogpoint','_WebSocket','','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());',\"c:\\\\Users\\\\PC\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.496\\\\node_modules\",'','hrtime','toString','ninjaSuppressConsole','type','_attemptToReconnectShortly','charAt','date','value','49309','prototype','process','get','cappedProps','_hasSetOnItsPath','_webSocketErrorDocsLink','_setNodeExpandableState','NEGATIVE_INFINITY','reload','current','location','negativeZero','send','_type','_isArray','parse','_WebSocketClass','983374JpTdwS','_connectAttemptCount','noFunctions','_connectToHostNow','127.0.0.1',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','modules','2345wsUfrF','_setNodeLabel','ExpoDevice','_sendErrorMessage','expo','length','eventReceivedCallback','stack','url','isArray','resetOnProcessingTimeAverageMs','_HTMLAllCollection','Buffer','startsWith','symbol','count','indexOf','isExpressionToEvaluate','resolve','_ninjaIgnoreNextError','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','import(\\x27path\\x27)','HTMLAllCollection','...','host','_maxConnectAttemptCount','_regExpToString','WebSocket','[object\\x20Array]','onerror','some','_p_','allStrLength','reduceOnAccumulatedProcessingTimeMs','unknown','hits','reducedLimits','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_additionalMetadata','reduceOnCount','_reconnectTimeout','_allowedToSend','totalStrLength','_extendedWarning','performance','fromCharCode','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','stackTraceLimit','readyState','call','hostname','4473635XDSKgJ','1','getOwnPropertyNames','index','_keyStrRegExp','positiveInfinity','remix','react-native','50079FfGbnb','_consoleNinjaAllowedToStart','toUpperCase','name','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_hasSymbolPropertyOnItsPath','getOwnPropertySymbols','origin','number','error','import(\\x27url\\x27)','stringify','RegExp','autoExpandLimit','close','getWebSocketClass','setter','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','concat','console','path','bind','_addLoadNode','ws://','bigint','slice','expId','_inNextEdge','_disposeWebsocket','capped','iterator','_treeNodePropertiesAfterFullValue','Promise','astro','string','158otmrpx','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','android',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'edge','method','substr','map','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_p_name','_setNodeExpressionPath','function','sort','_socket','includes','undefined','disabledLog','_blacklistedProperty','4447240xwfavk','[object\\x20BigInt]','defaultLimits','getOwnPropertyDescriptor','port','replace','now','[object\\x20Map]','NEXT_RUNTIME','autoExpandMaxDepth','expressionsToEvaluate','_treeNodePropertiesBeforeFullValue','rootExpression','depth','_inBrowser','test','reducePolicy','endsWith','_hasMapOnItsPath'];_0x4e1d=function(){return _0x55c7b0;};return _0x4e1d();}function X(_0x483c01,_0x271bd4,_0x44c4e4){var _0x104ef5=_0x3bb860,_0x11870b,_0xd0411e,_0x2b2f35,_0x37f289,_0x19767e,_0x5b1d18,_0x148937,_0x214d11,_0xcc5822;if(_0x483c01['_consoleNinjaAllowedToStart']!==void 0x0)return _0x483c01['_consoleNinjaAllowedToStart'];let _0x1a7fe6=((_0xd0411e=(_0x11870b=_0x483c01[_0x104ef5(0x167)])==null?void 0x0:_0x11870b['versions'])==null?void 0x0:_0xd0411e['node'])||((_0x37f289=(_0x2b2f35=_0x483c01[_0x104ef5(0x167)])==null?void 0x0:_0x2b2f35[_0x104ef5(0x11b)])==null?void 0x0:_0x37f289['NEXT_RUNTIME'])==='edge',_0x4eefc2=!!(_0x44c4e4===_0x104ef5(0xaa)&&((_0x148937=(_0x5b1d18=(_0x19767e=_0x483c01['expo'])==null?void 0x0:_0x19767e[_0x104ef5(0x6f)])==null?void 0x0:_0x5b1d18['ExpoDevice'])==null?void 0x0:_0x148937[_0x104ef5(0x10e)]));function _0x3dc67e(_0x1005a2){var _0x8df396=_0x104ef5;if(_0x1005a2[_0x8df396(0x7d)]('/')&&_0x1005a2[_0x8df396(0xf1)]('/')){let _0x42ca86=new RegExp(_0x1005a2[_0x8df396(0xc4)](0x1,-0x1));return _0x1424cc=>_0x42ca86['test'](_0x1424cc);}else{if(_0x1005a2[_0x8df396(0xdc)]('*')||_0x1005a2[_0x8df396(0xdc)]('?')){let _0x4ca7cb=new RegExp('^'+_0x1005a2[_0x8df396(0xe5)](/\\./g,String[_0x8df396(0x9d)](0x5c)+'.')[_0x8df396(0xe5)](/\\*/g,'.*')['replace'](/\\?/g,'.')+String['fromCharCode'](0x24));return _0x47b79e=>_0x4ca7cb[_0x8df396(0xef)](_0x47b79e);}else return _0x399e60=>_0x399e60===_0x1005a2;}}let _0x1b7b20=_0x271bd4[_0x104ef5(0xd5)](_0x3dc67e);return _0x483c01['_consoleNinjaAllowedToStart']=_0x1a7fe6||!_0x271bd4,!_0x483c01[_0x104ef5(0xac)]&&((_0x214d11=_0x483c01[_0x104ef5(0x170)])==null?void 0x0:_0x214d11[_0x104ef5(0xa2)])&&(_0x483c01[_0x104ef5(0xac)]=_0x1b7b20[_0x104ef5(0x8e)](_0x39e689=>_0x39e689(_0x483c01[_0x104ef5(0x170)][_0x104ef5(0xa2)]))),_0x4eefc2&&!_0x483c01[_0x104ef5(0xac)]&&!((_0xcc5822=_0x483c01[_0x104ef5(0x170)])!=null&&_0xcc5822[_0x104ef5(0xa2)])&&(_0x483c01[_0x104ef5(0xac)]=!0x0),_0x483c01[_0x104ef5(0xac)];}function J(_0x54988f,_0x4ca48c,_0x1c6321,_0x242b6d,_0x2ab5e9,_0x5c9ae8){var _0x362eb9=_0x3bb860;_0x54988f=_0x54988f,_0x4ca48c=_0x4ca48c,_0x1c6321=_0x1c6321,_0x242b6d=_0x242b6d,_0x2ab5e9=_0x2ab5e9,_0x2ab5e9=_0x2ab5e9||{},_0x2ab5e9[_0x362eb9(0xe2)]=_0x2ab5e9['defaultLimits']||{},_0x2ab5e9['reducedLimits']=_0x2ab5e9[_0x362eb9(0x94)]||{},_0x2ab5e9[_0x362eb9(0xf0)]=_0x2ab5e9[_0x362eb9(0xf0)]||{},_0x2ab5e9[_0x362eb9(0xf0)][_0x362eb9(0x157)]=_0x2ab5e9['reducePolicy'][_0x362eb9(0x157)]||{},_0x2ab5e9[_0x362eb9(0xf0)][_0x362eb9(0x102)]=_0x2ab5e9[_0x362eb9(0xf0)][_0x362eb9(0x102)]||{};let _0x2575e9={'perLogpoint':{'reduceOnCount':_0x2ab5e9['reducePolicy']['perLogpoint'][_0x362eb9(0x97)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x2ab5e9[_0x362eb9(0xf0)][_0x362eb9(0x157)][_0x362eb9(0x91)]||0x64,'resetWhenQuietMs':_0x2ab5e9[_0x362eb9(0xf0)][_0x362eb9(0x157)][_0x362eb9(0x117)]||0x1f4,'resetOnProcessingTimeAverageMs':_0x2ab5e9[_0x362eb9(0xf0)][_0x362eb9(0x157)]['resetOnProcessingTimeAverageMs']||0x64},'global':{'reduceOnCount':_0x2ab5e9[_0x362eb9(0xf0)][_0x362eb9(0x102)][_0x362eb9(0x97)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x2ab5e9[_0x362eb9(0xf0)][_0x362eb9(0x102)][_0x362eb9(0x91)]||0x12c,'resetWhenQuietMs':_0x2ab5e9[_0x362eb9(0xf0)][_0x362eb9(0x102)][_0x362eb9(0x117)]||0x32,'resetOnProcessingTimeAverageMs':_0x2ab5e9[_0x362eb9(0xf0)][_0x362eb9(0x102)][_0x362eb9(0x7a)]||0x64}},_0x3068d4=b(_0x54988f),_0x2020f4=_0x3068d4[_0x362eb9(0x140)],_0x33c06c=_0x3068d4['timeStamp'];function _0x1553d1(){var _0x2f7fd2=_0x362eb9;this[_0x2f7fd2(0xa7)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x2f7fd2(0x10d)]=/^(0|[1-9][0-9]*)$/,this[_0x2f7fd2(0x127)]=/'([^\\\\']|\\\\')*'/,this[_0x2f7fd2(0x120)]=_0x54988f[_0x2f7fd2(0xdd)],this[_0x2f7fd2(0x7b)]=_0x54988f[_0x2f7fd2(0x86)],this[_0x2f7fd2(0xfe)]=Object[_0x2f7fd2(0xe3)],this[_0x2f7fd2(0x101)]=Object[_0x2f7fd2(0xa5)],this[_0x2f7fd2(0x12c)]=_0x54988f[_0x2f7fd2(0x144)],this[_0x2f7fd2(0x8a)]=RegExp[_0x2f7fd2(0x166)][_0x2f7fd2(0x15e)],this[_0x2f7fd2(0x110)]=Date[_0x2f7fd2(0x166)]['toString'];}_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x13d)]=function(_0x4647d7,_0x2a215a,_0x22ed3f,_0x50c2de){var _0x2e0ba3=_0x362eb9,_0x5d74ca=this,_0x51c281=_0x22ed3f[_0x2e0ba3(0x145)];function _0x5cbb2c(_0x2151b5,_0x31b5a1,_0x57d6c8){var _0x303826=_0x2e0ba3;_0x31b5a1[_0x303826(0x160)]='unknown',_0x31b5a1[_0x303826(0xb4)]=_0x2151b5[_0x303826(0x146)],_0x927f28=_0x57d6c8[_0x303826(0x153)]['current'],_0x57d6c8[_0x303826(0x153)]['current']=_0x31b5a1,_0x5d74ca[_0x303826(0xeb)](_0x31b5a1,_0x57d6c8);}let _0x579911,_0xddd6e9,_0x22db18=_0x54988f[_0x2e0ba3(0x15f)];_0x54988f[_0x2e0ba3(0x15f)]=!0x0,_0x54988f[_0x2e0ba3(0xbe)]&&(_0x579911=_0x54988f[_0x2e0ba3(0xbe)]['error'],_0xddd6e9=_0x54988f[_0x2e0ba3(0xbe)][_0x2e0ba3(0xf7)],_0x579911&&(_0x54988f[_0x2e0ba3(0xbe)][_0x2e0ba3(0xb4)]=function(){}),_0xddd6e9&&(_0x54988f['console']['warn']=function(){}));try{try{_0x22ed3f['level']++,_0x22ed3f[_0x2e0ba3(0x145)]&&_0x22ed3f[_0x2e0ba3(0x154)][_0x2e0ba3(0x135)](_0x2a215a);var _0x423735,_0x575ffc,_0x56086b,_0x237f39,_0x25296e=[],_0x5e2d4e=[],_0x16b7cc,_0x70a2f6=this[_0x2e0ba3(0x173)](_0x2a215a),_0x283f38=_0x70a2f6===_0x2e0ba3(0x133),_0x5b503b=!0x1,_0x95078c=_0x70a2f6===_0x2e0ba3(0xd9),_0x36b80f=this[_0x2e0ba3(0x13b)](_0x70a2f6),_0x4f4889=this[_0x2e0ba3(0x13e)](_0x70a2f6),_0xc8b9f=_0x36b80f||_0x4f4889,_0x2720e2={},_0x40d2dc=0x0,_0x460b57=!0x1,_0x927f28,_0x2173c4=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x22ed3f[_0x2e0ba3(0xed)]){if(_0x283f38){if(_0x575ffc=_0x2a215a[_0x2e0ba3(0x75)],_0x575ffc>_0x22ed3f[_0x2e0ba3(0x10b)]){for(_0x56086b=0x0,_0x237f39=_0x22ed3f['elements'],_0x423735=_0x56086b;_0x423735<_0x237f39;_0x423735++)_0x5e2d4e[_0x2e0ba3(0x135)](_0x5d74ca[_0x2e0ba3(0x139)](_0x25296e,_0x2a215a,_0x70a2f6,_0x423735,_0x22ed3f));_0x4647d7[_0x2e0ba3(0x11c)]=!0x0;}else{for(_0x56086b=0x0,_0x237f39=_0x575ffc,_0x423735=_0x56086b;_0x423735<_0x237f39;_0x423735++)_0x5e2d4e['push'](_0x5d74ca['_addProperty'](_0x25296e,_0x2a215a,_0x70a2f6,_0x423735,_0x22ed3f));}_0x22ed3f[_0x2e0ba3(0x150)]+=_0x5e2d4e['length'];}if(!(_0x70a2f6==='null'||_0x70a2f6===_0x2e0ba3(0xdd))&&!_0x36b80f&&_0x70a2f6!==_0x2e0ba3(0x132)&&_0x70a2f6!==_0x2e0ba3(0x7c)&&_0x70a2f6!==_0x2e0ba3(0xc3)){var _0x25fc93=_0x50c2de[_0x2e0ba3(0x14f)]||_0x22ed3f[_0x2e0ba3(0x14f)];if(this['_isSet'](_0x2a215a)?(_0x423735=0x0,_0x2a215a[_0x2e0ba3(0x11a)](function(_0x2dea34){var _0x320e32=_0x2e0ba3;if(_0x40d2dc++,_0x22ed3f[_0x320e32(0x150)]++,_0x40d2dc>_0x25fc93){_0x460b57=!0x0;return;}if(!_0x22ed3f[_0x320e32(0x81)]&&_0x22ed3f['autoExpand']&&_0x22ed3f['autoExpandPropertyCount']>_0x22ed3f[_0x320e32(0xb8)]){_0x460b57=!0x0;return;}_0x5e2d4e[_0x320e32(0x135)](_0x5d74ca['_addProperty'](_0x25296e,_0x2a215a,_0x320e32(0x14c),_0x423735++,_0x22ed3f,function(_0x599ec3){return function(){return _0x599ec3;};}(_0x2dea34)));})):this['_isMap'](_0x2a215a)&&_0x2a215a[_0x2e0ba3(0x11a)](function(_0x298807,_0x2e9c94){var _0x22e685=_0x2e0ba3;if(_0x40d2dc++,_0x22ed3f[_0x22e685(0x150)]++,_0x40d2dc>_0x25fc93){_0x460b57=!0x0;return;}if(!_0x22ed3f[_0x22e685(0x81)]&&_0x22ed3f[_0x22e685(0x145)]&&_0x22ed3f[_0x22e685(0x150)]>_0x22ed3f['autoExpandLimit']){_0x460b57=!0x0;return;}var _0x4472d8=_0x2e9c94['toString']();_0x4472d8[_0x22e685(0x75)]>0x64&&(_0x4472d8=_0x4472d8['slice'](0x0,0x64)+_0x22e685(0x87)),_0x5e2d4e[_0x22e685(0x135)](_0x5d74ca[_0x22e685(0x139)](_0x25296e,_0x2a215a,'Map',_0x4472d8,_0x22ed3f,function(_0x376da9){return function(){return _0x376da9;};}(_0x298807)));}),!_0x5b503b){try{for(_0x16b7cc in _0x2a215a)if(!(_0x283f38&&_0x2173c4[_0x2e0ba3(0xef)](_0x16b7cc))&&!this[_0x2e0ba3(0xdf)](_0x2a215a,_0x16b7cc,_0x22ed3f)){if(_0x40d2dc++,_0x22ed3f[_0x2e0ba3(0x150)]++,_0x40d2dc>_0x25fc93){_0x460b57=!0x0;break;}if(!_0x22ed3f[_0x2e0ba3(0x81)]&&_0x22ed3f[_0x2e0ba3(0x145)]&&_0x22ed3f[_0x2e0ba3(0x150)]>_0x22ed3f[_0x2e0ba3(0xb8)]){_0x460b57=!0x0;break;}_0x5e2d4e[_0x2e0ba3(0x135)](_0x5d74ca[_0x2e0ba3(0x13f)](_0x25296e,_0x2720e2,_0x2a215a,_0x70a2f6,_0x16b7cc,_0x22ed3f));}}catch{}if(_0x2720e2[_0x2e0ba3(0x147)]=!0x0,_0x95078c&&(_0x2720e2[_0x2e0ba3(0xd7)]=!0x0),!_0x460b57){var _0x225309=[][_0x2e0ba3(0xbd)](this['_getOwnPropertyNames'](_0x2a215a))['concat'](this[_0x2e0ba3(0x12a)](_0x2a215a));for(_0x423735=0x0,_0x575ffc=_0x225309[_0x2e0ba3(0x75)];_0x423735<_0x575ffc;_0x423735++)if(_0x16b7cc=_0x225309[_0x423735],!(_0x283f38&&_0x2173c4[_0x2e0ba3(0xef)](_0x16b7cc[_0x2e0ba3(0x15e)]()))&&!this[_0x2e0ba3(0xdf)](_0x2a215a,_0x16b7cc,_0x22ed3f)&&!_0x2720e2[typeof _0x16b7cc!=_0x2e0ba3(0x7e)?_0x2e0ba3(0x8f)+_0x16b7cc[_0x2e0ba3(0x15e)]():_0x16b7cc]){if(_0x40d2dc++,_0x22ed3f[_0x2e0ba3(0x150)]++,_0x40d2dc>_0x25fc93){_0x460b57=!0x0;break;}if(!_0x22ed3f['isExpressionToEvaluate']&&_0x22ed3f[_0x2e0ba3(0x145)]&&_0x22ed3f['autoExpandPropertyCount']>_0x22ed3f['autoExpandLimit']){_0x460b57=!0x0;break;}_0x5e2d4e[_0x2e0ba3(0x135)](_0x5d74ca['_addObjectProperty'](_0x25296e,_0x2720e2,_0x2a215a,_0x70a2f6,_0x16b7cc,_0x22ed3f));}}}}}if(_0x4647d7[_0x2e0ba3(0x160)]=_0x70a2f6,_0xc8b9f?(_0x4647d7['value']=_0x2a215a[_0x2e0ba3(0x112)](),this['_capIfString'](_0x70a2f6,_0x4647d7,_0x22ed3f,_0x50c2de)):_0x70a2f6===_0x2e0ba3(0x163)?_0x4647d7['value']=this[_0x2e0ba3(0x110)][_0x2e0ba3(0xa1)](_0x2a215a):_0x70a2f6===_0x2e0ba3(0xc3)?_0x4647d7[_0x2e0ba3(0x164)]=_0x2a215a[_0x2e0ba3(0x15e)]():_0x70a2f6===_0x2e0ba3(0xb7)?_0x4647d7[_0x2e0ba3(0x164)]=this[_0x2e0ba3(0x8a)][_0x2e0ba3(0xa1)](_0x2a215a):_0x70a2f6==='symbol'&&this[_0x2e0ba3(0x12c)]?_0x4647d7[_0x2e0ba3(0x164)]=this[_0x2e0ba3(0x12c)][_0x2e0ba3(0x166)][_0x2e0ba3(0x15e)]['call'](_0x2a215a):!_0x22ed3f[_0x2e0ba3(0xed)]&&!(_0x70a2f6==='null'||_0x70a2f6===_0x2e0ba3(0xdd))&&(delete _0x4647d7[_0x2e0ba3(0x164)],_0x4647d7[_0x2e0ba3(0xc8)]=!0x0),_0x460b57&&(_0x4647d7[_0x2e0ba3(0x169)]=!0x0),_0x927f28=_0x22ed3f[_0x2e0ba3(0x153)][_0x2e0ba3(0x16f)],_0x22ed3f[_0x2e0ba3(0x153)][_0x2e0ba3(0x16f)]=_0x4647d7,this[_0x2e0ba3(0xeb)](_0x4647d7,_0x22ed3f),_0x5e2d4e['length']){for(_0x423735=0x0,_0x575ffc=_0x5e2d4e['length'];_0x423735<_0x575ffc;_0x423735++)_0x5e2d4e[_0x423735](_0x423735);}_0x25296e['length']&&(_0x4647d7[_0x2e0ba3(0x14f)]=_0x25296e);}catch(_0x3cea83){_0x5cbb2c(_0x3cea83,_0x4647d7,_0x22ed3f);}this[_0x2e0ba3(0x96)](_0x2a215a,_0x4647d7),this[_0x2e0ba3(0xca)](_0x4647d7,_0x22ed3f),_0x22ed3f[_0x2e0ba3(0x153)][_0x2e0ba3(0x16f)]=_0x927f28,_0x22ed3f['level']--,_0x22ed3f[_0x2e0ba3(0x145)]=_0x51c281,_0x22ed3f[_0x2e0ba3(0x145)]&&_0x22ed3f[_0x2e0ba3(0x154)][_0x2e0ba3(0xf6)]();}finally{_0x579911&&(_0x54988f[_0x2e0ba3(0xbe)][_0x2e0ba3(0xb4)]=_0x579911),_0xddd6e9&&(_0x54988f[_0x2e0ba3(0xbe)][_0x2e0ba3(0xf7)]=_0xddd6e9),_0x54988f[_0x2e0ba3(0x15f)]=_0x22db18;}return _0x4647d7;},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x12a)]=function(_0x542adf){var _0x50d3db=_0x362eb9;return Object[_0x50d3db(0xb1)]?Object[_0x50d3db(0xb1)](_0x542adf):[];},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x108)]=function(_0x40db41){var _0x2ca29a=_0x362eb9;return!!(_0x40db41&&_0x54988f[_0x2ca29a(0x14c)]&&this[_0x2ca29a(0x13a)](_0x40db41)===_0x2ca29a(0xf4)&&_0x40db41[_0x2ca29a(0x11a)]);},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0xdf)]=function(_0x2efd92,_0x209eca,_0x50cec3){var _0x34627=_0x362eb9;if(!_0x50cec3['resolveGetters']){let _0xd9569c=this[_0x34627(0xfe)](_0x2efd92,_0x209eca);if(_0xd9569c&&_0xd9569c[_0x34627(0x168)])return!0x0;}return _0x50cec3[_0x34627(0x6b)]?typeof _0x2efd92[_0x209eca]=='function':!0x1;},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x173)]=function(_0x3a6e45){var _0x3a6d86=_0x362eb9,_0x1ef452='';return _0x1ef452=typeof _0x3a6e45,_0x1ef452===_0x3a6d86(0x107)?this[_0x3a6d86(0x13a)](_0x3a6e45)===_0x3a6d86(0x8c)?_0x1ef452=_0x3a6d86(0x133):this[_0x3a6d86(0x13a)](_0x3a6e45)===_0x3a6d86(0x109)?_0x1ef452=_0x3a6d86(0x163):this[_0x3a6d86(0x13a)](_0x3a6e45)===_0x3a6d86(0xe1)?_0x1ef452=_0x3a6d86(0xc3):_0x3a6e45===null?_0x1ef452='null':_0x3a6e45[_0x3a6d86(0xf9)]&&(_0x1ef452=_0x3a6e45[_0x3a6d86(0xf9)][_0x3a6d86(0xae)]||_0x1ef452):_0x1ef452===_0x3a6d86(0xdd)&&this[_0x3a6d86(0x7b)]&&_0x3a6e45 instanceof this[_0x3a6d86(0x7b)]&&(_0x1ef452='HTMLAllCollection'),_0x1ef452;},_0x1553d1['prototype'][_0x362eb9(0x13a)]=function(_0xbe7254){var _0x3f21ad=_0x362eb9;return Object['prototype'][_0x3f21ad(0x15e)][_0x3f21ad(0xa1)](_0xbe7254);},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x13b)]=function(_0x2584e2){var _0x4947d9=_0x362eb9;return _0x2584e2===_0x4947d9(0x141)||_0x2584e2===_0x4947d9(0xcd)||_0x2584e2==='number';},_0x1553d1['prototype'][_0x362eb9(0x13e)]=function(_0xa2a455){var _0x33b765=_0x362eb9;return _0xa2a455==='Boolean'||_0xa2a455==='String'||_0xa2a455===_0x33b765(0x118);},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x139)]=function(_0xb78ea3,_0x5c4e5e,_0x37ea9c,_0x5e9c85,_0x2788cd,_0x56a4d2){var _0x4ccc58=this;return function(_0x2e1f3f){var _0x21a4ef=_0x1415,_0x47a755=_0x2788cd[_0x21a4ef(0x153)][_0x21a4ef(0x16f)],_0x348ee2=_0x2788cd[_0x21a4ef(0x153)][_0x21a4ef(0xa6)],_0x4f95fd=_0x2788cd['node'][_0x21a4ef(0x100)];_0x2788cd[_0x21a4ef(0x153)][_0x21a4ef(0x100)]=_0x47a755,_0x2788cd[_0x21a4ef(0x153)][_0x21a4ef(0xa6)]=typeof _0x5e9c85==_0x21a4ef(0xb3)?_0x5e9c85:_0x2e1f3f,_0xb78ea3[_0x21a4ef(0x135)](_0x4ccc58[_0x21a4ef(0xf8)](_0x5c4e5e,_0x37ea9c,_0x5e9c85,_0x2788cd,_0x56a4d2)),_0x2788cd['node']['parent']=_0x4f95fd,_0x2788cd[_0x21a4ef(0x153)][_0x21a4ef(0xa6)]=_0x348ee2;};},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x13f)]=function(_0x4770b7,_0x19ed8d,_0x5a01f4,_0x2f32a4,_0x2539b5,_0x35b333,_0xcf15f1){var _0x413486=_0x362eb9,_0x1b0ab1=this;return _0x19ed8d[typeof _0x2539b5!='symbol'?_0x413486(0x8f)+_0x2539b5[_0x413486(0x15e)]():_0x2539b5]=!0x0,function(_0xb8c9af){var _0x316ac0=_0x413486,_0x28cf78=_0x35b333['node'][_0x316ac0(0x16f)],_0x135252=_0x35b333['node']['index'],_0x51969c=_0x35b333[_0x316ac0(0x153)][_0x316ac0(0x100)];_0x35b333[_0x316ac0(0x153)]['parent']=_0x28cf78,_0x35b333[_0x316ac0(0x153)]['index']=_0xb8c9af,_0x4770b7['push'](_0x1b0ab1[_0x316ac0(0xf8)](_0x5a01f4,_0x2f32a4,_0x2539b5,_0x35b333,_0xcf15f1)),_0x35b333[_0x316ac0(0x153)][_0x316ac0(0x100)]=_0x51969c,_0x35b333[_0x316ac0(0x153)][_0x316ac0(0xa6)]=_0x135252;};},_0x1553d1['prototype'][_0x362eb9(0xf8)]=function(_0x56f923,_0xe02046,_0x35e01a,_0x31febe,_0x4c60e0){var _0x5dc645=_0x362eb9,_0x42f7fc=this;_0x4c60e0||(_0x4c60e0=function(_0x579f08,_0x5371a1){return _0x579f08[_0x5371a1];});var _0x29473c=_0x35e01a['toString'](),_0x2cbdf1=_0x31febe[_0x5dc645(0xea)]||{},_0x4c9159=_0x31febe['depth'],_0x120fec=_0x31febe['isExpressionToEvaluate'];try{var _0xb650b=this['_isMap'](_0x56f923),_0x2ab92b=_0x29473c;_0xb650b&&_0x2ab92b[0x0]==='\\x27'&&(_0x2ab92b=_0x2ab92b['substr'](0x1,_0x2ab92b[_0x5dc645(0x75)]-0x2));var _0x47228a=_0x31febe[_0x5dc645(0xea)]=_0x2cbdf1[_0x5dc645(0x8f)+_0x2ab92b];_0x47228a&&(_0x31febe[_0x5dc645(0xed)]=_0x31febe['depth']+0x1),_0x31febe[_0x5dc645(0x81)]=!!_0x47228a;var _0x23862f=typeof _0x35e01a==_0x5dc645(0x7e),_0x3cd986={'name':_0x23862f||_0xb650b?_0x29473c:this[_0x5dc645(0x122)](_0x29473c)};if(_0x23862f&&(_0x3cd986[_0x5dc645(0x7e)]=!0x0),!(_0xe02046===_0x5dc645(0x133)||_0xe02046===_0x5dc645(0x155))){var _0x53d604=this[_0x5dc645(0xfe)](_0x56f923,_0x35e01a);if(_0x53d604&&(_0x53d604['set']&&(_0x3cd986[_0x5dc645(0xbb)]=!0x0),_0x53d604[_0x5dc645(0x168)]&&!_0x47228a&&!_0x31febe['resolveGetters']))return _0x3cd986[_0x5dc645(0x152)]=!0x0,this[_0x5dc645(0x136)](_0x3cd986,_0x31febe),_0x3cd986;}var _0x299969;try{_0x299969=_0x4c60e0(_0x56f923,_0x35e01a);}catch(_0x145369){return _0x3cd986={'name':_0x29473c,'type':_0x5dc645(0x92),'error':_0x145369[_0x5dc645(0x146)]},this[_0x5dc645(0x136)](_0x3cd986,_0x31febe),_0x3cd986;}var _0x20e649=this[_0x5dc645(0x173)](_0x299969),_0x367e10=this['_isPrimitiveType'](_0x20e649);if(_0x3cd986[_0x5dc645(0x160)]=_0x20e649,_0x367e10)this[_0x5dc645(0x136)](_0x3cd986,_0x31febe,_0x299969,function(){var _0x2dc954=_0x5dc645;_0x3cd986[_0x2dc954(0x164)]=_0x299969[_0x2dc954(0x112)](),!_0x47228a&&_0x42f7fc[_0x2dc954(0x114)](_0x20e649,_0x3cd986,_0x31febe,{});});else{var _0x5dfaf4=_0x31febe[_0x5dc645(0x145)]&&_0x31febe[_0x5dc645(0xfb)]<_0x31febe[_0x5dc645(0xe9)]&&_0x31febe[_0x5dc645(0x154)][_0x5dc645(0x80)](_0x299969)<0x0&&_0x20e649!=='function'&&_0x31febe[_0x5dc645(0x150)]<_0x31febe['autoExpandLimit'];_0x5dfaf4||_0x31febe[_0x5dc645(0xfb)]<_0x4c9159||_0x47228a?this[_0x5dc645(0x13d)](_0x3cd986,_0x299969,_0x31febe,_0x47228a||{}):this[_0x5dc645(0x136)](_0x3cd986,_0x31febe,_0x299969,function(){var _0x223d28=_0x5dc645;_0x20e649==='null'||_0x20e649==='undefined'||(delete _0x3cd986[_0x223d28(0x164)],_0x3cd986[_0x223d28(0xc8)]=!0x0);});}return _0x3cd986;}finally{_0x31febe[_0x5dc645(0xea)]=_0x2cbdf1,_0x31febe[_0x5dc645(0xed)]=_0x4c9159,_0x31febe[_0x5dc645(0x81)]=_0x120fec;}},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x114)]=function(_0x268238,_0x5c408f,_0x1bbfe8,_0x14e025){var _0xb291a7=_0x362eb9,_0x378a39=_0x14e025['strLength']||_0x1bbfe8[_0xb291a7(0x13c)];if((_0x268238==='string'||_0x268238===_0xb291a7(0x132))&&_0x5c408f[_0xb291a7(0x164)]){let _0x11ccc2=_0x5c408f['value']['length'];_0x1bbfe8[_0xb291a7(0x90)]+=_0x11ccc2,_0x1bbfe8[_0xb291a7(0x90)]>_0x1bbfe8['totalStrLength']?(_0x5c408f[_0xb291a7(0xc8)]='',delete _0x5c408f[_0xb291a7(0x164)]):_0x11ccc2>_0x378a39&&(_0x5c408f['capped']=_0x5c408f['value'][_0xb291a7(0xd4)](0x0,_0x378a39),delete _0x5c408f['value']);}},_0x1553d1[_0x362eb9(0x166)]['_isMap']=function(_0x2c418a){var _0x571864=_0x362eb9;return!!(_0x2c418a&&_0x54988f[_0x571864(0x12f)]&&this['_objectToString'](_0x2c418a)===_0x571864(0xe7)&&_0x2c418a['forEach']);},_0x1553d1['prototype'][_0x362eb9(0x122)]=function(_0x259913){var _0x4fb046=_0x362eb9;if(_0x259913['match'](/^\\d+$/))return _0x259913;var _0x25f80b;try{_0x25f80b=JSON[_0x4fb046(0xb6)](''+_0x259913);}catch{_0x25f80b='\\x22'+this[_0x4fb046(0x13a)](_0x259913)+'\\x22';}return _0x25f80b['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x25f80b=_0x25f80b[_0x4fb046(0xd4)](0x1,_0x25f80b['length']-0x2):_0x25f80b=_0x25f80b[_0x4fb046(0xe5)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x4fb046(0xe5)](/(^\"|\"$)/g,'\\x27'),_0x25f80b;},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x136)]=function(_0x51dac5,_0x17415c,_0x5e7cf5,_0x4b1e80){var _0x394081=_0x362eb9;this[_0x394081(0xeb)](_0x51dac5,_0x17415c),_0x4b1e80&&_0x4b1e80(),this[_0x394081(0x96)](_0x5e7cf5,_0x51dac5),this[_0x394081(0xca)](_0x51dac5,_0x17415c);},_0x1553d1['prototype'][_0x362eb9(0xeb)]=function(_0x152418,_0x11633b){var _0x1e700d=_0x362eb9;this['_setNodeId'](_0x152418,_0x11633b),this['_setNodeQueryPath'](_0x152418,_0x11633b),this[_0x1e700d(0xd8)](_0x152418,_0x11633b),this[_0x1e700d(0xff)](_0x152418,_0x11633b);},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x12d)]=function(_0x2b1e43,_0x57edd2){},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x103)]=function(_0x539da7,_0x19786b){},_0x1553d1['prototype']['_setNodeLabel']=function(_0x5e0d54,_0x222367){},_0x1553d1['prototype'][_0x362eb9(0x14b)]=function(_0x5eebd0){var _0x47a672=_0x362eb9;return _0x5eebd0===this[_0x47a672(0x120)];},_0x1553d1['prototype']['_treeNodePropertiesAfterFullValue']=function(_0x488337,_0xfb8c5d){var _0x249fef=_0x362eb9;this['_setNodeLabel'](_0x488337,_0xfb8c5d),this[_0x249fef(0x16c)](_0x488337),_0xfb8c5d[_0x249fef(0x14d)]&&this[_0x249fef(0x12b)](_0x488337),this[_0x249fef(0x104)](_0x488337,_0xfb8c5d),this[_0x249fef(0xc1)](_0x488337,_0xfb8c5d),this[_0x249fef(0x134)](_0x488337);},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x96)]=function(_0x50775a,_0x3a2dc1){var _0x18e664=_0x362eb9;try{_0x50775a&&typeof _0x50775a[_0x18e664(0x75)]==_0x18e664(0xb3)&&(_0x3a2dc1[_0x18e664(0x75)]=_0x50775a['length']);}catch{}if(_0x3a2dc1[_0x18e664(0x160)]===_0x18e664(0xb3)||_0x3a2dc1[_0x18e664(0x160)]===_0x18e664(0x118)){if(isNaN(_0x3a2dc1[_0x18e664(0x164)]))_0x3a2dc1[_0x18e664(0x128)]=!0x0,delete _0x3a2dc1[_0x18e664(0x164)];else switch(_0x3a2dc1['value']){case Number[_0x18e664(0x106)]:_0x3a2dc1[_0x18e664(0xa8)]=!0x0,delete _0x3a2dc1[_0x18e664(0x164)];break;case Number[_0x18e664(0x16d)]:_0x3a2dc1[_0x18e664(0x10a)]=!0x0,delete _0x3a2dc1[_0x18e664(0x164)];break;case 0x0:this[_0x18e664(0xf3)](_0x3a2dc1[_0x18e664(0x164)])&&(_0x3a2dc1[_0x18e664(0x171)]=!0x0);break;}}else _0x3a2dc1[_0x18e664(0x160)]===_0x18e664(0xd9)&&typeof _0x50775a['name']==_0x18e664(0xcd)&&_0x50775a[_0x18e664(0xae)]&&_0x3a2dc1['name']&&_0x50775a['name']!==_0x3a2dc1[_0x18e664(0xae)]&&(_0x3a2dc1[_0x18e664(0x129)]=_0x50775a[_0x18e664(0xae)]);},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0xf3)]=function(_0x5d4a64){var _0x124dbd=_0x362eb9;return 0x1/_0x5d4a64===Number[_0x124dbd(0x16d)];},_0x1553d1['prototype'][_0x362eb9(0x12b)]=function(_0x5effc0){var _0xcb9369=_0x362eb9;!_0x5effc0[_0xcb9369(0x14f)]||!_0x5effc0[_0xcb9369(0x14f)][_0xcb9369(0x75)]||_0x5effc0[_0xcb9369(0x160)]===_0xcb9369(0x133)||_0x5effc0[_0xcb9369(0x160)]===_0xcb9369(0x12f)||_0x5effc0[_0xcb9369(0x160)]===_0xcb9369(0x14c)||_0x5effc0[_0xcb9369(0x14f)][_0xcb9369(0xda)](function(_0x348183,_0x3a9dfe){var _0x2dc7c8=_0xcb9369,_0x4182bd=_0x348183[_0x2dc7c8(0xae)]['toLowerCase'](),_0x4230c7=_0x3a9dfe[_0x2dc7c8(0xae)][_0x2dc7c8(0x130)]();return _0x4182bd<_0x4230c7?-0x1:_0x4182bd>_0x4230c7?0x1:0x0;});},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x104)]=function(_0x375221,_0x361945){var _0x131a55=_0x362eb9;if(!(_0x361945[_0x131a55(0x6b)]||!_0x375221[_0x131a55(0x14f)]||!_0x375221[_0x131a55(0x14f)][_0x131a55(0x75)])){for(var _0x57e4e3=[],_0x4d073a=[],_0x3d548c=0x0,_0x1a0472=_0x375221['props']['length'];_0x3d548c<_0x1a0472;_0x3d548c++){var _0x392721=_0x375221[_0x131a55(0x14f)][_0x3d548c];_0x392721[_0x131a55(0x160)]==='function'?_0x57e4e3[_0x131a55(0x135)](_0x392721):_0x4d073a[_0x131a55(0x135)](_0x392721);}if(!(!_0x4d073a['length']||_0x57e4e3[_0x131a55(0x75)]<=0x1)){_0x375221[_0x131a55(0x14f)]=_0x4d073a;var _0x300a86={'functionsNode':!0x0,'props':_0x57e4e3};this['_setNodeId'](_0x300a86,_0x361945),this[_0x131a55(0x71)](_0x300a86,_0x361945),this[_0x131a55(0x16c)](_0x300a86),this[_0x131a55(0xff)](_0x300a86,_0x361945),_0x300a86['id']+='\\x20f',_0x375221['props']['unshift'](_0x300a86);}}},_0x1553d1['prototype'][_0x362eb9(0xc1)]=function(_0xdd78d6,_0x5ea79f){},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x16c)]=function(_0x2ea115){},_0x1553d1['prototype'][_0x362eb9(0x174)]=function(_0x59d77a){var _0x5648e8=_0x362eb9;return Array[_0x5648e8(0x79)](_0x59d77a)||typeof _0x59d77a=='object'&&this['_objectToString'](_0x59d77a)==='[object\\x20Array]';},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0xff)]=function(_0x8d330,_0x234a4d){},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0x134)]=function(_0x5c22fa){var _0x64bada=_0x362eb9;delete _0x5c22fa[_0x64bada(0xb0)],delete _0x5c22fa[_0x64bada(0x16a)],delete _0x5c22fa[_0x64bada(0xf2)];},_0x1553d1[_0x362eb9(0x166)][_0x362eb9(0xd8)]=function(_0x564a04,_0xf08319){};let _0x14c23a=new _0x1553d1(),_0x39a863={'props':_0x2ab5e9[_0x362eb9(0xe2)]['props']||0x64,'elements':_0x2ab5e9[_0x362eb9(0xe2)][_0x362eb9(0x10b)]||0x64,'strLength':_0x2ab5e9[_0x362eb9(0xe2)][_0x362eb9(0x13c)]||0x400*0x32,'totalStrLength':_0x2ab5e9[_0x362eb9(0xe2)][_0x362eb9(0x9a)]||0x400*0x32,'autoExpandLimit':_0x2ab5e9[_0x362eb9(0xe2)][_0x362eb9(0xb8)]||0x1388,'autoExpandMaxDepth':_0x2ab5e9['defaultLimits']['autoExpandMaxDepth']||0xa},_0x5de84c={'props':_0x2ab5e9[_0x362eb9(0x94)][_0x362eb9(0x14f)]||0x5,'elements':_0x2ab5e9['reducedLimits'][_0x362eb9(0x10b)]||0x5,'strLength':_0x2ab5e9[_0x362eb9(0x94)][_0x362eb9(0x13c)]||0x100,'totalStrLength':_0x2ab5e9['reducedLimits']['totalStrLength']||0x100*0x3,'autoExpandLimit':_0x2ab5e9[_0x362eb9(0x94)][_0x362eb9(0xb8)]||0x1e,'autoExpandMaxDepth':_0x2ab5e9[_0x362eb9(0x94)]['autoExpandMaxDepth']||0x2};if(_0x5c9ae8){let _0x1b7536=_0x14c23a[_0x362eb9(0x13d)]['bind'](_0x14c23a);_0x14c23a[_0x362eb9(0x13d)]=function(_0x2cec0e,_0xbee19b,_0x5aae30,_0x1cbcb1){return _0x1b7536(_0x2cec0e,_0x5c9ae8(_0xbee19b),_0x5aae30,_0x1cbcb1);};}function _0x4c7fc5(_0x346455,_0x2b6a2f,_0x46c6e1,_0x1cd4b7,_0xafc0be,_0x11c2b6){var _0x507acf=_0x362eb9;let _0x4e3b4f,_0x40b10e;try{_0x40b10e=_0x33c06c(),_0x4e3b4f=_0x1c6321[_0x2b6a2f],!_0x4e3b4f||_0x40b10e-_0x4e3b4f['ts']>_0x2575e9[_0x507acf(0x157)]['resetWhenQuietMs']&&_0x4e3b4f[_0x507acf(0x7f)]&&_0x4e3b4f[_0x507acf(0x105)]/_0x4e3b4f[_0x507acf(0x7f)]<_0x2575e9[_0x507acf(0x157)]['resetOnProcessingTimeAverageMs']?(_0x1c6321[_0x2b6a2f]=_0x4e3b4f={'count':0x0,'time':0x0,'ts':_0x40b10e},_0x1c6321[_0x507acf(0x93)]={}):_0x40b10e-_0x1c6321[_0x507acf(0x93)]['ts']>_0x2575e9[_0x507acf(0x102)]['resetWhenQuietMs']&&_0x1c6321[_0x507acf(0x93)][_0x507acf(0x7f)]&&_0x1c6321[_0x507acf(0x93)][_0x507acf(0x105)]/_0x1c6321[_0x507acf(0x93)][_0x507acf(0x7f)]<_0x2575e9['global'][_0x507acf(0x7a)]&&(_0x1c6321[_0x507acf(0x93)]={});let _0x4786e5=[],_0x1867c7=_0x4e3b4f[_0x507acf(0x148)]||_0x1c6321['hits'][_0x507acf(0x148)]?_0x5de84c:_0x39a863,_0x42979e=_0x35724c=>{var _0x36e35e=_0x507acf;let _0x3cf0b1={};return _0x3cf0b1[_0x36e35e(0x14f)]=_0x35724c['props'],_0x3cf0b1['elements']=_0x35724c[_0x36e35e(0x10b)],_0x3cf0b1['strLength']=_0x35724c['strLength'],_0x3cf0b1[_0x36e35e(0x9a)]=_0x35724c[_0x36e35e(0x9a)],_0x3cf0b1[_0x36e35e(0xb8)]=_0x35724c[_0x36e35e(0xb8)],_0x3cf0b1[_0x36e35e(0xe9)]=_0x35724c[_0x36e35e(0xe9)],_0x3cf0b1[_0x36e35e(0x14d)]=!0x1,_0x3cf0b1[_0x36e35e(0x6b)]=!_0x4ca48c,_0x3cf0b1[_0x36e35e(0xed)]=0x1,_0x3cf0b1[_0x36e35e(0xfb)]=0x0,_0x3cf0b1[_0x36e35e(0xc5)]=_0x36e35e(0x124),_0x3cf0b1[_0x36e35e(0xec)]='root_exp',_0x3cf0b1[_0x36e35e(0x145)]=!0x0,_0x3cf0b1[_0x36e35e(0x154)]=[],_0x3cf0b1['autoExpandPropertyCount']=0x0,_0x3cf0b1[_0x36e35e(0x116)]=_0x2ab5e9[_0x36e35e(0x116)],_0x3cf0b1[_0x36e35e(0x90)]=0x0,_0x3cf0b1[_0x36e35e(0x153)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3cf0b1;};for(var _0xcf31ee=0x0;_0xcf31ee<_0xafc0be[_0x507acf(0x75)];_0xcf31ee++)_0x4786e5[_0x507acf(0x135)](_0x14c23a['serialize']({'timeNode':_0x346455===_0x507acf(0x105)||void 0x0},_0xafc0be[_0xcf31ee],_0x42979e(_0x1867c7),{}));if(_0x346455===_0x507acf(0x142)||_0x346455===_0x507acf(0xb4)){let _0x29266d=Error[_0x507acf(0x9f)];try{Error[_0x507acf(0x9f)]=0x1/0x0,_0x4786e5['push'](_0x14c23a[_0x507acf(0x13d)]({'stackNode':!0x0},new Error()[_0x507acf(0x77)],_0x42979e(_0x1867c7),{'strLength':0x1/0x0}));}finally{Error[_0x507acf(0x9f)]=_0x29266d;}}return{'method':'log','version':_0x242b6d,'args':[{'ts':_0x46c6e1,'session':_0x1cd4b7,'args':_0x4786e5,'id':_0x2b6a2f,'context':_0x11c2b6}]};}catch(_0x1f5703){return{'method':_0x507acf(0x119),'version':_0x242b6d,'args':[{'ts':_0x46c6e1,'session':_0x1cd4b7,'args':[{'type':_0x507acf(0x92),'error':_0x1f5703&&_0x1f5703[_0x507acf(0x146)]}],'id':_0x2b6a2f,'context':_0x11c2b6}]};}finally{try{if(_0x4e3b4f&&_0x40b10e){let _0x21bfd9=_0x33c06c();_0x4e3b4f[_0x507acf(0x7f)]++,_0x4e3b4f[_0x507acf(0x105)]+=_0x2020f4(_0x40b10e,_0x21bfd9),_0x4e3b4f['ts']=_0x21bfd9,_0x1c6321[_0x507acf(0x93)][_0x507acf(0x7f)]++,_0x1c6321['hits'][_0x507acf(0x105)]+=_0x2020f4(_0x40b10e,_0x21bfd9),_0x1c6321[_0x507acf(0x93)]['ts']=_0x21bfd9,(_0x4e3b4f[_0x507acf(0x7f)]>_0x2575e9[_0x507acf(0x157)][_0x507acf(0x97)]||_0x4e3b4f[_0x507acf(0x105)]>_0x2575e9[_0x507acf(0x157)][_0x507acf(0x91)])&&(_0x4e3b4f[_0x507acf(0x148)]=!0x0),(_0x1c6321[_0x507acf(0x93)][_0x507acf(0x7f)]>_0x2575e9['global'][_0x507acf(0x97)]||_0x1c6321[_0x507acf(0x93)]['time']>_0x2575e9[_0x507acf(0x102)]['reduceOnAccumulatedProcessingTimeMs'])&&(_0x1c6321[_0x507acf(0x93)][_0x507acf(0x148)]=!0x0);}}catch{}}}return _0x4c7fc5;}function G(_0x3110a3){var _0x3bd871=_0x3bb860;if(_0x3110a3&&typeof _0x3110a3==_0x3bd871(0x107)&&_0x3110a3['constructor'])switch(_0x3110a3[_0x3bd871(0xf9)][_0x3bd871(0xae)]){case _0x3bd871(0xcb):return _0x3110a3['hasOwnProperty'](Symbol[_0x3bd871(0xc9)])?Promise['resolve']():_0x3110a3;case'bound\\x20Promise':return Promise[_0x3bd871(0x82)]();}return _0x3110a3;}((_0x89476e,_0x28b07f,_0x238868,_0x4cce03,_0x2dfef1,_0x1e02d7,_0x12a822,_0x1c8003,_0x4ba878,_0x4d841f,_0x421cd1,_0x9d4723)=>{var _0x41e2dd=_0x3bb860;if(_0x89476e[_0x41e2dd(0xfa)])return _0x89476e[_0x41e2dd(0xfa)];let _0x49128d={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x89476e,_0x1c8003,_0x2dfef1))return _0x89476e['_console_ninja']=_0x49128d,_0x89476e[_0x41e2dd(0xfa)];let _0x3b17c2=b(_0x89476e),_0x5e45ab=_0x3b17c2['elapsed'],_0x5e3035=_0x3b17c2[_0x41e2dd(0x10c)],_0x59dd7b=_0x3b17c2['now'],_0x41cf3b={'hits':{},'ts':{}},_0x2245c0=J(_0x89476e,_0x4ba878,_0x41cf3b,_0x1e02d7,_0x9d4723,_0x2dfef1==='next.js'?G:void 0x0),_0x23a585=(_0x50e6b3,_0x4f445a,_0x17722c,_0x24a0e1,_0x5e2f8e,_0x23d340)=>{var _0x320467=_0x41e2dd;let _0x26447d=_0x89476e[_0x320467(0xfa)];try{return _0x89476e[_0x320467(0xfa)]=_0x49128d,_0x2245c0(_0x50e6b3,_0x4f445a,_0x17722c,_0x24a0e1,_0x5e2f8e,_0x23d340);}finally{_0x89476e[_0x320467(0xfa)]=_0x26447d;}},_0x42ba27=_0x7674fa=>{_0x41cf3b['ts'][_0x7674fa]=_0x5e3035();},_0x24d759=(_0x5f8923,_0x3f0a6d)=>{var _0x955907=_0x41e2dd;let _0x55a4b5=_0x41cf3b['ts'][_0x3f0a6d];if(delete _0x41cf3b['ts'][_0x3f0a6d],_0x55a4b5){let _0x42836e=_0x5e45ab(_0x55a4b5,_0x5e3035());_0x1c7723(_0x23a585(_0x955907(0x105),_0x5f8923,_0x59dd7b(),_0x1e7b66,[_0x42836e],_0x3f0a6d));}},_0x1694ef=_0x470e65=>{var _0x25a365=_0x41e2dd,_0x59f8f2;return _0x2dfef1==='next.js'&&_0x89476e['origin']&&((_0x59f8f2=_0x470e65==null?void 0x0:_0x470e65[_0x25a365(0x115)])==null?void 0x0:_0x59f8f2[_0x25a365(0x75)])&&(_0x470e65[_0x25a365(0x115)][0x0][_0x25a365(0xb2)]=_0x89476e['origin']),_0x470e65;};_0x89476e[_0x41e2dd(0xfa)]={'consoleLog':(_0x289d5e,_0x17a27d)=>{var _0x5de7e4=_0x41e2dd;_0x89476e[_0x5de7e4(0xbe)]['log'][_0x5de7e4(0xae)]!==_0x5de7e4(0xde)&&_0x1c7723(_0x23a585(_0x5de7e4(0x119),_0x289d5e,_0x59dd7b(),_0x1e7b66,_0x17a27d));},'consoleTrace':(_0x550c51,_0x217373)=>{var _0x58b605=_0x41e2dd,_0x5c42fd,_0x2eb19b;_0x89476e[_0x58b605(0xbe)][_0x58b605(0x119)][_0x58b605(0xae)]!=='disabledTrace'&&((_0x2eb19b=(_0x5c42fd=_0x89476e[_0x58b605(0x167)])==null?void 0x0:_0x5c42fd[_0x58b605(0x149)])!=null&&_0x2eb19b[_0x58b605(0x153)]&&(_0x89476e[_0x58b605(0x83)]=!0x0),_0x1c7723(_0x1694ef(_0x23a585(_0x58b605(0x142),_0x550c51,_0x59dd7b(),_0x1e7b66,_0x217373))));},'consoleError':(_0x388785,_0x1df99e)=>{var _0x3e3286=_0x41e2dd;_0x89476e[_0x3e3286(0x83)]=!0x0,_0x1c7723(_0x1694ef(_0x23a585(_0x3e3286(0xb4),_0x388785,_0x59dd7b(),_0x1e7b66,_0x1df99e)));},'consoleTime':_0x5dfd28=>{_0x42ba27(_0x5dfd28);},'consoleTimeEnd':(_0x2ea531,_0x32fcea)=>{_0x24d759(_0x32fcea,_0x2ea531);},'autoLog':(_0x3210b3,_0x41f469)=>{var _0x149cc9=_0x41e2dd;_0x1c7723(_0x23a585(_0x149cc9(0x119),_0x41f469,_0x59dd7b(),_0x1e7b66,[_0x3210b3]));},'autoLogMany':(_0x5cca3a,_0xfa047d)=>{_0x1c7723(_0x23a585('log',_0x5cca3a,_0x59dd7b(),_0x1e7b66,_0xfa047d));},'autoTrace':(_0xdc9d24,_0x1f706d)=>{_0x1c7723(_0x1694ef(_0x23a585('trace',_0x1f706d,_0x59dd7b(),_0x1e7b66,[_0xdc9d24])));},'autoTraceMany':(_0x369170,_0x2658f9)=>{var _0x21206c=_0x41e2dd;_0x1c7723(_0x1694ef(_0x23a585(_0x21206c(0x142),_0x369170,_0x59dd7b(),_0x1e7b66,_0x2658f9)));},'autoTime':(_0x216685,_0x1f9d8a,_0x5d3d6a)=>{_0x42ba27(_0x5d3d6a);},'autoTimeEnd':(_0x38e311,_0x8da60e,_0x102528)=>{_0x24d759(_0x8da60e,_0x102528);},'coverage':_0x3ee68b=>{_0x1c7723({'method':'coverage','version':_0x1e02d7,'args':[{'id':_0x3ee68b}]});}};let _0x1c7723=H(_0x89476e,_0x28b07f,_0x238868,_0x4cce03,_0x2dfef1,_0x4d841f,_0x421cd1),_0x1e7b66=_0x89476e[_0x41e2dd(0x14a)];return _0x89476e[_0x41e2dd(0xfa)];})(globalThis,_0x3bb860(0x6d),_0x3bb860(0x165),_0x3bb860(0x15b),'next.js',_0x3bb860(0x14e),'1765832586108',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"DESKTOP-HGIVVPD\",\"192.168.68.54\"],_0x3bb860(0x15c),_0x3bb860(0x159),_0x3bb860(0xa4),_0x3bb860(0xd1));");
    } catch (e) {
        console.error(e);
    }
}
function oo_oo(i, ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
oo_oo; /* istanbul ignore next */ 
function oo_tr(i, ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
oo_tr; /* istanbul ignore next */ 
function oo_tx(i, ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
oo_tx; /* istanbul ignore next */ 
function oo_ts(v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
oo_ts; /* istanbul ignore next */ 
function oo_te(v, i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
oo_te; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/about.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experience.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$education$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/education.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/projects.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certificates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/certificates.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/contact.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("es");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                language: language,
                setLanguage: setLanguage
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hero"], {
                        language: language
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["About"], {
                        language: language
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Experience"], {
                        language: language
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$education$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Education"], {
                        language: language
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Projects"], {
                        language: language
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$certificates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Certificates"], {
                        language: language
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contact"], {
                        language: language
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-border py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 text-center text-sm text-muted-foreground",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "© 2025 Backend Developer Portfolio.",
                            " ",
                            language === "es" ? "Todos los derechos reservados." : "All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_62bfa95d._.js.map