import { PublicLayout } from '../layout/PublicLayout';
import { LoginForm } from '../components/login_form/LoginForm.jsx';


const LoginPage = () => {
  return (
    <PublicLayout>
        <div className="container mt-3">
              <h1>Ingresar al sistema</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi praesentium, libero quod fuga dolorem doloribus minus impedit dolor nostrum sequi similique. Quaerat, illo. Nisi inventore consectetur exercitationem eligendi laborum. Ipsum.</p>

              <section className='cuerpo_principal'>
                <LoginForm  />
              </section>
        </div>
    </PublicLayout>
  )
}

export default LoginPage