import "./auth.css";

export default function LoginSignup() {
  return (
    <div className="body-container">
      <div className="auth-container" id="container">
        <div className="form-container auth-sign-up-container">
          <form className="auth-form" action="#">
            <h1>Create Account</h1>
            <div className="auth-social-container">
              <a href="#" className="social auth-a">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social auth-a">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social auth-a">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="auth-button">Sign Up</button>
          </form>
        </div>
        <div className="auth-form-container auth-sign-in-container">
          <form className="auth-form" action="#">
            <h1>Sign in</h1>
            <div className="auth-social-container">
              <a href="#" className="social auth-a">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social auth-a">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social auth-a">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="auth-a">
              Forgot your password?
            </a>
            <button className="auth-button">Sign In</button>
          </form>
        </div>
        <div className="auth-overlay-container">
          <div className="auth-overlay">
            <div className="auth-overlay-panel auth-overlay-left">
              <h1>Welcome Back!</h1>
              <p className="auth-p">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={(e) => {
                  e.preventDefault();
                  const container = document.getElementById("container");
                  container.classList.remove("right-panel-active");
                }}
              >
                Sign In
              </button>
            </div>
            <div className="auth-overlay-panel auth-overlay-right">
              <h1>Hello, Friend!</h1>
              <p className="auth-p">
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost"
                id="signUp"
                onClick={(e) => {
                  e.preventDefault();
                  const container = document.getElementById("container");
                  container.classList.add("right-panel-active");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
