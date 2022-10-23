import { Plugin } from '@nuxt/types'

import { notification } from 'ant-design-vue'

const notifyPlugin: Plugin = (ctx, inject) => {
  const notify = notification
  notify.config({
    placement: 'bottomLeft',
    bottom: '10px',
    duration: 3,
    closeIcon: (h: any) =>
      h(
        'svg',
        {
          class: {
            icon: true,
            'modal-icon-close': true
          },
          attrs: {
            'aria-hidden': true
          }
        },
        [
          h('use', {
            attrs: {
              'xlink:href': '#iconicon_close'
            }
          })
        ]
      )
  })

  ctx.$notify = notify
  inject('notify', notify)
}

export default notifyPlugin
