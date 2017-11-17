import { createSelector } from 'reselect'

const heroSelector = () => state => state.hero

export const selectHeroes = () => createSelector(
  heroSelector(),
  hero => hero.heroes,
)

export const selectHeroesLoading = () => createSelector(
  heroSelector(),
  hero => hero.heroesLoading,
)

export const selectHeroDeleteLoading = () => createSelector(
  heroSelector(),
  hero => hero.heroDeleteLoading,
)