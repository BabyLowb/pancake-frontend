import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'FreeUbiDao',
  description:
    'The most popular AMM on BSC by user count! Earn FUBI',
  image: 'http://swap.freeubi.org/images/bg-farm.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('FreeUbi Swap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('FreeUbi Swap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('FreeUbi Swap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('FreeUbi Swap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('FreeUbi Swap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('FreeUbi Swap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('FreeUbi Swap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('FreeUbi Swap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('FreeUbi Swap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('FreeUbi Swap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('FreeUbi Swap')}`,
      }
    default:
      return null
  }
}
