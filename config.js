// config.js
const GITHUB_REPO_NAME = 'prototipoos';

// Determinar si estamos en GitHub Pages o localhost
const IS_GITHUB_PAGES = window.location.hostname.includes('github.io');
const BASE_PATH = IS_GITHUB_PAGES ? `/${GITHUB_REPO_NAME}` : '';

// Función helper para construir rutas consistentemente
const buildPath = (page) => `${BASE_PATH}${BASE_PATH && page ? '/' : ''}${page}`;

// Configuración global
window.AppConfig = {
    repoName: GITHUB_REPO_NAME,
    basePath: BASE_PATH,
    isGithubPages: IS_GITHUB_PAGES,
    pages: {
        home: buildPath('index.html'),
        login: buildPath('login.html'),
        admin: buildPath('admin.html'),
        error404: buildPath('404.html'),
        offline: buildPath('offline.html')
    }
};

console.log('Configuración cargada:', window.AppConfig);