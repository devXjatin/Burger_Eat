import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import  {User}  from "../api/v1/models/User.js";

export const connectPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      async function (accessToken, refreshToken, profile, done) {
        //Database comes here
        const user = await User.findOne({
            googleId:profile.id,
        })
        
        if(!user){
            
            //if user is not existed then create user
            const newUser = await User.create({
                googleId:profile.id,
                name:profile.displayName,
                photo:profile.photos[0].value
            });
            return done(null, newUser);

        }else{

            //if user exist
            return done(null, user)
        }
      }
    )
  );

  passport.serializeUser((user, done)=>{
    done(null, user.id)

  })

  passport.deserializeUser(async (id, done)=>{
    // const user = await User.findById(id);
    done(null, user);
  })
};
