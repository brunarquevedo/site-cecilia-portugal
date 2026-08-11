# 🔖 Placeholders & TODO Items

Este arquivo lista todos os placeholders (`TODO`) que precisam ser substituídos antes do lançamento.

---

## 📍 Placeholders em arquivos HTML

### `index.html` (Home)

#### Seção: Primary CTA (links)
- **Linha ~125**: `href="#primary-cta"` → Link do WhatsApp/Agendamento
  - Atual: `TODO: https://wa.me/55XXXXX or https://booking-platform.com`
  - Substitua por: URL real do WhatsApp ou plataforma de agendamento
  - Exemplo: `https://wa.me/5585988776655` ou `https://calendly.com/dra-cecilia/30min`

- **Linha ~750**: Header CTA
  - Atual: `href="#primary-cta"`
  - Permanece igual (âncora interna)

#### Seção: Footer - Instagram (opcional)
- **Linha ~1050**: Instagram link
  - Atual: `TODO: https://instagram.com/HANDLE`
  - Substitua por: URL real do perfil Instagram
  - Exemplo: `https://instagram.com/dra.cecilia.portugal`
  - Remova `style="display: none"` para mostrar o ícone

---

### `contato.html` (Contact Page)
- **Primary CTA heading link**: Mesmo placeholder do index.html
- **WhatsApp/Booking CTA**: Mesmo placeholder do index.html

---

### Todas as páginas (HTML)

#### Favicon e Apple Icon
- **Linha ~21**: `href="TODO: favicon.svg"`
  - Substitua por: `href="assets/favicon.ico"`

- **Linha ~22**: `href="TODO: apple-touch-icon.png"`
  - Substitua por: `href="assets/apple-touch-icon.png"`

---

## 📧 Placeholders em PHP

### `api/contact.php`

#### Email destinatário
- **Linha ~104**: `$to = 'TODO: contact@example.com';`
  - Substitua por: Email real para recebimento de mensagens
  - Exemplo: `$to = 'contato@draceciliaportugal.com.br';`

#### CORS - Domínio permitido (quando deployado)
- **Linhas ~27-32**: Array `$allowed_origins`
  ```php
  // Adicione seu domínio aqui:
  // 'https://www.TODO-DOMAIN.com',
  // 'https://TODO-DOMAIN.com'
  ```
  - Substitua com seu domínio real
  - Exemplo:
    ```php
    'https://www.draceciliaportugal.com.br',
    'https://draceciliaportugal.com.br'
    ```

---

## 🖼️ Imagens faltando

### `images/` directory

- [ ] **`foto-cecilia-1.jpeg`**
  - Dimensão recomendada: 4:5 aspect ratio (ex: 400×500px)
  - Qualidade: Web-optimized (60-70 KB)
  - Conteúdo: Foto profissional da Dra. Cecília

- [ ] **`livro-capa.png`** (opcional, quando o livro estiver disponível)
  - Dimensão recomendada: 3:4 aspect ratio (ex: 300×400px)
  - Qualidade: Web-optimized (80-100 KB)
  - Conteúdo: Capa do livro "Memórias de uma ex-futura fumante"

### `assets/` directory

- [ ] **`logo.svg`**
  - Formato: SVG escalável
  - Conteúdo: Logo principal (mãos fazendo crochê de coração + nome)
  - Usar arquivo fornecido ou converter JPEG para SVG

- [ ] **`logo-crm.svg`**
  - Formato: SVG escalável
  - Conteúdo: Logo com títulos profissionais

- [ ] **`logo-crm-tagline.svg`**
  - Formato: SVG escalável
  - Conteúdo: Logo com tagline "Ajudo pessoas a se libertarem do cigarro"

- [ ] **`favicon.ico`**
  - Dimensão: 32×32px ou 64×64px
  - Formato: ICO ou PNG
  - Conteúdo: Versão pequena do logo

- [ ] **`apple-touch-icon.png`**
  - Dimensão: 180×180px
  - Formato: PNG
  - Conteúdo: Versão redonda do logo para iOS home screen

---

## 📝 Textos e links

### `robots.txt`
- **Linha ~8**: `Sitemap: https://TODO-DOMAIN-HERE.com/sitemap.xml`
  - Substitua por: URL real do seu domínio
  - Exemplo: `Sitemap: https://www.draceciliaportugal.com.br/sitemap.xml`

### `politica-de-privacidade.html` (quando criado)
- Email de contato da controladora de dados
- Endereço comercial
- CPF/CNPJ (se necessário conforme LGPD)

---

## 🔗 Links internos (podem permanecer iguais)

Estes já estão corretos e NÃO precisam ser alterados:

- `href="/"` - Página inicial
- `href="sobre.html"` - Sobre
- `href="acompanhamento.html"` - Acompanhamento
- `href="livro.html"` - Livro
- `href="contato.html"` - Contato
- `href="politica-de-privacidade.html"` - Política
- `href="#primary-cta"` - Âncora interna para CTA

---

## ✅ Checklist de preenchimento

### Antes de qualquer teste
- [ ] Crie/otimize imagens em `images/`
- [ ] Crie/converta logos em `assets/`
- [ ] Crie favicon e apple-touch-icon

### Antes de deployment local
- [ ] Substitua email em `api/contact.php`
- [ ] Substitua URL de agendamento/WhatsApp em HTML

### Antes de deployment em produção (Hostinger)
- [ ] Upload de todas as imagens e assets
- [ ] Substitua domínio em `robots.txt`
- [ ] Substitua domínio em CORS allowlist (`api/contact.php`)
- [ ] Atualize política de privacidade com dados reais
- [ ] Teste formulário de contato
- [ ] Teste links (especialmente WhatsApp/agendamento)
- [ ] Teste Instagram link (se configurado)

### Opcional (melhorias futuras)
- [ ] Substitua `display: none` no Instagram para mostrar ícone
- [ ] Quando livro estiver disponível, substitua placeholder por `livro-capa.png`
- [ ] Adicione Google Analytics (quando decidir rastrear)

---

## 🎯 Exemplo de substituição

### ANTES (com placeholders):
```html
<a href="TODO: https://wa.me/55XXXXX or https://booking-platform.com"
   class="btn btn-primary">
  Agende um bate-papo
</a>
```

### DEPOIS (preenchido):
```html
<a href="https://wa.me/5585988776655?text=Gostaria%20de%20agendar%20um%20bate-papo"
   class="btn btn-primary"
   target="_blank"
   rel="noopener noreferrer">
  Agende um bate-papo
</a>
```

---

## 📞 Valores a preparar com a cliente

Antes de preencher os placeholders, confirme com Dra. Cecília Portugal:

1. **WhatsApp / URL de agendamento**
   - Número de WhatsApp (com código de país, ex: 55)
   - OU URL de plataforma de agendamento (Calendly, Typeform, etc)

2. **E-mail para contato**
   - E-mail que receberá as mensagens do formulário

3. **Perfil Instagram** (opcional)
   - Username ou URL completa

4. **Logo em SVG**
   - Arquivo do logo em SVG (ou JPEG para converter)

5. **Fotos**
   - Foto profissional (4:5)
   - Foto do livro (3:4) quando disponível

6. **Política de Privacidade**
   - E-mail de contato para requisições LGPD
   - Endereço comercial
   - Informações de CNPJ/CPF (se aplicável)

---

**Status**: Em construção ⚙️
**Última atualização**: 28 de julho, 2026
