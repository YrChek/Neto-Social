import './loginForm.css';

export default function LoginForm({children}) {
  return (
    <div className="loginform">
      <span className="text_form">Neto Social</span>
      {children}
    </div>
  )
}
