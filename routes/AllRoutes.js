import express from 'express';
import { DailyBonus } from '../controllers/Bonus/DailyBonus.js';
import { LevelIncome } from '../controllers/Bonus/LevelIncome.js';
import { RoyaltyBonus } from '../controllers/Bonus/RoyaltyBonus.js';
import { GiveRoyaltyBonus } from '../controllers/Bonus/GiveRoyaltyBonus.js';
import { Login } from '../controllers/Authentication/Login.js';
import { CreateAccounts } from '../controllers/Test/CreateAccounts.js';

// DAily Spillted API
import { SplittedDaily1 } from '../controllers/SplittedDaily/SplittedDaily1.js';
import { SplittedDaily2 } from '../controllers/SplittedDaily/SplittedDaily2.js';
import { SplittedDaily3 } from '../controllers/SplittedDaily/SplittedDaily3.js';
import { SplittedDaily4 } from '../controllers/SplittedDaily/SplittedDaily4.js';
import { SplittedDaily5 } from '../controllers/SplittedDaily/SplittedDaily5.js';
import { SplittedDaily6 } from '../controllers/SplittedDaily/SplittedDaily6.js';
import { SplittedDaily7 } from '../controllers/SplittedDaily/SplittedDaily7.js';
import { SplittedDaily8 } from '../controllers/SplittedDaily/SplittedDaily8.js';
import { SplittedDaily9 } from '../controllers/SplittedDaily/SplittedDaily9.js';
import { SplittedDaily10 } from '../controllers/SplittedDaily/SplittedDaily10.js';
import { SplittedDaily11 } from '../controllers/SplittedDaily/SplittedDaily11.js';
import { SplittedDaily12 } from '../controllers/SplittedDaily/SplittedDaily12.js';
import { SplittedDaily13 } from '../controllers/SplittedDaily/SplittedDaily13.js';
import { SplittedDaily14 } from '../controllers/SplittedDaily/SplittedDaily14.js';
import { SplittedDaily15 } from '../controllers/SplittedDaily/SplittedDaily15.js';
import { SplittedDaily16 } from '../controllers/SplittedDaily/SplittedDaily16.js';
import { SplittedDaily17 } from '../controllers/SplittedDaily/SplittedDaily17.js';
import { SplittedDaily18 } from '../controllers/SplittedDaily/SplittedDaily18.js';
import { SplittedDaily19 } from '../controllers/SplittedDaily/SplittedDaily19.js';
import { SplittedDaily20 } from '../controllers/SplittedDaily/SplittedDaily20.js';


const router = express.Router();


router.post('/LevelIncome', LevelIncome);
router.post('/RoyaltyBonus', RoyaltyBonus);
router.post('/GiveRoyaltyBonus', GiveRoyaltyBonus);
router.post('/Login', Login);
router.post('/CreateAccounts', CreateAccounts);




// Splitted APIS

router.post('/SplittedDaily1', SplittedDaily1);
router.post('/SplittedDaily2', SplittedDaily2);
router.post('/SplittedDaily3', SplittedDaily3);
router.post('/SplittedDaily4', SplittedDaily4);
router.post('/SplittedDaily5', SplittedDaily5);
router.post('/SplittedDaily6', SplittedDaily6);
router.post('/SplittedDaily7', SplittedDaily7);
router.post('/SplittedDaily8', SplittedDaily8);
router.post('/SplittedDaily9', SplittedDaily9);
router.post('/SplittedDaily10', SplittedDaily10);
router.post('/SplittedDaily11', SplittedDaily11);
router.post('/SplittedDaily12', SplittedDaily12);
router.post('/SplittedDaily13', SplittedDaily13);
router.post('/SplittedDaily14', SplittedDaily14);
router.post('/SplittedDaily15', SplittedDaily15);
router.post('/SplittedDaily16', SplittedDaily16);
router.post('/SplittedDaily17', SplittedDaily17);
router.post('/SplittedDaily18', SplittedDaily18);
router.post('/SplittedDaily19', SplittedDaily19);
router.post('/SplittedDaily20', SplittedDaily20);



export default router;
