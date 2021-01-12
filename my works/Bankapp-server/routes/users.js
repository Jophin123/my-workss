var express = require('express');
var router = express.Router();
var bank = require('../services/bank');
/* GET users listing. */

function authMiddleware(req,res,next){
  if(req.session.currentUser){
   next();
  }
  else{
   //next({message: "please login",status:400});
   res.status(401).send({ message: "please login" });
  }
}

router.get('/',function(req,res,next){
  var result=bank.getusers();
  res.send({result})
})
router.post('/registration',function (req, res, next) {

  let usname = req.body.username
  let pwdd = req.body.password
  console.log(pwdd)
  let cpass = req.body.confirmpassword
  console.log(cpass)
  let accno = req.body.accno
  let data = bank.getusers()
  if (usname in data) {

    res.status(400).send({ message: "Login failed this user already registered" });
    //setTimeout(() => window.location.href = "Home", 5000
    //  this.props.history.push("./")
  } else if (pwdd != cpass) {
    res.status(400).send({ message: "Registration failed password not matching" });
  }
  else {
    bank.addUser(req.body)
    res.send({ message: "resgistration successful" });
  }


});


router.post('/login', function (req, res, next) {

  let usname = req.body.username
  let pwdd = req.body.password
  let data = bank.getusers();
  if (usname in data) {


    let password = data[usname]["password"];
    console.log(usname)
    if (pwdd == password) {
      console.log(pwdd)
      req.session.currentUser = usname;
      console.log(req.session.currentUser);
      //bank.setCurrentUser(usname)
   
      res.send({message: "Login Success"});
      //setTimeout(() => window.location.href = "Home", 5000)
      this.props.history.push("/Home")
    } else {
      res.status(400).send({ message: "Login failed" });
    }

  }
  else {
    res.status(400).send({ message: "not exist" })
  }


  //res.send({message: "login successful"});
});
router.post('/deposit',authMiddleware, function (req, res, next) {

  let unname = req.body.dusername
  let amt = Number(req.body.damount)
  // let btag=this.state.balance
  let data = bank.getusers()
  //let btag = document.querySelector("#bal");
  if (unname in data) {
      data[unname]["balance"] += amt
      let bal = data[unname]["balance"]
      data[unname]["history"].push({
          TypeOfTransaction:"credit",
           amount:amt

      })
     // bank.setState({ balance: bal });
      res.send({ balance: bal,message:"successful"})
      //alert(bal);
      //btag.textContent = "available balance is" + bal
  } else {
    res.status(400).send({message:"invalid details"})
  }
 // res.send({message: "deposit"});
});

router.post('/withdraw',authMiddleware, function (req, res, next) {

  let duname = req.body.wusername
  let amount = Number(req.body.wamount)
  // let b = this.state.btag
  let data = bank.getusers();

  if (duname in data) {
    if(duname != req.session.currentUser){
      res.status(400).send({message:  "invalid user"});
    }
      let avlbal = data[duname]["balance"]
      if (amount > avlbal) {
        res.send({message:  "insuffient balance"});
      } else {
          data[duname]["balance"] -= amount;
          let bal = data[duname]["balance"]
          // b.textContent = "available balance is" + bal
          data[duname]["history"].push({
              TypeOfTransaction:"debit",
               amount:amount

          })
          //this.setState({ balance: bal });
          res.send({ balance: bal ,message:"widrawal success"})
          //alert(bal)
      }
  } else {
    res.status(400).send({message: "invalid"});
  }


//res.send({message: "withdraw"});
});

router.get('/transaction',authMiddleware, function (req, res, next) {

let data=bank.getusers();
let uname=req.session.currentUser;
if (uname in data){
  return res.send({history:data[uname].history})
}else
{
  res.status(400).send({message:"invalid user"})
}




//res.send({message: "transactionhistory"})
});





router.get('/', function (req, res, next) {
  var result = bank.getusers()
  res.send(result);
});
router.post('/test/:id', function (req, res, next) {
  res.send(req.params.id);
});
router.put('/put', function (req, res, next) {
  res.send("put");
});


module.exports = router;
