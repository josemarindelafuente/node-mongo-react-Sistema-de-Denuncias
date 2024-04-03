import { PublicLayout } from '../layout/PublicLayout';
import HomeSlider from '../components/home_slider/HomeSlider';
import { LoginForm } from '../components/login_form/LoginForm.jsx';

const HomePage = () => {
  return (
    <PublicLayout>

<HomeSlider />
    
<section className='bievenidos'>
    <div className="container mt-3">
            <h1>Hacé tu denuncia</h1>
            <p>Animate a hacer tu denuncia. Si sabes que alguien está haciendo algo incorrecto... Denuncialo.</p>
    </div>
</section>
      

<section className='login_home container-fluid'>
    <div className="container">
          <div className="row">
                      <div className="col-12 col-md-6">
                        <h2>Sistema</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus cupiditate assumenda cumque officiis aperiam totam asperiores repellendus in, ipsam expedita obcaecati maxime eius, autem velit harum dicta perspiciatis illum?</p>
                      </div>

                      <div className="col-12 col-md-6">
                        <LoginForm  />
                      </div>
          </div>
    </div>
</section>

      

    

      



      

    </PublicLayout>  
  )
}

export default HomePage