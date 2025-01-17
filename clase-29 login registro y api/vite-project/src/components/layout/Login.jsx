import LoginForm from "../auth/loginForm";
import Page from "./Page";

function login() {
  return (
    //agrega una gap default (en este caso 20 px)
    <Page gap={10}> 
        <LoginForm />
    </Page>
)
}

export default login