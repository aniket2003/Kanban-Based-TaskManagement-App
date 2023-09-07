const mongoose = require("mongoose");
  
  const taskSchema = new mongoose.Schema({

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    category: {
      type: String,
      enum: ['todo', 'doing', 'done'],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },

    duedate: {
      type: Date,
      required: false
    },
    duetime: {
      type: String,
      required: false
    },

    adddate: {
      type: Date,
      default: Date.now
    },

    addtime: {
      type: String,
      default: new Date().toLocaleTimeString(),
    }

    
  });
  
module.exports = mongoose.model('Task', taskSchema);
