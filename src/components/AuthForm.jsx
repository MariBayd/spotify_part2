import React, {useState} from 'react';
import SpotifyInput from './UI/Input/SpotifyInput';
import SpotifyButton from './UI/Button/SpotifyButton.jsx';
import SpotifyLabel from './UI/Label/SpotifyLabel.jsx';

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
            <p style={{fontSize:12, color:'grey', marginBottom:10}}>
                Будьте внимательны, при неверных client id и client secret приложение не будет работать.<br/>
                В этом случае введите данные ещё раз или перезапустите приложение.
            </p>
            <SpotifyLabel>Client id</SpotifyLabel>
            <SpotifyInput 
                type='text'
                placeholder='Ввести новый client id'
                value={auth.curClientId}
                onChange={e => setAuth({...auth, curClientId: e.target.value})}/>
            <SpotifyLabel>Client secret</SpotifyLabel>
            <SpotifyInput
                type='text'
                placeholder='Ввести новый client secret'
                value={auth.curClientSecret}
                onChange={e => setAuth({...auth, curClientSecret: e.target.value})}/>
            <SpotifyButton onClick={addNewAuth} >Отправить данные</SpotifyButton>
        </form>
    )
}

export default AuthForm;