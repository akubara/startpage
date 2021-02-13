export default function projects(store) {
  store.on('@init', () => ({ projects: [] }));

  store.on('projects/add', ({ projects }, project) => ({ projects: projects.concat([project]) }));
}
