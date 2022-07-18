import './MyForm.css'
import {useState} from 'react'


const MyForm = ({user}) => {

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name, email, bio, role)


        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

  return (
    <div>

        {/* criação de form */}

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                  type="text" 
                  name="nam" 
                  placeholder="Digite seu nome"
                  onChange={handleName}
                  value={name}
                />
            </div>

            {/* label envolvendo input */}

            <label>
                <span>Email</span>
                <input 
                  type="email" n
                  ame="email" 
                  placeholder="Digite seu email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
            </label>

            {/* textArea */}

            <label>
                <span>Bio:</span>
                <textarea 
                  name="bio" 
                  placeholder='Descrição do usuario'
                  onChange={e => setBio(e.target.value)}
                  value={bio}>
                </textarea>
            </label>

            {/* select */}

            <label>
                <span>Função do sistema</span>
                <select name="role" onChange={e => setRole(e.target.value)} value={role}>
                    <option value="user">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="adm">Administrador</option>
                </select>
            </label>

            <input 
              type="submit" 
              value="Enviar" 
            />

        </form>
    </div>
  )
}

export default MyForm