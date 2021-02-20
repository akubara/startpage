import { useStoreon } from 'storeon/preact';

function filterSitesByTag(sites, tag) {
  return tag === 'all' ? sites : sites.filter((site) => site.tag === tag);
}

export default function useSelectSitesByTag(tag) {
  const { sites } = useStoreon('sites');
  const selectedSites = filterSitesByTag(sites, tag);
  return { selectedSites };
}
