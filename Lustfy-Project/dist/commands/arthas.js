"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class arthas {
    constructor() {
        this._command = "arthas";
    }
    help() {
        return "Kicka o usuário mencionado";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${msgObject.author.username}: ${suppliedReason}`;
        if (!msgObject.member.hasPermission("KICK_MEMBERS")) {
            msgObject.channel.send(`Ohoh, lhe faltá rusbé para utilizar o arthas ${msgObject.author.username}`);
        }
        if (!mentionedUser) {
            msgObject.channel.send(`${msgObject.author.username} pode chamar esse cara ai de Pai, porque eu não achei ele kkj`);
        }
        msgObject.delete(5000);
        msgObject.guild.member(mentionedUser).kick(kickLog)
            .then(console.log)
            .catch(console.error);
        msgObject.channel.send(`ARTHAS, BICA ESSA POHA`);
    }
}
exports.default = arthas;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aGFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2FydGhhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQXFCLE1BQU07SUFBM0I7UUFFcUIsYUFBUSxHQUFHLFFBQVEsQ0FBQTtJQWdDeEMsQ0FBQztJQTlCRyxJQUFJO1FBQ0EsT0FBTyw0QkFBNEIsQ0FBQTtJQUN2QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBRXpFLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRCxJQUFJLE9BQU8sR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLGNBQWMsRUFBRSxDQUFDO1FBRWhFLElBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFDbEQ7WUFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnREFBZ0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZHO1FBRUQsSUFBRyxDQUFDLGFBQWEsRUFDakI7WUFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSwrREFBK0QsQ0FBQyxDQUFDO1NBQ3ZIO1FBRUQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0NBQ0o7QUFsQ0QseUJBa0NDIn0=