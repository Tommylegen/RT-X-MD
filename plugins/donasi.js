let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [089512810601]
│ • Dana [089505054287]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [089505054287]
│ • Pulsa [089512810601]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
