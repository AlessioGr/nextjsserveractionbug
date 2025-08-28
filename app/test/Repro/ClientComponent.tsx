'use client'

import { type JSX, useEffect } from 'react'
import React from 'react'

import { renderServerFn } from './renderServerFn'

export const ClientComponent: React.FC = () => {
  const [Component, setComponent] = React.useState<JSX.Element | null>(null)

  useEffect(() => {
    async function render() {
      const { Component } = await renderServerFn()
      setComponent( Component)
    }
    if (!Component) {
      void render()
    }
  }, [Component])

  return <div>Component: {Component ? Component : 'Loading...'}</div>
}
