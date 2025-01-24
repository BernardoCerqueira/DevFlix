# OneBitFlix

## Descrição

**OneBitFlix** é uma plataforma de streaming focada em cursos de programação, desenvolvida para proporcionar uma experiência intuitiva tanto para os usuários finais quanto para os administradores.

Os alunos podem explorar os cursos por meio de uma interface agradável, moderna e totalmente **responsiva**.

A administração de cursos e episódios é facilitada pelo **AdminJS**, permitindo uma gestão eficiente e sem complicações.

---

## Funcionalidades Principais

- **Página Home (não logada):** Interface inicial para visitantes, destacando informações sobre a plataforma.


https://github.com/user-attachments/assets/d5d66479-f13f-4fff-9bad-c2577c0bc6ed


- **Página de Registro:** Cadastro de novos usuários.


https://github.com/user-attachments/assets/a58572cd-bdbb-4f33-bb34-207b2007b3f1


- **Página de Login:** Autenticação de usuários existentes.


https://github.com/user-attachments/assets/a1207445-feef-461d-aade-57695a1954ee


- **Página Home (logada):** Experiência personalizada com acesso aos cursos disponíveis. Em cada categoria, há uma seção de slides com todos os seus cursos.


https://github.com/user-attachments/assets/0a03fca0-e6a6-484e-9662-a35a33ba74bb


- **Página de Pesquisa:** Exibição de resultados baseados em pesquisas na barra de pesquisa.


https://github.com/user-attachments/assets/2d8f2f3d-f2f0-4487-bd02-56a8c38f6b5a


- **Perfil do Usuário:** Gerenciamento de informações pessoais.


https://github.com/user-attachments/assets/53c78e01-1a2b-46f9-a6eb-83ce49bd9b53


https://github.com/user-attachments/assets/39f02d12-a4ac-423f-badf-47dc09f77993


- **Página de Curso:** Visualização detalhada de um curso com seus episódios listados.


https://github.com/user-attachments/assets/75a04267-a957-4797-958e-9764553e7f4a


- **Página do Episódio:** Player de vídeo para assistir aos episódios selecionados.


https://github.com/user-attachments/assets/ae0de595-eabd-4131-9887-e813ab251cda


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
