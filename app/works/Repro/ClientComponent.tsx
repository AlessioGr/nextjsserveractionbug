'use client'

import { type JSX, useEffect } from 'react'
import React from 'react'


export const ClientComponent: React.FC<{
  renderServerFn: () => Promise<{ Component: JSX.Element }>
}> = ({renderServerFn}) => {
  const [Component, setComponent] = React.useState<JSX.Element | null>(null)

  useEffect(() => {
    async function render() {
      const { Component } = await renderServerFn()
      setComponent( Component)
    }
    if (!Component) {
      void render()
    }
  }, [Component,renderServerFn])

  return <div>Component: {Component ? Component : 'Loading...'}</div>
}
