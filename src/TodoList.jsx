import React from 'react'
import './TodoList.css'
import avatar from './assets/image/profile.webp'

const TodoList = () => {
  return (
    <div>
      <section class="app-container">
      <div class="card profile-section">
        <div class="profile-header">
          <img src={avatar} alt="Avatar" class="avatar" />
          <div>
            <h2 id="name-display">Gilang Ramadan</h2>
            <p class="role">Frontend Developer</p>
          </div>
        </div>
        <p class="bio">
          Front-End Developer yang berfokus pada pengembangan antarmuka web responsif dengan perhatian pada detail dan pengalaman pengguna.
        </p>

        <button id="switch-mode" class="btn btn-secondary">
          🌙 Switch Mode
        </button>
      </div>

      <div class="card todo-section">
        <h3>My Tasks</h3>

        <div class="input-group">
          <input
            type="text"
            id="todo-input"
            placeholder="Tulis tugas baru..."
          />
          <button id="add-btn" class="btn btn-primary">Add</button>
        </div>

        <ul id="todo-list" class="todo-list"></ul>
      </div>
    </section>
    </div>
  )
}

export default TodoList
