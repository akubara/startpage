import { initTags, initSites } from './init';

export default function main(store) {
  store.on('@init', () => ({
    tags: [...initTags],
    sites: [...initSites],
  }));

  store.on('tags/add', ({ tags }, tag) => {
    const formatedTag = tag.toLowerCase().trim();
    if (formatedTag) {
      return { tags: [...new Set(tags.concat([formatedTag]))] };
    }
    return { tags };
  });

  store.on('tags/del', ({ tags, sites }, tag) => {
    const newTags = tags.filter((item) => item !== tag);
    const newSites = sites.filter((site) => site.tag !== tag);

    return { tags: newTags, sites: newSites };
  });

  store.on('sites/add', ({ sites }, { url, tag }) => {
    const transformedUrl = (url.match('^http') ? url : `https://${url}`).toLowerCase().trim();
    const hasDomain = transformedUrl.match(/\.[A-Za-zА-Яа-я]+$/gi);
    const isUnique = !sites.some((site) => site.url === transformedUrl);
    if (isUnique && hasDomain) {
      return {
        sites: sites.concat([{ url: transformedUrl, tag }]),
      };
    }
    return sites;
  });

  store.on('sites/del', ({ sites }, { url }) => {
    const newSites = sites.filter((site) => site.url !== url);
    return { sites: newSites };
  });
}
