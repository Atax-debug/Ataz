import { horla } from '../lib/horla.js';
import mumaker from 'mumaker';

// Deadpool logo
export const deadpool = horla({
  nomCom: "deadpool",
  categorie: "Logo",
  reaction: "🔴"
}, async (msg, { sock, args }) => {
  const from = msg.key.remoteJid;
  const userName = msg.pushName || "User";

  if (!args || args.length === 0) {
    await sock.sendMessage(from, {
      text: `*Example, ${userName}: * .deadpool ${userName}`
    }, { quoted: msg });
    return;
  }

  try {
    await sock.sendMessage(from, {
      text: "*Creating Deadpool logo...*"
    }, { quoted: msg });

    const text = Array.isArray(args) ? args.join(' ') : args.toString();
    const anu = await mumaker.textpro("https://en.ephoto360.com/create-text-effects-in-the-style-of-the-deadpool-logo-818.html", text);

    await sock.sendMessage(from, {
      image: { url: anu.image },
      caption: "*Deadpool Logo by ECLIPSE MD*"
    }, { quoted: msg });

  } catch (e) {
    console.error('[DEADPOOL] Error:', e);
    await sock.sendMessage(from, {
      text: `❌ *Error creating logo*\n\n${e.message}`
    }, { quoted: msg });
  }
});

// 3D Comic Style
export const comic3d = horla({
  nomCom: "comic3d",
  categorie: "Logo",
  reaction: "💥"
}, async (msg, { sock, args }) => {
  const from = msg.key.remoteJid;
  const userName = msg.pushName || "User";

  if (!args || args.length === 0) {
    await sock.sendMessage(from, {
      text: `*Example, ${userName}: * .comic3d ${userName}`
    }, { quoted: msg });
    return;
  }

  try {
    await sock.sendMessage(from, {
      text: "*Creating 3D comic logo...*"
    }, { quoted: msg });

    const text = Array.isArray(args) ? args.join(' ') : args.toString();
    const anu = await mumaker.textpro("https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html", text);

    await sock.sendMessage(from, {
      image: { url: anu.image },
      caption: "*3D Comic Logo by ECLIPSE MD*"
    }, { quoted: msg });

  } catch (e) {
    console.error('[COMIC3D] Error:', e);
    await sock.sendMessage(from, {
      text: `❌ *Error creating logo*\n\n${e.message}`
    }, { quoted: msg });
  }
});

// Blackpink Logo
export const blackpink = horla({
  nomCom: "blackpink",
  categorie: "Logo",
  reaction: "💖"
}, async (msg, { sock, args }) => {
  const from = msg.key.remoteJid;
  const userName = msg.pushName || "User";

  if (!args || args.length === 0) {
    await sock.sendMessage(from, {
      text: `*Example, ${userName}: * .blackpink ${userName}`
    }, { quoted: msg });
    return;
  }

  try {
    await sock.sendMessage(from, {
      text: "*Creating BLACKPINK logo...*"
    }, { quoted: msg });

    const text = Array.isArray(args) ? args.join(' ') : args.toString();
    const anu = await mumaker.textpro("https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html", text);

    await sock.sendMessage(from, {
      image: { url: anu.image },
      caption: "*BLACKPINK Logo by ECLIPSE MD*"
    }, { quoted: msg });

  } catch (e) {
    console.error('[BLACKPINK] Error:', e);
    await sock.sendMessage(from, {
      text: `❌ *Error creating logo*\n\n${e.message}`
    }, { quoted: msg });
  }
});

// Silver 3D
export const silver3d = horla({
  nomCom: "silver3d",
  categorie: "Logo",
  reaction: "🪙"
}, async (msg, { sock, args }) => {
  const from = msg.key.remoteJid;
  const userName = msg.pushName || "User";

  if (!args || args.length === 0) {
    await sock.sendMessage(from, {
      text: `*Example, ${userName}: * .silver3d ${userName}`
    }, { quoted: msg });
    return;
  }

  try {
    await sock.sendMessage(from, {
      text: "*Creating silver 3D logo...*"
    }, { quoted: msg });

    const text = Array.isArray(args) ? args.join(' ') : args.toString();
    const anu = await mumaker.textpro("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", text);

    await sock.sendMessage(from, {
      image: { url: anu.image },
      caption: "*Silver 3D Logo by ECLIPSE MD*"
    }, { quoted: msg });

  } catch (e) {
    console.error('[SILVER3D] Error:', e);
    await sock.sendMessage(from, {
      text: `❌ *Error creating logo*\n\n${e.message}`
    }, { quoted: msg });
  }
});

// Colorful Neon
export const colorneon = horla({
  nomCom: "colorneon",
  categorie: "Logo",
  reaction: "🌈"
}, async (msg, { sock, args }) => {
  const from = msg.key.remoteJid;
  const userName = msg.pushName || "User";

  if (!args || args.length === 0) {
    await sock.sendMessage(from, {
      text: `*Example, ${userName}: * .colorneon ${userName}`
    }, { quoted: msg });
    return;
  }

  try {
    await sock.sendMessage(from, {
      text: "*Creating colorful neon logo...*"
    }, { quoted: msg });

    const text = Array.isArray(args) ? args.join(' ') : args.toString();
    const anu = await mumaker.textpro("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", text);

    await sock.sendMessage(from, {
      image: { url: anu.image },
      caption: "*Colorful Neon Logo by ECLIPSE MD*"
    }, { quoted: msg });

  } catch (e) {
    console.error('[COLORNEON] Error:', e);
    await sock.sendMessage(from, {
      text: `❌ *Error creating logo*\n\n${e.message}`
    }, { quoted: msg });
  }
});

