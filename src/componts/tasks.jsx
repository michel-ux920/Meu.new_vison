
function App() {
    const [task, setTask] = useState([
        {
            id: 1,
            title: "Estudar programação",
            description: "Estudar programação para se tornar um desenvolvedor full stack",
            isCompleted: false
        },
        {
            id: 2,
            title: "Estudar ingles",
            description: "Estudar ingles para melhorar minha fluência",
            isCompleted: false
        },
        {
            id: 3,
            title: "Ler livros",
            description: "Ler livros sobre programação e tecnologia",
            isCompleted: false
        },
    ]);
}

    function onTaskClick(taskId) {
        const newTask = task.map((task) => {
            // PRECISO ATUALIZAR ESSA TAREFA 
            if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
            }

            // NÃO PRECISO ATUALIZAR ESSA TAREFA
            return task;
        });
        setTask(newTask);
    }

    function Task(props) {
        return (
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {props.tasks.map((task) => (
                    <li key={task.id} className="flex gap-2" >
                        <button onClick={() => props.onTaskClick(task.id)} className={`flex-1 text-left p-4 rounded-md ${task.isCompleted ? "bg-green-500" : "bg-white"}`}>
                            {task.title}
                        </button>
                        <button className="bg-slate-400 p-4 rounded-md">
                            <chevronRightIcon/>
                        </button>
                    </li>
                ))} 
            </ul>
        );
    }

    export default tasks;