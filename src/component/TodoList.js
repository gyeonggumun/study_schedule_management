import TodoItem from "./TodoItem";
import "./TodoList.css"

const TodoList = ({todo}) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    return <div className="TodoList">
        <h4>Todo List 🌱</h4>
        <input 
            value={search}
            onChange={onChangeSearch}
            className="searchbar" 
            placeholder="검색어를 입력해주세요" 
        />
        <div className="list_wrapper">
            {todo.map((it) => (
                <TodoItem key={it.id} {...it} />
            ))}
        </div>
    </div>
};

export default TodoList;