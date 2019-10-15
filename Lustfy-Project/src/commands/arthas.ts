import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class arthas implements IBotCommand {
    
    private readonly _command = "arthas"

    help(): string {
        return "Kicka o usuário mencionado"
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${msgObject.author.username}: ${suppliedReason}`;

        if(!msgObject.member.hasPermission("KICK_MEMBERS"))
        {
            msgObject.channel.send(`Ohoh, lhe faltá rusbé para utilizar o arthas ${msgObject.author.username}`);
        }

        if(!mentionedUser)
        {
            msgObject.channel.send(`${msgObject.author.username} pode chamar esse cara ai de Pai, porque eu não achei ele kkj`);
        }

        msgObject.delete(5000);
        msgObject.guild.member(mentionedUser).kick(kickLog)
            .then(console.log)
            .catch(console.error);
        msgObject.channel.send(`ARTHAS, BICA ESSA POHA`)
    }
}