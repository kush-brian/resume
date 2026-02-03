/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PHONE: string
    readonly VITE_EMAIL: string
    readonly VITE_LINKEDIN: string
    readonly VITE_GITHUB: string
    readonly GEMINI_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
