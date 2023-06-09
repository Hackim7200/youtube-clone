import express from 'express'
import { test } from '../controllers/user.js' // need to import user.js

const router = express.Router()
router.get("/test",test)  // the funciton is written in the router

export default router