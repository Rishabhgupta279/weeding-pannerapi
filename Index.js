const express=require('express')
const app = express();
const dotenv=require('dotenv')
const session =require('express-session')
const passport =require('passport')

const facebookstrategy=require("passport-facebook2").Strategy;
const googlestrategy=require("passport-google-oauth20").Strategy;
const mongoose=require('mongoose')



dotenv.config();

mongoose.connect(
   process.env.DB_CONNECT,{
      useUnifiedTopology:true,useNewUrlParser:true
   },()=>console.log('connection succsesfull')
)

app.use(express.json());

// facebook login api start


app.use(session({
   resave:false,
   saveUninitialized:true.valueOf,
   secret:'SECRET'


}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user,cb)
{
cb(null,user);
});

passport.deserializeUser(function(user,cb)
{
cb(null,user);
});


passport.use(new facebookstrategy({
   clientID:'562430198566412',
   clientSecret:'0b09c6bd134322830c9ce6094a8b9272',
   callbackURL:'http://localhost:5500/auth/facebook/callback',
profileFields:['id','displayName']
},
function(accsesToken,refreshToken,profile,done){
   console.log(accsesToken,refreshToken,profile);
   const user={};
   done(null,user);
}

));
app.use('/login/fb',passport.authenticate('facebook'));
app.use('/auth/facebook/callback',passport.authenticate('facebook'));

// facebook login api end
//google login api start

passport.use(new googlestrategy({
   clientID:'498633083862-61fbkornbjci7b50dvk521r9dsa5n3tq.apps.googleusercontent.com',
   clientSecret:'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',
   callbackURL:'http://localhost:5500/auth/google/callback',
profileFields:['id','displayName']
},
function(accsesToken,refreshToken,profile,done){
   console.log(accsesToken,refreshToken,profile);
   const user={};
   done(null,user);
}

));
app.get('/auth/google',passport.authenticate('google', {scope:['openid','profile', 'email']}));
 app.get('/auth/google/callback',passport.authenticate('google'));

// google login api end

const ProductRoutes=require("./router/product")


 app.use("/api/product", ProductRoutes);
app.listen(5500, ()=>{
   console.log ('listen on port number 5500');
})