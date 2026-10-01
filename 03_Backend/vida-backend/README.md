# VIDA — Backend acadêmico

Backend inicial do Projeto VIDA para trabalho acadêmico.

## Tecnologias

- Node.js
- Express
- PostgreSQL
- pg
- dotenv
- CORS

## Estrutura

```text
vida-backend/
├── src/
│   ├── controllers/
│   │   ├── exameController.js
│   │   └── pacienteController.js
│   ├── routes/
│   │   ├── exameRoutes.js
│   │   └── pacienteRoutes.js
│   ├── db.js
│   └── server.js
├── .env
├── .gitignore
├── database.sql
├── package.json
└── README.md
```

## Configuração

1. Crie o banco `vida` no PostgreSQL.
2. Execute o restante do `database.sql` conectado ao banco `vida`.
3. Crie um arquivo `.env` com suas credenciais locais:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vida
DB_USER=postgres
DB_PASSWORD=sua_senha
```

4. Instale as dependências:

```bash
npm install
```

5. Execute em desenvolvimento:

```bash
npm run dev
```

## Rotas

### Pacientes

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/pacientes` | Lista pacientes |
| GET | `/api/pacientes/:id` | Busca paciente |
| POST | `/api/pacientes` | Cria paciente |
| PUT | `/api/pacientes/:id` | Atualiza paciente |
| DELETE | `/api/pacientes/:id` | Exclui paciente |

### Exames

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/exames` | Lista exames |
| POST | `/api/exames` | Cria exame |
| DELETE | `/api/exames/:id` | Exclui exame |

> Esta implementação é acadêmica e não representa a arquitetura definitiva do Projeto VIDA. Dados reais de saúde não devem ser utilizados neste ambiente de estudo.
