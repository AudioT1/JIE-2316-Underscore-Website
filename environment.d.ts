declare global {
    namespace NodeJS {
        interface ProcessEnv {
            FAUNA_SECRET_KEY: string;
        }
    }
}

export {}