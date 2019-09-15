import { INCREMENT, DECREMENT } from './actions'

const intialState = { value: 0 }

export default (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
  }
}