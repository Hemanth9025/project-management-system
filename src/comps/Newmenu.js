import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from '@mui/material';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, description: newDescription, completed: false }]);
      setNewTask('');
      setNewDescription('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <body>
      <center><h1>PROJECT MANAGEMENT SYSTEM</h1></center>
      <Container maxWidth="sm" style={{ marginTop: '3rem' }}>
        {<Typography variant="h4" align="center" gutterBottom></Typography>}

        <TextField
          label="New project"
          variant="outlined"
          fullWidth
          value={newTask}
          onChange={handleInputChange}
          InputProps={{
            style: { color: 'black', backgroundColor: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'black' },
          }}
          style={{ marginBottom: '1rem', width: '50%' }} // Adjust the width as needed
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          value={newDescription}
          onChange={handleDescriptionChange}
          InputProps={{
            style: { color: 'black', backgroundColor: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'black' },
          }}
          style={{ marginBottom: '1rem' }}
        />
        <center>
          <Button variant="contained" color="primary" onClick={handleAddTask} style={{ backgroundColor: '#2196f3', color: 'white' }}>
            Add Project
          </Button>
        </center>

        <List style={{ marginTop: '1.5rem', backgroundColor: 'transparent' }}>
          {tasks.map((task, index) => (
            <ListItem key={index} button onClick={() => handleToggleTask(index)}>
              <Checkbox checked={task.completed} />
              <ListItemText
                primary={task.text}
                secondary={task.description}
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? 'grey' : 'white',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </body>
  );
};

export default App;