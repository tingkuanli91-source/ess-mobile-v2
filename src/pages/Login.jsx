import { useState } from 'react'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && password) {
      onLogin()
    }
  }

  return (
    <div className="container">
      <div className="header">
        <svg className="logo" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
        <span className="title">台灣微網科技</span>
      </div>

      <div className="hero">
        <h2>Welcome Back</h2>
        <p>Manage your energy storage efficiently</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="label">帳號</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="input"
        />
        
        <label className="label">密碼</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="input"
        />
        
        <button type="submit" className="btn">登入</button>
      </form>
    </div>
  )
}
