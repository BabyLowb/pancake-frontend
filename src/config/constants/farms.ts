import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 1) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x20dd7F9FaF67D1991911c50BE8cC547184097518',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'FUBI-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xD212a2ce9440956B30b8a7187899D44Bd7b69497',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'FUBI-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xD212a2ce9440956B30b8a7187899D44Bd7b69497',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'FUBI-USDT LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x15B97EB7070091C5Ea40F7aeFaB29E150E53a209',
    },
    token: tokens.cake,
    quoteToken: tokens.usdt,
  },
  {
    pid: 1,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
   
]

export default farms
