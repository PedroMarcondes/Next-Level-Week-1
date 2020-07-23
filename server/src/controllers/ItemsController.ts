import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                //image_url: `http://localhost:3333/uploads/${item.image}`,
                image_url: `http://192.168.0.12:3333/uploads/${item.image}`,
                //mudar localhost para 192.168.0.12 (Para o celular conseguir achar as imgs)
            };
        });
        
        return response.json(serializedItems);
    }
}

export default ItemsController;