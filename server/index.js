const express = require("express");
const app = express();
const cors = require("cors");

const pool = require("./db");

app.use(cors());
app.use(express.json());

//create a todo

app.post("/employees", async (req, res) => {
  try {
    const { name } = req.body;
    const { position } = req.body;
    const { salary } = req.body;
    const newEmployee = await pool.query(
      "INSERT INTO e_dashboard (name,position,salary) VALUES ($1,$2,$3)  RETURNING *",
      [name, position, salary]
    );
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app.get("/employees", async (req, res) => {
  try {
    const allEmployee = await pool.query("SELECT * FROM e_dashboard");
    res.json(allEmployee.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//get a todo

app.get("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await pool.query(
      "SELECT * FROM e_dashboard WHERE todo_id = $1",
      [id]
    );

    res.json(employee.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const { position } = req.body;
    const { salary } = req.body;
    const updateEmployee = await pool.query(
      "UPDATE e_dashboard SET name = $1,position = $2,salary=$3 WHERE todo_id = $4",
      [name, position, salary, id]
    );

    res.json("e_dashboard was updated!");
  } catch (err) {
    console.error(err.message);
  }
});
//delete a todo

app.delete("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM e_dashboard WHERE todo_id = $1",
      [id]
    );
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("the server has started on 5000");
});
