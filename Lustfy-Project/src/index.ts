import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

client.on("ready", ()=>{

    console.log("Ready to go!");

})

client.on("message", msg => {

    //Ignora a mensagem se ela for enviada por um bot
    if (msg.author.bot) { return; }

    if (!msg.content.startsWith(ConfigFile.config.prefix)) { return; }

    msg.channel.send(`${msg.author.username}-Senpai, NYAAAAAAAAAAAAAANN~~~~`)
    handleCommand(msg);
})

async function handleCommand(msg: Discord.Message) {

    //Dividir a string do comando e todos os argumentos
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    for(const commandClass of commands){

        //Tentantiva de executar o código, mas um erro aconteceu
        try{

            if(!commandClass.isThisCommand(command)){
                continue;
            }

            await commandClass.runCommand(args, msg, client);
        }
        catch(exception){

            console.log(exception);
        }
    }
}

function loadCommands(commandsPath: string) {

    //Sai se não tiver nenhum comando
    if(!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) { return; }

    //Faz um loop entre todos os comandos no arquivo config
    for(const commandName of ConfigFile.config.commands as string[]) {

        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }

}

client.login(ConfigFile.config.token);