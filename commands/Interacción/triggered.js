const { MessageEmbed } = require('discord.js')
const Command = require('../../structures/Commandos.js')

const { sendError } = require('../../utils/utils.js')

module.exports = class Triggered extends Command {
    constructor(client) {
        super(client, {
            name: 'triggered',
            description: ['Shows that you are triggered.', 'Muestra que estás loco.'],
            category: 'Interaccion'
        })
    }
    async run(client, message, args, prefix, lang, ipc) {
        try {
            const { soyultro } = require('soyultro')
            let author = message.author.username
            let embed = new MessageEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
                .setTitle(`${author} ${client.language.TRIGGERED[1]}`)
                .setColor(process.env.EMBED_COLOR)
                .setImage(soyultro('triggered'))

            message.channel.send({ embeds: [embed] })
        } catch (e) {
            sendError(e, message)
        }
    }
}
