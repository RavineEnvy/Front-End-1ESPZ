# MiniFeed — versão dos alunos

Laboratório da disciplina de **Front-End Design**. O projeto começa com **três posts em JSX repetido de propósito**. A tarefa é aprender a criar um componente reutilizável (`PostCard`) e passar informações usando `props`.

## Requisitos

- **Node.js 18 ou superior** (recomendado Node.js 20 ou 22) e npm.
- VS Code e um navegador atualizado.

## Iniciar o projeto

Abra o terminal **dentro desta pasta**, onde está o `package.json`:

```bash
node -v
npm install
npm run dev
```

Abra o endereço local informado no terminal (por exemplo, `http://localhost:5173/`). Não abra o arquivo `index.html` diretamente no navegador.

## O que já está pronto?

- Vite configurado com o **plugin oficial do React** em `vite.config.js`.
- React inicializado em `src/main.jsx`.
- Três publicações no `src/App.jsx`, com código repetido de propósito.
- Estilos em `src/styles.css`, incluindo responsividade.
- Um componente de demonstração simples: `src/components/EtiquetaAula.jsx`, importado em `App.jsx`.

## Atividade

1. Observe as estruturas repetidas dentro de `App.jsx`.
2. Crie seu próprio arquivo `src/components/PostCard.jsx`.
3. Transforme a estrutura de post em um componente que receba props.
4. Faça o `App.jsx` utilizar o novo componente para exibir as três publicações.
5. Verifique o resultado no desktop e no mobile.

**Atenção:** a resolução não está incluída nesta pasta. O botão de curtir é propositalmente estático.

## Quando aparece uma tela branca

1. Veja se o terminal mostra erro depois de `npm run dev`.
2. Abra **F12 → Console** no navegador e leia o erro em vermelho.
3. Confira o nome do arquivo e a capitalização: `PostCard.jsx` é diferente de `postcard.jsx`.
4. Confira o caminho: `import PostCard from './components/PostCard.jsx';` (se o import estiver em `src/App.jsx`).
5. Confira se o componente foi exportado com `export default` e usado com `<PostCard />`.
6. Verifique se fechou as tags JSX e se o `return` devolve um único elemento raiz.

Para validar a configuração antes de enviar para o GitHub:

```bash
npm run build
```

Se o Vite já estava ligado quando você instalou dependências ou mudou `vite.config.js`, pare com **Ctrl+C** e execute `npm run dev` novamente.
