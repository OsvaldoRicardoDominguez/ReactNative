import axios from "axios"

const alumnos =  async (state) => {
    const peticion = await axios.get('https://reqres.in/api/users?page=2')
    state(peticion.data.data)
}
export {
    alumnos
}