import { toast } from 'wc-toast'
import { BACKGROUND_COLOR } from './const'

class Toast {
  success(msg) {
    toast.success(msg, {
      theme: {
        style: {
          background: BACKGROUND_COLOR,
          color: 'white'
        },
        type: 'custom'
      }
    })
  }

  error(msg) {
    toast.error(msg, {
      theme: {
        style: {
          background: BACKGROUND_COLOR,
          color: 'white'
        },
        type: 'custom'
      }
    })
  }
}

const myToast = new Toast()

export default myToast
