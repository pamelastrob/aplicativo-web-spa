// Sistema de Roteamento SPA
// Desenvolvido por: Pamela Strob Mancegozo Lima

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
        // Carregar rota inicial - garantir que sempre haja um hash
        if (!window.location.hash || window.location.hash === '#' || window.location.hash === '') {
            window.location.hash = '#/';
        }
        
        // Configurar links de navegacao PRIMEIRO
        this.setupNavLinks();
        
        // Carregar rota atual
        this.handleRoute();
        
        // Escutar mudancas de hash
        window.addEventListener('hashchange', () => {
            this.handleRoute();
        });
        
        // Forcar carregamento inicial apos um pequeno delay
        setTimeout(() => {
            if (document.getElementById('main-content').innerHTML.trim() === '') {
                this.handleRoute();
            }
        }, 100);
    }
    
    // Lidar com mudanca de rota
    handleRoute() {
        let hash = window.location.hash.slice(1);
        if (!hash || hash === '') {
            hash = '/';
        }
        const route = this.routes[hash] || 'home';
        
        // Sempre renderizar, mesmo se for a mesma rota (para garantir carregamento inicial)
        this.currentRoute = route;
        this.renderPage(route);
        this.updateActiveNavLink(hash);
    }
    
    // Renderizar pagina
    renderPage(route) {
        const mainContent = window.$('#main-content');
        
        if (!mainContent) {
            console.error('Elemento main-content nao encontrado');
            return;
        }
        
        // Renderizar template
        if (window.renderTemplate) {
            mainContent.innerHTML = window.renderTemplate(route);
        } else if (window.templates && window.templates[route]) {
            mainContent.innerHTML = window.templates[route];
        } else {
            console.error('Template nao encontrado para:', route);
            // Fallback para home
            if (window.templates && window.templates.home) {
                mainContent.innerHTML = window.templates.home;
            }
            return;
        }
        
        // Configurar funcionalidades especificas da pagina
        setTimeout(() => {
            this.setupPageFeatures(route);
        }, 50);
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
    
    // Configurar formulario de contato
    setupContactForm() {
        const contactForm = window.$('#contact-form');
        if (contactForm && window.Validators && window.Validators.setupFormValidation) {
            window.Validators.setupFormValidation(contactForm);
        }
    }
    
    // Configurar formulario de cadastro
    setupRegisterForm() {
        const registerForm = window.$('#register-form');
        if (registerForm) {
            if (window.Validators && window.Validators.setupFormValidation) {
                window.Validators.setupFormValidation(registerForm);
            }
            
            // Mascara para CPF
            const cpfInput = window.$('#reg-cpf');
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
            
            // Mascara para telefone
            const phoneInput = window.$('#reg-phone');
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
        const produtosGrid = window.$('#produtos-grid');
        if (!produtosGrid) return;
        
        // Produtos de exemplo
        const produtos = [
            { nome: 'Smartphone Pro', descricao: 'Ultimo lancamento tecnologico', preco: 'R$ 2.999,90' },
            { nome: 'Notebook Ultra', descricao: 'Alto desempenho para trabalho', preco: 'R$ 4.599,90' },
            { nome: 'Fones Bluetooth', descricao: 'Qualidade de som premium', preco: 'R$ 399,90' },
            { nome: 'Smartwatch Elite', descricao: 'Tecnologia de ponta no seu pulso', preco: 'R$ 899,90' },
            { nome: 'Camera Digital', descricao: 'Captura momentos especiais', preco: 'R$ 1.599,90' },
            { nome: 'Console Gamer', descricao: 'Diversao garantida', preco: 'R$ 2.899,90' },
            { nome: 'Soundbar', descricao: 'Experiencia imersiva de audio', preco: 'R$ 699,90' },
            { nome: 'Teclado Mecanico', descricao: 'Precisao e conforto', preco: 'R$ 299,90' }
        ];
        
        produtosGrid.innerHTML = produtos.map(produto => `
            <div class="produto-card">
                <div class="produto-content">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <div class="produto-price">${produto.preco}</div>
                    <button class="btn btn-primary" style="width: 100%;" onclick="if(window.showAlert) window.showAlert('${produto.nome} adicionado ao carrinho!', 'success')">
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
        
        // Logo tambem navega
        const logo = window.$('.logo h1');
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

// Exportar instancia do router (sem ES modules)
window.Router = new Router();
