const { sqlite } = require('../db/config')
const knex = require('knex')(sqlite)


class MessageConstructor{
    constructor(){
        this.knex = knex;
    }
    async createTable (){
        try{
            const tableExist = await this.knex.schema.hasTable('messages');
            if (tableExist){
                await this.knex.schema.dropTable('messages');
            } 
            else {
                await this.knex.schema.createTable('messages', (table) =>{
                    table.increments('id').notNullable().primary();
                    table.string('email').notNullable();
                    table.string('text').notNullable();
                    table.string('time').notNullable();
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }
    async save (item){
        try{
            console.log(item);
            await this.knex('messages').insert(item);
            console.log('Messages saved successfully in the database');
        }
        catch(error){
            console.log(error);
        }
    }
    async getAll() {
        try {
            const messages = await this.knex('messages');
            if(messages.length > 0){
                console.log('All messages successfully received from the database');
                return messages;
            }
            else{
                console.log('No messages found in the database');
                return []
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = MessageConstructor