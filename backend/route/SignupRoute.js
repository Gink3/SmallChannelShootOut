import express from 'express'

const router = express.Router(); 

import {signUp} from '../Controllers/Signupcontrol.js'

export const signUpRouter = router.post('/signup', signUp); 


