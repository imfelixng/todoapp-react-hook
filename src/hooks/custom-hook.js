import {useState} from 'react';

export const useInputValue = (initValue = "") => {
    const [inputValue, setInputValue] = useState(initValue);

    return {
        inputValue,
        changeInput: e => setInputValue(e.target.value),
        clearInput: () => setInputValue(""),
        keyInput: (e, cb) => {
            if(e.which === 13 || e.keyCode === 13) {
                console.log(initValue);
                cb(inputValue);
                return true;
            }

            return false;
        }
    }

}

export const useTodo = (initValue = []) => {
    const [todos, setTodos] = useState(initValue);
    return {
        todos,
        addTodo: text => {
            if( text !== '') {
                setTodos(
                    todos.concat({
                        text,
                        checked: false
                    })
                )
            }
        },
        checkTodo: index => {
            setTodos(
                todos.map((todo, i) => {
                    if(index === i) {
                        todo.checked = !todo.checked
                    }
                    return todo;
                })
            )
        },
        removeTodo: index => {
            setTodos(
                todos.filter((todo, i) => index !== i)
            )
        }
    }
}