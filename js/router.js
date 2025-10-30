/**
 * Sistema de Roteamento SPA (Single Page Application)
 * Gerencia navegação entre páginas sem recarregar
 */

import { $ } from './utils.js';
import { templates, renderTemplate } from './templates.js';
import { setupFormValidation } from './validators.js';

class Router {
    constructor() {
        this.routes = {
            '': 'home',
            '/': 'home',
            '/sobre': 'sobre',
            '/contato': 'contato',
            '/cadastro': 'cadastro',
            '/produtos': 'produtos'
        };
        
        this.currentRoute = '';
    }
    
    // Inicializar o roteador
    init() {
        this.handleRoute();
        window.addEventListener('hashchange', () => this.handleRoute());
        
        // Configurar links de navegação
        this.setupNavLinks();
    }
    
    // Lidar com mudança de rota
    handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        const route = this.routes[hash] || 'home';
        
        if (this.currentRoute !== route) {
            this.currentRoute = route;
            this.renderPage(route);
            this.updateActiveNavLink(hash);
        }
    }
    
    // Renderizar página
    renderPage(route) {
        const mainContent = $('#main-content');
        
        if (!mainContent) return;
        
        // Renderizar template
        mainContent.innerHTML = renderTemplate(route);
        
        // Configurar funcionalidades específicas da página
        this.setupPageFeatures(route);
    }
    
    // Configurar funcionalidades específicas de cada página
    setupPageFeatures(route) {
        switch(route) {
            case 'contato':
                this.setupContactForm();
                break;
            case 'cadastro':
                this.setupRegisterForm();
                break;
            case 'produtos':
                this.loadProducts();
                break;
        }
    }
    
    // Configurar formulário de contato
    setupContactForm() {
        const contactForm = $('#contact-form');
        if (contactForm) {
            setupFormValidation(contactForm);
        }
    }
    
    // Configurar formulário de cadastro
    setupRegisterForm() {
        const registerForm = $('#register-form');
        if (registerForm) {
            setupFormValidation(registerForm);
            
            // Máscara para CPF
            const cpfInput = $('#reg-cpf');
            if (cpfInput) {
                cpfInput.addEventListener('input', (e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 11) {
                        value = value.replace(/(\d{3})(\d)/, '$1.$2');
                        value = value.replace(/(\d{3})(\d)/, '$1.$2');
                        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                        e.target.value = value;
                    }
                });
            }
            
            // Máscara para telefone
            const phoneInput = $('#reg-phone');
            if (phoneInput) {
                phoneInput.addEventListener('input', (e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 11) {
                        value = value.replace(/(\d{2})(\d)/, '($1) $2');
                        value = value.replace(/(\d{5})(\d)/, '$1-$2');
                        e.target.value = value;
                    }
                });
            }
        }
    }
    
    // Carregar produtos
    loadProducts() {
        const produtosGrid = $('#produtos-grid');
        if (!produtosGrid) return;
        
        // Produtos de exemplo
        const produtos = [
            { emoji: '📱', nome: 'Smartphone Pro', descricao: 'Último lançamento tecnológico', preco: 'R$ 2.999,90' },
            { emoji: '💻', nome: 'Notebook Ultra', descricao: 'Alto desempenho para trabalho', preco: 'R$ 4.599,90' },
            { emoji: '🎧', nome: 'Fones Bluetooth', descricao: 'Qualidade de som premium', preco: 'R$ 399,90' },
            { emoji: '⌚', nome: 'Smartwatch Elite', descricao: 'Tecnologia de ponta no seu pulso', preco: 'R$ 899,90' },
            { emoji: '📷', nome: 'Câmera Digital', descricao: 'Captura momentos especiais', preco: 'R$ 1.599,90' },
            { emoji: '🎮', nome: 'Console Gamer', descricao: 'Diversão garantida', preco: 'R$ 2.899,90' },
            { emoji: '🔊', nome: 'Soundbar', descricao: 'Experiência imersiva de áudio', preco: 'R$ 699,90' },
            { emoji: '⌨️', nome: 'Teclado Mecânico', descricao: 'Precisão e conforto', preco: 'R$ 299,90' }
        ];
        
        produtosGrid.innerHTML = produtos.map(produto => `
            <div class="produto-card">
                <div class="produto-image">${produto.emoji}</div>
                <div class="produto-content">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <div class="produto-price">${produto.preco}</div>
                    <button class="btn btn-primary" style="width: 100%;" onclick="showAlert('${produto.nome} adicionado ao carrinho!', 'success')">
                        Comprar
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Configurar links de navegação
    setupNavLinks() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const route = link.getAttribute('data-route');
                this.navigateTo(`/${route}`);
            });
        });
        
        // Logo também navega
        const logo = $('.logo h1');
        if (logo) {
            logo.addEventListener('click', () => {
                this.navigateTo('/');
            });
        }
    }
    
    // Navegar para uma rota
    navigateTo(route) {
        window.location.hash = route;
    }
    
    // Atualizar link ativo na navegação
    updateActiveNavLink(route) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const linkRoute = link.getAttribute('href').slice(2);
            if (linkRoute === route) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Exportar instância do router
const router = new Router();
export default router;
