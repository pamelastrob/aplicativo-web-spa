# 🧪 Como Testar o Projeto

## ⚠️ IMPORTANTE: Usar Servidor Local

Este projeto usa **módulos ES6**, então **não pode** ser aberto diretamente (duplo clique). Você DEVE usar um servidor local.

## 🚀 Opções de Servidor Local

### Opção 1: Usando Python (Recomendado - Mais Simples)

```bash
# Python 3
python3 -m http.server 8000

# Acesse: http://localhost:8000
```

### Opção 2: Usando Node.js

```bash
# Instalar http-server globalmente
npm install -g http-server

# Executar
http-server

# Acesse o endereço mostrado (geralmente http://localhost:8080)
```

### Opção 3: Usando PHP

```bash
php -S localhost:8000
```

### Opção 4: VS Code Live Server

1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## ✅ Checklist de Testes

### 1. Teste do SPA (Single Page Application)

- [ ] Abra a aplicação no navegador
- [ ] Verifique se a página inicial carrega
- [ ] Clique em "Sobre" - a página deve mudar sem recarregar
- [ ] Clique em "Contato" - navegação deve funcionar suavemente
- [ ] Clique em "Cadastro" - deve navegar normalmente
- [ ] Clique em "Produtos" - deve carregar a grade de produtos
- [ ] Navegue entre as páginas clicando no menu
- [ ] **Verificação:** A URL deve mudar (#/sobre, #/contato, etc) mas a página NÃO recarrega

### 2. Teste de Validação de Formulários

#### Formulário de Contato

- [ ] Vá para a página "Contato"
- [ ] Deixe os campos vazios e clique em "Enviar"
- [ ] Deve mostrar erros para todos os campos obrigatórios
- [ ] Preencha o nome com menos de 3 caracteres
- [ ] Deve mostrar erro: "Nome deve ter pelo menos 3 caracteres"
- [ ] Preencha email inválido (ex: "teste@")
- [ ] Deve mostrar erro: "E-mail inválido"
- [ ] Preencha telefone com menos de 10 dígitos
- [ ] Deve mostrar erro: "Telefone deve ter 10 ou 11 dígitos"
- [ ] Deixe mensagem com menos de 10 caracteres
- [ ] Deve mostrar erro: "Mensagem deve ter pelo menos 10 caracteres"
- [ ] Preencha todos os campos corretamente
- [ ] Clique em "Enviar"
- [ ] Deve mostrar mensagem de sucesso 🎉

#### Formulário de Cadastro

- [ ] Vá para a página "Cadastro"
- [ ] Tente enviar formulário vazio
- [ ] Deve mostrar múltiplos erros
- [ ] Teste campo CPF:
  - [ ] Digite "12345678901" - deve formatar para "123.456.789-01"
  - [ ] Digite CPF inválido (todos dígitos iguais) - deve mostrar erro
  - [ ] Digite CPF inválido (dígitos verificadores errados) - deve mostrar erro
- [ ] Teste campo Telefone:
  - [ ] Digite números e veja a máscara aplicada: (XX) XXXXX-XXXX
- [ ] Teste campo Senha:
  - [ ] Digite senha sem maiúscula - erro
  - [ ] Digite senha sem minúscula - erro
  - [ ] Digite senha sem número - erro
  - [ ] Digite senha com menos de 6 caracteres - erro
- [ ] Teste confirmação de senha:
  - [ ] Digite senhas diferentes - deve mostrar erro
- [ ] Preencha todos os campos corretamente
- [ ] Envie o formulário
- [ ] Deve mostrar mensagem de sucesso e limpar o formulário

### 3. Teste de Interface Responsiva

- [ ] Redimensione a janela do navegador
- [ ] Em telas pequenas (mobile), o menu deve virar hambúrguer
- [ ] Clique no hambúrguer - menu deve aparecer
- [ ] Clique em um item do menu - menu deve fechar
- [ ] Cards devem reorganizar automaticamente

### 4. Teste de Interatividade

- [ ] Passe o mouse sobre os cards na home - deve haver animação
- [ ] Passe o mouse sobre os links do menu - devem mudar de cor
- [ ] Clique nos botões de "Comprar" na página de produtos
- [ ] Deve aparecer um alerta "Produto adicionado ao carrinho!"

### 5. Teste de Armazenamento Local

- [ ] Abra o console do navegador (F12)
- [ ] Vá em "Application" > "Local Storage"
- [ ] Deve haver dados como "visitas" e "ultimaVisita"
- [ ] Recarregue a página
- [ ] O contador de visitas deve incrementar

## 🐛 Possíveis Problemas

### Erro: "Cannot use import statement outside a module"

**Causa:** Abrindo o arquivo HTML diretamente no navegador.

**Solução:** Use um servidor local (veja opções acima).

### Erro: "Failed to load module"

**Causa:** Caminhos dos arquivos estão incorretos.

**Solução:** Certifique-se de que a estrutura de pastas está correta:
```
.
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── app.js
    ├── router.js
    ├── templates.js
    ├── utils.js
    └── validators.js
```

### CSS não está aplicando

**Solução:** Verifique se o arquivo `css/styles.css` existe e se o caminho no HTML está correto.

### Formulários não validam

**Solução:** Verifique se todos os arquivos JavaScript estão carregando corretamente. Abra o console (F12) e verifique se há erros.

## 📊 Resultado Esperado

Quando tudo estiver funcionando corretamente:

1. ✅ Navegação fluida entre páginas sem recarregar
2. ✅ Formulários validam em tempo real
3. ✅ Mensagens de erro aparecem e desaparecem automaticamente
4. ✅ Interface responsiva e bonita
5. ✅ Animações suaves
6. ✅ Alertas aparecem ao clicar em botões

## 🎯 Funcionalidades para Demonstração

- **SPA:** Demonstre navegando entre páginas e mostre que a URL muda mas a página não recarrega
- **Validação:** Preencha formulários incorretamente e mostre os erros em tempo real
- **Templates:** Explique que cada página é renderizada dinamicamente via JavaScript
- **Responsividade:** Redimensione a janela e mostre o menu hambúrguer
- **Interatividade:** Mostre as animações e hover effects

---

## 📝 Notas Importantes

- Use um navegador moderno (Chrome, Firefox, Safari, Edge)
- Certifique-se de que JavaScript está habilitado
- O projeto não requer instalação de dependências
- Todos os dados são armazenados localmente (não há backend)

---

**Boa sorte na apresentação!** 🚀
