import { Pipe, PipeTransform } from '@angular/core';
const linkifyStr = require('linkifyjs/string');
const linkify = require('linkifyjs')
require('linkifyjs/plugins/hashtag')(linkify);
require('linkifyjs/plugins/mention')(linkify);

@Pipe({
  name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {

  transform(str: string): string {
    const options = {
      formatHref: function (href, type) {
        if (type === 'hashtag') {
          href = `hashtag?query=${href.substring(1)}`;
        }
        if (type === 'mention') {
          href = `users/@${href.substring(1)}/profile`;
        }
        return href;
      }
    };
    return str ? linkifyStr(str, options) : str;
  }

}
