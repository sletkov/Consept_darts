import React, {useState} from 'react';
import {AuthPageContainerTypes, LoginFormTypes} from "./types";
import {LoginContainer} from "./components/LoginContainer";
import {RegisterContainer} from "./components/RegisterContainer";
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/authActions";
import {useNavigate} from "react-router-dom";

export const AuthPage = () => {

  const dispatch: any = useDispatch()
  const navigate = useNavigate()

  const [currentContainer, setCurrentContainer] = useState<AuthPageContainerTypes>(AuthPageContainerTypes.Login)

  const handleSubmit = (values: LoginFormTypes) => {
    dispatch(login(values))
    navigate('/')
  }

  return (
    <div className={'auth-page'}>
      <div className="auth-page__container__title">
        {AuthPageContainerTypes.Login ? 'Войти' : 'Зарегестрироваться'}
      </div>
      <div className="auth-page__container">
        {currentContainer === AuthPageContainerTypes.Login ?
          <LoginContainer
            onSubmit={handleSubmit}
            onChangePage={(path) => setCurrentContainer(path)}
          /> :
          <RegisterContainer

          />
        }
      </div>
    </div>
  )
}