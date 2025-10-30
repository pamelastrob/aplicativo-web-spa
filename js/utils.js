/**
 * Utilitários e Funções Auxiliares
 */

// Função para mostrar/esconder elementos
const toggleElement = (element, show = true) => {
    if (element) {
        element.style.display = show ? 'block' : 'none';
    }
};

// Função para adicionar classe
const addClass = (element, className) => {
    if (element && !element.classList.contains(className)) {
        element.classList.add(className);
    }
};

// Função para remover classe
const removeClass = (element, className) => {
    if (element) {
        element.classList.remove(className);
    }
};

// Função para alternar classe
const toggleClass = (element, className) => {
    if (element) {
        element.classList.toggle(className);
    }
};

// Função para buscar elementos
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Função para criar elemento
const createElement = (tag, classes = '', content = '') => {
    const element = document.createElement(tag);
    if (classes) element.className = classes;
    if (content) element.innerHTML = content;
    return element;
};

// Função para obter dados do localStorage
const getStorage = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Erro ao recuperar dados:', error);
        return null;
    }
};

// Função para salvar dados no localStorage
const setStorage = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
        return false;
    }
};

// Função para formatar moeda
const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
};

// Função para debounce
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Função para exibir mensagem de alerta
const showAlert = (message, type = 'info') => {
    const alertBox = createElement('div', `alert alert-${type}`, message);
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
    
    document.body.appendChild(alertBox);
    
    setTimeout(() => {
        alertBox.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => alertBox.remove(), 300);
    }, 3000);
};

// Função para limpar mensagens de erro de um formulário
const clearFormErrors = (formElement) => {
    const errorMessages = formElement.querySelectorAll('.error-message');
    const errorInputs = formElement.querySelectorAll('.error');
    
    errorMessages.forEach(msg => {
        msg.classList.remove('show');
        msg.textContent = '';
    });
    
    errorInputs.forEach(input => {
        input.classList.remove('error');
    });
};

// Exportar para uso global (sem ES modules)
window.Utils = {
    toggleElement,
    addClass,
    removeClass,
    toggleClass,
    $,
    $$,
    createElement,
    getStorage,
    setStorage,
    formatCurrency,
    debounce,
    showAlert,
    clearFormErrors
};

// Disponibilizar funcoes mais usadas globalmente
window.$ = $;
window.$$ = $$;
window.showAlert = showAlert;
window.toggleClass = toggleClass;
