import axios from "axios";
import { NoteApiApi } from "./src";

export default class NoteService {
    static async getALL() {
        try {
            // first way
            // let api = new NoteApiApi();
            // let r = api.notesGet().xhr.response;
            // console.log("response:", r);
            // return r;
            
            // second way
            // let api = new NoteApiApi();
            // return api.notesGet()
            //     .then(response => {
            //         console.log(response)
            //         return response.json()
            //     })
            //     .then(json => {
            //         console.log("json: ", json)
            //         return json
            //     })
            //     .catch(error => console.log("Error throw!: ", error))
            
            const response = await axios.get('https://localhost:7062/notes')
            let r = response.data;
            console.log("responce: ", r)
            return r
        } catch (err) {
            console.log(err)
        }
    }

    // убираю во всех методах async await, потому что js: Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises
    static getNote(id) {
        try{
            const response = axios.get(`https://localhost:7062/notes/${id}`)
            return response.data
        } catch (err) {
            console.log(err)
        }
        
    }
    static deleteNote(id){
        try{
            //const response = await axios.delete(`https://localhost:7062/notes/${id}`)

            // let api = new NoteApiApi();
            // api.deleteNote(id)

            //Correct solution
            let api = new NoteApiApi();
            return new Promise((resolve, reject) => {
                api.deleteNote(id, (err, data, responce) => {
                  if (err) return reject(err)
                  resolve(data)
                })
            })
            // return myPromise
            //     .then(() => {
            //         console.log("successful remove note from deleteNote: ")
            //         //return data
            //     })
                .catch(err => {
                    console.log("Error in func createNote: ", err)
                })

        } catch (err) {
            console.log(err)
        }
    }

    static createNote(title, body){
        try{
            // let api = new NoteApiApi();
            // api.notesPost({'note': {'title': title, 'body': body}})

            //Correct solution
            let api = new NoteApiApi();
            const myPromise = new Promise((resolve, reject) => {
                api.notesPost({'note': {'title': title, 'body': body}}, (err, data, responce) => {
                  if (err) return reject(err)
                  resolve(data)
                })
            })
            return myPromise
                .then(data => {
                    console.log("successful get data from createNote: ", data)
                    return data
                })
                .catch(err => {
                    console.log("Error in func createNote: ", err)
                })

            // base way
            // const response = await axios.post('https://localhost:7062/notes', {
            //     title: title,
            //     body: body,
            // })
        } catch (err) {
            console.log(err)
        }
    }

    static updateNote(id, title, body){
        try{
            let api = new NoteApiApi();
            api.updateNote({'note': {'Id': id, 'title': title, 'body': body}})
            // const response = await axios.put('https://localhost:7062/notes', {
            //     id: id,
            //     title: title,
            //     body: body,
            // });
        } catch (err) {
            console.log(err)
        }
    }
}