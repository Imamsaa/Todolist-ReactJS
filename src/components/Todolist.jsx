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
                    let statusCompleted;
                    let statusStrike;
                    if(item.completed){
                        statusCompleted = "✅";
                        statusStrike = "center strike";
                    }else{
                        statusCompleted = "☐";
                        statusStrike = "center";
                    }                   
                    return(
                        <li key={item.id}>
                            <div className='left'><button onClick={() => props.setCompleted(item.id)}>{statusCompleted}</button></div>
                            <div className={statusStrike}>{item.task}</div>
                            <div className='right'>
                                <TodolistButton tasks={props.tasks} move={props.move} id={item.id}/>
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