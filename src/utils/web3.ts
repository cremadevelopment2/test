import { Token } from '@solana/spl-token'
import {
  Account,
  AccountInfo,
  Commitment,
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  TransactionSignature
} from '@solana/web3.js'


export const web3Config = {
  // strategy: 'speed',
  strategy: 'weight',
  rpcs: [
    { url: 'https://solana-api.projectserum.com', weight: 50 }



  ]
}

// export const commitment: Commitment = 'processed'
export const commitment: Commitment = 'confirmed'
// export const commitment: Commitment = 'finalized'

export async function findProgramAddress(seeds: Array<Buffer | Uint8Array>, programId: PublicKey) {
  const [publicKey, nonce] = await PublicKey.findProgramAddress(seeds, programId)
  return { publicKey, nonce }
}

export async function createAmmAuthority(programId: PublicKey) {
  return await findProgramAddress(
    [new Uint8Array(Buffer.from('amm authority'.replace('\u00A0', ' '), 'utf-8'))],
    programId
  )
}
