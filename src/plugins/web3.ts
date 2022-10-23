import { Connection } from '@solana/web3.js'
import { Plugin } from '@nuxt/types'

import { sleep } from '@/utils'
import { web3Config, commitment } from '@/utils/web3'
import logger from '@/utils/logger'
import { NuxtApiInstance, Rpc } from '@/types/api'

const createWeb3Instance = (endpoint: string) => {
  const web3 = new Connection(endpoint, commitment)
  return web3
}

async function getFastEndpoint(api: NuxtApiInstance, endpoints: Rpc[]) {
  let rpc = ''

  for (const endpoint of endpoints) {
    api.getEpochInfo(endpoint.url).then(() => {
      if (!rpc) {
        rpc = endpoint.url
      }
    })
  }

  while (true) {
    if (rpc) {
      break
    }
    await sleep(10)
  }

  return rpc
}

export function getWeightEndpoint(endpoints: Rpc[]) {
  let pointer = 0
  const random = Math.random() * 100
  let api = endpoints[0].url

  for (const endpoint of endpoints) {
    if (random > pointer + endpoint.weight) {
      pointer += pointer + endpoint.weight
    } else if (random >= pointer && random < pointer + endpoint.weight) {
      api = endpoint.url
      break
    } else {
      api = endpoint.url
      break
    }
  }

  return api
}

const web3Plugin: Plugin = async (ctx, inject) => {
  console.log('web3Plugin####ctx###', ctx)
  console.log('web3Plugin####window###', window.localStorage.getItem('c-pre-current-rpc'))
  const { $api } = ctx

  // let config
  let endpoint
  // let configFrom

  // try {
  //   config = await $api.getConfig()
  //   configFrom = 'remote'
  // } catch (error) {
  const config = web3Config
  const configFrom = 'local'
  // }

  const { rpcs, strategy } = config

  let currentRpc: any
  const localRpc = window.localStorage.getItem('c-pre-current-rpc')
  if (localRpc) {
    currentRpc = [{ url: localRpc, weight: 50 }]
  } else {
    currentRpc = rpcs
  }

  if (strategy === 'weight') {
    endpoint = getWeightEndpoint(currentRpc)
  } else {
    endpoint = await getFastEndpoint($api, currentRpc)
  }

  logger(`config from: ${configFrom}, strategy: ${strategy}, using ${endpoint}`)

  const web3 = createWeb3Instance(endpoint)

  ctx.$web3 = web3
  inject('web3', web3)
}

export default web3Plugin
