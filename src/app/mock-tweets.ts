import { Tweet, Label } from './tweet';

export const TWEETS: Tweet[] = [
  {
     id: 195,
     author:
      {
         username: 'mbruhn4',
         joined: 1515900897094,
         profile:
           {
             firstName: 'Merl',
             lastName: 'Bruhn',
             email: 'mbruhn4@chron.com',
             phone: '813-100-2898'
           }
       },
     posted: 1515903048342,
    content: '@ddunster2 Curabitur convallis. bob@example.com Duis google.com consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. ',
    inRepostOf: null,
    inReplyTo: null,
    tags: [] ,
  },
  {
    id: 197,
    author:
      {
        username: 'mlambourn5',
        joined: 1515900897094,
        profile:
          {
            firstName: 'Mayer',
            lastName: 'Lambourn',
            email: 'mlambourn5@bloglines.com',
            phone: '136-683-4147'
          }
      },
    posted: 1515903048343,
    content: '@krastrick3 Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. #Donec qui',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },
  {
    id: 200,
    author:
      {
        username: 'rmonnelly6',
        joined: 1515900897204,
        profile:
          {
            firstName: 'Rudiger',
            lastName: 'Monnelly',
            email: 'rmonnelly6@craigslist.org',
            phone: '599-805-3275'
          }
      },
    posted: 1515903048424,
    content: '@ulukock1 Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis #lacinia. Aenean ',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },
  {
    id: 201,
    author:
      {
        username: 'gpeniman8',
        joined: 1515900897205,
        profile:
          {
            firstName: 'Gardner',
            lastName: 'Peniman',
            email: 'gpeniman8@histats.com',
            phone: '734-604-3083'
          }
      },
    posted: 1515903048454,
    content: '@krastrick3 Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. #Proin leo odio, porttitor id, consequat in, consequat u',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 203,
    author:
      {
        username: 'dpeplay9',
        joined: 1515900897221,
        profile:
          {
            firstName: 'Dawn',
            lastName: 'Peplay',
            email: 'dpeplay9@g.co',
            phone: '793-727-1394'
          }
      },
    posted: 1515903048488,
    content: '@mlambourn5 Donec odio #justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce con',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 204,
    author:
      {
        username: 'ckynfortha',
        joined: 1515900897222,
        profile:
          {
            firstName: 'Corbett',
            lastName: 'Kynforth',
            email: 'ckynfortha@miibeian.gov.cn',
            phone: '857-287-8771'
          }
      },
    posted: 1515903048518,
    content: '@ddunster2 Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. ',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 205,
    author:
      {
        username: 'lminshullb',
        joined: 1515900897222,
        profile:
          {
            firstName: 'Lorilee',
            lastName: 'Minshull',
            email: 'lminshullb@sakura.ne.jp',
            phone: '482-423-0943'
          }
      },
    posted: 1515903048550,
    content: '@rmonnelly6 Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultr',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 206,
    author:
      {
        username: 'mjanssenc',
        joined: 1515900897221,
        profile:
          {
            firstName: 'Madelon',
            lastName: 'Janssen',
            email: 'mjanssenc@bing.com',
            phone: '425-940-4596'
          }
      },
    posted: 1515903048573,
    content: '@ulukock1 Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis n',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 208,
    author:
      {
        username: 'elundyd',
        joined: 1515900897224,
        profile:
          {
            firstName: 'Ellen',
            lastName: 'Lundy',
            email: 'elundyd@telegraph.co.uk',
            phone: '464-605-1135'
          }
      },
    posted: 1515903048599,
    content: '@rmonnelly6 Quisque porta volutpat erat. Quisque erat eros, viverra #eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in feli',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 210,
    author:
      {
        username: 'zsaywelle',
        joined: 1515900897229,
        profile:
          {
            firstName: 'Zak',
            lastName: 'Saywell',
            email: 'zsaywelle@freewebs.com',
            phone: '303-103-2321'
          }
      },
    posted: 1515903048625,
    content: '@ddunster2 Proin interdum mauris #non ligula pellentesque ultrices.',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 211,
    author:
      {
        username: 'mbrendef',
        joined: 1515900897238,
        profile:
          {
            firstName: 'Moritz',
            lastName: 'Brende',
            email: 'mbrendef@patch.com',
            phone: '670-198-5476'
          }
      },
    posted: 1515903048655,
    content: '@zsaywelle Nunc purus. Phasellus in felis. #Donec semper sapien a libero.',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 212,
    author:
      {
        username: 'crotchellg',
        joined: 1515900897237,
        profile:
          {
            firstName: 'Cad',
            lastName: 'Rotchell',
            email: 'crotchellg@chron.com',
            phone: '714-753-8897'
          }
      },
    posted: 1515903048677,
    content: '@dpeplay9 Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus ',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 213,
    author:
      {
        username: 'fmckeefryh',
        joined: 1515900897237,
        profile:
          {
            firstName: 'Flem',
            lastName: 'McKeefry',
            email: 'fmckeefryh@reddit.com',
            phone: '198-613-9260'
          }
      },
    posted: 1515903048700,
    content: '@zsaywelle Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla te',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 214,
    author:
      {
        username: 'oebanksi',
        joined: 1515900897257,
        profile:
          {
            firstName: 'Ofella',
            lastName: 'Ebanks',
            email: 'oebanksi@yelp.com',
            phone: '647-296-8929'
          }
      },
    posted: 1515903048722,
    content: '@mbruhn4 Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec ',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 215,
    author:
      {
        username: 'sbutchersj',
        joined: 1515900897250,
        profile:
          {
            firstName: 'Shaun',
            lastName: 'Butchers',
            email: 'sbutchersj@nature.com',
            phone: '742-285-0552'
          }
      },
    posted: 1515903048749,
    content: '@ckynfortha Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutp',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 192,
    author:
      {
        username: 'cbrugger0',
        joined: 1515900897094,
        profile:
          {
            firstName: 'Carey',
            lastName: 'Brugger',
            email: 'cbrugger0@guardian.co.uk',
            phone: '440-364-1603'
          }
      },
    posted: 1515903048321,
    content: '@cbrugger0 Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula ne',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 194,
    author:
      {
        username: 'ddunster2',
        joined: 1515900897094,
        profile:
          {
            firstName: 'Dory',
            lastName: 'Dunster',
            email: 'ddunster2@vkontakte.ru',
            phone: '943-120-8154'
          }
      },
    posted: 1515903048342,
    content: '@cbrugger0 Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam i',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 193,
    author:
      {
        username: 'ulukock1',
        joined: 1515900897094,
        profile:
          {
            firstName: 'Ulises',
            lastName: 'Lukock',
            email: 'ulukock1@mapquest.com',
            phone: '464-153-6253'
          }
      },
    posted: 1515903048321,
    content: '@cbrugger0 Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nu',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 196,
    author:
      {
        username: 'krastrick3',
        joined: 1515900897094,
        profile:
          {
            firstName: 'Krispin',
            lastName: 'Rastrick',
            email: 'krastrick3@amazonaws.com',
            phone: '316-399-3871'
          }
      },
    posted: 1515903048343,
    content: '@cbrugger0 Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est #quam pharetra ',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  },

  {
    id: 199,
    author:
      {
        username: 'bstothard7',
        joined: 1515900897204,
        profile:
          {
            firstName: 'Bill',
            lastName: 'Stothard',
            email: 'bstothard7@forbes.com',
            phone: '641-580-2301'
          }
      },
    posted: 1515903048424,
    content: '@cbrugger0 Maecenas rhoncus #aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    inRepostOf: null,
    inReplyTo: null,
    tags: [],
  }
];
