const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const fs = require('fs');

module.exports = {
  name: ['video','mp4'],
  params: ['id/url', true],
  info: "Info on command",
  category: "hidden",

  async execute(message, arguments2, fsh) {
    if (!arguments2[0]) {
      message.reply('include a video id or url');
      return;
    }

    let id = message.content.split(' ')[1];
    id = id.split('v=').slice(-1)[0].split('/').slice(-1)[0].split('?')[0].split('&')[0];

    let data = await fetch(`https://api.fsh.plus/video?id=${id}`);
    data = await data.json();
    
    message.channel.send({files: [{ name: `${id}.mp4`, attachment: data.video }]});
  }
};