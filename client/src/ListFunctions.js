import axios from 'axios';

export const getList = () => {
    return axios 
    .get('api/task', {
        headers : { 'Content-Type' : 'application/json' }
    })
        .then(res=> {
            return res.data
        })
    }

    export const addItem = title => {
        return axios
        .post('api/task',
        {
            title:title
        },
        {
            headers : { 'Content-Type' : 'application/json' }  
        }   
        )
        .then(res=> {
            console.log(res)
        })
    }

    export const updateItem = (title,id) =>{
        return  axios
        .put('api/task/${id}',
        {
            title:title
        },
        {
            headers : { 'Content-Type' : 'application/json' } 
        })
        .then(res=> {
            console.log(res)
        })
        .catch(err=> {
            console.log(err)
        })
    }

    export const deleteItem = id =>{
        return  axios
        .delete('api/task/${id}',   
        {
            headers : { 'Content-Type' : 'application/json' } 
        })
        .then(res=> {
            console.log(res)
        })
        .catch(err=> {
            console.log(err)
        })
    }
