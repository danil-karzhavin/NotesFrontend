import axios from "axios";

export default class NoteService {
    static async getALL() {
        try {
            const response = await axios.get('http://localhost:5010/notes')
            return response.data
        } catch (err) {
            console.log(err)
        }
    }

    static async getNote(id) {
        try{
            const response = await axios.get(`http://localhost:5010/notes/${id}`)
        } catch (err) {
            console.log(err)
        }
        
    }
    static async deleteNote(id){
        try{
            const response = await axios.delete(`http://localhost:5010/notes/${id}`)
        } catch (err) {
            console.log(err)
        }
    }

    static async createNote(title, body){
        try{
            const response = await axios.post('http://localhost:5010/notes', {
                title: title,
                body: body,
            })
        } catch (err) {
            console.log(err)
        }
    }

    static async updateNote(id, title, body){
        try{
            const response = await axios.put('http://localhost:5010/notes', {
                id: id,
                title: title,
                body: body,
            });
        } catch (err) {
            console.log(err)
        }
    }
}