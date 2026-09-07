import TodolistButton from "./TodolistButton"

function Todolist() {
  return (
    <div className="wrapper">
        <ul>
            <li>
                <div class='left'><button>✅</button></div>
                <div className='center'>bbb</div>
                <div className='right'>
                    <TodolistButton/>
                </div>
            </li>
            <li>
                <div class='left'><button>◻️</button></div>
                <div className='center'>aaa</div>
                <div className='right'>
                    <TodolistButton/>
                </div>
            </li>
        </ul>
        </div>
  )
}

export default Todolist