export default function ApiCalls(props){
    const Url = 'https://swapi-thinkful.herokuapp.com/api/'

    return fetch(Url + props)
                .then((r) => r.json())
        // .then((data)=>console.log(data))
        // .catch((error)=>console.log(error.message));
}