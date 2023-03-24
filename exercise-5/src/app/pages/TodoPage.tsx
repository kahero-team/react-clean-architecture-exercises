import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/reset.css';
import { Button, Input, Typography, Row, Col, notification } from 'antd';
import TodoTable, { TodoType } from '../components/todo/TodoTable';
//import { addTodo } from '../redux/todo/actions';
import { addTodo, deleteTodo, setTitle, TaskState } from '../redux/task/task.slice'

let todoId = 2;

function TodoPage() {
  const title = useSelector((state: { task: TaskState }) => state.task.title);
  const todos = useSelector((state: {task: TaskState}) => state.task.todos);

  const dispatch = useDispatch(

  );

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
       dispatch(setTitle(e.target.value));
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

   dispatch(addTodo(newTodo));
   setTitle("");
  };

  const handleDelete = (record: TodoType) => {
    dispatch(deleteTodo(record.id));
  }

  const handleAction = () => {
 //   dispatch(addTodo() as any); // NOTE: not a good practice
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
        <TodoTable data={todos} onDelete={handleDelete} />
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
