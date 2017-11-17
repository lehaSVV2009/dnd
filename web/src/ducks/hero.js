import Immutable from 'seamless-immutable'

export const LOAD_HEROES_REQUEST = 'dnd/LOAD_HEROES_REQUEST'
export const LOAD_HEROES_SUCCESS = 'dnd/LOAD_HEROES_SUCCESS'
export const LOAD_HEROES_FAILURE = 'dnd/LOAD_HEROES_FAILURE'

export const DELETE_HERO_REQUEST = 'dnd/DELETE_HERO_REQUEST'
export const DELETE_HERO_SUCCESS = 'dnd/DELETE_HERO_SUCCESS'
export const DELETE_HERO_FAILURE = 'dnd/DELETE_HERO_FAILURE'

const initialState = Immutable({
  heroes: [],
  heroesLoading: false,
  heroDeleteLoading: false,
})

export default (state = initialState, action) => {
  switch (action.type) {

    // LOAD HEROES
    case LOAD_HEROES_REQUEST:
      return state.merge({ heroesLoading: true, heroes: [], })
    case LOAD_HEROES_SUCCESS:
      return state.merge({ heroesLoading: false, heroes: action.payload, })
    case LOAD_HEROES_FAILURE:
      return state.merge({ heroesLoading: false, heroes: [], })

    // DELETE HERO
    case DELETE_HERO_REQUEST:
      return state.merge({ heroDeleteLoading: true, })
    case DELETE_HERO_SUCCESS:
      return state.merge({ heroDeleteLoading: false, heroes: state.heroes.filter(hero => hero.id !== action.payload.id), })
    case DELETE_HERO_FAILURE:
      return state.merge({ heroDeleteLoading: false, })

    default:
      return state
  }
}

//
// LOAD HEROES
//

export const loadHeroesRequest = (payload) => ({
  type: LOAD_HEROES_REQUEST,
  payload
})

export const loadHeroesSuccess = (heroes) => ({
  type: LOAD_HEROES_SUCCESS,
  payload: heroes
})

export const loadHeroesFailure = (error) => ({
  type: LOAD_HEROES_FAILURE,
  error
})

//
// DELETE HERO
//

export const deleteHeroRequest = (payload) => ({
  type: DELETE_HERO_REQUEST,
  payload
})

export const deleteHeroSuccess = (hero) => ({
  type: DELETE_HERO_SUCCESS,
  payload: hero
})

export const deleteHeroFailure = (error) => ({
  type: DELETE_HERO_FAILURE,
  error
})