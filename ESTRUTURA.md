# 📂 Estrutura do Projeto

## Organização de Pastas

```
Trabalho3/
│
├── index.html              # Arquivo principal HTML
├── README.md               # Documentação completa do projeto
├── ESTRUTURA.md            # Este arquivo
├── .gitignore             # Arquivos ignorados pelo Git
├── .gitattributes         # Configuração UTF-8
│
├── css/
│   └── styles.css         # Estilos da aplicação (CSS moderno)
│
├── js/
│   ├── app.js             # Main - Inicializa a aplicação
│   ├── router.js          # Sistema de roteamento SPA
│   ├── templates.js       # Templates das páginas
│   ├── validators.js      # Validação de formulários
│   └── utils.js           # Funções utilitárias
│
└── images/                # Diretório para imagens
```

## 📝 Descrição dos Arquivos

### HTML (`index.html`)
- Estrutura semântica
- Menu de navegação responsivo
- Área de conteúdo dinâmico para SPA
- Footer

### CSS (`css/styles.css`)
- Design moderno com gradientes
- Layout responsivo (desktop, tablet, mobile)
- Animações e transições
- Variáveis CSS para cores
- Menu hambúrguer para mobile

### JavaScript Modular

#### `js/app.js`
- **Função:** Arquivo principal de inicialização
- **Responsabilidades:**
  - Inicializar o SPA quando o DOM estiver pronto
  - Configurar menu mobile (hambúrguer)
  - Adicionar animações CSS dinamicamente
  - Demonstrar uso do LocalStorage

#### `js/router.js`
- **Função:** Sistema de roteamento SPA
- **Responsabilidades:**
  - Gerenciar rotas e navegação
  - Renderizar páginas dinamicamente
  - Configurar funcionalidades específicas de cada página
  - Máscaras de telefone e CPF

#### `js/templates.js`
- **Função:** Templates HTML das páginas
- **Responsabilidades:**
  - Define templates para cada rota
  - Template da Home
  - Template da página Sobre
  - Template do formulário de Contato
  - Template do formulário de Cadastro
  - Template da página de Produtos

#### `js/validators.js`
- **Função:** Sistema de validação de formulários
- **Responsabilidades:**
  - Validação de nome, email, telefone
  - Validação de CPF com dígitos verificadores
  - Validação de senha (maiúscula, minúscula, número)
  - Validação de confirmação de senha
  - Validação de mensagem
  - Exibir erros em tempo real
  - Limpar erros ao corrigir

#### `js/utils.js`
- **Função:** Funções auxiliares
- **Responsabilidades:**
  - Manipulação do DOM (seleção, criação, classes)
  - LocalStorage (salvar e recuperar dados)
  - Formatação (moeda, etc)
  - Debounce para eventos
  - Alertas estilizados
  - Limpar erros de formulários

## 🎯 Funcionalidades por Página

### 🏠 Home (`/`)
- Hero section com call-to-action
- Grid de cards com recursos
- Seis cards explicando funcionalidades

### 📄 Sobre (`/sobre`)
- Informações sobre o projeto
- Lista de conceitos implementados
- Tecnologias utilizadas

### 📧 Contato (`/contato`)
- **Formulário com validação:**
  - Nome (obrigatório, min 3 caracteres)
  - Email (formato válido)
  - Telefone (10 ou 11 dígitos)
  - Assunto (obrigatório, select)
  - Mensagem (min 10, max 500 caracteres)
- Mensagem de sucesso após envio

### 👤 Cadastro (`/cadastro`)
- **Formulário com validação completa:**
  - Nome (obrigatório)
  - Email (formato válido)
  - CPF (com validação de dígitos verificadores + máscara)
  - Telefone (com máscara)
  - Senha (min 6, maiúscula, minúscula, número)
  - Confirmar senha (deve coincidir)
- Mensagem de sucesso após cadastro

### 🛍️ Produtos (`/produtos`)
- Grid de produtos com cards
- 8 produtos de exemplo
- Botões de compra interativos
- Emojis visuais para cada produto

## 🔧 Como Funciona o SPA

1. **Carregamento Inicial:**
   - `index.html` carrega
   - `app.js` é importado como módulo
   - App inicializa e chama `router.init()`

2. **Navegação:**
   - Usuário clica em um link
   - Router detecta mudança na hash (#/)
   - Renderiza template correspondente
   - Atualiza área de conteúdo sem recarregar

3. **Validação:**
   - Quando formulários são criados
   - Validação em tempo real (on blur)
   - Feedback visual imediato
   - Validação completa no submit

## 📊 Especificações Técnicas

### Requisitos Cumpridos ✅

1. **Manipulação do DOM**
   - ✅ Criação dinâmica de elementos
   - ✅ Modificação de estilos
   - ✅ Adição/remoção de classes
   - ✅ Event listeners

2. **SPA (Single Page Application)**
   - ✅ Sistema de roteamento com hash
   - ✅ Navegação sem recarregar
   - ✅ Renderização dinâmica

3. **Sistema de Templates**
   - ✅ Templates JavaScript modulares
   - ✅ Renderização via templates
   - ✅ Funções de renderização

4. **Validação de Formulários**
   - ✅ Validação em tempo real
   - ✅ Avisos ao usuário
   - ✅ Mensagens de erro específicas
   - ✅ Limpeza automática de erros

5. **JavaScript Modular**
   - ✅ Código organizado em módulos
   - ✅ Separação de responsabilidades
   - ✅ Estrutura de pastas organizada

## 🚀 Pronto para Entrega

O projeto está completo e pronto para ser enviado ao GitHub. Todas as especificações da tarefa foram implementadas:

- ✅ Estrutura de pastas organizada
- ✅ HTML, CSS e JS organizados
- ✅ Código modular por funcionalidade
- ✅ Validação de formulários funcional
- ✅ SPA básico implementado
- ✅ Templates JavaScript funcionando

## 📤 Como Publicar no GitHub

1. Crie um novo repositório no GitHub
2. Configure como repositório público
3. Faça upload dos arquivos
4. Compartilhe o link na entrega

```bash
git init
git add .
git commit -m "Entrega - Experiência Prática III"
git branch -M main
git remote add origin [SEU_URL_DO_GITHUB]
git push -u origin main
```
