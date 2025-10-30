/**
 * Sistema de Templates JavaScript
 * Gerencia templates de páginas e renderização
 */

import { $ } from './utils.js';

const templates = {
    // Template da página Home
    home: `
        <div class="page-content">
            <div class="hero">
                <h1>Bem-vinda ao Aplicativo Web</h1>
                <p>Uma Single Page Application moderna e interativa</p>
                <a href="#/contato" class="btn">Começar Agora</a>
            </div>
            
            <div class="container">
                <h2 class="text-center mb-3">Recursos Principais</h2>
                
                <div class="card-grid">
                    <div class="card">
                        <div class="card-icon">UI</div>
                        <h3>Interface Moderna</h3>
                        <p>Design responsivo e intuitivo com animações suaves</p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon">PERF</div>
                        <h3>Performance</h3>
                        <p>Carregamento rápido com JavaScript modular</p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon">SEC</div>
                        <h3>Validação de Formulários</h3>
                        <p>Sistema robusto de validação em tempo real</p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon">MOB</div>
                        <h3>Totalmente Responsivo</h3>
                        <p>Funciona perfeitamente em qualquer dispositivo</p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon">SPA</div>
                        <h3>Single Page App</h3>
                        <p>Navegação fluida sem recarregar a página</p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon">DB</div>
                        <h3>Armazenamento Local</h3>
                        <p>Dados persistidos no navegador</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    
    // Template da página Sobre
    sobre: `
        <div class="page-content">
            <div class="container">
                <div class="about-section">
                    <h2>Sobre o Projeto</h2>
                    <p>
                        Este é um projeto desenvolvido para demonstrar habilidades em JavaScript avançado,
                        incluindo manipulação do DOM, implementação de Single Page Application (SPA),
                        sistema de templates e validação de formulários.
                    </p>
                </div>
                
                <div class="about-section">
                    <h2>📚 Conceitos Implementados</h2>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin: 1rem 0; padding: 1rem; background: #f3f4f6; border-radius: 8px;">
                            <strong>🎯 SPA (Single Page Application):</strong> Sistema de roteamento que permite
                            navegação entre páginas sem recarregar o navegador.
                        </li>
                        <li style="margin: 1rem 0; padding: 1rem; background: #f3f4f6; border-radius: 8px;">
                            <strong>📝 Sistema de Templates:</strong> Templates JavaScript para renderização
                            dinâmica de conteúdo.
                        </li>
                        <li style="margin: 1rem 0; padding: 1rem; background: #f3f4f6; border-radius: 8px;">
                            <strong>✅ Validação de Formulários:</strong> Sistema completo de validação com
                            feedback em tempo real para o usuário.
                        </li>
                        <li style="margin: 1rem 0; padding: 1rem; background: #f3f4f6; border-radius: 8px;">
                            <strong>🎨 Manipulação do DOM:</strong> Criação e modificação de elementos
                            dinamicamente.
                        </li>
                        <li style="margin: 1rem 0; padding: 1rem; background: #f3f4f6; border-radius: 8px;">
                            <strong>💾 LocalStorage:</strong> Armazenamento de dados no navegador do usuário.
                        </li>
                    </ul>
                </div>
                
                <div class="about-section">
                    <h2>🔧 Tecnologias Utilizadas</h2>
                    <p>
                        <strong>HTML5:</strong> Estrutura semântica<br>
                        <strong>CSS3:</strong> Estilização moderna com variáveis CSS e Flexbox/Grid<br>
                        <strong>JavaScript ES6+:</strong> Módulos, Arrow Functions, Template Literals<br>
                        <strong>LocalStorage API:</strong> Persistência de dados<br>
                    </p>
                </div>
            </div>
        </div>
    `,
    
    // Template da página Contato
    contato: `
        <div class="page-content">
            <div class="container">
                <h1 class="text-center mb-3">📧 Entre em Contato</h1>
                
                <div class="form-container">
                    <div id="contact-success" class="success-message">
                        Mensagem enviada com sucesso! 🎉
                    </div>
                    
                    <form id="contact-form">
                        <div class="form-group">
                            <label for="name">Nome Completo *</label>
                            <input type="text" id="name" name="name" required>
                            <span class="error-message" id="name-error"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">E-mail *</label>
                            <input type="email" id="email" name="email" required>
                            <span class="error-message" id="email-error"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Telefone *</label>
                            <input type="tel" id="phone" name="phone" required>
                            <span class="error-message" id="phone-error"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="subject">Assunto *</label>
                            <select id="subject" name="subject" required>
                                <option value="">Selecione um assunto</option>
                                <option value="suporte">Suporte Técnico</option>
                                <option value="vendas">Vendas</option>
                                <option value="parceria">Parceria</option>
                                <option value="outro">Outro</option>
                            </select>
                            <span class="error-message" id="subject-error"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Mensagem *</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                            <span class="error-message" id="message-error"></span>
                        </div>
                        
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `,
    
    // Template da página Cadastro
    cadastro: `
        <div class="page-content">
            <div class="container">
                <h1 class="text-center mb-3">👤 Cadastro de Usuário</h1>
                
                <div class="form-container">
                    <div id="register-success" class="success-message">
                        Cadastro realizado com sucesso! 🎉
                    </div>
                    
                    <form id="register-form">
                        <div class="form-group">
                            <label for="reg-name">Nome Completo *</label>
                            <input type="text" id="reg-name" name="name" required>
                            <span class="error-message" id="reg-name-error"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="reg-email">E-mail *</label>
                            <input type="email" id="reg-email" name="email" required>
                            <span class="error-message" id="reg-email-error"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="reg-cpf">CPF *</label>
                            <input type="text" id="reg-cpf" name="cpf" placeholder="000.000.000-00" required>
                            <span class="error-message" id="reg-cpf-error"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="reg-phone">Telefone *</label>
                            <input type="tel" id="reg-phone" name="phone" required>
                            <span class="error-message" id="reg-phone-error"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="reg-password">Senha *</label>
                            <input type="password" id="reg-password" name="password" required>
                            <span class="error-message" id="reg-password-error"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="reg-confirm-password">Confirmar Senha *</label>
                            <input type="password" id="reg-confirm-password" name="confirmPassword" required>
                            <span class="error-message" id="reg-confirm-password-error"></span>
                        </div>
                        
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `,
    
    // Template da página Produtos
    produtos: `
        <div class="page-content">
            <div class="container">
                <h1 class="text-center mb-3">🛍️ Nossos Produtos</h1>
                
                <div class="produtos-grid" id="produtos-grid">
                    <!-- Produtos serão carregados dinamicamente via JavaScript -->
                </div>
            </div>
        </div>
    `,
    
    // Template de produto individual
    produtoCard: (produto) => `
        <div class="produto-card">
            <div class="produto-image">${produto.emoji}</div>
            <div class="produto-content">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <div class="produto-price">${produto.preco}</div>
                <button class="btn btn-primary" style="width: 100%;" onclick="showAlert('Produto adicionado ao carrinho!')">
                    Comprar
                </button>
            </div>
        </div>
    `
};

// Função para renderizar template
const renderTemplate = (templateName) => {
    if (templates[templateName]) {
        return templates[templateName];
    }
    return templates.home; // fallback
};

export { templates, renderTemplate };
