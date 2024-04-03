import './style.css';
export const LoginForm = () => {
    return (
        <>
            <div className="form_container">
                <h2>Formulario de login </h2>
                <form>
                    <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"  />
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
            </div>
        </>
    )   
}