const task = require("../model/taskModel");


module.exports.addtask = async(req,res,next)=>{

    // console.log("Adding...");
    // console.log(req);

    try{
        if(req.body.duedatetime){
        const {user, category, title, description, duedatetime} = req.body; 
        const duedate = duedatetime;
        var duetime;
        if(duedatetime && duedatetime.length > 11 ){
            duetime = duedatetime.slice(11);
        }
        const data = await task.create({
            user: user,
            category: category,
            title: title,
            description: description,
            duedate: duedate,
            duetime: duetime
        })
        if(data){
            // return res.json({status: true});
            return res.json({msg : "Task added successfully.", status: true});
          }else{
            // return res.status(500).json({status: false});
            return res.status(500).json({msg: "Failed to add Task.", status: false});
          }
        }else{
            const {user, category, title, description} = req.body; 
            const data = await task.create({
                user: user,
                category: category,
                title: title,
                description: description,
            })
            if(data){
                return res.json({msg : "Task added successfully.", status: true});
              }else{
                return res.status(500).json({msg: "Failed to add Task.", status: false});
              }

            // if(data){
            //     return res.json({status: true});
            //     // return res.json({msg : "Task added successfully.", status: true});
            //   }else{
            //     return res.status(500).json({status: false});
            //     // return res.status(500).json({msg: "Failed to add Task.", status: false});
            //   }
        }
        
    }catch(err){
        return res.status(500).json({msg: "Failed to add Task.", status: false});
         next(err);
    }
};


module.exports.gettask = async(req,res,next)=>{
    try{
        const {user, category, taskId} = req.body;
        if(category){
            const tasks = await task.find({
                user : user._id,
                category: category,
            });
           return res.json(tasks);    
        }else if(user){
            const tasks = await task.find({
                user: {
                    $all : user._id,
                },
            });
            // console.log(tasks)
          return res.json(tasks);
        }else if(taskId){
            const FindTask = await task.findOne(
                {_id: taskId},
            ).lean();
           return res.json(FindTask);
        }else{
            return res.status(200).json({error: 'No Id Found'})
        }
    }catch(err){
        return res.status(500).json({error: 'Failed to get Task'});
        next(err); 
    }
};




module.exports.updatetask = async(req,res,next)=>{

    // console.log("Updating");

    try{

        
        const {_id, updatecategory} = req.body;
    
           
              
                 const updateTask = await task.findOneAndUpdate(
                         {_id: _id},
                         {
                            $set: {
                                category: updatecategory,
                                adddate: Date.now(),
                                addtime: new Date().toLocaleTimeString(),
                            },

                         },
                         {new: true},
                    )


        //  console.log("In the updatetask section.", _id, "  ", updatecategory);

         if(updateTask){

            // console.log("Successfully Updated. ", updatecategory);
            return res.json({msg : "Task updated successfully."});
          }else{
            return res.status(500).json({msg: "Failed to update Task."});
          }



    }catch(err){
        return res.status(500).json({ error: 'Failed to add/update Task.' });
        next(err);
        // console.error("Error Updating task: ", err);
    }
};


module.exports.deletetask = async (req,res,next)=>{

    try{

        const SelectedTaskId = req.body;
        const taskId = SelectedTaskId.taskId;

         const data = await task.findByIdAndRemove(taskId);

         if(data){
            return res.json({msg: "Successfully Deleted", status: true});
         }else{
            return res.json({msg: "Error occured while Deleting", status: false});
         }

    }catch(err){
        next(err);
    }

}


module.exports.edittask = async (req,res,next)=>{

    try{

        // console.log(req.body);

        


        if(req.body.duedatetime){
            const {user,_id,category, title, description, duedatetime} = req.body; 
            const taskId = _id
            // console.log(taskId);
            const duedate = duedatetime;
            var duetime;
            if(duedatetime && duedatetime.length > 11 ){
                duetime = duedatetime.slice(11);
            }

            // console.log("Doing: ", req.body);

            const data = await task.findOneAndUpdate(
                {_id: taskId},
                {
                   $set: {
                       title: title,
                       description: description,
                       duedate: duedate,
                       duetime: duetime,
                   },

                },
                {new: true},
           )



            // console.log(data);


            if(data){

                // console.log("Successfully Updated. ", updatecategory);
                return res.json({msg : "Task Edited successfully.", status: true});
              }else{
                return res.status(500).json({msg: "Failed to update Task.", status: false});
              }


           
            }else{


                const {user,_id,category, title, description} = req.body; 

                const taskId = _id;


                const data = await task.findOneAndUpdate(
                    {_id: taskId},
                    {
                        $set:{
                        title: title,
                        description:description,
                    } 
                },
                    {new: true},
                )
    
    
                if(data){
    
                    // console.log("Successfully Updated. ", updatecategory);
                    return res.json({msg : "Task Edited successfully.", status: true});
                  }else{
                    return res.status(500).json({msg: "Failed to update Task.", status: false});
                  }


               
            }

        

    }catch(err){
        next(err);
    }

}