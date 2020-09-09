var express = require('express');
var contactRouter = express.Router();
var Contact = require('../../models/contact')



contactRouter.use('/:email', (req, res, next)=>{
    Contact.findOne({emailAddress: req.params.email}, (err, contact) => {
        if(err)
            res.status(500).send(err)
        else {
            req.contact= contact;
            next()
        }
    }) 
})

contactRouter.route ('/')
  .get((req, res) => {
    Contact.find({}, (err, contacts) => {
      res.json(contacts)
    })
  })
  .post((req, res) => {
    let contact = new Contact(req.body); 
    contact.save();
    res.status(201).send(contact) 
  });

  
contactRouter.route('/:email')
   .get ((req,res) => {
       res.json(req.contact)
    })
   .put ((req,res) => {
        req.contact.fullName = req.body.fullName;
        //req.contact.emailAddress = req.body.emailAddress;
        req.contact.phoneNumber= req.body.phoneNumber;

        req.contact.save()
        res.json(req.contact)
    })
    .delete ((req,res) => {
        req.contact.remove (err => {
            if (err) {
                res.status(500).send(err)
            }
            else {
                res.status(204).send('removed')
            }
        })
    })



module.exports = contactRouter;
