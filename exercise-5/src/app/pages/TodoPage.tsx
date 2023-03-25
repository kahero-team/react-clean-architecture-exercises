import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/reset.css';
import { Button, Input, Typography, Row, Col, notification } from 'antd';
import TodoTable, { TodoType } from '../components/todo/TodoTable';
import { addTodo } from '../redux/todo/actions';
import { getTasks, removeTask, addTask } from '../redux/task/task.slice';

let todoId = 2;
function TodoPage() {
  const tasks = useSelector((state: any) => state.task.items);
//  const status = useSelector((state: any) => state.todos.status);
//  const error = useSelector((state: any) => state.todos.error);
//  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
//  const [todos, setTodos] = useState<TodoType[]>([]);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getTasks() as any);
  }, [dispatch]);

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    if (!title) {
      notification.error({
        message: 'Unable to submit',
        description: 'Please input the title of the ToDo',
      });
      return;
    }
    todoId = todoId + 1;
    const newTodo = {
      id: todoId,
      title,
    };
   dispatch(addTask(newTodo) as any);
   setTitle('');
  };

 
  const handleDelete = (record: TodoType) => {
      const filteredTodos = tasks.filter((todo: any) => todo.id !== record.id);
      dispatch(removeTask(filteredTodos))
    
  };

  const handleAction = () => {
    dispatch(addTodo() as any); // NOTE: not a good practice
 //   dispatch(addTask() as any);
  }

  return (
    <div>
      <Row style={{ padding: 15 }}>
        <Col span={24}>
          <Typography.Title>
            ToDo App
          </Typography.Title>
        </Col>
      </Row>
      <Row style={{ marginBottom: 15, padding: 15 }}>
        <Input.Group compact>
          <Input
            style={{ width: 'calc(100% - 200px)' }}
            value={title}
            onChange={handleOnChangeTitle}
          />
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Input.Group>
      </Row>
      <Row style={{ padding: 15 }}>
        <TodoTable data={tasks} onDelete={handleDelete} />
      </Row>
      <Row style={{ padding: 15 }}>
        <Button type="primary" onClick={handleAction}>
          Plant Dispatch
        </Button>
      </Row>
    </div>
  );
}

export default TodoPage;
