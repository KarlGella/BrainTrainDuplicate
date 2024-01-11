const { application } = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const quest = mongoose.model("readingComprehesions");
const localy = mongoose.model("users");
const quest2 = mongoose.model("secondSets");
const quest3 = mongoose.model("thirdSets");
const quest4 = mongoose.model("fourthSets");
const lessons = mongoose.model("modules");
const nodemailer = require("nodemailer");

const path = require("path");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", async (req, res) => {
    console.log("Hello");
    res.send(req.user);
    console.log(req.user);
  });

  app.get("/api/find_questions1", async (req, res) => {
    quest.find({}).exec((err, questions) => {
      res.send(questions);
    });
  });

  app.get("/api/find_questions2", async (req, res) => {
    quest2.find({}).exec((err, questions2) => {
      res.send(questions2);
    });
  });

  app.get("/api/find_questions3", async (req, res) => {
    quest3.find({}).exec((err, questions3) => {
      res.send(questions3);
    });
  });

  app.get("/api/find_questions4", async (req, res) => {
    quest4.find({}).exec((err, questions4) => {
      res.send(questions4);
    });
  });

  app.post("/api/forgot_pass", function (req, res) {
    var transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "braintrain.noreply@gmail.com",
        pass: "BrainTrain123",
      },
    });

    message = {
      from: "braintrain.noreply@gmail.com",
      to: req.body.email,
      subject: "Forgot Password",
      html: `<p>You have sent a request to change your password. Click <a href="https://braintra-in.herokuapp.com/recover">here</a> to change your password.</p> <p> If this email does not concern you, feel free to ignore this message</p>`,
    };

    transport.sendMail(message, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
    res.send("getto");
  });

  app.post("/api/new_password", function (req, res) {
    localy.findByUsername(req.body.email).then(
      function (sanitizedUser) {
        if (sanitizedUser) {
          sanitizedUser.setPassword(req.body.password, function () {
            sanitizedUser.save();
            res.status(200).json({ message: "password reset successful" });
          });
        } else {
          res.status(500).json({ message: "This user does not exist" });
        }
      },
      function (err) {
        console.error(err);
      }
    );
  });

  app.post("/api/register", function (req, res) {
    Users = new localy({
      email: req.body.email,
      username: req.body.username,
      firstAttempts: 0,
      secondAttempts: 0,
      thirdAttempts: 0,
      fourthAttempts: 0,
    });

    localy.register(Users, req.body.password, function (err, user) {
      if (err) {
        res.json({
          success: false,
          message: "Your account could not be saved. Error: ",
          err,
        });
      } else {
        res.json({ success: true, message: "Your account has been saved" });
      }
    });
  });

  app.post("/api/login", function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        return res.send("Error!");
      }
      if (!user) {
        return res.send("Error!");
      }
      req.logIn(user, function (err) {
        if (err) {
          return res.send("Error!");
        }
        return res.send("Logged In");
      });
    })(req, res, next);
  });

  app.post("/api/query", function (req, res) {
    query = req.body.term;
    console.log(query);
    lessons.find({ description: new RegExp(query, "i") }, function (err, doc) {
      console.log("docu: ");
      console.log(doc);
      res.json(doc);
    });
  });

  app.post("/api/medals", function (req, res, next) {
    localy.findOneAndUpdate(
      { email: req.body.email },
      { medals: req.body.medals },
      null,
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Original Doc : ", docs);
        }
      }
    );
  });

  app.post(
    "/api/score",
    function (req, res) {
      var totalAttempts = req.body.attempts + 1;

      if (req.body.quarter === 1) {
        switch (req.body.difficulty) {
          case 10:
            localy.findOneAndUpdate(
              { email: req.body.email },
              { firstAttempts: totalAttempts, firstHighEasy: req.body.score },
              null,
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Original Doc : ", docs);
                }
              }
            );
            break;
          case 20:
            localy.findOneAndUpdate(
              { email: req.body.email },
              { firstAttempts: totalAttempts, firstHighMedium: req.body.score },
              null,
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Original Doc : ", docs);
                }
              }
            );
            break;
          case 40:
            localy.findOneAndUpdate(
              { email: req.body.email },
              { firstAttempts: totalAttempts, firstHighHard: req.body.score },
              null,
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Original Doc : ", docs);
                }
              }
            );
            break;
        }
      } else if (req.body.quarter === 2) {
        switch (req.body.difficulty) {
          case 10:
            localy.findOneAndUpdate(
              { email: req.body.email },
              { secondAttempts: totalAttempts, secondHighEasy: req.body.score },
              null,
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Original Doc : ", docs);
                }
              }
            );
            break;
          case 20:
            localy.findOneAndUpdate(
              { email: req.body.email },
              {
                secondAttempts: totalAttempts,
                secondHighMedium: req.body.score,
              },
              null,
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Original Doc : ", docs);
                }
              }
            );
            break;
          case 40:
            localy.findOneAndUpdate(
              { email: req.body.email },
              { secondAttempts: totalAttempts, secondHighHard: req.body.score },
              null,
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Original Doc : ", docs);
                }
              }
            );
            break;
        }
      } else if (req.body.quarter === 3) {
        switch (req.body.difficulty) {
          case 10:
            localy.findOneAndUpdate(
              { email: req.body.email },
              { thirdAttempts: totalAttempts, thirdHighEasy: req.body.score },
              null,
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Original Doc : ", docs);
                }
              }
            );
            break;
          case 20:
            localy.findOneAndUpdate(
              { email: req.body.email },
              { thirdAttempts: totalAttempts, thirdHighMedium: req.body.score },
              null,
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Original Doc : ", docs);
                }
              }
            );
            break;
          case 40:
            localy.findOneAndUpdate(
              { email: req.body.email },
              { thirdAttempts: totalAttempts, thirdHighHard: req.body.score },
              null,
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Original Doc : ", docs);
                }
              }
            );
            break;
        }
      } else if (req.body.quarter) {
        switch (req.body.difficulty) {
          case 10:
            localy.findOneAndUpdate(
              { email: req.body.email },
              { fourthAttempts: totalAttempts, fourthHighEasy: req.body.score },
              null,
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Original Doc : ", docs);
                }
              }
            );
            break;
          case 20:
            localy.findOneAndUpdate(
              { email: req.body.email },
              {
                fourthAttempts: totalAttempts,
                fourthHighMedium: req.body.score,
              },
              null,
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Original Doc : ", docs);
                }
              }
            );
            break;
          case 40:
            localy.findOneAndUpdate(
              { email: req.body.email },
              { thirdAttempts: totalAttempts, fourthHighHard: req.body.score },
              null,
              function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Original Doc : ", docs);
                }
              }
            );
            break;
        }
      }
    },
    function (req, res) {
      res.send("It worked!");
    }
  );
};

{
  /**
   * 
   * 
   *  app.post("/api/register", (req, res) => {
    console.log(req.body);
    const local = new localy({
      email: req.body.data[0].email,
      acctName: `${req.body.data[0].acctName}`,
      password: req.body.data[0].password,
    });
    local.save();

    res.send(req.body);
  });

   * 
   * 
   * 
 app.post("/api/login", (req, res) => {
    console.log("req body ");
    console.log(req.body);
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/api/login",
    })(req, res);
  });
*/
}

{
  /** 
 

      const Quest = await new quest({
      a: "wron",
      b: "wronf",
      c: "wrsont",
      d: "wronsb",
      q: "wronbxcz",
      ans: "wronks",
      num: 1,
    });
    await Quest.save();
    res.redirect("/");

    __v: 0
*/
}
