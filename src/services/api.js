import axios from 'axios';


const URL = 'http://localhost:8000/';

export const addStudent = async (data) => {

    try{

        return await axios.post(URL + '/add-student', data);

    }catch(error){
        console.log(error);
    }
}