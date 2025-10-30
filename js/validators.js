/**
 * Sistema de Validação de Formulários
 * Validação em tempo real com feedback ao usuário
 */

import { showAlert, $ } from './utils.js';

// Regras de validação
const validators = {
    // Validação de nome
    name: (value) => {
        if (!value || value.trim().length < 3) {
            return 'Nome deve ter pelo menos 3 caracteres';
        }
        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) {
            return 'Nome deve conter apenas letras';
        }
        return null;
    },
    
    // Validação de email
    email: (value) => {
        if (!value) {
            return 'E-mail é obrigatório';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return 'E-mail inválido';
        }
        return null;
    },
    
    // Validação de telefone
    phone: (value) => {
        if (!value) {
            return 'Telefone é obrigatório';
        }
        // Remove caracteres não numéricos
        const phoneNumber = value.replace(/\D/g, '');
        if (phoneNumber.length < 10 || phoneNumber.length > 11) {
            return 'Telefone deve ter 10 ou 11 dígitos';
        }
        return null;
    },
    
    // Validação de CPF
    cpf: (value) => {
        if (!value) {
            return 'CPF é obrigatório';
        }
        // Remove caracteres não numéricos
        const cpfNumber = value.replace(/\D/g, '');
        if (cpfNumber.length !== 11) {
            return 'CPF deve ter 11 dígitos';
        }
        
        // Validação de CPF
        if (/^(\d)\1{10}$/.test(cpfNumber)) {
            return 'CPF inválido';
        }
        
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpfNumber.charAt(i)) * (10 - i);
        }
        let checkDigit = 11 - (sum % 11);
        if (checkDigit >= 10) checkDigit = 0;
        if (checkDigit !== parseInt(cpfNumber.charAt(9))) {
            return 'CPF inválido';
        }
        
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpfNumber.charAt(i)) * (11 - i);
        }
        checkDigit = 11 - (sum % 11);
        if (checkDigit >= 10) checkDigit = 0;
        if (checkDigit !== parseInt(cpfNumber.charAt(10))) {
            return 'CPF inválido';
        }
        
        return null;
    },
    
    // Validação de senha
    password: (value) => {
        if (!value) {
            return 'Senha é obrigatória';
        }
        if (value.length < 6) {
            return 'Senha deve ter pelo menos 6 caracteres';
        }
        if (!/(?=.*[A-Z])/.test(value)) {
            return 'Senha deve conter pelo menos uma letra maiúscula';
        }
        if (!/(?=.*[a-z])/.test(value)) {
            return 'Senha deve conter pelo menos uma letra minúscula';
        }
        if (!/(?=.*\d)/.test(value)) {
            return 'Senha deve conter pelo menos um número';
        }
        return null;
    },
    
    // Validação de confirmação de senha
    confirmPassword: (value, form) => {
        const password = form.querySelector('[name="password"]');
        if (!password) return null;
        if (value !== password.value) {
            return 'Senhas não coincidem';
        }
        return null;
    },
    
    // Validação de mensagem
    message: (value) => {
        if (!value || value.trim().length < 10) {
            return 'Mensagem deve ter pelo menos 10 caracteres';
        }
        if (value.length > 500) {
            return 'Mensagem não pode exceder 500 caracteres';
        }
        return null;
    },
    
    // Validação de assunto
    subject: (value) => {
        if (!value) {
            return 'Assunto é obrigatório';
        }
        return null;
    },
    
    // Validação genérica de obrigatório
    required: (value, fieldName) => {
        if (!value || value.trim().length === 0) {
            return `${fieldName} é obrigatório`;
        }
        return null;
    }
};

// Função para exibir erro em um campo
const showFieldError = (inputElement, errorElement, message) => {
    inputElement.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
};

// Função para remover erro de um campo
const clearFieldError = (inputElement, errorElement) => {
    inputElement.classList.remove('error');
    errorElement.classList.remove('show');
    errorElement.textContent = '';
};

// Função para validar um campo específico
const validateField = (inputElement, fieldName) => {
    const value = inputElement.value;
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    let error = null;
    
    // Executa validação específica para o campo
    if (validators[fieldName]) {
        error = validators[fieldName](value, inputElement.closest('form'));
    } else if (inputElement.required) {
        error = validators.required(value, fieldName);
    }
    
    if (error) {
        showFieldError(inputElement, errorElement, error);
        return false;
    } else {
        clearFieldError(inputElement, errorElement);
        return true;
    }
};

// Configurar validação em tempo real para um formulário
const setupFormValidation = (formElement) => {
    const inputs = formElement.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Validação em tempo real ao sair do campo
        input.addEventListener('blur', () => {
            const fieldName = input.name;
            validateField(input, fieldName);
        });
        
        // Remover erro ao começar a digitar
        input.addEventListener('input', () => {
            const errorElement = document.getElementById(`${input.name}-error`);
            if (errorElement && errorElement.classList.contains('show')) {
                clearFieldError(input, errorElement);
            }
        });
    });
    
    // Validação completa no submit
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        inputs.forEach(input => {
            const fieldName = input.name;
            if (!validateField(input, fieldName)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            // Formulário válido - processar dados
            const formData = new FormData(formElement);
            const data = Object.fromEntries(formData);
            
            // Exibir mensagem de sucesso
            const successMessage = formElement.parentElement.querySelector('.success-message');
            if (successMessage) {
                successMessage.classList.add('show');
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
            }
            
            // Limpar formulário
            formElement.reset();
            
            // Mostrar alerta
            showAlert('Formulário enviado com sucesso!', 'success');
            
            console.log('Dados do formulário:', data);
            
            // Aqui você pode fazer uma requisição AJAX para enviar os dados
            // fetch('/api/endpoint', { method: 'POST', body: JSON.stringify(data) })
        } else {
            // Mostrar alerta de erro
            showAlert('Por favor, corrija os erros no formulário', 'error');
        }
    });
};

export { validateField, setupFormValidation, validators };
