import { actions as ToastrActions } from 'react-redux-toastr'

//
// NOTIFICATIONS
//

export const showErrorNotification = (payload) => (
  ToastrActions.add({
    type: 'error',
    title: 'Error',
    message: payload.message,
    options: {
      timeOut: 4000,
      showCloseButton: true
    },
  })
)

export const showSuccessNotification = (payload) => (
  ToastrActions.add({
    type: 'success',
    title: 'Success',
    options: {
      timeOut: 2000,
      showCloseButton: true
    },
  })
)