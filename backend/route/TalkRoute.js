import express from 'express'

const router = express.Router(); 

import {Thread} from '../Controllers/Talkcotrol.js'

export const talkRouter = router.post('/thread', Thread); 
