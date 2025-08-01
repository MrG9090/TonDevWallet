import { EncryptedWalletData } from '@/store/passwordManager'
import { SavedWallet } from '.'

export interface Key {
  id: number
  // words: string
  // seed: string | undefined
  encrypted: string | null | undefined
  public_key: string
  name: string
  sign_type: string // 'ton' | 'fireblocks'

  // not in db
  // keyPair?: KeyPair
  wallets?: SavedWallet[]
  encryptedData?: EncryptedWalletData
}
