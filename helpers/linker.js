const getLink = function(message) {
  const entities = message.entities;
  if (entities) {
    const likentity = entities.filter((item) => item.type == 'text_link');
    const urlentity = entities.filter((item) => item.type == 'url');
    if (likentity) {
      let i = 0;
      let url = ' ';
      while (i < likentity.length) {
        url = likentity[i].url;
        i++;
        return url;
      }
    }
    if (urlentity) {
      let i = 0;
      let url = ' ';
      const text = message.text;
      while (i < urlentity.length) {
        start = urlentity[i].offset;
        end = urlentity[i].offset + urlentity[i].length;
        url = text.substring(start, end);
        return url;
        i++;
      }
    } else {
      throw 'no urls!';
    }
  }
};
module.exports ={
  getLink: getLink,
};


// TODO: caption entities
// TODO: delete user messages
