import { Request, Response } from 'express';
import NotiModel from '../Models/Notification'; 

 export const addNotifcation = async (req: Request, res: Response): Promise<void> => {
    const {body}  = req
    const  {date,message} = body 
   try {
     const addNotification =  await NotiModel.create({
         date:date,
         Message:message
     })  
    if (!addNotification) return res.json({code : ''}); 

    return res.json('Is Created Noti ');
   } catch (err) {
      console.log(err);
      
   }
};