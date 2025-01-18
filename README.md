# OneBitFlix

## Descrição

**OneBitFlix** é uma plataforma de streaming focada em cursos de programação, desenvolvida para proporcionar uma experiência intuitiva tanto para os usuários finais quanto para os administradores.

Os alunos podem explorar os cursos por meio de uma interface agradável e moderna.

A administração de cursos e episódios é facilitada pelo **AdminJS**, permitindo uma gestão eficiente e sem complicações.

---

## Funcionalidades Principais

- **Página Home (não logada):** Interface inicial para visitantes, destacando informações sobre a plataforma.
- **Página Home (logada):** Experiência personalizada com acesso aos cursos disponíveis. Em cada categoria, há uma seção de slides com todos os seus cursos.
- **Página de Registro:** Cadastro de novos usuários.
- **Página de Login:** Autenticação de usuários existentes.
- **Perfil do Usuário:** Gerenciamento de informações pessoais.
- **Página de Pesquisa:** Exibição de resultados baseados em pesquisas na barra de pesquisa.
- **Página de Curso:** Visualização detalhada de um curso com seus episódios listados.
- **Página do Episódio:** Player de vídeo para assistir aos episódios selecionados.

---
## Outras Funcionalidades

- Todas as rotas são **autenticadas**. Dessa maneira, mesmo por meio de um link de uma parte interna da aplicação, uma pessoa só consegue acessar a plataforma se estiver logado.
- A página de **registro** possui máscara para o input de telefone e verificação para a senha/confirmação.
- Na página de **perfil do usuário**, a alteração de senha conta com toda a lógica necessária para ser feita de maneira adequada. Além disso, o input de telefone também tem sua máscara.
- Na página do **curso**, o botão "ASSISTIR AGORA" leva o usuário diretamente para o último episódio iniciado.
- Ainda no **curso**, o aluno pode curtir e/ou favoritar (adicionar à "Minha Lista") um episódio.
- Ao abrir um **episódio** e iniciar o episódio, o vídeo será iniciado de onde o usuário parou da última vez.
- Ao terminar um **episódio**, o aluno será automaticamente redirecionado para o próximo (caso exista).

---

## Tecnologias Utilizadas

### **Backend**
- **Node.js:** Plataforma principal para o desenvolvimento do servidor.
- **Express:** Framework para gerenciamento de rotas e APIs.
- **Sequelize:** ORM para interação com o banco de dados.
- **AdminJS:** Ferramenta para administração de conteúdos (cursos, episódios, categorias e usuários).

### **Frontend**
- **React:** Biblioteca para construção da interface de usuário.
- **Next.js:** Framework React para renderização no servidor e otimização.
- **Bootstrap:** Framework CSS para estilização e responsividade.
- **Sass/CSS:** Estilização customizada da aplicação.

---
