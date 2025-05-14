// Formulário do Usuário

function UserForm({ data, update }) {
  return (
    <section>
        <section className="form-control">
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" id="name" placeholder="Digite seu nome" 
            required value={data.name || ""} onChange={function(e){update("name", e.target.value)}}/>
        </section>

        <section className="form-control">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" placeholder="Digite seu Email" 
            required value={data.email || ""} onChange={function(e){update("email", e.target.value)}}/>
        </section>
    </section>
  );
}

export default UserForm; 