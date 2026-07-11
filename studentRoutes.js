const express = require("express");
const router = express.Router();

const Student = require("../models/Student");

// =============================
// Add Student
// =============================

router.post("/", async (req, res) => {
  try {
    const { name, rollNo, department } = req.body;

    const student = await Student.create({
      name,
      rollNo,
      department,
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// =============================
// Get All Students
// =============================

router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({
      createdAt: -1,
    });

    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// =============================
// Update Student
// =============================

router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// =============================
// Mark Present
// =============================

router.patch("/:id/present", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    student.present += 1;

    await student.save();

    res.json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// =============================
// Mark Absent
// =============================

router.patch("/:id/absent", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    student.absent += 1;

    await student.save();

    res.json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// =============================
// Delete Student
// =============================

router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);

    res.json({
      message: "Student Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;