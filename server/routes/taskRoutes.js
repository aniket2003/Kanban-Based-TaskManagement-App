const { addtask, gettask, updatetask, deletetask, edittask } = require("../controllers/taskController")
const router = require("express").Router();



router.post("/addtask/", addtask);
router.post("/gettask/", gettask);
router.post("/updatetask/", updatetask);
router.post("/deletetask/", deletetask);
router.post("/edittask/", edittask);


module.exports = router;