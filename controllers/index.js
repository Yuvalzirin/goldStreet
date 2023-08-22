const dataService =require('../services/services')
const getItems=async (req,res)=>
{
    debugger
    const newItem=await dataService.getAllItems()
    return res.json(newItem)
}

const updateData=async (req,res)=>
{
    if(!req.params.id)
    {
        return res.status(400).json({errors:["id is required"]})
    }
    const item=await dataService.updateItem(req.params.adminId,req.body["id"],req.body["productName"])
    if(!item)
        {return res.status(404).json({errors:["something went wrong"]})}
     return res.json(item)
}

const deleteData=async (req,res)=>
{
    const newItem=await dataService.deleteItem(req.params.id)
    if(!newItem)
        {return res.status(404).json({errors:["item not found"]})}
        else
        {
            res.json("item deleted")
        }
    res.send()
}

const createItem=async(req,res)=>
{
    //implement premissions check

    const newItem=await dataService.crateItem(req.body.id,req.body.productName,req.body.price,req.body.stock)

    //generate responses
    if(newItem){
  
}
else
return("you dont have premission to create object")
}

const getItemById=async(req,res)=>
{
    const c= await dataService.getItemById(req.params.id)
    if(c)
    {
      return  res.json(c)
    }
    else
        return res.status(404).json({errors:["item not found"]})
}

module.exports={
    createItem,
    getItems,
    getItemById,
    updateData,
    deleteData,
}