<template>
  <div>this is test {{ test12 }}</div>
</template>
<script lang="ts">
import { Vue } from 'nuxt-property-decorator'
import { Connection, PublicKey, Keypair } from '@solana/web3.js'
import { Jupiter, TOKEN_LIST_URL } from '@jup-ag/core'
import JSBI from 'jsbi'
const SOLANA_RPC_ENDPOINT = 'https://solana-api.projectserum.com'
export default Vue.extend({
  data() {
    return {
      test12: '124'
    }
  },
  async mounted() {
    const connection = new Connection(SOLANA_RPC_ENDPOINT)
    const jupiter = await Jupiter.load({
      connection,
      cluster: 'mainnet-beta',
      routeCacheDuration: 10_000
    })

    console.log('1023###jupiter####', jupiter)

    const routes: any = await jupiter.computeRoutes({
      inputMint: new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'), // usdt
      outputMint: new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'), // usdc
      // inputAmount || defaultInputAmount,
      amount: JSBI.BigInt(1000000),
      slippageBps: 1,
      forceFetch: false
    })

    console.log('1023routes####', routes)
  }
})
</script>