// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                dir: "rtl",
                lang: "fa",
            },
        },
    },

    runtimeConfig: {
        public: {
            apiBase: "https://api.iranaxie.com/api",
        },
    },

    css: ["~/assets/css/main.css"],

    modules: [
        "@formkit/nuxt",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
    ],

    build: {
        transpile: ["vue-toastification"],
    },
});
