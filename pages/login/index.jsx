import { Login } from 'src/views'

export default function LoginPage() {
    return <Login />
}

LoginPage.getLayout = (Component) => {
    return <Component />
}