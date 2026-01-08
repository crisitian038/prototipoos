// config.js
const GITHUB_REPO_NAME = 'tu-repo'; // Cambia esto

// Determinar si estamos en GitHub Pages o localhost
const IS_GITHUB_PAGES = window.location.hostname.includes('github.io');
const BASE_PATH = IS_GITHUB_PAGES ? `/${GITHUB_REPO_NAME}` : '';

// Configuración global
window.AppConfig = {
    repoName: GITHUB_REPO_NAME,
    basePath: BASE_PATH,
    isGithubPages: IS_GITHUB_PAGES,
    pages: {
        home: `${BASE_PATH}/index.html`,
        login: `${BASE_PATH}/login.html`,
        admin: `${BASE_PATH}/admin.html`,
        error404: `${BASE_PATH}/404.html`,
        offline: `${BASE_PATH}/offline.html`
    }
};

console.log('Configuración cargada:', window.AppConfig);