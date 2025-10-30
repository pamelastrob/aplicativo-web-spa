# Aplicativo Web Interativo - SPA

Aplicacao web desenvolvida como projeto academico para demonstrar conceitos de JavaScript, incluindo Single Page Application (SPA), manipulacao do DOM, sistema de templates e validacao de formularios.

## Descricao

Este projeto implementa uma Single Page Application (SPA), onde toda a navegacao ocorre sem recarregar a pagina. O aplicativo demonstra:

- Sistema de roteamento para navegacao entre paginas
- Templates JavaScript para renderizacao dinamica
- Validacao de formularios em tempo real
- Manipulacao do DOM
- Armazenamento local com LocalStorage
- Interface responsiva

## Recursos Implementados

### 1. Single Page Application (SPA)
- Sistema de roteamento com hash para navegacao
- Navegacao sem recarregar a pagina
- Gerenciamento de rotas e renderizacao dinamica

### 2. Sistema de Templates JavaScript
- Templates para cada pagina
- Renderizacao dinamica de conteudo
- Reutilizacao de componentes

### 3. Validacao de Formularios
- Validacao em tempo real com feedback
- Mensagens de erro personalizadas
- Validacoes especificas:
  - Nome: Minimo 3 caracteres, apenas letras
  - E-mail: Formato valido
  - Telefone: 10 ou 11 digitos
  - CPF: Validacao completa com digitos verificadores
  - Senha: Minimo 6 caracteres, letra maiuscula, minuscula e numero
  - Confirmar Senha: Deve coincidir com a senha
  - Mensagem: Minimo 10 caracteres, maximo 500

### 4. Paginas Disponiveis
- Home: Pagina inicial com visao geral do projeto
- Sobre: Informacoes sobre o projeto e tecnologias
- Contato: Formulario de contato com validacao
- Cadastro: Formulario de cadastro com mascaras
- Produtos: Lista de produtos com interatividade

## Estrutura do Projeto

```
Trabalho3/
│
├── index.html          # Arquivo HTML principal
│
├── css/
│   └── styles.css      # Estilos da aplicacao
│
├── js/
│   ├── app.js          # Arquivo principal
│   ├── router.js       # Sistema de roteamento SPA
│   ├── templates.js    # Templates das paginas
│   ├── validators.js   # Sistema de validacao
│   └── utils.js        # Funcoes utilitarias
│
├── README.md           # Documentacao do projeto
│
└── images/             # Diretorio para imagens
```

## Como Usar

### Opcao 1: Abrir Localmente

1. Clone ou baixe este repositorio
2. Abra o arquivo index.html em um navegador moderno
3. Use um servidor local (Live Server, VS Code) devido ao uso de modulos ES6

### Opcao 2: Servidor Local

```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx http-server

# Com PHP
php -S localhost:8000
```

Depois acesse: http://localhost:8000

## Tecnologias Utilizadas

- HTML5: Estrutura semantica
- CSS3: Estilizacao com Flexbox/Grid e variaveis CSS
- JavaScript ES6: 
  - Modulos ES6
  - Arrow Functions
  - Template Literals
  - Classes
- LocalStorage API: Armazenamento de dados no navegador

## Funcionalidades Detalhadas

### Sistema de Validacao

O sistema de validacao verifica os dados em tempo real:

1. Ao focar/sair do campo (blur): Valida o campo especifico
2. Ao digitar (input): Remove erros visuais
3. Ao submeter (submit): Valida todo o formulario

### Exemplos de Validacoes

#### E-mail
- Verifica formato valido (exemplo@dominio.com)

#### CPF
- Valida formato (XXX.XXX.XXX-XX)
- Verifica digitos verificadores

#### Senha
- Minimo 6 caracteres
- Deve conter letra maiuscula
- Deve conter letra minuscula
- Deve conter numero

#### Telefone
- Formato com mascara (XX) XXXXX-XXXX
- 10 ou 11 digitos

## Interface

- Design responsivo
- Menu hamburguer para mobile
- Feedback visual em formularios
- Mensagens de alerta estilizadas

## Responsividade

A aplicacao funciona em:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (ate 767px)

## Configuracoes

### Navegador Recomendado
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Funcionalidades Necessarias
- Suporte a JavaScript ES6
- LocalStorage habilitado
- CSS Grid e Flexbox

## Desenvolvimento

### Estrutura Modular

Cada arquivo JavaScript tem uma responsabilidade especifica:

- app.js: Inicializa a aplicacao e configura eventos
- router.js: Gerencia o sistema de roteamento SPA
- templates.js: Define os templates HTML de cada pagina
- validators.js: Implementa as regras de validacao
- utils.js: Funcoes auxiliares reutilizaveis

### Adicionar Nova Pagina

1. Adicione o template em templates.js
2. Configure a rota em router.js
3. Adicione o link no menu em index.html

## Funcionalidades de Demonstracao

### Armazenamento Local
- Contador de visitas
- Ultima visita registrada
- Persistencia de preferencias

### Interatividade
- Botoes com feedback visual
- Animacoes em cards
- Hover effects

## Conceitos Academicos Demonstrados

1. Manipulacao do DOM - Criacao e modificacao dinamica de elementos
2. Event Listeners - Captura e tratamento de eventos
3. Template Literals - Construcao de HTML dinamicamente
4. LocalStorage API - Armazenamento de dados
5. SPA Architecture - Roteamento e navegacao sem recarregar
6. Form Validation - Validacao de dados do cliente
7. Responsive Design - Layout adaptavel

## Licenca

Este projeto foi desenvolvido para fins academicos.

---

Desenvolvido para o curso de Programacao para Interfaces Web
