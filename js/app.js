/**
 * Arquivo Principal da Aplicação
 * Inicializa o SPA e configura todas as funcionalidades
 */

import router from './router.js';
import { $, toggleClass } from './utils.js';

// Agregar showAlert globalmente para uso nos templates
window.showAlert = function(message, type = 'info') {
    const alertBox = document.createElement('div');
    alertBox.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background-color: ${type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    alertBox.textContent = message;
    
    document.body.appendChild(alertBox);
    
    setTimeout(() => {
        alertBox.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => alertBox.remove(), 300);
    }, 3000);
};

// Inicializar aplicação quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Aplicação iniciada com sucesso!');
    
    // Inicializar router
    router.init();
    
    // Configurar menu hambúrguer
    setupMobileMenu();
    
    // Adicionar animações CSS dinamicamente
    addAnimations();
});

// Configurar menu mobile (hambúrguer)
const setupMobileMenu = () => {
    const hamburger = $('#hamburger');
    const navMenu = $('#nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            toggleClass(hamburger, 'active');
            toggleClass(navMenu, 'active');
        });
        
        // Fechar menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
};

// Adicionar animações CSS dinamicamente
const addAnimations = () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
};

// Função para demonstrar armazenamento local
const demoLocalStorage = () => {
    // Exemplo de uso do localStorage
    const dadosExemplo = {
        nome: 'Usuário',
        visitas: parseInt(localStorage.getItem('visitas') || '0') + 1,
        ultimaVisita: new Date().toISOString()
    };
    
    localStorage.setItem('visitas', dadosExemplo.visitas);
    localStorage.setItem('ultimaVisita', dadosExemplo.ultimaVisita);
    
    console.log('📊 Estatísticas:', dadosExemplo);
};

// Executar demos
demoLocalStorage();
