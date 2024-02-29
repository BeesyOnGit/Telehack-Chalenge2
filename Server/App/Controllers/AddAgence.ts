import { Request, Response } from 'express';
import AgenceModel from '../Models/Agence'; 

 export const addAgence = async (req: Request, res: Response): Promise<void> => {
    try {
        const { body } = req;
        const { nameAgence, position } = body; 
        
        const add = await AgenceModel.create({
            name: nameAgence,
            position: position 
        });

        if (!add) return res.json({code : ''}); 

        return res.json('Is Created');
    } catch (error) {
        console.error(error);
        res.status(500).json({code : ''});
    }
};


