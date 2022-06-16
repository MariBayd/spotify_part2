import React, {useState} from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton.jsx";
import MyLabel from "./UI/Label/MyLabel.jsx"


const AuthForm = ({create}) => {
    const [auth, setAuth] = useState({curClientId: '', curClientSecret:''});

    const addNewAuth = (e) => {
        e.preventDefault();
        const newAuth = {
            ...auth, id: Date.now()
        }
        create(newAuth);
    }
    
    return (
        <form>
            <p style={{fontSize:12, color:"grey", marginBottom:10}}>
                Будьте внимательны, при неверных client id и client secret приложение не будет работать.<br/>
                В этом случае введите данные ещё раз или перезапустите приложение.
            </p>
            <MyLabel>Client id</MyLabel>
            <MyInput 
                type="text"
                placeholder="Ввести новый client id"
                value={auth.curClientId}
                onChange={e => setAuth({...auth, curClientId: e.target.value})}/>
            <MyLabel>Client secret</MyLabel>
            <MyInput
                type="text"
                placeholder="Ввести новый client secret"
                value={auth.curClientSecret}
                onChange={e => setAuth({...auth, curClientSecret: e.target.value})}/>
            <MyButton onClick={addNewAuth} >Отправить данные</MyButton>
        </form>
    )
}

export default AuthForm;