import TodolistButton from "./TodolistButton"

function Todolist(props) {
    props.tasks.sort((a,b) => {
        return b.id - a.id
    });
  return (
    <div className="wrapper">
        <ul>
            {
                props.tasks.map((item) => {
                    return(
                        <li key={item.id}>
                            <div className='left'><button>✅</button></div>
                            <div className='center'>{item.task}</div>
                            <div className='right'>
                                <TodolistButton/>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
        </div>
  )
}

export default Todolist