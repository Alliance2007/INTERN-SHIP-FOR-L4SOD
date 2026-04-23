import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
}));

app.use(express.json());


  //  👉 INSERT MODULE

app.post("/modules", (req, res) => {
  const {
    
    
    
    moduleCode,
    trainer,
    description,
    duration,
    level,
    startDate,
    endDate,
  } = req.body;

  if (!moduleName || !moduleCode || !trainer) {
    return res.status(400).json({
      message: "moduleName, moduleCode, trainer are required ❌",
    });
  }

  const created_at = new Date().toISOString().slice(0, 10);

  const sql = `
    INSERT INTO modules 
    (moduleName, moduleCode, trainer, description, duration, level, startDate, endDate, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    moduleName,
    moduleCode,
    trainer,
    description,
    duration,
    level,
    startDate,
    endDate,
    created_at,
  ], (err, result) => {
    if (err) {
      console.log("❌ Insert error:", err.message);
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      message: "Module saved successfully ✅",
      id: result.insertId,
    });
  });
});

  //  👉 GET ALL MODULES

app.get("/modules", (req, res) => {
  db.query("SELECT * FROM modules ORDER BY id ASC", (err, result) => {
    if (err) {
      console.log("❌ Fetch all error:", err.message);
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});


  //  👉 GET SINGLE MODULE ✅ FIXED

app.get("/modules/:id", (req, res) => {
  const moduleId = req.params.id;

  const sql = "SELECT * FROM modules WHERE id = ?";

  db.query(sql, [moduleId], (err, result) => {
    if (err) {
      console.log("❌ Fetch one error:", err.message);
      return res.status(500).json({ error: err.message });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Module not found ❌" });
    }

    res.json(result[0]);
  });
});

  //  👉 UPDATE MODULE
app.put("/modules/:id", (req, res) => {
  const moduleId = req.params.id;
const data= req.body;
const moduleName=data["moduleName"];
const moduleCode=data["moduleCode"];
const moduleTrainer=data["moduleTrainer"];
const moduleDescription=data["moduleDscription"];
const moduleDuration=data["moduleDuration"];
const moduleLevel=data["moduleLevel"];
const modulestartDate=data["modulestartDate"];
const moduleEndDate=data["moduleEndDate"];
  const {
    moduleName,
    moduleCode,
    trainer,
    description,
    duration,
    level,
    startDate,
    endDate,
  } = req.body;

  const sql = `
    UPDATE modules SET 
      moduleName = ?, 
      moduleCode = ?, 
      trainer = ?, 
      description = ?, 
      duration = ?, 
      level = ?, 
      startDate = ?, 
      endDate = ?
    WHERE id = ?
  `;

  db.query(sql, [
    moduleName,
    moduleCode,
    trainer,
    description,
    duration,
    level,
    startDate,
    endDate,
    moduleId,
  ], (err, result) => {
    if (err) {
      console.log("❌ Update error:", err.message);
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: "Module updated successfully ✅" });
  });
});


  //  👉 DELETE MODULE

app.delete("/modules/:id", (req, res) => {
  const moduleId = req.params.id;

  db.query("DELETE FROM modules WHERE id = ?", [moduleId], (err, result) => {
    if (err) {
      console.log("❌ Delete error:", err.message);
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: "Module deleted successfully ✅" });
  });
});

  //  👉 START SERVER

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});