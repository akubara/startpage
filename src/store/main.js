import getDifferenceBetweenArrays from '../utils/getDifferenceBetweenArrays';

export default function tags(store) {
  store.on('@init', () => ({
    tags: ['all'],
    sites: [
      {
        url: 'https://vk.com/',
        name: 'vk',
        tag: 'kek',
      },
    ],
    undo: { tagsDiff: [], siteDiff: [] },
  }));

  store.on('tags/add', ({ tags }, tag) => ({
    tags: [...new Set(tags.concat([tag.toLowerCase().trim()]))],
  }));

  store.on('tags/del', ({ tags, sites }, tag) => {
    const newTags = tags.filter((item) => item !== tag);
    const newSites = sites.filter((site) => site.tag !== tag);

    const tagsDiff = getDifferenceBetweenArrays(tags, newTags);
    const siteDiff = getDifferenceBetweenArrays(sites, newSites, 'url');

    return { tags: newTags, sites: newSites, undo: { tagsDiff, siteDiff } };
  });

  store.on('sites/add', ({ sites }, { url, tag, name }) => {
    const isUnique = !sites.some((site) => site.url === url);
    if (isUnique) {
      return {
        sites: sites.concat([{ url: url.toLowerCase().trim(), tag, name: name || url }]),
      };
    }
    return sites;
  });

  store.on('sites/del', ({ sites }, { url }) => {
    const newSites = sites.filter((site) => site.url !== url);
    return { sites: newSites };
  });

  store.on('undo', ({ undo, sites, tags }) => {
    const { siteDiff, tagsDiff } = undo;
    return {
      sites: [...sites, ...siteDiff],
      tags: [...tags, ...tagsDiff],
      undo: { tagsDiff: [], siteDiff: [] },
    };
  });
}
