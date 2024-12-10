const testController = (req,res) => {
    res.status(200).send({
        message:'Welcome route',
        success:true,
    });
};

module.exports={testController};