// Arquivo Principal da Aplicacao
// Desenvolvido por: Pamela Strob Mancegozo Lima
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

// Inicializar aplicacao
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (window.Router) {
            window.Router.init();
        }
        setupMobileMenu();
        addAnimations();
    }, 200);
});

// Configurar menu mobile (hamburguer)
const setupMobileMenu = () => {
    const hamburger = window.$('#hamburger');
    const navMenu = window.$('#nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            if (window.toggleClass) {
                window.toggleClass(hamburger, 'active');
                window.toggleClass(navMenu, 'active');
            } else {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            }
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

// Funcao para demonstrar armazenamento local
const demoLocalStorage = () => {
    // Exemplo de uso do localStorage
    const dadosExemplo = {
        nome: 'Usuario',
        visitas: parseInt(localStorage.getItem('visitas') || '0') + 1,
        ultimaVisita: new Date().toISOString()
    };
    
    localStorage.setItem('visitas', dadosExemplo.visitas);
    localStorage.setItem('ultimaVisita', dadosExemplo.ultimaVisita);
    
    console.log('Estatisticas:', dadosExemplo);
};

// Executar demos
demoLocalStorage();
