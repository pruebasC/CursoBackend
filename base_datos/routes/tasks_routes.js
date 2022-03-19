const express = require('express');
let TasksController = require('../controllers/tasks');
let router = express.Router();

/*router.route('/tasks').get(function(req,res){
  res.send('Hola desde get');
}).post(TasksController.create);
*/
router.route('/tasks').get(TasksController.index).post(TasksController.create);

router.get('/tasks/new',TasksController.new);

router.get('/tasks/:id/edit',TasksController.edit);

router.route('/tasks/:id').get(TasksController.show).put(TasksController.update)
                          .delete(TasksController.delete);

module.exports = router;
