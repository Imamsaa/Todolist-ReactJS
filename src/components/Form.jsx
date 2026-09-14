function Form({addTask, newTask, tasksCompleted, tasks}) {
  return (
    <div className="wrapper">
        <header>
            <h3>🔰 TODOLIST </h3> <span>{tasksCompleted}/{tasks.length}</span>
        </header>

        <form className="input-box">
            <input type="text" ref={newTask} placeholder="Add Your Task" />
            <button type="submit" onClick={addTask}>Add Task</button>
        </form>
    </div>
  )
}

export default Form