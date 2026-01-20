const exp = require("express");
const app = exp();

app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));
app.use(exp.static(__dirname));

app.get("/submit-get", (req, res) => {
  const { name, age, place } = req.query;
  res.send(`
        <h2>Get Data Received</h2>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Place: ${place}</p>
        <a href="/">Go Back</a>
    `);
});

app.post("/submit-post", (req, res) => {
  const { name, age, place } = req.body;
  res.send(`
        <h2>Post Data Received</h2>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Place: ${place}</p>
        <a href="/">Go Back</a>
    `);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
