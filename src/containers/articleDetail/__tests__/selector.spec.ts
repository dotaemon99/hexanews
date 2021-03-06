/**
 * Unit tests for checking the behavior of selector for ArticleDetail
 */

import rootReducer, { State }  from '../../../reducers'
import selector from '../selector'

describe('Article Detail selector', () => {
  it('Default state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
    }

    const props = {
      match: {
        params: {
          articleId: ''
        },
      },
    }

    expect(selector(state, props)).toMatchObject({
      userArticle: undefined,
      isUserArticle: false,
      isDeletingArticle: false,
    })
  })

  it('Changed state without article category', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
      containers: {
        ...initialState.containers,
        articleDetail: {
          isDeletingArticle: true,
        }
      },
      entities: {
        ...initialState.entities,
        articles: [{
          _id: '1',
          title: 'abc',
          description: 'test',
          category: 'technology',
          authorId: 'test',
        }]
      }
    }

    const props = {
      match: {
        params: {
          articleId: '1'
        },
      },
    }

    expect(selector(state, props)).toMatchObject({
      userArticle: {
        _id: '1',
        title: 'abc',
        description: 'test',
        category: 'technology',
        authorId: 'test',
      },
      isUserArticle: false,
      isDeletingArticle: true,
    })
  })
})