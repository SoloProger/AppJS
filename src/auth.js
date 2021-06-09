export function authForm() {
  return `
    <form class="mui-form" id="auth-form">
    <div class="mui-textfield mui-textfield--float-label">
        <input
        id="email"
        type="email"
        required
        />
        <label for="email">Email</label>
    </div>
    <div class="mui-textfield mui-textfield--float-label">
        <input
        id="password"
        type="password"
        required
        />
        <label for="password">Пароль</label>
    </div>
    <button
        type="submit"
        class="mui-btn mui-btn--raised mui-btn--primary"
    >
        Войти
    </button>
    </form>
    `;
}

export function authWithEmailAndPass(email, password) {
  const API_KEY = "AIzaSyCpUZxSJXrnF21pgk1_aZ04aKbHpa_659k";
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}
    `,
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.idToken);
}
