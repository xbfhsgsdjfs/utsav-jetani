import react from "react";
import data, { loginUser } from "../lib/auth";
import style from "../styles/Account.module.css"
class Account extends react.Component {
    state = {
        email: "",
        password: ""
    }
    HandleEventChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    HandleSubmit = event => {
        const { email, password } = this.state
        event.preventDefault();
        loginUser(email, password)
    }
    render() {
        return (
            <>
                <div className="w-full h-screen 
            BannerPoster" style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: `url(https://bit.ly/2E3scwW)`
                    }}></div>
                <form onSubmit={this.HandleSubmit}>
                    <div class={style.login}>
                        <h1 class={style.login__title}>Sign In</h1>
                        <div class={style.login__group}>
                            <input class={style.login__group__input} type="text" required="true" name="email" onChange={this.HandleEventChange} />
                            <label class={style.login__group__label}>Email</label>
                        </div>
                        <div class={style.login__group}>
                            <input class={style.login__group__input} type="password" required="true" name="password" onChange={this.HandleEventChange} />
                            <label class={style.login__group__label}>Password</label>
                        </div>
                        <button class={style.login__sign_in} type="submit">Sign In</button>
                        <div className={style.login__secondaryCta} ><a class={style.login__secondaryCta__text} href="#">Remember me</a><a class={style.login__secondaryCta__text} href="#">Need help?</a></div>
                    </div>
                </form>
            </>
        );
    }
}

export default Account;