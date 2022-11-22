declare global {
    namespace NodeJS {
        interface ProcessEnv {
            FAUNA_SECRET_KEY: string;
            ADMIN_ROOT_PASSWORD: string;
        }
    }
}

export {}