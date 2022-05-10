import api from './api'

function RequestComponent(){

    api.useRequest().then((json) =>{
       /* json.forEach(answer =>{
            console.log(answer)
        })*/
    });
    return (
        <div>test</div>
    )
}
export default RequestComponent
