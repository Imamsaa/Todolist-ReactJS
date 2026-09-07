function Form() {
  return (
    <div className="wrapper">
        <header>
            <h3>🔰 TODOLIST </h3>
        </header>

        <div className="input-box">
            <input type="text" placeholder="Add Your Task" />
            <button type="submit">Add Task</button>
        </div>
    </div>
  )
}

export default Form