// Born Pink
export const bornpink = horla({
  nomCom: "bornpink",
  categorie: "Logo",
  reaction: "🎀"
}, async (msg, { sock, args }) => {
  const from = msg.key.remoteJid;
  const userName = msg.pushName || "User";

  if (!args || args.length === 0) {
    await sock.sendMessage(from, {
      text: `*Example, ${userName}: * .bornpink ${userName}`
    }, { quoted: msg });
    return;
  }

  try {
    await sock.sendMessage(from, {
      text: "*Creating BORN PINK logo...*"
    }, { quoted: msg });

    const text = Array.isArray(args) ? args.join(' ') : args.toString();
    const anu = await mumaker.textpro("https://en.ephoto360.com/create-blackpink-s-born-pink-album-logo-online-779.html", text);

    await sock.sendMessage(from, {
      image: { url: anu.image },
      caption: "*BORN PINK Logo by ECLIPSE MD*"
    }, { quoted: msg });

  } catch (e) {
    console.error('[BORNPINK] Error:', e);
    await sock.sendMessage(from, {
      text: `❌ *Error creating logo*\n\n${e.message}`
    }, { quoted: msg });
  }
});

// Foil Balloon 3D
export const balloon3d = horla({
  nomCom: "balloon3d",
  categorie: "Logo",
  reaction: "🎈"
}, async (msg, { sock, args }) => {
  const from = msg.key.remoteJid;
  const userName = msg.pushName || "User";

  if (!args || args.length === 0) {
    await sock.sendMessage(from, {
      text: `*Example, ${userName}: * .balloon3d ${userName}`
    }, { quoted: msg });
    return;
  }

  try {
    await sock.sendMessage(from, {
      text: "*Creating 3D balloon logo...*"
    }, { quoted: msg });

    const text = Array.isArray(args) ? args.join(' ') : args.toString();
    const anu = await mumaker.textpro("https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html", text);

    await sock.sendMessage(from, {
      image: { url: anu.image },
      caption: "*3D Balloon Logo by ECLIPSE MD*"
    }, { quoted: msg });

  } catch (e) {
    console.error('[BALLOON3D] Error:', e);
    await sock.sendMessage(from, {
      text: `❌ *Error creating logo*\n\n${e.message}`
    }, { quoted: msg });
  }
});

// 3D Paint
export const paint3d = horla({
  nomCom: "paint3d",
  categorie: "Logo",
  reaction: "🎨"
}, async (msg, { sock, args }) => {
  const from = msg.key.remoteJid;
  const userName = msg.pushName || "User";

  if (!args || args.length === 0) {
    await sock.sendMessage(from, {
      text: `*Example, ${userName}: * .paint3d ${userName}`
    }, { quoted: msg });
    return;
  }

  try {
    await sock.sendMessage(from, {
      text: "*Creating 3D paint logo...*"
    }, { quoted: msg });

    const text = Array.isArray(args) ? args.join(' ') : args.toString();
    const anu = await mumaker.textpro("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", text);

    await sock.sendMessage(from, {
      image: { url: anu.image },
      caption: "*3D Paint Logo by ECLIPSE MD*"
    }, { quoted: msg });

  } catch (e) {
    console.error('[PAINT3D] Error:', e);
    await sock.sendMessage(from, {
      text: `❌ *Error creating logo*\n\n${e.message}`
    }, { quoted: msg });
  }
});

// Wet Glass
export const wetglass = horla({
  nomCom: "wetglass",
  categorie: "Logo",
  reaction: "💧"
}, async (msg, { sock, args }) => {
  const from = msg.key.remoteJid;
  const userName = msg.pushName || "User";

  if (!args || args.length === 0) {
    await sock.sendMessage(from, {
      text: `*Example, ${userName}: * .wetglass ${userName}`
    }, { quoted: msg });
    return;
  }

  try {
    await sock.sendMessage(from, {
      text: "*Creating wet glass logo...*"
    }, { quoted: msg });

    const text = Array.isArray(args) ? args.join(' ') : args.toString();
    const anu = await mumaker.textpro("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", text);

    await sock.sendMessage(from, {
      image: { url: anu.image },
      caption: "*Wet Glass Logo by ECLIPSE MD*"
    }, { quoted: msg });

  } catch (e) {
    console.error('[WETGLASS] Error:', e);
    await sock.sendMessage(from, {
      text: `❌ *Error creating logo*\n\n${e.message}`
    }, { quoted: msg });
  }
});

// Matrix
export const matrix = horla({
  nomCom: "matrix",
  categorie: "Logo",
  reaction: "🟢"
}, async (msg, { sock, args }) => {
  const from = msg.key.remoteJid;
  const userName = msg.pushName || "User";

  if (!args || args.length === 0) {
    await sock.sendMessage(from, {
      text: `*Example, ${userName}: * .matrix ${userName}`
    }, { quoted: msg });
    return;
  }

  try {
    await sock.sendMessage(from, {
      text: "*Creating Matrix logo...*"
    }, { quoted: msg });

    const text = Array.isArray(args) ? args.join(' ') : args.toString();
    const anu = await mumaker.textpro("https://en.ephoto360.com/create-matrix-movie-photo-effects-online-741.html", text);

    await sock.sendMessage(from, {
      image: { url: anu.image },
      caption: "*Matrix Logo by ECLIPSE MD*"
    }, { quoted: msg });

  } catch (e) {
    console.error('[MATRIX] Error:', e);
    await sock.sendMessage(from, {
      text: `❌ *Error creating logo*\n\n${e.message}`
    }, { quoted: msg });
  }
});

export default { deadpool, comic3d, blackpink, silver3d, colorneon, bornpink, balloon3d, paint3d, wetglass, matrix };
