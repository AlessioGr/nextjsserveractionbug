'use server'

import { SimpleClientComponent } from './SimpleClientComponent'


export const renderServerFn = async () => {
  return {
    Component: <SimpleClientComponent/>
  }
}
