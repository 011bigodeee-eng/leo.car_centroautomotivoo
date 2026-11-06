# Leo Car — Centro Automotivo

Landing page em português, criada em Next.js, React e TypeScript. Prévia comercial: ainda não publicada.

## Desenvolvimento

Requisitos: Node.js 22 ou 24 e npm. Não há backend, banco de dados ou credenciais necessários.

```sh
npm ci --cache /tmp/leo-npm-cache
npm run dev
```

A aplicação utiliza a porta 3000. Para produção local:

```sh
npm run build
npm run start
```

O ambiente de nuvem já é isolado: use o checkout existente em `/workspace/leo.car_centroautomotivoo`; não é necessário criar um worktree.

## Validação

```sh
npm run typecheck
npm run build
npm test
```

Os testes Playwright usam Chromium em `/usr/bin/chromium` quando disponível. Em outra máquina, instale o navegador com `npx playwright install chromium`, ou informe `CHROMIUM_PATH`. A suíte inicia um servidor de produção quando necessário; execute o build antes.

Há verificações de layout em 320, 375, 390, 430, 768, 1024, 1440 e 1920 px, seleção dos oito serviços, navegação por teclado, formulário obrigatório e mensagem completa de WhatsApp, lightbox, menu mobile, movimento reduzido e destinos dos links. Os testes interceptam `window.open` no formulário: não enviam mensagens nem contatam a empresa.

## Conteúdo e identidade

- Dados empresariais, destinos e serviços: `src/lib/content.ts`.
- Interface: `src/components/Landing.tsx`.
- Estilos e animações responsivas: `src/app/globals.css`.
- Metadados: `src/app/layout.tsx`.
- Fotografias: `public/images/premium/`, todas em WebP e identificadas como ilustrativas.
- Fontes locais: Barlow Condensed e Manrope, licenciadas sob SIL Open Font License; licenças em `src/app/fonts/`.
- A assinatura tipográfica Leo Car é uma proposta visual para esta prévia, não uma reprodução de um logotipo oficial verificado.

O formulário valida os dados no navegador e abre `wa.me` com a mensagem preenchida. O visitante confirma o envio no WhatsApp. Nenhum dado é enviado para um backend ou armazenado pelo site. Nome, modelo, serviço e descrição são obrigatórios; ano é opcional.

## Pendências antes da publicação

1. Confirmar telefone, endereço e horários com a empresa. Os dados atuais vieram exclusivamente do briefing. Site original e Instagram retornaram HTTP 403 do proxy durante esta implementação, portanto não foi possível confirmar as fontes nem obter fotos reais.
2. Substituir as imagens ilustrativas da seção sobre e da galeria por fotografias autorizadas da empresa. Todas as imagens atuais foram geradas por IA especificamente para o projeto; nenhuma é apresentada como registro real de trabalho da Leo Car.
3. Aprovar a proposta de assinatura visual e fornecer o logotipo oficial, se houver.
4. Confirmar a história de Leonardo e o tempo de atuação antes de acrescentar esses dados. Não foram incluídos números, depoimentos, certificações ou garantias não verificadas.
5. Configurar `NEXT_PUBLIC_SITE_URL` com o domínio final antes do build. O padrão atual é o endereço de site informado no briefing (`https://leocar.pages.dev`), usado apenas como base de imagens Open Graph. O domínio final de publicação ainda precisa ser validado.
6. Após aprovação do conteúdo, mudar `robots` de `noindex` para indexação em `layout.tsx` e adicionar dados estruturados LocalBusiness somente com dados confirmados.
7. Validar o mapa, Instagram, rotas e a abertura do aplicativo WhatsApp em um dispositivo com acesso a esses destinos. O ambiente restringe Google Maps e Instagram; o mapa interativo é carregado sob demanda e há um link de localização independente do iframe.
8. Medir Core Web Vitals no domínio publicado. As metas do briefing não são resultados medidos nem garantidos.

## Imagens

Todas as 11 imagens foram geradas individualmente por IA e exportadas para WebP com qualidade 94, preservando sua resolução nativa e sem ampliação artificial. Hero desktop: 1672 × 941 px; hero mobile: 1122 × 1402 px. Serviços e ambiente: 1536 × 1024 ou 1672 × 941 px, substituindo os antigos recortes de 483 px. A hero desktop possui cerca de 263 KB e a mobile, 241 KB. O conjunto completo possui aproximadamente 3,6 MB e as imagens fora da hero usam carregamento lazy. O otimizador Next.js está configurado para qualidade 90. O caminho `public/images/premium/` evita reutilizar o cache das imagens anteriores. Todas ficam no projeto: não existe dependência de um banco externo de fotografias.

As imagens de conceito podem permanecer nas campanhas somente com identificação adequada. A galeria institucional final deve receber registros reais, com revisão dos textos que hoje explicam a prévia.
