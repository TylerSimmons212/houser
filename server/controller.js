module.exports = {
    getHouses: (req,res,next)=>{
        db = req.app.get('db')
        db.get_houses()
        .then(response=>{res.status(200).send(response)})
        .catch(err=>res.status(500).send(err))},

    addHouses: (req,res,next)=>{
        const {name, address, city, state, zipcode} = req.body
        req.app.get('db').add_house([name, address, city, state, zipcode])
        .then(response=>res.status(200))
        .catch(err=>res.status(500).send(err))},
    
    deleteHouse:(req,res,next)=>{
        req.app.get('db').remove_house(req.params.id)
        .then(response=>res.status(200).send(response))
        .catch(err=>res.status(500).send(err))}
}
