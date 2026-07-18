function App() {
    const [message, setMessage] = useState('Olá, Mundo!');

    return (
        <div>
            <h1>{message}</h1>
            <button 
                onClick={() => {
                setMessage('Olá, fui clicado!')
                }}
            > 
                Mudar Mensagem
            </button>
        </div>
    );
}

export default App;

return (
    <div className= "w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className= "w-[500px]">
            <h1 className= "text-3xl text-slate-100 font-bold text-center">
                Gerenciador de Tarefas
            </h1>
            <addTask />
            <tasks tasks={task}/>
        </div>
    </div>
);
